export default function ReviewCard({children}:any){
    return(
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-coolGray-700 text-white">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        {children}
                    </div>
                    <div>
                        <h4 className="font-bold">Leroy Jenkins</h4>
                        <span className="text-xs dark:text-coolGray-400">2 days ago</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-yellow-500">
                    <img src="https://img.icons8.com/office/30/000000/star--v1.png"/>
                    <span className="text-xl font-bold">4.5</span>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-white">
                <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
            </div>
        </div>
    )
}
