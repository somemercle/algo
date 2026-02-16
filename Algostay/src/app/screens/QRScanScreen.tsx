import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Camera, QrCode } from "lucide-react";
import { Button } from "../components/ui/button";
import { specialItems } from "../data/mockData";

export function QRScanScreen() {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [showItemList, setShowItemList] = useState(false);

  const simulateScan = (itemId: string) => {
    setScanning(true);
    setTimeout(() => {
      navigate(`/guide/${itemId}`);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center text-white">
          <button className="p-2 -ml-2" onClick={() => navigate("/policy")}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="ml-2">QR 코드 스캔</span>
        </div>
      </div>

      {!showItemList ? (
        <>
          {/* Camera View Simulation */}
          <div className="max-w-md mx-auto">
            <div className="relative aspect-[3/4] bg-gray-800 flex items-center justify-center">
              {/* Camera Frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-white rounded-lg relative">
                  {/* Corner indicators */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500"></div>
                  
                  {scanning ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <QrCode className="w-20 h-20 text-white opacity-50" />
                    </div>
                  )}
                </div>
              </div>
              
              <Camera className="w-16 h-16 text-gray-600 absolute" />
            </div>

            {/* Instructions */}
            <div className="px-4 py-8 text-center text-white">
              <p className="mb-4">
                물품 옆에 부착된 QR 코드를<br />
                카메라 중앙에 맞춰주세요
              </p>
              
              {/* Demo Buttons (for demonstration purposes) */}
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-400 mb-3">
                  [데모용] QR 스캔 시뮬레이션
                </p>
                {specialItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => simulateScan(item.id)}
                    variant="outline"
                    className="w-full bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                  >
                    {item.name} QR 스캔
                  </Button>
                ))}
              </div>
            </div>

            {/* Alternative Action */}
            <div className="px-4 pb-8">
              <button
                onClick={() => setShowItemList(true)}
                className="w-full text-blue-400 text-sm py-3 border border-gray-700 rounded-lg hover:bg-gray-800"
              >
                QR을 스캔할 수 없나요?<br />
                <span className="underline">물품 목록에서 직접 선택하기</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Item List */}
          <div className="max-w-md mx-auto px-4 py-6">
            <h2 className="text-xl text-white mb-4">물품 목록에서 선택하기</h2>
            <p className="text-gray-400 text-sm mb-6">
              사용할 물품을 선택하면 가이드를 확인할 수 있습니다
            </p>
            
            <div className="space-y-3">
              {specialItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(`/guide/${item.id}`)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-700 transition-colors"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-700 flex-shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white mb-1">{item.name}</div>
                    <div className="text-sm text-gray-400">{item.description}</div>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-gray-500 rotate-180" />
                </button>
              ))}
            </div>

            <Button
              onClick={() => setShowItemList(false)}
              variant="outline"
              className="w-full mt-6 bg-transparent border-gray-600 text-white hover:bg-gray-800"
            >
              QR 스캔으로 돌아가기
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
