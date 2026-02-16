import { useNavigate } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, QrCode } from "lucide-react";
import { Button } from "../components/ui/button";
import { specialItems, accommodationName } from "../data/mockData";

export function SpecialItemsScreen() {
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    arrows: false,
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center">
          <button className="p-2 -ml-2" onClick={() => window.history.back()}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="ml-2">체크인 준비</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 pt-8">
        <h1 className="text-2xl mb-2">
          🏠 {accommodationName}의<br />
          특별한 물품들
        </h1>
        <p className="text-gray-600 mb-8">
          이 숙소만의 특별한 경험을 미리 확인해보세요
        </p>

        {/* Item Cards Carousel */}
        <div className="mb-8 -mx-4">
          <Slider {...sliderSettings}>
            {specialItems.map((item) => (
              <div key={item.id} className="px-2">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border">
                  <div className="aspect-[4/3] bg-gray-100">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-blue-600 text-sm">
                      <QrCode className="w-4 h-4" />
                      <span>현장에서 QR 가이드를 확인하세요</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Info Text */}
        <div className="text-center text-sm text-gray-500 mb-6">
          ← 스와이프하여 다른 물품 보기 →
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => navigate("/policy")}
          className="w-full h-14 text-base"
          size="lg"
        >
          보호 정책 확인하고 체크인 준비하기
          <ChevronLeft className="w-5 h-5 ml-2 rotate-180" />
        </Button>

        {/* Skip Link */}
        <button
          onClick={() => navigate("/policy")}
          className="w-full mt-4 text-gray-500 text-sm py-2"
        >
          건너뛰기
        </button>
      </div>
    </div>
  );
}