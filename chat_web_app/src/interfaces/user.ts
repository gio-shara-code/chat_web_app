interface User {
  id: string; 
  firstname: string;
  lastname: string;
  status: "working" | "available" | "unavailable";
  profileImage?: string;
}
