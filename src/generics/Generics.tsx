import * as React from 'react';
import styles from './Generics.module.scss';

export type Props = {}

export type State = {
    count: number;
    outPut: string;
}


export class Generics extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            count: 0,
            outPut: ''
        };
    }

    public render(): JSX.Element {
        const { count, outPut } = this.state;

        return (
            <div className={styles.root}>
                <button onClick={this.onClick} className={'btn'}>
                    {count}
                </button>
                {/*<textarea value={outPut} readOnly={true} className={styles.textArea}/>*/}
            </div>
        );
    }

    private readonly onClick = () => {
        this.setState({count: this.state.count + 1});
    };

    // private printItems(value: any): void {
    //     let outPut = '';
    //     for (const v of value) {
    //         outPut = outPut + `${v}\n`;
    //     }
    //
    //     this.setState({ outPut });
    // }
}
