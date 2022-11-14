export const Table = () => {
  return (
    <table className="table-auto border-collapse w-80 md:w-[540px] lg:w-[760px] mt-4 md:mt-10 text-center">
      <thead>
        <tr className="bg-gray-300 text-neutral-900 uppercase font-bold text-sm leading-normal">
          <th className="border border-gray-200 px-4 py-2 rounded-t-md">ID</th>
          <th className="border border-gray-200 px-4 py-2 rounded-t-md">Name</th>
          <th className="border border-gray-200 px-4 py-2 rounded-t-md">Country</th>
        </tr>
      </thead>
      <tbody className="text-sm font-normal">
        <tr className="border-b border-gray-200 hover:bg-gray-100 transition-all duration-200">
          <td className="border border-gray-200 px-4 py-2 rounded-b-md">1</td>
          <td className="border border-gray-200 px-4 py-2 rounded-b-md">Nancy Pentz</td>
          <td className="border border-gray-200 px-4 py-2 rounded-b-md">United States</td>
        </tr>
      </tbody>
    </table>
  );
};
