import Container from "@/components/common/Container"
import PackageCard from "@/components/common/PackageCard"
import { tourPackagesType } from "@/Types/type"

function TourPackages({content}: {content: tourPackagesType[]}) {
  return (
    <Container title="The Most Popular Packages">
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-8 justify-items-center">
      {content.map((card,index)=>{
        return <PackageCard key={index} content={card}/>
      })}
      </div>
    </Container>
  )
}

export default TourPackages
