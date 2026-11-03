export interface Student {
  id: string;
  name: string;
  nameInitials: string;
  participation: number;
  understanding: "secure" | "developing" | "needsSupport";
  followUp: boolean;
  notes: string[];
  profileColor: string;
}
