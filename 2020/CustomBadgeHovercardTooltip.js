// https://www.redditstatic.com/desktop2x/CustomBadgeHovercardTooltip.b9943542789ad4b4f675.js
// Retrieved at 3/17/2020, 2:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CustomBadgeHovercardTooltip"], {
		"./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2_a0AZEsekxVGOijC1h5y",
				addCustomIcon: "_1QCswSWMKWdEyC-qp39OwF",
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
				c = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				i = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./node_modules/uuid/v4.js"),
				m = s.n(l),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/economics/membershipPage.ts"),
				C = s("./src/reddit/i18n/utils.ts"),
				_ = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				j = s("./src/reddit/icons/svgs/Crown/index.tsx"),
				g = s("./src/reddit/selectors/economics.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/index.m.less"),
				w = s.n(v);
			class E extends o.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || m()()
				}
				componentDidMount() {
					this.props.sendEvent(e => Object.assign({
						source: "meta",
						action: "open",
						noun: "custom_badges_hover_card",
						correlationId: this.correlationId
					}, x.defaults(e), {
						subreddit: x.subreddit(e)
					}))
				}
				onOpenUploadDialog() {
					this.props.onHideTooltip(), this.props.onOpenUploadDialog()
				}
				render() {
					const e = this.props.userIsPremiumSubscriber === g.b.Subscribed,
						t = this.props.subreddit && this.props.subreddit.name || "",
						s = this.props.meta;
					return o.a.createElement("div", {
						className: Object(u.a)(this.props.className, w.a.container),
						style: this.props.style
					}, o.a.createElement("header", {
						className: w.a.header
					}, e ? Object(C.c)("Custom Badge") : Object(C.c)("Upload Badge")), o.a.createElement("article", {
						className: w.a.content
					}, e ? Object(C.c)("Create a custom badge. Share it with other ".concat(Object(C.b)("memberAltPlural", s.memberAltPlural), " for a reward.")) : Object(C.c)("Users without a ".concat(Object(C.b)("membershipAlt", s.membershipAlt), " can design and upload badges and receive 3 months of ").concat(Object(C.b)("membership", s.membership), " for free."))), o.a.createElement("footer", {
						className: w.a.footer
					}, o.a.createElement(O.n, {
						className: w.a.link,
						onClick: () => this.onOpenUploadDialog()
					}, o.a.createElement(_.a, {
						className: w.a.addCustomIcon
					}), Object(C.c)("upload custom badge")), !e && o.a.createElement(O.o, {
						className: w.a.link,
						disabled: !this.props.subreddit,
						to: Object(h.a)(t, this.correlationId),
						onClick: e => {
							e.stopPropagation(), this.props.sendEvent(e => Object.assign({
								source: "meta",
								action: "click",
								noun: "custom_badge_hover_open_learn_more",
								correlationId: this.correlationId
							}, x.defaults(e), {
								subreddit: x.subreddit(e)
							}))
						}
					}, o.a.createElement(j.a, {
						className: w.a.crown
					}), Object(C.c)("Get ".concat(Object(C.b)("membershipAlt", s.membershipAlt))))))
				}
			}
			const A = Object(n.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(g.u)(e, s)
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
					return Object(g.B)(e, s)
				}
			});
			var f = Object(b.c)(Object(c.b)(A, e => ({
				onOpenUploadDialog: () => e(Object(p.i)())
			}))(E));
			const D = Object(i.a)(f, [a.a.Click, a.a.Keydown]);
			const y = Object(n.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(d.b)(s)(e)
				}
			});
			t.default = Object(c.b)(y)((function(e) {
				return e.isOpen ? o.a.createElement(D, e) : null
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
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				o = s.n(r);

			function c(e) {
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
//# sourceMappingURL=CustomBadgeHovercardTooltip.b9943542789ad4b4f675.js.map