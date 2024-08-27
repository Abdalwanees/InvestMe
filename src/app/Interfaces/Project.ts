export interface Project {
  id: number;
  name: string;
  description: string;
  investmentNeeded: number;
  numberOfInvestors: number;
  details?: string;
  totalInteractions: number;
  totalSupport: number;
  remainingSupport: number;
  status: string;
  videoUrl?: string; // هذا الحقل اختياري
  ownerName: string;
  ownerId: number;
  comments?: Comment[]; // هذا الحقل اختياري، ويجب أن يكون هناك interface لتعريف Comment
}

export interface Comment {
  id: number;
  content: string;
  createdDate: string;
  userId: number;
  userName: string;
  replies?: Reply[]; // تأكد من وجود خاصية replies
}

export interface Reply {
  id: number;
  content: string;
  createdDate: string;
  userId: number;
  userName: string;
}
