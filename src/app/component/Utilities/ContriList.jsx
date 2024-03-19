import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const ContriList = ({ contriText }) => {
  return (
    <div>
      <table>
        <tr>
          <td className="p-3">
            <CheckCircle size={32} />
          </td>
          <td className="p-3 leading-7 lg:text-lg text-sm">{contriText}</td>
        </tr>
      </table>
    </div>
  );
};

export default ContriList;
