// https://www.redditstatic.com/desktop2x/reddit-components-ActiveCommunities.78c0790e51b76c69df43.js
// Retrieved at 6/21/2023, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ActiveCommunities"], {
		"./src/reddit/components/ActiveCommunities/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/activeCommunitiesOnProfile/constants.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/makeRequest/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				b = n("./src/redditGQL/operations/GetTopKarmaSubreddits.json");
			const p = async (e, t) => {
				const n = await Object(d.a)(e, {
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
					case l.b: {
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
					case l.c: {
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
					case l.a: {
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
			Object(a.a)({
				features: {
					activeCommunitiesOnProfile: x
				}
			});
			const v = Object(i.a)(l.b),
				g = Object(i.a)(l.c),
				E = Object(i.a)(l.a),
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
			var h = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./node_modules/reselect/es/index.js");
			Object(a.a)({
				features: {
					activeCommunitiesOnProfile: x
				}
			});
			const O = Object(_.a)([(e, t) => {
					var n, r, o;
					return null !== (o = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.activeCommunitiesOnProfile) || void 0 === r ? void 0 : r[t]) && void 0 !== o ? o : f
				}], e => e),
				y = Object(_.a)([(e, t) => O(e, t)], e => {
					var t;
					return null !== (t = null == e ? void 0 : e.subreddits) && void 0 !== t ? t : []
				}),
				C = Object(_.a)([e => e, h.fb], (e, t) => t.map(t => ({
					...t,
					...Object(h.y)(e, {
						subredditId: t.id
					})
				})));
			var k, j = n("./src/lib/constants/icons.ts"),
				S = n("./src/lib/prettyPrintNumber/index.ts"),
				w = n("./node_modules/lodash/debounce.js"),
				B = n.n(w),
				N = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				T = n("./src/reddit/constants/posts.ts"),
				D = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/reddit/controls/InternalLink/index.tsx"),
				L = n("./src/reddit/hooks/useTracking.ts"),
				U = n("./src/reddit/icons/fonts/index.tsx"),
				A = n("./src/reddit/components/SubredditIcon/index.tsx"),
				q = n("./src/reddit/constants/tracking.ts"),
				M = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.CLOSE = "close", e.ITEM_SUBREDDIT = "item_subreddit", e.TITLE_SUBREDDIT = "title_subreddit", e.RECOMMENDATION_MODULE = "recommendation_module", e.SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(k || (k = {}));
			const P = (e, t) => {
					let {
						numberItems: n,
						seenItems: r = []
					} = e;
					return {
						...M.p(t),
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
				F = (e, t, n) => r => ({
					...P(e, r),
					subreddit: M.nb(r, t),
					action: q.c.VIEW,
					noun: k.ITEM_SUBREDDIT,
					actionInfo: {
						...P(e, r).actionInfo,
						position: n
					}
				}),
				{
					fbt: G
				} = n("./node_modules/fbt/lib/FbtPublic.js"),
				K = (e, t) => {
					var n;
					if (!t || !e) return;
					let r = e.getBoundingClientRect().left - t.getBoundingClientRect().left;
					(null === (n = e.dataset) || void 0 === n ? void 0 : n.position) && parseInt(e.dataset.position, 10) > t.children.length - 4 && (r = t.scrollWidth), t.scroll({
						left: r,
						behavior: "smooth"
					})
				},
				H = e => {
					let {
						subredditIds: t
					} = e;
					const n = Object(L.a)(),
						a = Object(s.e)(e => C(e, {
							subredditIds: t
						})),
						i = Object(r.createRef)(),
						[l, d] = Object(r.useState)(null),
						[c, u] = Object(r.useState)(null),
						m = Object(r.useRef)(new Set);
					Object(r.useEffect)(() => {
						const e = i.current;
						if (!e) return;
						const r = B()(() => {
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
								})(r)), d((e => {
									let t = e[0].previousElementSibling;
									return (null == t ? void 0 : t.previousElementSibling) && (t = t.previousElementSibling), t instanceof HTMLElement ? t : null
								})(r));
								for (const e of r) m.current.add(e.id);
								for (const e of r) n(F({
									numberItems: t.length,
									seenItems: Array.from(m.current)
								}, e.id, e.dataset.position))
							}
						}, 200);
						return r(), e.addEventListener("scroll", r), () => {
							e.removeEventListener("scroll", r)
						}
					}, []);
					const b = Object(r.useCallback)(() => K(c, i.current), [c, i]),
						p = Object(r.useCallback)(() => K(l, i.current), [l, i]);
					Object(r.useEffect)(() => {
						t.length > 0 && n && n((e => t => ({
							...P(e, t),
							action: q.c.VIEW,
							noun: k.RECOMMENDATION_MODULE
						}))({
							numberItems: t.length,
							seenItems: t.slice(0, 3)
						}))
					}, [t, n]);
					const f = (e, r) => () => {
							n(((e, t, n) => r => ({
								...P(e, r),
								subreddit: M.nb(r, t),
								action: q.c.CLICK,
								noun: k.TITLE_SUBREDDIT,
								actionInfo: {
									...P(e, r).actionInfo,
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
								...P(e, r),
								subreddit: M.nb(r, t),
								action: q.c.CLICK,
								noun: k.SUBREDDIT_UNSUBSCRIBE,
								actionInfo: {
									...P(e, r).actionInfo,
									position: n
								}
							}))(o, e, n) : ((e, t, n) => r => ({
								...P(e, r),
								subreddit: M.nb(r, t),
								action: q.c.CLICK,
								noun: k.SUBREDDIT_SUBSCRIBE,
								actionInfo: {
									...P(e, r).actionInfo,
									position: n
								}
							}))(o, e, n)
						};
					return o.a.createElement("div", {
						"aria-label": "carousel",
						className: "overflow-hidden relative"
					}, o.a.createElement("div", {
						className: "flex gap-xs overflow-x-scroll snap-mandatory scrollbar-hide snap-x",
						ref: i
					}, a.map((e, t) => o.a.createElement("div", {
						className: `w-1/4 shrink-0 grow-0 border-box ${t<a.length-1?"snap-start":"snap-end"}`,
						id: e.id,
						key: e.id,
						"data-position": t
					}, o.a.createElement(z, {
						key: e.id,
						subreddit: e,
						itemIndex: t,
						onNavigation: f,
						onSubscribeButtonClick: x
					})))), Boolean(l) && o.a.createElement("button", {
						className: "absolute h-[40px] w-[40px] leading-10 left-sm top-1/2 mt-[-20px] shadow-[0px_0px_4px_rgba(0,0,0,0.3)] transition-transform rounded-full bg-neutral-background",
						onClick: p,
						"aria-label": G._("previous items", null, {
							hk: "44uTrz"
						})
					}, o.a.createElement(U.a, {
						name: j.a.back_fill
					})), Boolean(c) && o.a.createElement("button", {
						className: "absolute h-[40px] w-[40px] leading-10 right-sm top-1/2 mt-[-20px] shadow-[0px_0px_4px_rgba(0,0,0,0.3)] transition-transform rounded-full bg-neutral-background",
						onClick: b,
						"aria-label": G._("next items", null, {
							hk: "4EEfgp"
						})
					}, o.a.createElement(U.a, {
						name: j.a.forward_fill
					})))
				},
				z = e => {
					let {
						subreddit: t,
						itemIndex: n,
						onNavigation: r,
						onSubscribeButtonClick: s
					} = e;
					if (!t) return null;
					const {
						id: a,
						subscribers: i,
						primaryColor: l,
						displayText: d,
						icon: c,
						communityIcon: u,
						url: m,
						bannerBackgroundImage: b,
						isNSFW: p
					} = t;
					return o.a.createElement("div", {
						className: "w-100 bg-[color:var(--newCommunityTheme-body)] border border-solid border-neutral-border-weak rounded-[4px]"
					}, o.a.createElement(R.default, {
						to: m || `/${d}`,
						onClick: r(a, n)
					}, o.a.createElement("div", {
						className: "overflow-hidden w-100 h-2xl rounded-t-[4px] bg-center bg-cover",
						style: {
							backgroundColor: l || "var(--color-secondary-background)",
							backgroundImage: b && `url(${b})`
						}
					})), o.a.createElement("div", {
						className: "mt-[-40px] text-center"
					}, o.a.createElement("div", {
						className: "bg-neutral-background block rounded-full m-auto w-[52px] h-[52px] overflow-hidden",
						onClick: r(a, n)
					}, o.a.createElement(A.b, {
						iconUrl: (null == c ? void 0 : c.url) || u,
						primaryColor: l || "bg-neutral-background",
						className: "!w-[52px] !h-[52px] !text-[52px] !leading-none bg-neutral-background",
						linkTo: m || `/${d}`,
						shouldHideNsfwIcon: p
					})), o.a.createElement(R.default, {
						to: m || `/${d}`,
						onClick: r(a, n)
					}, o.a.createElement("div", {
						className: "py-md px-sm font-normal text-neutral-content-weak truncate"
					}, o.a.createElement("div", {
						className: "text-[12px] font-semibold text-neutral-content-strong truncate mb-2xs"
					}, d), o.a.createElement("p", {
						className: "text-[12px] leading-[14px]"
					}, G._({
						"*": "{number} members",
						_1: "1 member"
					}, [G._plural(i, "number", Object(S.b)(i))], {
						hk: "4yqFU9"
					}))))), o.a.createElement("div", {
						className: "m-xs mt-0 flex"
					}, o.a.createElement($, {
						subreddit: t,
						onClick: s(a, n)
					})))
				},
				$ = e => {
					let {
						subreddit: t,
						onClick: n
					} = e;
					const r = Object(s.e)(e => Object(h.jb)(e, {
						identifier: {
							name: t.name,
							type: T.a.SUBREDDIT
						}
					}));
					return o.a.createElement(N.a, {
						doNotHideOtherSubscribeButtons: !0,
						priority: r ? D.c.Secondary : D.c.Primary,
						className: "grow",
						postId: t.id,
						size: D.d.XS,
						getEventFactory: n,
						identifier: {
							name: t.name,
							type: T.a.SUBREDDIT
						}
					})
				},
				{
					fbt: W
				} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				let {
					username: t
				} = e;
				const {
					requested: n,
					error: a,
					subredditIds: i
				} = function(e) {
					let {
						username: t
					} = e;
					const n = Object(s.d)(),
						o = Object(s.e)(e => y(e, t)),
						{
							requested: a,
							error: i
						} = Object(s.e)(e => O(e, t));
					return Object(r.useEffect)(() => {
						a || n(I(t))
					}, [n, t, a]), {
						requested: a,
						error: i,
						subredditIds: o
					}
				}({
					username: t
				});
				return !n || a || i.length < 1 ? null : o.a.createElement("div", {
					className: "bg-[color:var(--newCommunityTheme-body)] mb-xs border border-solid border-[color:var(--newCommunityTheme-postLine)] rounded-[4px] px-[16px] py-[8px] pb-sm"
				}, o.a.createElement("h3", {
					className: "text-[12px] leading-[20px] text-[color:var(--newCommunityTheme-actionIcon)] truncate min-w-0 mb-xs"
				}, W._("Active in these communities", null, {
					hk: "t1wkw"
				})), o.a.createElement("hr", {
					className: "mb-sm mx-lg border-none mx-l h-[1px] bg-neutral-border-weak"
				}), o.a.createElement(H, {
					subredditIds: i
				}))
			}
		},
		"./src/redditGQL/operations/GetTopKarmaSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"6a81cf281cfc"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ActiveCommunities.78c0790e51b76c69df43.js.map