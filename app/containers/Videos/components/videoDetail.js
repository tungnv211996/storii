import React, { Component } from 'react';
import { mapCss } from '../../../libs/extensions';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import NextThumbnail from './nextThumbnail';
import PlayerVideo from './playerVideo';
import StreamChatBox from '../../../components/StreamChat/index';
import { withRouter } from 'react-router-dom';

@observer
class VideoDetail extends Component {
  render() {
    return (
      <div >
        <div className={mapCss("row", "page-titles")}>
          <div className={mapCss("col-md-5", "align-self-center")}>
            <h4 className={mapCss("text-themecolor")}>Chi tiết</h4>
          </div>
          <div className={mapCss("col-md-7", "d-none", "d-sm-block", "align-self-center", "text-right")}>
            <div className={mapCss("d-flex", "justify-content-end", "align-items-center")}>
              <ol className={mapCss("breadcrumb")}>
                <li className={mapCss("breadcrumb-item")}><a href="javascript:void(0)">Trang chủ</a></li>
                <li className={mapCss("breadcrumb-item", "active")}>Chi tiết</li>
              </ol>
            </div>
          </div>
        </div>
        <div className={mapCss("row")}>
          <PlayerVideo />
          <StreamChatBox />
          <NextThumbnail />
        </div>
      </div>
    )
  }
}
export default withRouter(VideoDetail);