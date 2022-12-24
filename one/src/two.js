import React from "react";

export class Database extends React.Component {
  render() {
    return (
      <span>
        <table>
          <thead>
            <tr>
              {this.props.headers.map((title) => {
                return <th>{title}</th>;
              })}
            </tr>
          </thead>
        </table>
      </span>
    );
  }
}
