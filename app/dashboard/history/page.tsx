// // import Templates from '@app/(data)/Templates';
// // import { AIOutput } from '@utils/schema';
// import { currentUser } from '@clerk/nextjs/server';
// import { desc, eq } from 'drizzle-orm';
// import Image from 'next/image';
// import React from 'react';
// import TEMPLATE from '../_components/TemplateListSection';
// import { db } from '@/utils/db';
// import { Button } from '@/components/ui/button';

// export interface HISTORY {
//   id: number;
//   formData: string;
//   aiResponse: string;
//   templateSlug: string;
//   createdBy: string;
//   createdAt: string;
// }

// const History: React.FC = () => {
//   const [history, setHistory] = React.useState<HISTORY[]>([]);

//   React.useEffect(() => {
//     const fetchHistory = async () => {
//       const user = await currentUser();
//       if (user) {
//         const response = await db.history.findMany({
//           where: { createdBy: user.id },
//           orderBy: { createdAt: 'desc' },
//         });
//         setHistory(response);
//       }
//     };
//     fetchHistory();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">History</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Template</th>
//               <th className="px-4 py-2">AI Response</th>
//               <th className="px-4 py-2">Date</th>
//               <th className="px-4 py-2">Words</th>
//               <th className="px-4 py-2">Copy</th>
//             </tr>
//           </thead>
//           <tbody>
//             {history.map((item) => (
//               <tr key={item.id} className="border-t border-gray-200">
//                 <td className="px-4 py-2">
//                   <Image src={`/templates/${item.templateSlug}.png`} alt={item.templateSlug} width={50} height={50} />
//                 </td>
//                 <td className="px-4 py-2">{item.aiResponse}</td>
//                 <td className="px-4 py-2">{new Date(item.createdAt).toLocaleDateString()}</td>
//                 <td className="px-4 py-2">{item.aiResponse.split(' ').length}</td>
//                 <td className="px-4 py-2">
//                   <Button onClick={() => navigator.clipboard.writeText(item.aiResponse)}>Copy</Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default History;
