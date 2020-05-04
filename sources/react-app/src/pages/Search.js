/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import BaseLayout from '../shared/BaseLayout';
import Slider from '../components/Slider';
import { FormattedMessage } from 'react-intl';
import PostCard from '../shared/PostCard';
import SidebarBios from '../shared/SidebarBios';
import SidebarSearch from '../shared/SidebarSearch';
import PopularPostsAside from '../shared/PopularPostsAside';
import SidebarCategories from '../shared/SidebarCategories';
import SidebarTags from '../shared/SidebarTags';
import { Link } from 'react-router-dom';
import { parse } from 'query-string';

export default function (props) {
  const {
    posts
  } = props;

  return (
    <BaseLayout>
      <section className="site-section pt-5 py-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-4">
                <FormattedMessage
                  id="common.latestPostSectionTitle"
                  defaultMessage="Search Results"
                />
              </h2>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="row">

              </div>
            </div>
            <div className="col-md-12 col-lg-4 sidebar">

              <SidebarSearch />

              {/*
              <SidebarBios bios={bios_o} />
              */}

              <PopularPostsAside posts={posts} />

              <SidebarCategories />

              <SidebarTags />

            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}