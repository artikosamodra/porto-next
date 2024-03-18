import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const ContriList = ({ contriText }) => {
  return (
    <div>
      <table>
        <tr>
          <td className="p-2">
            <CheckCircle size={32} />
          </td>
          <td className="p-2 leading-7">{contriText}</td>
        </tr>
      </table>
    </div>
  );
};

export default ContriList;
