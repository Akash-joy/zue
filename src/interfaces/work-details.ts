export interface WorkDetails {
  id: number;
  customer_name: string | null;
  phone_number: string | null;
  work: string | null;
  estimated_date: Date | null;
  description: string | null;
  work_status: {id: number,name: string} | null;
  created_date: Date | null;
}
