function Page1({students,loop}){
return(
    <>
    <tr>
       <th>Id</th>
       <th>Name</th>
       <th>Email</th>

     </tr>
     <td colSpan='3'>
     {students.map(loop)}
     </td>
    </>
)
}export default Page1;