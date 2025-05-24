// import { Button } from "@/components/ui/button";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { useUser } from "@clerk/nextjs";
// import React, { useEffect, useState } from "react";

// function UsageTrack(){

//     function UsageTrack() {
//         const {user} = useUser();
//         const [totalUsage,setTotalUsage]=useState<number>(0);

//         // const result = await db.select().from(AIOutput)
//         // .where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))
        
//         useEffect(() => {
//             user&&GetData();
//         }, [user])

//         const GetData = async() => {
//             {/* @ts-ignore */}
//             const result:HISTORY[] = await db.select().from(AIOutput)
//             .where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))

//             GetTotalUsage(result);
//         }
        
//         const GetTotalUsage = (result:HISTORY[]) => {
//             let total:number = 0;
//             result.forEach(element => {
//                 total = total + Number(element.aiResponse?.length)
//             });
//             console.log(total);
//             setTotalUsage(total);
//         }

//     }

//     return (
//         <div className="m-6 mt-44">
//            <div className="bg-blue-700 text-white p-3 rounded-lg">
//                 <h2 className="font-bold">Credits</h2>
//                 <div className="h-2 bg-[#9981f9] rounded-full mt-3">
//                     <div className="h-2 bg-white rounded-full"
//                         style={{
//                             width:"35%"
//                         }}>
//                     </div>
//                 </div>
//                 <h2 className="text-sm my-2">345/10,000 credit used</h2>
//            </div>
//            <Button variant={'secondary'} className="w-full my-3 text-blue-700">Upgrade</Button>
//         </div>
//     )
// }

// export default UsageTrack;