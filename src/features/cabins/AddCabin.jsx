import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin(){
    return (
        <Modal>
            <Modal.Open opens='cabin-form'>
                <Button>Add new cabin</Button>
            </Modal.Open>
            <Modal.Window name='cabin-form'>
                <CreateCabinForm/>
            </Modal.Window>
        </Modal>
    )
}


// function AddCabin() {
//   const [openModel, setOpenModel] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setOpenModel((show) => !show)}>
//         Add a new cabin
//       </Button>
//       {openModel && (
//         <Modal onClose={() => setOpenModel(false)}>
//           <CreateCabinForm onClose={() => setOpenModel(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
