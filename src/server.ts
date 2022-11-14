import 'reflect-metadata'
import { appDataSource } from './database/appdata-source'
import myapp from './myapp'

const port = 3131

const server =async () => {
    
    try {

        await appDataSource.initialize()
        console.log(`Database is inicialized: ${appDataSource.isInitialized}`);
        
        myapp.listen(port, () =>{
            console.log(`Server is running: http://localhost:${port}  🚀`);
            
        })
    } catch (error) {
        if(error instanceof Error) console.log(error.message);
        
    }
}

server()