export default async function Hello({ params }: {
    params: Promise<{ name: string, age: string }>
}) {
    const name = (await params).name
    const age = (await params).age
    return (
        <div>
            <div>
                ชื่อ : {name}
            </div>
            <div>
                อายุ : {age}
            </div>
        </div>
    )
}