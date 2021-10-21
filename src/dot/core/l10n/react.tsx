import React from "react";
import ReactDOM from "react-dom";
import { l10n } from ".";

interface LProps {
    id: string;
    ctx?: () => any;
    children?: any;
}

export class L extends React.Component<LProps> {
    public data: any;

    constructor(props: LProps) {
        super(props);
    }

    public updateState() {
        this.data = l10n.format(
            this.props.id,
            this.props.ctx ? this.props.ctx() : {}
        );

        const node: any = ReactDOM.findDOMNode(this);

        if (
            typeof this.data == "object" &&
            this.data.attributes
        ) {
            for (const [key, value] of Object.entries(
                this.data.attributes
            )) {
                (node as HTMLDivElement).setAttribute(
                    key,
                    `${value}`
                );
            }
        }
    }

    public componentDidMount() {
        this.updateState();

        // store.subscribe(() => this.updateState());
    }

    public render() {
        const child = this.props.children ? (
            React.Children.only(this.props.children)
        ) : (
            <span />
        );

        return React.cloneElement(child, {
            dangerouslySetInnerHTML: {
                __html:
                    typeof this.data == "object"
                        ? this.data.value
                        : this.data
            }
        });
    }
}

export function useL10n() {
    // const [data, setData] = useState<(id: string, ctx?: Record<string, any>) => any>(l10n.format)
    // store.subscribe(() => {
    //     setData(l10n.format);
    // })
    // return data
}
