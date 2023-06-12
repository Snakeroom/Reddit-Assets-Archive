// https://www.redditstatic.com/desktop2x/PrivateCommunityAccessModal.69d37684e428f7b3f3ed.js
// Retrieved at 6/12/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PrivateCommunityAccessModal"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/chat/controls/Svg/index.m.less"),
				c = s.n(i);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: s,
						active: n,
						hover: a
					} = e;
				return r.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: s,
						[c.a.active]: n,
						[c.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", c.a)
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(r.e)(e),
					a = encodeURIComponent(`${t}${o}`);
				return `${n.a.accountManagerOrigin}${s||"/login"}?dest=${a}`
			}
		},
		"./src/reddit/components/CCM/PrivateCommunityAccessModal/index.m.less": function(e, t, s) {
			e.exports = {
				modal: "_3VSdbpk-WYLt9YkpBWuk-U",
				inner: "_1BF0wFeWciQhOXVzq0Nsno",
				modalHeader: "_1_kuJ_iXpm81PmbhsHPLEh",
				closeIcon: "_10QoQpJXPCt83bd1Wyl-2_",
				modalContent: "_2ojMn0sjDMMc3mpiPzN9Kf",
				privateKeyIcon: "_30h0IUYlAt6KJlDIhzJwSs",
				title: "_16dhx96HCrjkhICy7QIaxs",
				privateSubredditDetails: "DaDf8XTN0iHNSDddN4hX7",
				isCollapsed: "_1yyX4fPCRQ2jHTUU7fb9Cg",
				detailsContainer: "Bn1WFOW8T2nelH1dVJ6YW",
				moreButton: "_6HA9kgtyPZ3TCjw2gquC6",
				description: "_2EkgcvfVW8t9YMkYujv05-",
				buttonsContainer: "_1yJV93lXB4hlJLegVHK8OG",
				contributorRequestButton: "KaQNuQVTK7-qEffPu-eIJ",
				secondaryLeftLinkButton: "_21n-kcwsPR-6wSy_Z-zzuR",
				linkRouterButton: "_3vtVx1ABOV23QTICCozjc0"
			}
		},
		"./src/reddit/components/CCM/PrivateCommunityAccessModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "_PrivateSubredditBody", (function() {
				return B
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/loginHref/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				v = s("./src/reddit/constants/keycodes.ts"),
				h = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/contexts/InsideOverlay.tsx"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/hooks/useWindowEvent.ts"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/icons/svgs/PrivateKey/index.tsx"),
				f = s("./src/reddit/selectors/activeModal.ts"),
				O = s("./src/reddit/selectors/contentGate.ts"),
				j = s("./src/reddit/selectors/meta.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/CCM/PrivateCommunityAccessModal/index.m.less"),
				E = s.n(k);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), B = e => {
				let {
					subredditName: t,
					subredditDescription: s,
					isContributorRequestsDisabled: r,
					isPrivateSubredditContributorRequestPending: a,
					isLoggedIn: i,
					location: c,
					origin: l,
					isCollapsed: m,
					setIsCollapsed: v,
					shouldShowMoreButton: h
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(x.a, {
					className: E.a.privateKeyIcon
				}), o.a.createElement("h3", {
					className: E.a.title
				}, "r/", t, " ", R._("is a private community", null, {
					hk: "7zZmq"
				})), s && s.length && o.a.createElement("div", {
					className: Object(d.a)(E.a.detailsContainer, "flex relative mb-lg")
				}, o.a.createElement("div", {
					id: "privateSubredditDetails",
					className: Object(d.a)(E.a.privateSubredditDetails, {
						[E.a.isCollapsed]: m
					})
				}, s), h && o.a.createElement("button", {
					className: E.a.moreButton,
					onClick: () => v(!m)
				}, m ? R._("...", null, {
					hk: "1rUvqg"
				}) : "")), o.a.createElement("div", {
					className: E.a.description
				}, R._("The moderators of", null, {
					hk: "3QSrbr"
				}), " ", "r/", t, " ", R._("have set this community as private.", null, {
					hk: "3zhD9F"
				}), " ", R._("Only approved members can view and take part in its discussions.", null, {
					hk: "af0uR"
				})), o.a.createElement("div", {
					className: E.a.buttonsContainer
				}, i ? o.a.createElement(o.a.Fragment, null, !r && o.a.createElement(b.a, {
					eventSource: "content_gate",
					smallButton: !0,
					className: E.a.contributorRequestButton,
					isContributorRequestPending: a
				}), o.a.createElement(C.p, {
					className: E.a.secondaryLeftLinkButton,
					href: `${n.a.redditUrl}/message/compose?to=/r/${t}`,
					redditStyle: !0
				}, R._("Message Mods", null, {
					hk: "vVe1i"
				}))) : o.a.createElement(C.p, {
					href: Object(u.a)(c, l),
					redditStyle: !0,
					className: E.a.secondaryLeftLinkButton
				}, R._("Sign Up", null, {
					hk: "rvpjy"
				})), o.a.createElement(C.n, {
					className: E.a.linkRouterButton,
					to: i ? "/" : "/r/popular",
					redditStyle: !0
				}, R._("Browse Reddit", null, {
					hk: "1fi8kh"
				}))))
			}, S = Object(i.i)(B);
			const q = Object(l.a)(Object(p.b)((function(e) {
				const t = Object(a.e)(e => Object(j.l)(e)),
					s = Object(a.e)(e => Object(O.a)(e)),
					[n, i] = Object(r.useState)(!0),
					c = Object(a.e)(e => Object(f.a)(e));
				if (!c) return e.closeModal(), null;
				const {
					subredditDescription: l,
					subredditName: d,
					isContributorRequestsDisabled: u
				} = c, m = document.getElementById("privateSubredditDetails"), b = ((null == m ? void 0 : m.scrollHeight) || 1) - 8 > ((null == m ? void 0 : m.clientHeight) || 1);
				return o.a.createElement("div", {
					className: E.a.inner
				}, o.a.createElement("div", {
					className: E.a.modalHeader
				}, o.a.createElement(g.a, {
					className: E.a.closeIcon,
					onClick: e.closeModal
				})), o.a.createElement("div", {
					className: E.a.modalContent
				}, o.a.createElement(S, {
					isContributorRequestsDisabled: !!u,
					isLoggedIn: !!e.isLoggedIn,
					isPrivateSubredditContributorRequestPending: s,
					origin: t,
					subredditDescription: l,
					subredditName: d,
					isCollapsed: n,
					setIsCollapsed: i,
					shouldShowMoreButton: b
				})))
			})));
			t.default = e => {
				const t = Object(a.d)(),
					s = !!Object(a.e)(y.m),
					n = Object(r.useCallback)(() => {
						t(Object(c.b)(s ? "/" : "/r/popular"))
					}, [t, s]),
					i = Object(r.useCallback)(() => {
						t(Object(m.g)(h.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT)), n()
					}, [t, n]),
					l = Object(r.useCallback)(e => {
						e.key === v.b.Escape && n()
					}, [n]);
				return Object(_.b)(l, !0), o.a.createElement(q, N({}, e, {
					isLoggedIn: s,
					closeModal: i,
					onOverlayClick: i,
					className: Object(d.a)(e.className, E.a.modal)
				}))
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ContributorRequestButton").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/icons/svgs/PrivateKey/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/chat/controls/Svg/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement(o.a, a({}, e, {
				viewBox: "-1 -1 21 21"
			}), r.a.createElement("path", {
				d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
			}))
		},
		"./src/reddit/selectors/contentGate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/selectors/platform.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const a = e => {
				if (!Object(o.S)(e)) return !1;
				const t = Object(r.d)(e);
				if (!t) return !1;
				const s = Object(o.h)(e, t);
				if (!s) return !1;
				if (!s.privateSubreddit) return !1;
				const {
					isContributorRequestTimestamp: a
				} = s;
				if (!a) return !1;
				const i = 30 * n.D;
				return a > Date.now() - i
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PrivateCommunityAccessModal.69d37684e428f7b3f3ed.js.map