import { HandCoins, Store, Landmark, Ban, ChartSpline } from "lucide-react"

export const historyData = {
    "3 Days": [
      { icon: HandCoins, count: 0, descript: "Purchases", amount: 0.0 },
      { icon: Store, count: 0, descript: "Redemptions", amount: 0.0 },
      { icon: Landmark, count: 0, descript: "Rej. Transactions", amount: 0.0 },
      { icon: Ban, count: 0, descript: "SIP Rejections", amount: 0.0 },
      { icon: ChartSpline, count: 0, descript: "New SIP", amount: 0.0 },
    ],
    "7 Days": [
      { icon: HandCoins, count: 1, descript: "Purchases", amount: 5000.0 },
      { icon: Store, count: 0, descript: "Redemptions", amount: 0.0 },
      { icon: Landmark, count: 0, descript: "Rej. Transactions", amount: 0.0 },
      { icon: Ban, count: 0, descript: "SIP Rejections", amount: 0.0 },
      { icon: ChartSpline, count: 1, descript: "New SIP", amount: 2000.0 },
    ],
    "10 Days": [
      { icon: HandCoins, count: 2, descript: "Purchases", amount: 12000.0 },
      { icon: Store, count: 1, descript: "Redemptions", amount: 3000.0 },
      { icon: Landmark, count: 0, descript: "Rej. Transactions", amount: 0.0 },
      { icon: Ban, count: 1, descript: "SIP Rejections", amount: 1000.0 },
      { icon: ChartSpline, count: 1, descript: "New SIP", amount: 2000.0 },
    ],
    "30 Days": [
      { icon: HandCoins, count: 5, descript: "Purchases", amount: 45000.0 },
      { icon: Store, count: 2, descript: "Redemptions", amount: 8000.0 },
      { icon: Landmark, count: 1, descript: "Rej. Transactions", amount: 2000.0 },
      { icon: Ban, count: 1, descript: "SIP Rejections", amount: 1000.0 },
      { icon: ChartSpline, count: 3, descript: "New SIP", amount: 6000.0 },
    ],
  }