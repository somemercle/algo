import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Send, Bot, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "도자기를 깨뜨렸어요. 어떻게 해야 하나요?",
  "턴테이블 볼륨이 안 올라가요",
  "체크아웃 시간을 연장할 수 있나요?",
  "근처 맛집을 추천해주세요",
];

const AUTO_RESPONSES: Record<string, string> = {
  "도자기": "도자기가 파손되셨다니 안타깝습니다. 😢 먼저, 파손된 부분을 사진으로 찍어주시고, 조각들을 안전하게 모아주세요. 파손 정도에 따라 수리 또는 교체 비용이 발생할 수 있으며, 호스트에게 즉시 연락하여 상황을 설명해주시면 됩니다. 정직하게 알려주시면 원만하게 해결하실 수 있습니다.",
  "턴테이블": "턴테이블의 볼륨 문제를 확인해보겠습니다. 1) 전원이 켜져 있는지 확인해주세요. 2) 스피커와 믹서의 연결 상태를 확인해주세요. 3) 믹서의 마스터 볼륨과 채널 볼륨이 모두 올라가 있는지 확인해주세요. 그래도 해결이 안 되면 호스트에게 연락 주시면 원격 지원 또는 방문 지원을 도와드리겠습니다.",
  "체크아웃": "체크아웃 시간 연장을 원하시는군요! 다음 예약 상황에 따라 가능 여부가 달라집니다. 연장 희망 시간을 알려주시면 호스트에게 문의하여 가능 여부와 추가 비용을 안내해드리겠습니다. 보통 2-3시간 연장은 50% 요금으로 가능합니다.",
  "맛집": "북촌 근처 맛집을 추천해드릴게요! 🍴\n\n1. **토속촌 삼계탕** (도보 5분) - 인삼을 통째로 넣은 삼계탕이 유명합니다.\n2. **북촌손만두** (도보 3분) - 수제 만두와 만둣국이 일품입니다.\n3. **카페 보헤미안** (도보 7분) - 한옥 카페에서 즐기는 커피와 디저트\n\n더 자세한 정보가 필요하시면 말씀해주세요!",
};

export function AssistantScreen() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "안녕하세요! 숙소 도우미입니다. 😊\n\n특수 물품 사용 중 궁금한 점이나 숙소 이용에 관해 질문해주세요. 자동으로 답변을 드리며, 복잡한 문제는 호스트에게 연결해드립니다.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate typing
    setIsTyping(true);

    // Auto-respond after delay
    setTimeout(() => {
      let response = "죄송합니다. 해당 질문에 대한 자동 응답을 찾을 수 없습니다. 호스트에게 연결하시겠습니까?";
      
      // Find matching auto response
      for (const [keyword, autoResponse] of Object.entries(AUTO_RESPONSES)) {
        if (content.includes(keyword)) {
          response = autoResponse;
          break;
        }
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center">
          <button className="p-2 -ml-2" onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="ml-2 flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-600" />
            <span>숙소 도우미</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto px-4 py-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === "user"
                    ? "bg-blue-600"
                    : "bg-gray-200"
                }`}
              >
                {message.role === "user" ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-gray-700" />
                )}
              </div>
              <div
                className={`flex-1 max-w-[80%] ${
                  message.role === "user" ? "items-end" : ""
                }`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white border"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
                <div className="text-xs text-gray-500 mt-1 px-2">
                  {message.timestamp.toLocaleTimeString("ko-KR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-gray-700" />
              </div>
              <div className="bg-white border rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="bg-white border-t">
          <div className="max-w-md mx-auto px-4 py-4">
            <p className="text-sm text-gray-600 mb-3">자주 묻는 질문</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {SUGGESTED_QUESTIONS.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(question)}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-white border-t sticky bottom-0">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }
              }}
              placeholder="질문을 입력하세요..."
              className="flex-1"
            />
            <Button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              size="icon"
              className="h-10 w-10"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
