// https://www.redditstatic.com/desktop2x/PrivateCommunityAccessModal.9a7b255412f539b92550.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PrivateCommunityAccessModal"], {
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(n.e)(e),
					a = encodeURIComponent(`${t}${o}`);
				return `${r.a.accountManagerOrigin}${s||"/login"}?dest=${a}`
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
			var r = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/loginHref/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				v = s("./src/reddit/constants/keycodes.ts"),
				p = s("./src/reddit/constants/modals.ts"),
				C = s("./src/reddit/contexts/InsideOverlay.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/hooks/useWindowEvent.ts"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				j = s("./src/reddit/icons/svgs/PrivateKey/index.tsx"),
				O = s("./src/reddit/selectors/activeModal.ts"),
				f = s("./src/reddit/selectors/contentGate.ts"),
				y = s("./src/reddit/selectors/meta.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/CCM/PrivateCommunityAccessModal/index.m.less"),
				k = s.n(E);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
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
					isContributorRequestsDisabled: n,
					isPrivateSubredditContributorRequestPending: a,
					isLoggedIn: i,
					location: c,
					origin: d,
					isCollapsed: m,
					setIsCollapsed: v,
					shouldShowMoreButton: p
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(j.a, {
					className: k.a.privateKeyIcon
				}), o.a.createElement("h3", {
					className: k.a.title
				}, "r/", t, " ", R._("is a private community", null, {
					hk: "7zZmq"
				})), s && s.length && o.a.createElement("div", {
					className: Object(l.a)(k.a.detailsContainer, "flex relative mb-lg")
				}, o.a.createElement("div", {
					id: "privateSubredditDetails",
					className: Object(l.a)(k.a.privateSubredditDetails, {
						[k.a.isCollapsed]: m
					})
				}, s), p && o.a.createElement("button", {
					className: k.a.moreButton,
					onClick: () => v(!m)
				}, m ? R._("...", null, {
					hk: "1rUvqg"
				}) : "")), o.a.createElement("div", {
					className: k.a.description
				}, R._("The moderators of", null, {
					hk: "3QSrbr"
				}), " ", "r/", t, " ", R._("have set this community as private.", null, {
					hk: "3zhD9F"
				}), " ", R._("Only approved members can view and take part in its discussions.", null, {
					hk: "af0uR"
				})), o.a.createElement("div", {
					className: k.a.buttonsContainer
				}, i ? o.a.createElement(o.a.Fragment, null, !n && o.a.createElement(b.a, {
					eventSource: "content_gate",
					smallButton: !0,
					className: k.a.contributorRequestButton,
					isContributorRequestPending: a
				}), o.a.createElement(h.p, {
					className: k.a.secondaryLeftLinkButton,
					href: `${r.a.redditUrl}/message/compose?to=/r/${t}`,
					redditStyle: !0
				}, R._("Message Mods", null, {
					hk: "vVe1i"
				}))) : o.a.createElement(h.p, {
					href: Object(u.a)(c, d),
					redditStyle: !0,
					className: k.a.secondaryLeftLinkButton
				}, R._("Sign Up", null, {
					hk: "rvpjy"
				})), o.a.createElement(h.n, {
					className: k.a.linkRouterButton,
					to: i ? "/" : "/r/popular",
					redditStyle: !0
				}, R._("Browse Reddit", null, {
					hk: "1fi8kh"
				}))))
			}, S = Object(i.i)(B);
			const q = Object(d.a)(Object(C.b)((function(e) {
				const t = Object(a.e)(e => Object(y.l)(e)),
					s = Object(a.e)(e => Object(f.a)(e)),
					[r, i] = Object(n.useState)(!0),
					c = Object(a.e)(e => Object(O.a)(e));
				if (!c) return e.closeModal(), null;
				const {
					subredditDescription: d,
					subredditName: l,
					isContributorRequestsDisabled: u
				} = c, m = document.getElementById("privateSubredditDetails"), b = ((null == m ? void 0 : m.scrollHeight) || 1) - 8 > ((null == m ? void 0 : m.clientHeight) || 1);
				return o.a.createElement("div", {
					className: k.a.inner
				}, o.a.createElement("div", {
					className: k.a.modalHeader
				}, o.a.createElement(g.a, {
					className: k.a.closeIcon,
					onClick: e.closeModal
				})), o.a.createElement("div", {
					className: k.a.modalContent
				}, o.a.createElement(S, {
					isContributorRequestsDisabled: !!u,
					isLoggedIn: !!e.isLoggedIn,
					isPrivateSubredditContributorRequestPending: s,
					origin: t,
					subredditDescription: d,
					subredditName: l,
					isCollapsed: r,
					setIsCollapsed: i,
					shouldShowMoreButton: b
				})))
			})));
			t.default = e => {
				const t = Object(a.d)(),
					s = !!Object(a.e)(x.m),
					r = Object(n.useCallback)(() => {
						t(Object(c.b)(s ? "/" : "/r/popular"))
					}, [t, s]),
					i = Object(n.useCallback)(() => {
						t(Object(m.g)(p.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT)), r()
					}, [t, r]),
					d = Object(n.useCallback)(e => {
						e.key === v.b.Escape && r()
					}, [r]);
				return Object(_.b)(d, !0), o.a.createElement(q, N({}, e, {
					isLoggedIn: s,
					closeModal: i,
					onOverlayClick: i,
					className: Object(l.a)(e.className, k.a.modal)
				}))
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(r.a)({
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
			t.a = n
		},
		"./src/reddit/icons/svgs/PrivateKey/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "-1 -1 21 21"
			}, n.a.createElement("path", {
				d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
			}))
		},
		"./src/reddit/selectors/contentGate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/selectors/platform.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const a = e => {
				if (!Object(o.S)(e)) return !1;
				const t = Object(n.d)(e);
				if (!t) return !1;
				const s = Object(o.h)(e, t);
				if (!s) return !1;
				if (!s.privateSubreddit) return !1;
				const {
					isContributorRequestTimestamp: a
				} = s;
				if (!a) return !1;
				const i = 30 * r.D;
				return a > Date.now() - i
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PrivateCommunityAccessModal.9a7b255412f539b92550.js.map