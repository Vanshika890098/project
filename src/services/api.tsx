import api from "@/lib/Instance"
export const allapi= { 

    getpage:()=>api.get("/api/page-data")

}