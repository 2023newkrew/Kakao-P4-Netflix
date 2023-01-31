import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const createPortalWrapper = (id: string) => {
  const element = document.createElement('div');
  element.id = id;
  return element;
};

type PortalProps = {
  children: ReactNode;
  portalId: string;
};
const Portal = ({ children, portalId }: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const portalEl = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    setMounted(true);
    portalEl.current = createPortalWrapper(portalId);
    document.body.appendChild(portalEl.current);

    return () => {
      if (portalEl.current != null) {
        document.body.removeChild(portalEl.current);
      }
    };
  }, []);

  if (!mounted || portalEl.current == null) {
    return null;
  }

  return createPortal(children, portalEl.current);
};
Portal.propTypes = {
  children: PropTypes.node,
  portalId: PropTypes.string,
};
export default Portal;
