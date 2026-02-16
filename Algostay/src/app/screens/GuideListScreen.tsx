import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import { specialItems } from "../data/mockData";

export function GuideListScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center">
          <button className="p-2 -ml-2" onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="ml-2">가이드 목록</span>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <h1 className="text-2xl mb-2">다른 가이드 보기</h1>
        <p className="text-gray-600 text-sm mb-6">
          확인할 물품을 선택하면 바로 사용 가이드를 볼 수 있어요.
        </p>

        <div className="space-y-3">
          {specialItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(`/guide/${item.id}`)}
              className="w-full bg-white border rounded-lg p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-left">
                <div className="mb-1">{item.name}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
