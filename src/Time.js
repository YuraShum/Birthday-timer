export default function Time({birthdayDate, allTime}){

    return(
        <div className="time">
            {birthdayDate ? <div className="birthday__time">Heppy birthday</div> : 
            <>
            <div>
                <div className="number">{allTime.days}</div>
                <div>DAYS</div>
            </div>
            <div>
                <div className="number">{allTime.hours}</div>
                <div>HOURS</div>
            </div>
            <div>
                <div className="number">{allTime.minutes}</div>
                <div>MINUTES</div>
            </div>
            <div>
                <div className="number">{allTime.seconds}</div>
                <div>SECONDS</div>
            </div>
            </>
            }
        </div>
    )
}