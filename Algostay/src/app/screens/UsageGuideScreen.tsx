import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ChevronLeft, PlayCircle, AlertTriangle, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { specialItems } from "../data/mockData";

export function UsageGuideScreen() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const item = specialItems.find((i) => i.id === itemId);

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">물품을 찾을 수 없습니다</p>
          <Button onClick={() => navigate("/scan")}>
            다시 스캔하기
          </Button>
        </div>
      </div>
    );
  }

  const { usageGuide } = item;
  const totalSteps = usageGuide.steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center">
          <button className="p-2 -ml-2" onClick={() => navigate("/scan")}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="ml-2">사용 가이드</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto">
        {/* Item Header */}
        <div className="bg-white border-b">
          <div className="px-4 py-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-xl mb-1">{item.name}</h1>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-600">
                진행률: {currentStep + 1}/{totalSteps}
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Video Section (Optional) */}
        <div className="px-4 py-6 bg-white border-b">
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="w-full bg-gray-900 rounded-xl overflow-hidden relative aspect-video flex items-center justify-center"
          >
            <img
              src={item.imageUrl}
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 text-white text-center">
              <PlayCircle className="w-16 h-16 mx-auto mb-2" />
              <p className="text-sm">30초 영상 가이드 보기</p>
            </div>
          </button>
          {showVideo && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm text-blue-900">
              💡 실제 서비스에서는 여기에 사용 가이드 영상이 재생됩니다.
            </div>
          )}
        </div>

        {/* Step by Step Guide */}
        <div className="px-4 py-6">
          <h2 className="text-lg mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            사용 방법
          </h2>
          
          <div className="space-y-3 mb-8">
            {usageGuide.steps.map((step, index) => (
              <div
                key={index}
                className={`flex gap-3 p-4 rounded-lg transition-all ${
                  index === currentStep
                    ? "bg-blue-50 border-2 border-blue-600"
                    : index < currentStep
                    ? "bg-green-50 border border-green-300"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    index < currentStep
                      ? "bg-green-600 text-white"
                      : index === currentStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {index < currentStep ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div className="flex-1">
                  <p className={index === currentStep ? "font-medium" : ""}>
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mb-6">
            <Button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              variant="outline"
              className="flex-1"
            >
              이전
            </Button>
            <Button
              onClick={() =>
                setCurrentStep(Math.min(totalSteps - 1, currentStep + 1))
              }
              disabled={currentStep === totalSteps - 1}
              className="flex-1"
            >
              다음
            </Button>
          </div>

          {/* Warnings */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-yellow-700" />
              <span className="font-medium text-yellow-900">주의사항</span>
            </h3>
            <ul className="space-y-2 text-sm text-yellow-900">
              {usageGuide.warnings.map((warning, index) => (
                <li key={index} className="flex gap-2">
                  <span>•</span>
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => navigate("/assistant")}
              variant="outline"
              className="w-full h-12"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              추가 질문하기 (숙소 도우미)
            </Button>
            
            <Button
              onClick={() => navigate("/scan")}
              className="w-full h-12"
            >
              다른 물품 가이드 보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
