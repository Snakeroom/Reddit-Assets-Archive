// https://www.redditstatic.com/desktop2x/reddit-components-ActiveCommunities.6b09c4edf6c0cbc55aac.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ActiveCommunities"], {
		"./src/reddit/components/ActiveCommunities/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/activeCommunitiesOnProfile/constants.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/makeRequest/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				b = n("./src/redditGQL/operations/GetTopKarmaSubreddits.json");
			const p = async (e, t) => {
				const n = await Object(l.a)(e, {
					...b,
					variables: t
				});
				if (!Object(c.c)(n)) throw new Error("Encountered an error while fetching active communities");
				return (e => {
					var t, n;
					return null === (n = null === (t = null == e ? void 0 : e.redditorInfoByName) || void 0 === t ? void 0 : t.activeSubreddits) || void 0 === n ? void 0 : n.reduce((e, t) => {
						var n;
						return e = {
							...e,
							models: {
								...e.models,
								[t.id]: Object(m.a)(t)
							},
							aboutInfo: {
								...e.aboutInfo,
								[t.id]: {
									...Object(u.a)(t)[t.id],
									bannerBackgroundImage: null === (n = t.styles) || void 0 === n ? void 0 : n.bannerBackgroundImage
								}
							}
						}
					}, {
						aboutInfo: {},
						models: {}
					})
				})(n.body.data)
			};
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const f = {
				subreddits: [],
				error: null,
				requested: !1
			};
			var x = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case d.b: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								requested: !0
							}
						}
					}
					case d.c: {
						const {
							username: n,
							subreddits: r = {}
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								subreddits: Object.keys(r),
								error: null
							}
						}
					}
					case d.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								error: null === (n = t.payload) || void 0 === n ? void 0 : n.ApiError
							}
						}
					}
					default:
						return e
				}
			};
			Object(i.a)({
				features: {
					activeCommunitiesOnProfile: x
				}
			});
			const v = Object(a.a)(d.b),
				g = Object(a.a)(d.c),
				E = Object(a.a)(d.a),
				I = e => async (t, n, r) => {
					let {
						gqlContext: o
					} = r;
					t(v({
						username: e
					}));
					try {
						const n = await p(o(), {
							username: e
						});
						t(g({
							username: e,
							subreddits: n.models,
							subredditAboutInfo: n.aboutInfo
						}))
					} catch (s) {
						t(E({
							username: e,
							ApiError: s
						}))
					}
				};
			var h = n("./src/reddit/selectors/experiments/activeCommunityProfile.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./node_modules/reselect/es/index.js");
			Object(i.a)({
				features: {
					activeCommunitiesOnProfile: x
				}
			});
			const y = Object(O.a)([(e, t) => {
					var n, r, o;
					return null !== (o = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.activeCommunitiesOnProfile) || void 0 === r ? void 0 : r[t]) && void 0 !== o ? o : f
				}], e => e),
				C = Object(O.a)([(e, t) => y(e, t)], e => {
					var t;
					return null !== (t = null == e ? void 0 : e.subreddits) && void 0 !== t ? t : []
				}),
				k = Object(O.a)([e => e, _.fb], (e, t) => t.map(t => ({
					...t,
					...Object(_.y)(e, {
						subredditId: t.id
					})
				})));
			var j, S = n("./src/lib/constants/icons.ts"),
				w = n("./src/lib/prettyPrintNumber/index.ts"),
				B = n("./node_modules/lodash/debounce.js"),
				N = n.n(B),
				T = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				D = n("./src/reddit/constants/posts.ts"),
				R = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/controls/InternalLink/index.tsx"),
				U = n("./src/reddit/hooks/useTracking.ts"),
				A = n("./src/reddit/icons/fonts/index.tsx"),
				q = n("./src/reddit/components/SubredditIcon/index.tsx"),
				M = n("./src/reddit/constants/tracking.ts"),
				P = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.CLOSE = "close", e.ITEM_SUBREDDIT = "item_subreddit", e.TITLE_SUBREDDIT = "title_subreddit", e.RECOMMENDATION_MODULE = "recommendation_module", e.SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(j || (j = {}));
			const F = (e, t) => {
					let {
						numberItems: n,
						seenItems: r = []
					} = e;
					return {
						...P.q(t),
						source: "cdd_discovery_unit",
						actionInfo: {
							pageType: "profile",
							type: "karma_carousel"
						},
						visibility: {
							number_items: n,
							number_seen_items: r.length,
							seen_items: r,
							seen: !0
						}
					}
				},
				G = (e, t, n) => r => ({
					...F(e, r),
					subreddit: P.ob(r, t),
					action: M.c.VIEW,
					noun: j.ITEM_SUBREDDIT,
					actionInfo: {
						...F(e, r).actionInfo,
						position: n
					}
				}),
				{
					fbt: K
				} = n("./node_modules/fbt/lib/FbtPublic.js"),
				H = (e, t) => {
					var n;
					if (!t || !e) return;
					let r = e.getBoundingClientRect().left - t.getBoundingClientRect().left;
					(null === (n = e.dataset) || void 0 === n ? void 0 : n.position) && parseInt(e.dataset.position, 10) > t.children.length - 4 && (r = t.scrollWidth), t.scroll({
						left: r,
						behavior: "smooth"
					})
				},
				z = e => {
					let {
						subredditIds: t
					} = e;
					const n = Object(U.a)(),
						i = Object(s.e)(e => k(e, {
							subredditIds: t
						})),
						a = Object(r.createRef)(),
						[d, l] = Object(r.useState)(null),
						[c, u] = Object(r.useState)(null),
						m = Object(r.useRef)(new Set);
					Object(r.useEffect)(() => {
						const e = a.current;
						if (!e) return;
						const r = N()(() => {
							const r = (e => {
								const t = e.getBoundingClientRect();
								return Array.from(e.children).filter(e => {
									const n = e.getBoundingClientRect();
									return n.left >= t.left - 2 && n.right <= t.right + 2
								})
							})(e);
							if (r.length > 0 && n) {
								u((e => {
									const t = e[e.length - 1].nextElementSibling;
									return t instanceof HTMLElement ? t : null
								})(r)), l((e => {
									let t = e[0].previousElementSibling;
									return (null == t ? void 0 : t.previousElementSibling) && (t = t.previousElementSibling), t instanceof HTMLElement ? t : null
								})(r));
								for (const e of r) m.current.add(e.id);
								for (const e of r) n(G({
									numberItems: t.length,
									seenItems: Array.from(m.current)
								}, e.id, e.dataset.position))
							}
						}, 200);
						return r(), e.addEventListener("scroll", r), () => {
							e.removeEventListener("scroll", r)
						}
					}, []);
					const b = Object(r.useCallback)(() => H(c, a.current), [c, a]),
						p = Object(r.useCallback)(() => H(d, a.current), [d, a]);
					Object(r.useEffect)(() => {
						t.length > 0 && n && n((e => t => ({
							...F(e, t),
							action: M.c.VIEW,
							noun: j.RECOMMENDATION_MODULE
						}))({
							numberItems: t.length,
							seenItems: t.slice(0, 3)
						}))
					}, [t, n]);
					const f = (e, r) => () => {
							n(((e, t, n) => r => ({
								...F(e, r),
								subreddit: P.ob(r, t),
								action: M.c.CLICK,
								noun: j.TITLE_SUBREDDIT,
								actionInfo: {
									...F(e, r).actionInfo,
									position: n
								}
							}))({
								numberItems: t.length,
								seenItems: Array.from(m.current)
							}, e, r))
						},
						x = (e, n) => r => {
							const o = {
								numberItems: t.length,
								seenItems: Array.from(m.current)
							};
							return r ? ((e, t, n) => r => ({
								...F(e, r),
								subreddit: P.ob(r, t),
								action: M.c.CLICK,
								noun: j.SUBREDDIT_UNSUBSCRIBE,
								actionInfo: {
									...F(e, r).actionInfo,
									position: n
								}
							}))(o, e, n) : ((e, t, n) => r => ({
								...F(e, r),
								subreddit: P.ob(r, t),
								action: M.c.CLICK,
								noun: j.SUBREDDIT_SUBSCRIBE,
								actionInfo: {
									...F(e, r).actionInfo,
									position: n
								}
							}))(o, e, n)
						};
					return o.a.createElement("div", {
						"aria-label": "carousel",
						className: "overflow-hidden relative mx-md"
					}, o.a.createElement("div", {
						className: "flex gap-xs overflow-x-scroll snap-mandatory scrollbar-hide snap-x",
						ref: a
					}, i.map((e, t) => o.a.createElement("div", {
						className: `w-1/4 shrink-0 grow-0 border-box ${t<i.length-1?"snap-start":"snap-end"}`,
						id: e.id,
						key: e.id,
						"data-position": t
					}, o.a.createElement($, {
						key: e.id,
						subreddit: e,
						itemIndex: t,
						onNavigation: f,
						onSubscribeButtonClick: x
					})))), Boolean(d) && o.a.createElement("button", {
						className: "absolute h-[40px] w-[40px] leading-10 left-sm top-1/2 mt-[-20px] shadow-[0px_0px_4px_rgba(0,0,0,0.3)] transition-transform rounded-full bg-neutral-background",
						onClick: p,
						"aria-label": K._("previous items", null, {
							hk: "44uTrz"
						})
					}, o.a.createElement(A.a, {
						name: S.a.back_fill
					})), Boolean(c) && o.a.createElement("button", {
						className: "absolute h-[40px] w-[40px] leading-10 right-sm top-1/2 mt-[-20px] shadow-[0px_0px_4px_rgba(0,0,0,0.3)] transition-transform rounded-full bg-neutral-background",
						onClick: b,
						"aria-label": K._("next items", null, {
							hk: "4EEfgp"
						})
					}, o.a.createElement(A.a, {
						name: S.a.forward_fill
					})))
				},
				$ = e => {
					let {
						subreddit: t,
						itemIndex: n,
						onNavigation: r,
						onSubscribeButtonClick: s
					} = e;
					if (!t) return null;
					const {
						id: i,
						subscribers: a,
						primaryColor: d,
						displayText: l,
						icon: c,
						communityIcon: u,
						url: m,
						bannerBackgroundImage: b,
						isNSFW: p
					} = t;
					return o.a.createElement("div", {
						className: "w-100 bg-[color:var(--newCommunityTheme-body)] border border-solid border-neutral-border-weak rounded-[4px]"
					}, o.a.createElement(L.default, {
						to: m || `/${l}`,
						onClick: r(i, n)
					}, o.a.createElement("div", {
						className: "overflow-hidden w-100 h-2xl rounded-t-[4px] bg-center bg-cover",
						style: {
							backgroundColor: d || "var(--color-secondary-background)",
							backgroundImage: b && `url(${b})`
						}
					})), o.a.createElement("div", {
						className: "mt-[-40px] text-center"
					}, o.a.createElement("div", {
						className: "bg-neutral-background block rounded-full m-auto w-[52px] h-[52px] overflow-hidden",
						onClick: r(i, n)
					}, o.a.createElement(q.b, {
						iconUrl: (null == c ? void 0 : c.url) || u,
						primaryColor: d || "bg-neutral-background",
						className: "!w-[52px] !h-[52px] !text-[52px] !leading-none bg-neutral-background",
						linkTo: m || `/${l}`,
						shouldHideNsfwIcon: p
					})), o.a.createElement(L.default, {
						to: m || `/${l}`,
						onClick: r(i, n)
					}, o.a.createElement("div", {
						className: "py-md px-sm font-normal text-neutral-content-weak truncate"
					}, o.a.createElement("div", {
						className: "text-[12px] font-semibold text-neutral-content-strong truncate mb-2xs"
					}, l), o.a.createElement("p", {
						className: "text-[12px] leading-[14px]"
					}, K._({
						"*": "{number} members",
						_1: "1 member"
					}, [K._plural(a, "number", Object(w.b)(a))], {
						hk: "4yqFU9"
					}))))), o.a.createElement("div", {
						className: "m-xs mt-0 flex"
					}, o.a.createElement(W, {
						subreddit: t,
						onClick: s(i, n)
					})))
				},
				W = e => {
					let {
						subreddit: t,
						onClick: n
					} = e;
					const r = Object(s.e)(e => Object(_.jb)(e, {
						identifier: {
							name: t.name,
							type: D.a.SUBREDDIT
						}
					}));
					return o.a.createElement(T.a, {
						doNotHideOtherSubscribeButtons: !0,
						priority: r ? R.c.Secondary : R.c.Primary,
						className: "grow",
						postId: t.id,
						size: R.d.XS,
						getEventFactory: n,
						identifier: {
							name: t.name,
							type: D.a.SUBREDDIT
						}
					})
				},
				{
					fbt: Q
				} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				let {
					username: t
				} = e;
				const {
					requested: n,
					error: i,
					subredditIds: a
				} = function(e) {
					let {
						username: t
					} = e;
					const n = Object(s.d)(),
						o = Object(s.e)(e => C(e, t)),
						{
							requested: i,
							error: a
						} = Object(s.e)(e => y(e, t));
					return Object(r.useEffect)(() => {
						i || n(I(t))
					}, [n, t, i]), {
						requested: i,
						error: a,
						subredditIds: o
					}
				}({
					username: t
				});
				return Object(s.e)(e => !(!n || i || a.length < 1) && Object(h.b)(e)) ? o.a.createElement("div", {
					className: "bg-[color:var(--newCommunityTheme-body)] mb-xs border border-solid border-[color:var(--newCommunityTheme-postLine)] rounded-[4px] py-xs pb-sm"
				}, o.a.createElement("h3", {
					className: "text-[12px] leading-[20px] text-[color:var(--newCommunityTheme-actionIcon)] truncate min-w-0 mb-xs mx-md"
				}, Q._("Active in these communities", null, {
					hk: "t1wkw"
				})), o.a.createElement("hr", {
					className: "mb-sm px-xs border-none h-[1px] bg-neutral-border-weak mx-xs"
				}), o.a.createElement(z, {
					subredditIds: a
				})) : null
			}
		},
		"./src/redditGQL/operations/GetTopKarmaSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"6a81cf281cfc"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ActiveCommunities.6b09c4edf6c0cbc55aac.js.map