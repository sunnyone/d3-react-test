import {arc} from "d3-shape";

export const D3Sample: React.VFC = () => {
    const a = arc();
    const x = a({
        innerRadius: 30,
        outerRadius: 50,
        startAngle: 0,
        endAngle: 10
    });

    return <svg>
        <path d={x!.toString()} fill="white"/>
    </svg>;
}