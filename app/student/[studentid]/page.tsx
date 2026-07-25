export default async function studentID({ params }: {
    params: Promise<{ studentid: string }>
}) {
    const id = (await params).studentid
    return (
        <div>
            รหัสนักศึกษา : {id}
        </div>
    )
}