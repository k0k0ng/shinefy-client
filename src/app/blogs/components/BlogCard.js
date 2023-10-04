import { useRouter } from "next/navigation";

import EastIcon from "@mui/icons-material/East";

export default function BlogCard({ handleChangeCategory, selectedCategory }) {
  const router = useRouter();

  const handleViewItems = (id) => {
    router.push(`blogs/${id}`);
  };

  return (
    <div className="min-h-[30rem] bg-[#0D0D0D] pb-8">
      <div className="mb-6 flex justify-center bg-[#D9D9D9] py-16">
        <img
          src="/images/global/image-placeholder.png"
          alt="Filter Icon"
          className="h-[140px] w-[140px] self-center"
        />
      </div>
      <div className="mb-6 flex flex-col items-start justify-between gap-y-5 px-6 lg:flex-row lg:items-center lg:gap-y-0">
        <button
          value="Affiliate"
          onClick={handleChangeCategory}
          className={`global-outlined-btn-2 active-radio whitespace-nowrap rounded px-5 py-4 text-white`}
        >
          {selectedCategory}
        </button>
        <p className="text-end font-karla text-[14px] leading-[120%] text-white">
          August 23, 2023
        </p>
      </div>
      <div className="px-6">
        <p className="mb-6 font-montserrat text-[21px] font-bold leading-[120%] text-[#7bdcde]">
          Netus justo sit tincidunt molestie. Id sed o dio et magna ipsum
          congue.
        </p>
        <p className="mb-3 font-karla text-base leading-[120%] text-white">
          Fringilla quisque orci fermentum donec. Magna eu suspendisse non cras
          urna sed nibh. Etiam rhoncus quis diam purus eu. Ornare tellus vitae
          non interdum enim consequat justo ut. Massa eu phasellus at egestas
          in.
        </p>

        <button
          onClick={() => handleViewItems(23)}
          className="blogs-card-read-more-btn p-3"
        >
          <span className="mr-10">Read More</span>
          <EastIcon style={{ width: "15px" }} />
        </button>
      </div>
    </div>
  );
}
