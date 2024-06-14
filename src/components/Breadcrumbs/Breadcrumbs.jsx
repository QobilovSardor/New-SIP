import React from 'react';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';

const CustomBreadcrumbs = ({ items = [] }) => {
  if (!items.length) {
    return <div>No breadcrumbs available</div>;
  }

  const breadcrumbItems = items.map(item => ({
    label: item.label,
    href: item.href,
  }));

  return <Breadcrumbs items={breadcrumbItems} size='xs' />;
};

export default CustomBreadcrumbs;
