// https://www.redditstatic.com/desktop2x/ContributorRequestButton.9920a8844e6e0e0d13e5.js
// Retrieved at 3/11/2021, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ContributorRequestButton"], {
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less": function(t, e, s) {
			t.exports = {
				RequestButton: "_3K2ydhts9_ES4s9UpcXqBi",
				requestButton: "_3K2ydhts9_ES4s9UpcXqBi"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx": function(t, e, s) {
			"use strict";
			s.r(e);
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/constants/modals.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/privateCommunity.ts"),
				m = s("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				p = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				R = s("./src/reddit/selectors/subreddit.ts"),
				q = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				C = s.n(q);
			const f = Object(u.c)({
					restrictions: R.p
				}),
				x = () => ({
					[p.b.Comment]: r.fbt._("Request to Comment", null, {
						hk: "3KRhw5"
					}),
					[p.b.IdCard]: r.fbt._("Request to Post", null, {
						hk: "2xsrGd"
					}),
					[p.b.PostSubmission]: r.fbt._("Request to Post", null, {
						hk: "2xsrGd"
					}),
					[p.b.ContentGate]: r.fbt._("Request to Join", null, {
						hk: "1nK8Vv"
					})
				});
			class h extends n.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						const {
							sendEvent: t,
							eventSource: e,
							openRequestToJoinSubredditModal: s,
							openContributorRequestModal: r
						} = this.props;
						e === p.b.ContentGate ? (t(Object(_.a)(e)), s()) : (t(Object(m.a)(e)), r())
					}
				}
				render() {
					const {
						eventSource: t,
						smallButton: e,
						className: s
					} = this.props;
					return n.a.createElement(b.q, {
						priority: t === p.b.ContentGate ? b.b.Secondary : b.b.Primary,
						className: Object(d.a)(e ? null : C.a.RequestButton, s),
						onClick: this.onRequest,
						size: e ? b.c.S : b.c.M
					}, x()[t])
				}
			}
			e.default = Object(i.b)(f, t => ({
				openContributorRequestModal: () => t(Object(c.i)(a.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => t(Object(c.i)(a.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(l.c)(h))
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return o
			})), s.d(e, "b", (function() {
				return n
			}));
			var r = s("./src/reddit/selectors/telemetry.ts");
			const o = t => e => ({
					...r.defaults(e),
					source: t,
					action: "click",
					noun: "request_to_join_button",
					subreddit: r.subreddit(e)
				}),
				n = t => e => ({
					...r.defaults(e),
					source: t,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: r.subreddit(e)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return o
			})), s.d(e, "b", (function() {
				return n
			}));
			var r = s("./src/reddit/selectors/telemetry.ts");
			const o = t => e => ({
					...r.defaults(e),
					source: t,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: r.subreddit(e)
				}),
				n = t => e => ({
					...r.defaults(e),
					source: "request_restricted_approval_form",
					action: "click",
					noun: t,
					subreddit: r.subreddit(e)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ContributorRequestButton.9920a8844e6e0e0d13e5.js.map