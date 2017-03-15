import React from 'react';

const styled = styles => TargetComponent => {
    const componentWillMountOriginal = TargetComponent.prototype.componentWillMount;
    const componentWillUnmountOriginal = TargetComponent.prototype.componentWillUnmount;

    // We need a counter because with Fiber cWM may be called multiple times
    TargetComponent.prototype.count = 0;

    TargetComponent.prototype.componentWillMount = function componentWillMount() {
        this.count += 1;
        if (this.count === 1) {
            styles.use();
        }
        if (componentWillMountOriginal) {
            componentWillMountOriginal.call(this);
        }
    };

    TargetComponent.prototype.componentWillUnmount = function componentWillUnmount() {
        styles.unuse();
        this.count = 0;
        if (componentWillUnmountOriginal) {
            componentWillUnmountOriginal.call(this);
        }
    };

    return function StyledComponent(props) {
        return <TargetComponent {...props} classes={styles.locals} />;
    };
};

export default styled;
