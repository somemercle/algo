import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronDown, Lock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { protectionPolicy, accommodationName } from "../data/mockData";

export function ProtectionPolicyScreen() {
  const navigate = useNavigate();
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [showCheckInInfo, setShowCheckInInfo] = useState(false);

  const toggleItem = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleConfirm = () => {
    if (agreedToPolicy) {
      // Record consent (in real app, this would be saved to backend)
      const consentRecord = {
        timestamp: new Date().toISOString(),
        policyVersion: protectionPolicy.version,
        reservationId: "DEMO-2026-02-16",
      };
      console.log("Consent recorded:", consentRecord);
      
      setShowCheckInInfo(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center">
          <button className="p-2 -ml-2" onClick={() => navigate("/")}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="ml-2">체크인 정보</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 pt-6">
        {!showCheckInInfo ? (
          <>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-6 h-6 text-blue-600" />
                <h1 className="text-2xl">{accommodationName} 보호 정책</h1>
              </div>
              <p className="text-gray-600">
                이 숙소에는 특수한 물품이 있어,<br />
                아래 내용을 확인 후 체크인 정보를<br />
                받으실 수 있습니다.
              </p>
            </div>

            {/* Policy Items */}
            <div className="space-y-3 mb-6">
              {protectionPolicy.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg border overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-4 py-4 flex items-start gap-3 text-left"
                  >
                    <span className="text-blue-600 mt-0.5">▸</span>
                    <span className="flex-1 pr-2">{item.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                        expandedItems.includes(item.id) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {expandedItems.includes(item.id) && (
                    <div className="px-4 pb-4 pt-0">
                      <ul className="space-y-2 text-sm text-gray-600 border-t pt-3">
                        {item.details.map((detail, index) => (
                          <li key={index} className="flex gap-2">
                            <span className="text-gray-400">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Consent Checkbox */}
            <div className="bg-white rounded-lg border p-4 mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={agreedToPolicy}
                  onCheckedChange={(checked) =>
                    setAgreedToPolicy(checked === true)
                  }
                  className="mt-0.5"
                />
                <span>위 내용을 확인했습니다</span>
              </label>
            </div>

            {/* Confirm Button */}
            <Button
              onClick={handleConfirm}
              disabled={!agreedToPolicy}
              className="w-full h-14 text-base"
              size="lg"
            >
              체크인 정보 보기
            </Button>
          </>
        ) : (
          <>
            {/* Check-in Information */}
            <div className="mb-6">
              <h1 className="text-2xl mb-2">체크인 정보</h1>
              <p className="text-gray-600">
                보호 정책에 동의해주셔서 감사합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-6 mb-6">
              <div className="mb-4 pb-4 border-b">
                <div className="text-sm text-gray-600 mb-1">숙소명</div>
                <div className="text-lg">{accommodationName}</div>
              </div>
              
              <div className="mb-4 pb-4 border-b">
                <div className="text-sm text-gray-600 mb-1">체크인 시간</div>
                <div className="text-lg">15:00 이후</div>
              </div>
              
              <div className="mb-4 pb-4 border-b">
                <div className="text-sm text-gray-600 mb-1">주소</div>
                <div className="text-lg">서울시 종로구 북촌로 42</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-600 mb-2">도어락 비밀번호</div>
                <div className="text-3xl font-mono tracking-wider bg-gray-100 rounded-lg p-4 text-center">
                  #1234*
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-900">
                💡 특수물품의 사용 가이드를 미리 확인해보세요. (숙소에서도 QR로 확인 가능해요)
              </p>
            </div>

            <Button
              onClick={() => navigate("/scan")}
              className="w-full h-14 text-base"
              size="lg"
            >
              입실 후 QR 스캔하러 가기
            </Button>
          </>
        )}
      </div>
    </div>
  );
}