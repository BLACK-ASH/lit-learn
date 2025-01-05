
const page = async({ params }) => {
  const { slug } = await params
  return (
    <div>page :
      {slug}
    </div>
  )
}

export default page