import dino from "../assets/dino-swag.jpg";

export default function Homepage(){
    return(
        <>
            
            <main>
                <section className="d-flex align-items-center gap-5">
                    <img src={dino} alt="" className=" w-25"/>
                    <h2 className="">Benvenuto!</h2>
                    
                </section>
            </main>
        
        </>
    );
}