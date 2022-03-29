import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { stylesFactory } from '@grafana/ui';
import { css, cx } from 'emotion';
import 'hslayers-ng-app/runtime';
import 'hslayers-ng-app/polyfills';
import 'hslayers-ng-app/vendor';
import 'hslayers-ng-app/main';
import 'hslayers-ng-app/styles.css';
interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles({ width, height });
  eval(options.hslayerConfigFn);
  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <hslayers-app style={{ width: width + 'px', height: height + 'px' }}></hslayers-app>
    </div>
  );
};

const getStyles = stylesFactory(({ width, height }) => {
  return {
    wrapper: css`
      position: relative;
    `,
  };
});
