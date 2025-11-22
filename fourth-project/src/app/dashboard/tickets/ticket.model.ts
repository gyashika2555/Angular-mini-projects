export interface Ticket{
    title:string;
    id:string;
    request:string;
    status:'open' | 'closed';
}