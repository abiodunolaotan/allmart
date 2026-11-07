import UrbanKicksProductList from "./UrbanKicksProductList"
import UrbanKicksStoreCard from "./UrbanKicksStoreCard"


const UrbanKicks = () => {
  return (
    <div>
        <div className="mx-auto max-w-7xl grid grid-cols-[1fr_2.5fr] gap-6 items-center my-6">
            <UrbanKicksStoreCard/>
            <UrbanKicksProductList/>
        </div>
    </div>
  )
}

export default UrbanKicks
