// https://www.redditstatic.com/desktop2x/CustomBadgeHovercardTooltip.10119ea4c9eeb57293f2.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CustomBadgeHovercardTooltip"], {
		"./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				addCustomIcon: "_1QCswSWMKWdEyC-qp39OwF",
				icon: "_2_a0AZEsekxVGOijC1h5y",
				container: "yBY_FjDJXZ7QW3u79zCnu",
				content: "_1IQuYqkzKpT292XMSDJU0A",
				crown: "_283FDOTtEZcM-cJuyRYMi6",
				header: "XyYiwiMkSJmlukv_8D25e",
				link: "_298UyJkRdWZO_dJU-xOYqB"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s("./node_modules/uuid/v4.js"),
				u = s.n(m),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/helpers/economics/membershipPage.ts"),
				O = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				g = s("./src/reddit/icons/svgs/Crown/index.tsx"),
				x = s("./src/reddit/selectors/economics.ts"),
				f = s("./src/reddit/selectors/telemetry.ts"),
				j = s("./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/index.m.less"),
				v = s.n(j);
			class w extends o.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || u()()
				}
				componentDidMount() {
					this.props.sendEvent(e => Object.assign(Object.assign({
						source: "meta",
						action: "open",
						noun: "custom_badges_hover_card",
						correlationId: this.correlationId
					}, f.defaults(e)), {
						subreddit: f.subreddit(e)
					}))
				}
				onOpenUploadDialog() {
					this.props.onHideTooltip(), this.props.onOpenUploadDialog()
				}
				render() {
					const e = this.props.userIsPremiumSubscriber === x.a.Subscribed,
						t = this.props.subreddit && this.props.subreddit.name || "",
						s = this.props.meta;
					return o.a.createElement("div", {
						className: Object(p.a)(this.props.className, v.a.container),
						style: this.props.style
					}, o.a.createElement("header", {
						className: v.a.header
					}, e ? l.fbt._("Custom Badge", null, {
						hk: "4xui7o"
					}) : l.fbt._("Upload Badge", null, {
						hk: "41J8Iq"
					})), o.a.createElement("article", {
						className: v.a.content
					}, e ? l.fbt._("Create a custom badge. Share it with other {memberAltPlural} for a reward.", [l.fbt._param("memberAltPlural", s.memberAltPlural)], {
						hk: "1GYswu"
					}) : l.fbt._("Users without a {membershipAlt} can design and upload badges and receive 3 months of {membership} for free.", [l.fbt._param("membershipAlt", s.membershipAlt), l.fbt._param("membership", s.membership)], {
						hk: "lVti0"
					})), o.a.createElement("footer", {
						className: v.a.footer
					}, o.a.createElement(_.o, {
						className: v.a.link,
						onClick: () => this.onOpenUploadDialog()
					}, o.a.createElement(O.a, {
						className: v.a.addCustomIcon
					}), l.fbt._("upload custom badge", null, {
						hk: "26VOvM"
					})), !e && o.a.createElement(_.p, {
						className: v.a.link,
						disabled: !this.props.subreddit,
						to: Object(C.a)(t, this.correlationId),
						onClick: e => {
							e.stopPropagation(), this.props.sendEvent(e => Object.assign(Object.assign({
								source: "meta",
								action: "click",
								noun: "custom_badge_hover_open_learn_more",
								correlationId: this.correlationId
							}, f.defaults(e)), {
								subreddit: f.subreddit(e)
							}))
						}
					}, o.a.createElement(g.a, {
						className: v.a.crown
					}), l.fbt._("Get {membershipAlt}", [l.fbt._param("membershipAlt", s.membershipAlt)], {
						hk: "2RRNNM"
					}))))
				}
			}
			const A = Object(a.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(x.s)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(x.x)(e, s)
				}
			});
			var E = Object(h.c)(Object(n.b)(A, e => ({
				onOpenUploadDialog: () => e(Object(b.j)())
			}))(w));
			const k = Object(d.a)(E, [i.a.Click, i.a.Keydown]);
			const D = Object(a.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(c.b)(s)(e)
				}
			});
			t.default = Object(n.b)(D)((function(e) {
				return e.isOpen ? o.a.createElement(k, e) : null
			}))
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function o(e, t) {
				return Object(r.a)("/web/special-membership/".concat(e, "?corr=").concat(t))
			}
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js"),
				o = s.n(r);

			function n(e) {
				return o.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, o.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CustomBadgeHovercardTooltip.10119ea4c9eeb57293f2.js.map