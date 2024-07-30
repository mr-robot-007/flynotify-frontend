
import { Link } from "react-router-dom";
import { formatDate } from "../../helpers/helper";

function DashboardItem({flight_id,scheduled_departure}) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm">
        <p className="font-semibold">{flight_id}</p>
        <p>{formatDate(scheduled_departure.substring(0,19))}</p>
      </div>
      <Link to={`/flights/${flight_id}`} className="bg-[#e7eef4] px-3 py-2 rounded-md font-semibold">
        View
      </Link>
    </div>
  );
}

export default DashboardItem;
