import { createBrowserRouter } from "react-router";
import { SpecialItemsScreen } from "./screens/SpecialItemsScreen";
import { ProtectionPolicyScreen } from "./screens/ProtectionPolicyScreen";
import { QRScanScreen } from "./screens/QRScanScreen";
import { UsageGuideScreen } from "./screens/UsageGuideScreen";
import { AssistantScreen } from "./screens/AssistantScreen";
import { GuideListScreen } from "./screens/GuideListScreen";

/**
 * User Flow:
 * 1. Screen A (/) - Special Items Carousel: Guest explores special items
 * 2. Screen B (/policy) - Protection Policy & Consent: Guest agrees to policy, gets check-in info
 * 3. Screen C (/scan) - QR Scan: Guest scans QR code on-site
 * 4. Screen D (/guide-list) - Guide List: Browse and select item guides
 * 5. Screen E (/guide/:itemId) - Usage Guide: Step-by-step guide for specific item
 * 6. Screen F (/assistant) - AI Assistant: Additional questions and support
 */
export const router = createBrowserRouter([
  {
    path: "/",
    Component: SpecialItemsScreen,
  },
  {
    path: "/policy",
    Component: ProtectionPolicyScreen,
  },
  {
    path: "/scan",
    Component: QRScanScreen,
  },
  {
    path: "/guide-list",
    Component: GuideListScreen,
  },
  {
    path: "/guide/:itemId",
    Component: UsageGuideScreen,
  },
  {
    path: "/assistant",
    Component: AssistantScreen,
  },
]);