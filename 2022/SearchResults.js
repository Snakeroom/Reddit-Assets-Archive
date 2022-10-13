// https://www.redditstatic.com/desktop2x/SearchResults.c275e62bda171de26028.js
// Retrieved at 10/13/2022, 3:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults"], {
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./src/reddit/selectors/experiments/devPlatform.ts");
			const c = Object(a.a)({
				resolved: {},
				chunkName: () => "devPlatform-components-ContextActions",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~devPlatform-components-AdminPanel-Utilities-DevPlatformConfig~devPlatform-components-ContextActions"), s.e("devPlatform-components-ContextActions")]).then(s.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/devPlatform/components/ContextActions/index.tsx"
				}
			}, {
				ssr: !1
			});

			function d(e) {
				return Object(o.e)(e => Object(i.a)(e)) ? r.a.createElement(c, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator
				}) : null
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			const n = "devvit-gateway-url",
				r = "devvit-mock-metadata",
				o = "devvit-debug-logging",
				a = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var i;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(i || (i = {}))
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => {
					let t = 0,
						s = 0;
					const n = [0];
					for (const r of e) t++, s += r.length, n[t] = s;
					return n
				},
				r = e => {
					let t = 0,
						s = 0;
					const n = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) n[s] = t, s++;
						t++
					}
					return n[s] = t, n
				}
		},
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "searchResultsRequested", (function() {
				return b
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeSearchKey/index.ts"),
				c = s("./src/lib/pageTitle/index.ts"),
				d = s("./src/reddit/actions/pages/search/index.ts"),
				l = s("./src/reddit/actions/platform.ts"),
				u = s("./src/reddit/constants/parameters.ts"),
				m = s("./src/reddit/models/Multireddit/index.ts");
			const p = e => n.fbt._("reddit.com: search results - {query}", [n.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				b = e => async (t, s) => {
					const n = s(),
						r = Object(i.e)(o()(e.queryParams, u.t)),
						{
							multiredditName: b,
							subredditName: h,
							username: x
						} = e.params;
					let f;
					x && b && (f = Object(m.h)(x, b));
					const O = Object(i.b)(h || b, x, r);
					await t(Object(d.d)(O, r, h, x, f));
					let j = !1;
					const {
						type: v = []
					} = r, g = v.indexOf(a.ic.Posts) > -1, y = v.indexOf(a.ic.Users) > -1, E = v.indexOf(a.ic.Subreddits) > -1;
					g && n.listings.postOrder.api.error[O] && (j = !0), y && n.listings.authorOrder.api.error[O] && (j = !0), E && n.listings.communityOrder.api.error[O] && (j = !0), t(j ? l.m({
						title: Object(c.f)()
					}) : l.m({
						title: p(r.q)
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "f", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/query-string/index.js"),
				r = s.n(n),
				o = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const u = new Set(["home", "r/popular"]),
				m = e => {
					const t = location && location.search || "",
						s = r.a.parse(t);
					u.has(e) && (s.related = e);
					const n = r.a.stringify(s);
					return n ? `?${n}` : ""
				},
				p = Object(o.a)(a.N),
				b = Object(o.a)(a.y),
				h = Object(o.a)(a.O),
				x = Object(o.a)(a.z),
				f = Object(o.a)(a.M),
				O = Object(o.a)(a.L),
				j = Object(o.a)(a.t),
				v = Object(o.a)(a.u),
				g = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					const o = Object(c.g)(e),
						a = s();
					if (Object(d.d)(a, o)) return;
					t(p(o));
					const l = await Object(i.e)(r(), o),
						u = Date.now();
					if (l.ok && l.body && l.body.data) {
						const e = l.body.data;
						t(b({
							model: e,
							utcTimeStamp: u
						}))
					} else t(S({
						streamId: o,
						error: l.error,
						utcTimeStamp: u
					}))
				}, y = (e, t) => async (s, n) => s(E(e, t)), E = (e, t) => async (s, n, r) => {
					let {
						gqlContext: o
					} = r;
					const a = n();
					if (Object(d.f)(a)) return;
					s(h());
					const c = await Object(i.f)(o(), e, t),
						l = Date.now();
					if (c.ok && c.body && c.body.data) {
						const t = c.body.data;
						s(x({
							listingName: e,
							models: t,
							utcTimeStamp: l
						}))
					} else s(k({
						error: c.error,
						utcTimeStamp: l
					}))
				}, C = (e, t) => async (s, n) => s(_(e, t)), _ = (e, t) => async (s, n, r) => {
					let {
						gqlContext: o
					} = r;
					const a = n();
					if (Object(d.f)(a)) return;
					s(h());
					const c = Date.now(),
						u = e.replace("r/", ""),
						m = Object(l.H)(a, u),
						p = await Object(i.b)(o(), {
							subredditId: m,
							options: t
						}),
						b = p.body;
					p.ok && b && b.data || s(k({
						error: p.error,
						utcTimeStamp: c
					}));
					const f = b.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(i.e)(e, t),
								n = Date.now(),
								r = s.body;
							return r && r.data ? r.data : void S({
								streamId: t,
								error: s.error,
								utcTimeStamp: n
							})
						})(o(), e.node.id)),
						O = (await Promise.all(f)).filter(e => void 0 !== typeof e);
					s(x({
						listingName: e,
						models: O,
						utcTimeStamp: c
					}))
				}, S = e => async t => {
					t(f(e))
				}, k = e => async t => {
					t(O(e))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/loadableAction/index.ts");
			const r = Object(n.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				o = Object(n.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				a = Object(n.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				o = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				a = s.n(o);
			const i = n.a.wrapped(r.c, "RestrictedButton", a.a);
			t.a = i
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = s.n(x),
				O = s("./src/lib/lessComponent.tsx");
			const j = "create-community-button",
				v = O.a.wrapped(l.c, "StyledTooltip", f.a),
				g = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(a.b)(g, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: j
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: r,
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: u
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						u && u(e), i(c)
					},
					onMouseEnter: r,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: j,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: j,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: j,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreateCommunitySidebar/index.m.less": function(e, t, s) {
			e.exports = {
				BannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				bannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				ButtonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				buttonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				Button: "_1vv6LrKIsjHuIJCCgIntnC",
				button: "_1vv6LrKIsjHuIJCCgIntnC",
				CommunityText: "_9jODC2-h7cM9Y6Duqs_W4",
				communityText: "_9jODC2-h7cM9Y6Duqs_W4",
				Container: "_3lfTEmyI7x9ib1wz4e8RWP",
				container: "_3lfTEmyI7x9ib1wz4e8RWP",
				SnooImg: "_20axzOalQqYkHj-7Idfqun",
				snooImg: "_20axzOalQqYkHj-7Idfqun"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				c = s.n(i),
				d = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = s("./src/reddit/selectors/gold/awardIcon.ts"),
				u = s("./src/reddit/selectors/gold/purchaseCatalog.ts");
			t.a = e => {
				const t = Object(o.e)(u.b),
					s = Object(o.e)(e => Object(l.a)(e, {
						award: t,
						minSize: 32
					}));
				return t && s ? r.a.createElement("img", {
					alt: t.name,
					className: Object(a.a)(c.a.img, e.className),
					id: e.id,
					src: s
				}) : r.a.createElement(d.a, e)
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				a = Object(r.a)("spBurnLinks", Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/Media/index.m.less"),
				i = s.n(a);
			const c = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? n.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? n.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: s
					} = e;
					return o.a.createElement("div", {
						className: i.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: i.a.unblurButton
					}, c(t, s)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(o.b)(() => Object(a.c)({
					isNightmodeOn: m.db
				}));
			t.a = x(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(i.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), e.isTweet || (n.height = "100%"), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: s,
					style: n,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				alignLeft: "WjuR4W-BBrvdtABBeKUMx",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				renderSmallMedia: "vgwLfcw0MneE2ejmdh_l9",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return T
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/Media/BlurredContent.tsx"),
				b = s("./src/reddit/components/PlayButton/index.tsx"),
				h = s("./src/reddit/constants/adEvents.ts"),
				x = s("./src/reddit/constants/elementClassNames.ts"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				O = s("./src/reddit/helpers/trackers/ads.ts"),
				j = s("./src/reddit/hooks/useClickSourceData.ts"),
				v = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/constants/tracking.ts"),
				S = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				k = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				N = s.n(k);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => e > 2 * g.e,
				P = e => o.a.createElement("img", {
					alt: e.altText || n.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(d.a)(e.className, {
						[N.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				I = e => {
					const t = Object(d.a)(N.a.image, x.g, e.className, {
							[N.a.mShowCentered]: e.showCentered,
							[N.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					e.showFull || e.isTall || (s.maxHeight = `${g.j}px`), e.isListing || e.isTall && T(e.height) || (s.maxHeight = `${g.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`);
					const a = Object(r.useRef)(null),
						[i, c] = Object(r.useState)(!1),
						l = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!i && t && c(!0)
							})
						}, [i]),
						u = Object(r.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(v.a)(a, l, u.current);
					const {
						width: m,
						height: p
					} = e;
					let b = 240;
					if (m / p > 1)
						if (m < 240) b = p;
						else {
							(b = p * (240 / m)) < 20 && (b = 20)
						}
					else b = Math.min(b, p);
					const h = Object(r.useRef)({
						height: b
					});
					return e.renderSmallMedia ? o.a.createElement("div", {
						ref: a,
						style: h.current
					}, i && o.a.createElement(P, w({}, e, {
						className: t
					}))) : o.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				R = e => {
					const t = {};
					return (!e.showFull && Object(g.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${g.j}px`, e.shouldBlur && (t.maxWidth = Object(g.L)(e.height, e.width) ? `${g.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(N.a.container, e.className, {
							[N.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				M = Object(a.b)(() => Object(c.a)(y.F, C.jb, (e, t) => {
					let {
						isSponsored: s,
						postId: n
					} = t;
					return s && n ? Object(y.b)(e, n) : null
				}, E.d, y.G, (e, t, s, n, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					pageType: n.pageType,
					post: r
				})));
			t.a = M(e => {
				const t = Object(j.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": S.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, h.a.Click), Object(O.a)(e.post, e.pageType))
					}
				}, B(e)) : e.isListing && e.postPermalink ? o.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, B(e)) : B(e)
			});
			const L = (e, t) => o.a.createElement(I, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[_.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				B = e => {
					let {
						onClick: t,
						...s
					} = e;
					const r = Object(g.L)(s.height, s.width),
						a = T(s.height) && r;
					return o.a.createElement(R, w({}, s, {
						className: `${r?`${_.a} `:""}${s.className||""}`
					}), s.isListing ? o.a.createElement("div", {
						className: s.contentImageClassName
					}, L(r, s)) : o.a.createElement("a", {
						href: s.originalSource,
						onClick: t,
						style: a ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: N.a.imageLink
					}, L(r, s), s.shouldBlur && !s.isVideoThumbnail && !s.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!s.isNSFW,
						isSpoiler: !!s.isSpoiler
					})), s.isListing && !s.showFull && s.height > g.j && Object(g.L)(s.height, s.width) && o.a.createElement("div", {
						className: N.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), s.isVideoThumbnail && o.a.createElement(b.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, s) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/forceHttps/index.ts"),
				i = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = s.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < i.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const s = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					n = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					c = Object(i.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, n, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				renderSmallMedia: "_2WxICCKdnGu7x2n4CBv6zE",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@reddit/adblock-detection/browser.js"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/video.ts"),
				m = s("./src/reddit/constants/tracking.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const x = 100,
				f = x / 2 / 1e3;
			var O = s("./src/lib/forceHttps/index.ts"),
				j = s("./src/lib/hooks/usePrevious.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function g(e) {
				let {
					autoplay: t,
					isListing: s,
					isNotCardView: n,
					onBufferingChange: r,
					shouldLoad: i,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: u,
					...m
				} = e;
				const p = Object(o.useRef)(),
					b = Object(o.useRef)(),
					h = Object(j.a)(c);

				function g(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (g(!c && (t || n)), b.current && r) return p.current = function(e, t) {
						let s = !1,
							n = !1;
						const r = () => s = !0,
							o = () => n = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let a = !1,
							i = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, n) return n = !1, void(i = c);
							if (e.paused || e.seeking || !s) return void(i = c);
							const r = a;
							4 === e.readyState ? a = !1 : !a && c >= i && c < i + f ? a = !0 : a && c >= i && c > i + f && (a = !1), i = c, r !== a && t(a)
						}, x);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(b.current, r), () => {
						p.current && p.current()
					}
				}, []), Object(o.useEffect)(() => {
					h !== c && g(!c && (t || n))
				}, [h, c, t, n]), a.a.createElement("video", v({}, m, {
					ref: e => b.current = e,
					muted: !0
				}), a.a.createElement("source", {
					src: Object(O.a)(u || "")
				}))
			}
			var y = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				E = s.n(y);
			const C = Object(c.c)({
				autoplayPref: b.b,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function _(e) {
				const {
					autoplayPref: t,
					consumed: s,
					loadTimes: n,
					metadata: o,
					started: c
				} = Object(i.e)(t => C(t, e)), {
					postId: b,
					shouldLoad: h,
					source: x,
					height: f,
					isNotCardView: O,
					showFull: j,
					shouldPause: v,
					width: y,
					isListing: _,
					className: S,
					showCentered: k,
					originalSource: N,
					isPromoted: w,
					renderSmallMedia: T
				} = e, P = t && !(w && Object(d.hasAcceptableAds)()), I = Object(i.d)();

				function R(e) {
					I(e ? Object(u.r)(b) : Object(u.E)(b))
				}

				function M() {
					return I(Object(u.z)({
						postId: b
					}))
				}
				const L = r()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && I(Object(u.s)(b))
				}, 200);

				function B(e) {
					e.persist(), L(e)
				}

				function F(e) {
					var t;
					(o || D(e), c) || (t = e.timeStamp, I(Object(u.A)(b, t)))
				}

				function A(e) {
					I(Object(u.q)(b, e.timeStamp))
				}

				function D(e) {
					! function(e) {
						I(Object(u.D)({
							metadata: e,
							postId: b
						}))
					}({
						id: b,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function U(e) {
					n || F(e), o || D(e), I(Object(u.C)(b))
				}

				function H() {
					const e = {};
					return k && (e.margin = "0 auto"), _ || (e.maxHeight = `${p.e}px`), a.a.createElement(g, {
						autoplay: P,
						className: Object(l.a)(m.a, E.a.styledVideo, {
							[E.a.renderSmallMedia]: T
						}),
						height: T ? void 0 : f,
						isListing: _,
						isNotCardView: O,
						key: b,
						loop: !0,
						onBufferingChange: R,
						onLoadStart: A,
						onLoadedData: F,
						onLoadedMetadata: D,
						onPause: M,
						onPlaying: U,
						onTimeUpdate: B,
						shouldLoad: h,
						shouldPause: v,
						showCentered: k,
						showFull: j,
						source: x,
						style: T ? void 0 : e,
						width: T ? void 0 : y
					})
				}
				return _ ? H() : a.a.createElement("div", {
					className: Object(l.a)(E.a.container, S, {
						[E.a.centered]: k
					})
				}, a.a.createElement("a", {
					href: N,
					target: "_blank",
					rel: "noopener noreferrer"
				}, H()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_28noJDp6DzFWESejYQdpcD",
				modActionsMenu: "_28noJDp6DzFWESejYQdpcD"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./src/reddit/components/ModActionsMenu/index.m.less"),
				m = s.n(u);
			const p = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				b = Object(o.b)(p, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(i.h)({
							tooltipId: s
						}))
					}
				}),
				h = () => null;
			t.a = b(e => r.a.createElement("div", {
				className: m.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? h : e.onClick
			}, e.inCommentFlatlist ? r.a.createElement(c.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : r.a.createElement(d.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				r = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				o = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				x = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				O = s.n(f);
			const j = d.a.wrapped(m.a, "_Dropdown", O.a),
				v = Object(u.a)(j),
				g = d.a.button("MenuButton", O.a),
				y = d.a.wrapped(p.b, "DropdownRow", O.a),
				E = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				C = Object(a.b)(E, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				_ = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = C(e => o.a.createElement(g, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[O.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: _(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": x.b.OVERFLOW_MENU
			}, e.icon ? e.icon : o.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: O.a.MenuIcon
			}), o.a.createElement(v, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/Pill/PillButton/index.m.less": function(e, t, s) {
			e.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return m
			}));
			var n, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Pill/PillButton/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(n || (n = {}));
			const l = {
					[n.BUTTON]: void 0,
					[n.TAB_GROUP]: c.a.tabGroup
				},
				u = (e, t) => {
					if (t !== n.BUTTON) return e ? c.a.active : c.a.inactive
				},
				m = e => {
					let {
						active: t = !0,
						children: s,
						className: n,
						disabled: r = !1,
						variant: i,
						...m
					} = e;
					return o.a.createElement("button", d({}, m, {
						className: Object(a.a)(c.a.primaryButton, l[i], u(t, i), n),
						disabled: r
					}), s)
				}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: c,
					redditStyle: l,
					theme: p,
					...b
				} = e;
				return r.a.createElement("div", m({
					className: Object(o.a)(u.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
			}))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const o = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				a = e => {
					let {
						children: t
					} = e;
					const [s, a] = Object(n.useState)(0), [i, c] = Object(n.useState)(!1), [d, l] = Object(n.useState)(0), u = {
						currentTime: s,
						setCurrentTime: a,
						isLive: i,
						setIsLive: c,
						totalTime: d,
						setTotalTime: l
					};
					return r.a.createElement(o.Provider, {
						value: u
					}, t)
				}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				o = Object(n.a)({
					resolved: {},
					chunkName: () => "VideoShareModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("VideoShareModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = o
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/constants/colors.ts");
			const o = {
				backgroundColor: r.a.overlayReportFlow
			};
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/constants/colors.ts");
			const o = {
					backgroundColor: r.a.overlayReportFlow
				},
				a = Object(n.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReportFlowNew").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = i
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(i);
			const d = e => r.a.createElement("button", {
					className: Object(o.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && r.a.createElement("span", {
					className: Object(o.a)(c.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = a.a.wrapped(d, "ApproveButton", c.a),
				u = a.a.wrapped(d, "RemoveButton", c.a),
				m = e => r.a.createElement("button", {
					className: Object(o.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, s) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				x = m.a.span("InnerSpan", u.a),
				f = m.a.span("TooltipTarget", u.a),
				O = m.a.span("SpoilerWrapper", u.a),
				j = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: s,
						...n
					} = e;
					return o.a.createElement(O, p({}, n, {
						className: Object(a.a)(t, {
							[u.a.isOpen]: s
						})
					}))
				}, "SpoilerWrapper", u.a),
				v = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class g extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: s
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == s || s(e))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return o.a.createElement(j, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(x, null, o.a.createElement(f, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(v, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = g
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, s) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "x", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "v", (function() {
				return f
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "u", (function() {
				return g
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "t", (function() {
				return S
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "o", (function() {
				return N
			})), s.d(t, "q", (function() {
				return w
			})), s.d(t, "s", (function() {
				return T
			})), s.d(t, "r", (function() {
				return P
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "w", (function() {
				return R
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/RichTextJson/elements.m.less"),
				i = s.n(a),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", i.a), c.a.div("H2", i.a), c.a.div("H3", i.a), c.a.div("H4", i.a), c.a.div("H5", i.a), c.a.div("H6", i.a)],
				u = c.a.hr("Hr", i.a),
				m = c.a.code("M", i.a),
				p = c.a.pre("Pre", i.a),
				b = c.a.blockquote("Blockquote", i.a),
				h = c.a.p("P", i.a),
				x = c.a.li("Li", i.a),
				f = c.a.ul("Ul", i.a),
				O = c.a.ol("Ol", i.a),
				j = c.a.strong("B", i.a),
				v = c.a.em("I", i.a),
				g = c.a.span("U", i.a),
				y = e => r.a.createElement("del", e),
				E = c.a.sub("Sub", i.a),
				C = c.a.sup("Sup", i.a),
				_ = c.a.table("Table", i.a),
				S = c.a.tr("Tr", i.a),
				k = c.a.td("Tdl", i.a),
				N = c.a.td("Tdc", i.a),
				w = c.a.td("Tdr", i.a),
				T = c.a.th("Thl", i.a),
				P = c.a.th("Thc", i.a),
				I = (c.a.th("Thr", i.a), c.a.wrapped(e => r.a.createElement(o.b, e), "A", i.a)),
				R = c.a.wrapped(d.a, "A", i.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return C
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/findLastIndex.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/sentry/index.ts"),
				u = s("./src/reddit/components/Media/BlurredContent.tsx"),
				m = s("./src/reddit/constants/elementClassNames.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/components/RichTextJson/media.tsx"),
				h = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = s("./src/reddit/components/RichTextJson/index.m.less"),
				f = s.n(x);
			const O = s("./src/lib/lessComponent.tsx").a.div("Container", f.a),
				j = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: s,
						...n
					} = e;
					return i.a.createElement(O, n)
				}),
				v = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.u || !!e.c && !e.c.every(e => e.e === p.A && !e.t),
				g = e => o()(e, v),
				y = e => e.findIndex(v),
				E = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: r,
						isNSFW: o,
						isNsfwBlockingModalEligible: a,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: x,
						renderMediaAsLinks: v,
						rtJsonElementProps: E,
						useExplicitTextColor: C,
						shouldBlur: _,
						onClickRevealSpoilerText: S,
						mediaProps: k
					} = e, N = n.document, w = [], T = e.mediaMetadata || null, P = y(N), I = g(N);
					if (_ && !r && !a) return i.a.createElement(O, {
						className: Object(c.a)(m.j, s)
					}, i.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!o, !!d))));
					if (-1 !== P)
						for (let i = P; i <= I; i++) {
							const e = N[i];
							switch (e.e) {
								case p.k:
									w.push(h.c(e, E, i));
									break;
								case p.l:
									w.push(h.d(i));
									break;
								case p.b:
									w.push(h.a(e, T, E, i));
									break;
								case p.c:
									w.push(h.b(e, i));
									break;
								case p.p:
									w.push(h.f(e, T, E, i, S));
									break;
								case p.z:
									w.push(h.h(e, T, E, i, S));
									break;
								case p.u:
									w.push(h.g(e, T, E, i, S));
									break;
								case p.h:
									w.push(Object(b.a)(e, i));
									break;
								case p.m:
								case p.a:
								case p.D:
									w.push(...Object(b.b)(e, i, E, T, v, x, t, k))
							}
						}
					return C ? i.a.createElement(O, {
						className: Object(c.a)(m.j, s)
					}, w) : i.a.createElement(j, {
						className: Object(c.a)(m.j, s),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, w)
				};
			class C extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => n.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return E(t)
					} catch (s) {
						return this.hasError = !0, this.logError(s), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, s) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				hasSmallMedia: "_1yyTGHoIL7vZ6fNJ2-s3dL",
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			})), s.d(t, "b", (function() {
				return R
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/isComment.ts"),
				h = s("./src/reddit/helpers/richTextJson/index.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/models/RichTextJson/index.ts");
			var O = e => o.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, o.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), o.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), o.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), o.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), o.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), o.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				j = s("./src/reddit/components/RichTextJson/elements.tsx"),
				v = s("./src/reddit/components/RichTextJson/media.m.less"),
				g = s.n(v),
				y = s("./src/lib/lessComponent.tsx"),
				E = s("./src/reddit/helpers/media/index.ts");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = /\/(\w+)\/asset\/(\w+)\//,
				S = y.a.wrapped(j.a, "A", g.a),
				k = y.a.wrapped(l.a, "ImageBox", g.a),
				N = y.a.wrapped(e => o.a.createElement("p", e), "Caption", g.a),
				w = y.a.div("Placeholder", g.a),
				T = y.a.wrapped(e => {
					let {
						className: t,
						e: s,
						renderSmallMedia: i,
						onReload: c,
						...d
					} = e;
					const l = s === f.D ? n.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : n.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => {
						c && setTimeout(() => {
							m(!0)
						}, 1500)
					}), o.a.createElement(w, C({
						className: Object(a.a)(t, {
							[g.a.renderSmallMedia]: i,
							[g.a.reload]: !!c
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, d), !!c && u && o.a.createElement(p.t, {
						priority: p.c.Plain,
						className: g.a.ModalTopicsErrorButton,
						Icon: Object(x.b)("refresh"),
						text: n.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: c
					}))
				}, "Placeholder", g.a),
				P = (e, t) => {
					let {
						c: s,
						x: n,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: g.a.MediaWrapper
					}, o.a.createElement(u.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: n
					}, o.a.createElement(d.a, {
						isListing: !1,
						source: s,
						height: r,
						width: n,
						showCentered: !0,
						showFull: !0
					})))
				},
				I = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === f.s ? r = s.s.u : s.e === f.r ? r = s.s.gif : s.e === f.t && (r = (e => {
						const t = _.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? o.a.createElement(S, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				R = (e, t, s, n, r, i, d, l) => {
					const p = f.E(n, e.id);
					if (r) return [I(e, t, p)];
					const x = [];
					return !p || p.e === f.s && null === p.s.x && null === p.s.y ? x.push(((e, t, s, n) => o.a.createElement(T, {
						e,
						key: t,
						renderSmallMedia: s,
						onReload: n
					}))(e.e, t, null == l ? void 0 : l.renderSmallMedia, null == l ? void 0 : l.onReload)) : p.e === f.s ? x.push(((e, t, s, n, r) => {
						let {
							id: i,
							s: c,
							p: d
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m
						} = r || {};
						let p = c;
						return m && (p = Object(E.i)(240, 20, c, d)), o.a.createElement("div", {
							className: Object(a.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: s,
								[g.a.hasSmallMedia]: m
							})
						}, o.a.createElement(u.a, {
							height: p.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: p.x
						}, o.a.createElement(k, {
							altText: n,
							originalSource: c.u,
							postId: i,
							source: p.u,
							height: p.y,
							width: p.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: m
						})))
					})(p, t, !!e.c, d, l)) : p.e === f.r ? x.push(((e, t, s, n, r) => {
						let {
							id: i,
							ext: c,
							s: d
						} = e;
						if (Object(h.h)(i)) {
							const e = n.renderingObjectInfo,
								r = !!e && Object(b.b)(e),
								l = c || Object(h.g)(i);
							return o.a.createElement("div", {
								className: Object(a.a)({
									[g.a.MediaWrapper]: !r,
									[g.a.CommentGifWrapper]: r,
									[g.a.mHasCaption]: s
								})
							}, o.a.createElement(S, {
								href: l,
								key: t,
								target: "_blank"
							}, d.mp4 ? o.a.createElement("video", {
								className: g.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: d.mp4
							})) : l), o.a.createElement(O, {
								className: g.a.GiphyLogo
							}))
						}
						return o.a.createElement("div", {
							className: Object(a.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: s,
								[g.a.hasSmallMedia]: r
							})
						}, o.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, o.a.createElement(m.a, {
							height: d.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: d.mp4,
							width: d.x,
							postId: i,
							source: d.mp4,
							shouldPause: !1,
							showCentered: !r,
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: r
						})))
					})(p, t, !!e.c, s, null == l ? void 0 : l.renderSmallMedia)) : p.e === f.t && x.push(((e, t, s, n) => {
						let {
							hlsUrl: r,
							dashUrl: i,
							x: d,
							y: l,
							isGif: m
						} = e;
						return o.a.createElement("div", {
							className: Object(a.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: s
							})
						}, o.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, o.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: r,
							mpegDashSource: i,
							postId: n,
							isGif: m
						})))
					})(p, t, !!e.c, i)), e.c && x.push(((e, t) => o.a.createElement(N, {
						key: t
					}, e))(e.c, `caption${t}`)), x
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return P
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "f", (function() {
				return L
			})), s.d(t, "h", (function() {
				return F
			})), s.d(t, "g", (function() {
				return A
			})), s.d(t, "i", (function() {
				return D
			})), s.d(t, "e", (function() {
				return U
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				r = s("./node_modules/lodash/reduce.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/models/Product/index.ts"),
				m = s("./src/reddit/models/RichTextJson/index.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/higherOrderComponents/makeAsync.tsx");
			var h = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				f = s.n(x);
			const O = 1e3,
				j = 1e3;
			var v;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(v || (v = {}));
			class g extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = v.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = v.Inside, setTimeout(() => {
							this.mouseLocation === v.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, O)
					}, this.onMouseOut = () => {
						this.mouseLocation = v.Outside, setTimeout(() => {
							this.mouseLocation !== v.Inside && this.setState({
								tooltipOpen: !1
							})
						}, j)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = p.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.jb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, n, r;
					t.e === m.s ? (s = t.s.x, n = t.s.y, r = t.s.u) : t.e === m.r && (s = t.s.x, n = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? Object(d.a)() : void 0;
					return r ? i.a.createElement("div", {
						className: f.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: o,
						src: r,
						width: s,
						height: n,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(h, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${o}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var y = Object(l.c)(g),
				E = s("./src/reddit/components/RichTextJson/media.tsx"),
				C = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				_ = s("./src/reddit/components/SubredditMention/index.tsx"),
				S = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				k = s("./src/reddit/helpers/isComment.ts"),
				N = s("./src/reddit/helpers/isPost.ts"),
				w = s("./src/reddit/helpers/richTextJson/index.ts"),
				T = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const P = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						o = [],
						a = n.length;
					for (let i = 0; i < a; i++) {
						const e = n[i];
						o.push(e.e === m.w ? e.t : U(e, t, i))
					}
					const d = c.x[r - 1];
					return i.a.createElement(d, {
						key: s
					}, o)
				},
				I = e => i.a.createElement(c.e, {
					key: e
				}),
				R = (e, t, s, n, r) => {
					const o = e.c;
					if (!o) return;
					const a = o.length,
						d = [];
					for (let i = 0; i < a; i++) d.push(B(o[i], t, s, i, r));
					return i.a.createElement(c.c, {
						key: n
					}, d)
				},
				M = (e, t) => {
					const s = e.c;
					return i.a.createElement(c.k, {
						key: t
					}, i.a.createElement(c.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				L = (e, t, s, n, r) => {
					const o = e.c,
						a = [],
						d = o.length;
					for (let u = 0; u < d; u++) {
						const e = o[u].c;
						e && e.length && a.push(i.a.createElement(c.g, {
							key: u
						}, e.map((e, n) => B(e, t, s, n, r))))
					}
					const l = e.o ? c.i : c.v;
					return i.a.createElement(l, {
						key: n
					}, a)
				},
				B = (e, t, s, n, r) => {
					switch (e.e) {
						case m.b:
							return R(e, t, s, n, r);
						case m.c:
							return M(e, n);
						case m.k:
							return P(e, s, n);
						case m.l:
							return I(n);
						case m.p:
							return L(e, t, s, n, r);
						case m.u:
							return A(e, t, s, n, r);
						case m.z:
							return F(e, t, s, n, r)
					}
				},
				F = (e, t, s, n, r) => {
					const o = e.c,
						a = e.h,
						d = o.length,
						l = a.length,
						u = [],
						m = [],
						p = [];
					for (let c = 0; c < l; c++) {
						const e = a[c],
							{
								H: n,
								D: o
							} = V(e.a),
							{
								c: d = []
							} = e;
						u.push(i.a.createElement(n, {
							key: c
						}, D(d, t, s, r))), p[c] = o
					}
					for (let b = 0; b < d; b++) {
						const e = o[b],
							n = e.length,
							a = [];
						for (let o = 0; o < n; o++) {
							const n = p[o],
								{
									c = []
								} = e[o];
							a.push(i.a.createElement(n, {
								key: o
							}, D(c, t, s, r)))
						}
						m.push(i.a.createElement(c.t, {
							key: b
						}, a))
					}
					return i.a.createElement(c.n, {
						key: n
					}, i.a.createElement("thead", null, i.a.createElement(c.t, null, u)), i.a.createElement("tbody", null, m))
				},
				A = (e, t, s, n, r) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(c.j, {
						key: e
					}, i.a.createElement("br", null)))(n);
					const o = e.c[0];
					return o.e !== m.m && o.e !== m.a || !Object(w.h)(o.id) ? i.a.createElement(c.j, {
						key: n
					}, D(e.c, t, s, r)) : Object(E.b)(o, n, s, t)
				},
				D = (e, t, s, n) => {
					const r = [],
						o = e.length;
					for (let a = 0; a < o; a++) {
						const o = e[a];
						if (o.e === m.A) r.push(H(o, a));
						else if (o.e === m.x) r.push(i.a.createElement(C.a, {
							key: a,
							onClickReveal: n
						}, D(o.c, t, s, n)));
						else if (o.e === m.n) r.push(i.a.createElement("br", {
							key: a
						}));
						else if (o.e === m.m || o.e === m.a) {
							if (o.id.startsWith("emote|")) {
								const e = m.E(t, o.id);
								e && r.push(i.a.createElement(y, {
									key: a,
									node: o,
									media: e
								}))
							}
						} else r.push(U(o, s, a))
					}
					return r
				},
				U = (e, t, s) => {
					switch (e.e) {
						case m.o:
							const n = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(S.b)(e.u)) return i.a.createElement(c.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let r, o;
							const a = Object(T.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(N.b)(d) && (r = d.postId), d && Object(k.b)(d) && (o = d.id, r = d.postId), i.a.createElement(c.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: a,
								postId: r,
								commentId: o
							}, n);
						case m.y:
							return i.a.createElement(_.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.B:
						case m.C:
							return i.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.v:
							return i.a.createElement(c.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: s,
						t: r
					} = e, o = [];
					if (!s) return K(0, r, t);
					const a = Object(n.a)(r);
					let i = 0,
						c = 0;
					const d = s.length;
					for (; i < d; i++) {
						const [e, t, n] = s[i], d = t + n, l = a[t], u = a[d] - l;
						l > c && o.push(K(0, r.substr(c, l - c), `between${i}`)), o.push(K(e, r.substr(l, u), i)), c = l + u
					}
					return c < r.length && o.push(K(0, r.substr(c), `remaining${i}`)), o
				},
				W = {
					[m.j.monospace]: c.h,
					[m.j.bold]: c.b,
					[m.j.italic]: c.f,
					[m.j.underline]: c.u,
					[m.j.strikethrough]: c.d,
					[m.j.subscript]: c.l,
					[m.j.superscript]: c.m
				},
				K = (e, t, s) => {
					let n = t;
					return n = o()(W, (t, n, r) => e & parseInt(r, 10) ? i.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				V = e => {
					switch (e) {
						case m.f:
							return {
								H: c.r, D: c.q
							};
						case m.d:
							return {
								H: c.r, D: c.o
							};
						case m.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_3W4fKI_ey_jDfiIO7ElMuP",
				eventMeta: "_2IeaiLn4GyfAXKD1TLrIS1",
				postContent: "_3zoWB97jg8GAUJCl4XA57a",
				postItemMetaContainer: "_3xctgCPJ_3knmtE3O9TQzE",
				postItemTitleContainer: "_3CAq9fn45Es59QdDzgtbhZ",
				postItemFlatlistContainer: "oNxebZMPvUlTJIOtprxhP",
				mediaWrapper: "_1eIKxpeFNBTQ699qAcQRbd",
				marginCancel: "_3IElQYxAJq_0qRyeyMDc_K",
				twitterEmbed: "Tzfi4PWE-V9cQ78MJ3GkX",
				promotedTrend: "_1yoxdnJLJUmMiTSTn_QkNJ",
				mediaContent: "_1zcwL6v8t8G0OHvf5D4WW-",
				textMediaWrapper: "_2ZlSdmjvWREfUPvdtzIAN_",
				textMedia: "_2dnz6aKPWeFF1opQ_XsTYW",
				seeMore: "_2oliTAoFFxS1mse-sOZinV",
				adLinkWrapper: "p35vRG-PK5zfK-G5gjGAr",
				outboundLink: "_16eWoJfxv365opQYh3dOAJ",
				ctaExperiment: "_1fSEjc0jhvt02_0z07145y",
				adCallToAction: "BMx4T197BjzZgmRjegR7y",
				active: "_28VWbryTIGJPb62Ey50lm8",
				redditStyle: "n1f3mSINfKiMWmz1fdi1o"
			}
		},
		"./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less": function(e, t, s) {
			e.exports = {
				searchNSFWToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNsfwToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNSFWToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9",
				searchNsfwToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9"
			}
		},
		"./src/reddit/components/SearchPost/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2dkUkgRYbhbpU_2O2Wc5am",
				mFirst: "_28efb5XEIggTEMzT5v9i61",
				eventMeta: "_1rd6n9Xvtg4-5Vw7E3NhEh",
				postContent: "_2i5O0KNpb9tDq0bsNOZB_Q",
				postItemMetaContainer: "_37TF67KpZQl9SHbiAhz3mf",
				postItemWarningContainer: "_1nfcZWg35_OmccxqivQ1EN",
				postItemTitleContainer: "_19FzInkloQSdrf0rh3Omen",
				postItemFlatlistContainer: "HNL__wz5plDpzJe5Lnn",
				outboundLink: "a6Bzb7gqvN3mqBOAEyFIv",
				titleMedium: "_1FT0e6kh1BBb_oALAMW_l7",
				titleTextColor: "_1-SZ3VwLjbFwTzaZvU8FBX",
				thumbnail: "_2r9BZFotuBbLYnijAaskeZ",
				blurred: "rIj9lvusQvb0-Mf16X6ZL",
				container: "PrfaR-luawcEBK2dhGuDp",
				thumbnailContainer: "Gk-MlLujgqsaX1n-sGa_O",
				syntaxHighlight: "_1Nh8xLEUG3orjY1k1aijj",
				paddingSide: "_2n04GrCyhhQf-Kshn7akmH",
				postTitleVisibility: "_1SAKlLic4t9BBtiiE-Z6ob",
				postTitleColors: "nbO8VWsMIB-Mv-tIa37NF",
				backgroundWrapper: "UcytmAhLeRTIrWR81xl4P"
			}
		},
		"./src/reddit/components/SearchPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return V
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				u = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				m = s("./src/reddit/components/ModModeReports/index.tsx"),
				p = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				h = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				O = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				j = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				v = s("./src/reddit/components/SearchPostWarnings/index.tsx"),
				g = s("./src/reddit/components/Thumbnail/index.tsx"),
				y = s("./node_modules/react-redux/es/index.js"),
				E = s("./node_modules/reselect/es/index.js"),
				C = s("./src/reddit/actions/post.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/poll/index.ts"),
				N = s("./src/reddit/selectors/postFlair.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/selectors/user.ts");
			const P = {
					crosspost: w.d,
					isActive: w.j,
					isLoggedIn: T.Q,
					moderatorPermissions: S.m,
					modModeEnabled: _.U,
					poll: k.e,
					showEditFlair: N.a,
					flairStyleTemplate: _.W
				},
				I = () => Object(E.c)(P);
			var R = s("./src/reddit/contexts/Post/index.tsx"),
				M = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				B = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				F = s("./src/reddit/models/Media/index.ts"),
				A = s("./src/lib/isUrl/index.ts");
			const D = new(s("./src/lib/LRUCache/index.ts").a)(250);
			var U = s("./src/reddit/components/SearchPost/index.m.less"),
				H = s.n(U);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const K = Object(a.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: a,
						first: y,
						flairStyleTemplate: E,
						isLoggedIn: C,
						isOverlay: _,
						moderatorPermissions: S,
						modModeEnabled: k,
						onClickPost: N,
						onClickPostAuthor: w,
						onClickPostCommunity: T,
						onIgnoreReports: P,
						poll: I,
						post: R,
						redditStyle: U,
						searchQuery: K,
						showBulkActionCheckbox: V,
						subredditOrProfile: G,
						title: q
					} = e, J = U ? void 0 : E, Y = s || void 0, z = Object(L.a)(S), X = Object(u.a)(R), Z = Object(p.c)(R), Q = Object(g.c)({
						crosspost: s,
						post: R,
						url: void 0,
						usePreview: !1
					}), $ = Q && Object(A.a)(Q), ee = !!R.media && Object(F.H)(R.media), te = !C, se = Object(n.useMemo)(() => q ? void 0 : ((e, t, s) => {
						const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
						return e => {
							const o = `${e.id}-${n}`;
							let a = D.get(o);
							if (void 0 === a) {
								const i = new RegExp(`(\\b${n}\\b)`, "gi"),
									c = e.title.split(i);
								a = s(r.a.createElement(r.a.Fragment, null, r.a.Children.toArray(c.map((e, s) => s % 2 != 0 ? t(e) : e)))), D.set(o, a)
							}
							return a
						}
					})(K, e => r.a.createElement("span", {
						className: Object(o.a)(H.a.syntaxHighlight)
					}, e), e => e), [q, K]), ne = {
						flairStyleTemplate: J,
						isOverlay: _,
						onClickPostAuthor: w,
						onClickPostCommunity: T,
						post: R,
						shouldShowSubscribeButton: te,
						subredditOrProfile: G
					}, re = null != q ? q : r.a.createElement("div", {
						className: Object(o.a)(H.a.paddingSide, H.a.postItemTitleContainer)
					}, r.a.createElement("div", null, r.a.createElement(x.c, {
						format: se,
						hideSourceLink: !0,
						poll: I,
						post: R,
						redditStyle: !0,
						size: x.b.Medium,
						isOverlay: _,
						hideNSFWSpoilerFlair: !0
					}), R.source && !Y && r.a.createElement(M.a, {
						className: H.a.outboundLink,
						href: R.source.url,
						isSponsored: R.isSponsored,
						postId: R.id,
						source: R.source
					}, Object(i.a)(R))), $ && r.a.createElement("div", {
						className: H.a.thumbnailContainer
					}, r.a.createElement(g.b, {
						className: H.a.thumbnail,
						crosspost: Y && R,
						isMeta: R.isMeta,
						post: Y || R,
						redditStyle: U,
						templatePlaceholderImage: J && J.postPlaceholderImage,
						removeLink: ee
					}))), oe = r.a.createElement(h.b, {
						className: Object(o.a)(H.a.postContainer, Object(B.a)(e), y ? H.a.mFirst : void 0, t),
						eventFactory: a,
						isOverlay: _,
						onClick: N,
						post: R,
						style: {
							...Object(B.d)(e),
							...Object(B.b)(J)
						}
					}, r.a.createElement(b.a, {
						"data-click-id": "background",
						flairStyleTemplate: J,
						redditStyle: !0
					}, r.a.createElement(c.a, {
						className: H.a.eventMeta,
						post: R
					}), r.a.createElement("div", {
						className: Object(o.a)(H.a.postContent, {
							[H.a.showBulkActionCheckbox]: V
						}),
						"data-click-id": "body"
					}, r.a.createElement(j.c, W({
						className: Object(o.a)(H.a.paddingSide, H.a.postItemMetaContainer),
						key: "PostMeta"
					}, ne)), r.a.createElement(v.a, {
						className: Object(o.a)(H.a.paddingSide, H.a.postItemWarningContainer),
						isSpoiler: R.isSpoiler,
						isNSFW: R.isNSFW,
						isQuarantined: null == G ? void 0 : G.isQuarantined
					}), re, k && z && X && r.a.createElement(l.a, {
						thing: R
					}), k && z && Z && r.a.createElement(m.a, {
						onIgnoreReports: P,
						reportable: R
					}), r.a.createElement(O.c, {
						className: Object(o.a)(H.a.paddingSide, H.a.postItemFlatlistContainer),
						post: R
					}), r.a.createElement(d.d, null))));
					return r.a.createElement(f.b, null, oe)
				}),
				V = Object(R.b)((e => t => {
					const s = Object(_.eb)(),
						n = ((e, t) => {
							let {
								postId: s
							} = t;
							return {
								onIgnoreReports: () => e(Object(C.fb)(s))
							}
						})(Object(y.d)(), {
							...t
						}),
						o = Object(_.ab)(s),
						a = Object(y.e)(I),
						i = {
							...t,
							...a,
							...n,
							searchQuery: o
						};
					return r.a.createElement(e, i)
				})(K))
		},
		"./src/reddit/components/SearchPostFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_2IpBiHtzKzIxk2fKI4UOv1",
				flatlistItem: "_vaFo96phV6L5Hltvwcox"
			}
		},
		"./src/reddit/components/SearchPostFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				d = s.n(c);
			const l = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement("div", {
						className: Object(a.a)(d.a.flatlistContainer, s)
					}, t)
				},
				u = e => {
					let {
						score: t
					} = e;
					return o.a.createElement("span", {
						className: Object(a.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{upvotesCount} upvotes",
						_1: "{upvotesCount} upvote"
					}, [n.fbt._param("upvotesCount", Object(i.b)(t)), n.fbt._plural(t)], {
						hk: "4rxl9Z"
					}))
				},
				m = e => {
					let {
						awardCountsById: t,
						awardingsTotal: s
					} = e;
					const r = s && s > 0 ? s : Object.values(t || {}).reduce((e, t) => e += t, 0);
					return o.a.createElement("span", {
						className: Object(a.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{awardsCount} awards",
						_1: "{awardsCount} award"
					}, [n.fbt._param("awardsCount", Object(i.b)(r)), n.fbt._plural(r)], {
						hk: "1jrEck"
					}))
				};

			function p(e) {
				let {
					post: t,
					className: s
				} = e;
				return o.a.createElement(l, {
					className: s
				}, o.a.createElement(u, {
					score: t.score
				}), o.a.createElement("span", {
					className: Object(a.a)(d.a.flatlistItem)
				}, n.fbt._({
					"*": "{commentsCount} comments",
					_1: "{commentsCount} comment"
				}, [n.fbt._param("commentsCount", Object(i.b)(t.numComments)), n.fbt._plural(t.numComments)], {
					hk: "4uhYwJ"
				})), o.a.createElement(m, {
					awardCountsById: t.awardCountsById,
					awardingsTotal: t.awardingsTotal
				}))
			}
		},
		"./src/reddit/components/SearchPostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				crosspostIcon: "_1-Dnj_BC9slzHImx9Qex6x",
				hovercardContainer: "_3Wz607wX-KXslTUjYvTZWi",
				metaContainer: "_3xeOZ4NlqvpwzbB5E8QC6r",
				postTopMeta: "_1wxi9M8fCejzbsH0YGSer2",
				subredditName: "_305seOZmrgus3clHOXCmfs",
				enlargedSubredditName: "_2QZLJe3l7lBGN9JNI51gn9",
				subredditIcon: "id5ExZR7GqiUypGICnSYs",
				enlargedSubredditIcon: "_3dUPuwEf-ssCOozUxvm-HX",
				SubscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				subscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				metadataFont: "_3zxBrqnz24HT1z7OOcRXCS",
				metaSpacer: "_3-fo1J0EWS8TawiUkoZ9DH"
			}
		},
		"./src/reddit/components/SearchPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				m = s("./src/reddit/hooks/useClickSourceData.ts"),
				p = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				b = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				x = s.n(h);
			const f = "subreddit_icon_link",
				O = "subreddit-name";
			t.c = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					onClickPostCommunity: h,
					post: j,
					subredditOrProfile: v,
					tooltipType: g
				} = e, y = Object(m.a)(), {
					isSubEnlarged: E
				} = Object(a.e)(p.a);
				return o.a.createElement("div", {
					className: Object(n.a)(t, x.a.metaContainer)
				}, !j.isSponsored && v && o.a.createElement(i.a, {
					className: Object(n.a)(x.a.hovercardContainer, x.a.hovercardContainer),
					postId: j.id,
					subredditName: v.name
				}, o.a.createElement(b.b, {
					className: Object(n.a)(x.a.subredditIcon, E && x.a.enlargedSubredditIcon),
					linkTo: v.url,
					linkProps: h ? {
						"data-testid": f,
						onClick: h
					} : void 0,
					subredditOrProfile: v
				}), o.a.createElement(l.a, {
					className: Object(n.a)(x.a.subredditName, E && x.a.enlargedSubredditName),
					"data-testid": O,
					"data-click-id": "subreddit",
					onClick: h,
					to: {
						pathname: v.url,
						state: y
					}
				}, v.displayText)), !j.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(u.b, null), o.a.createElement(c.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				})), o.a.createElement(d.g, {
					className: x.a.postTopMeta,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					post: j,
					tooltipType: g
				}))
			}
		},
		"./src/reddit/components/SearchPostWarnings/index.m.less": function(e, t, s) {
			e.exports = {
				warningText: "_3C_h7N-1FV_Tj4YnJCgzH8",
				warningIcon: "_3aetAYa8qp50wqScD1enz5",
				quarantineWarning: "_3sd00luQLrO6xvEnYk25bF",
				nsfwWarning: "HRl6KlvsitYdcGQiiZoLn",
				spoilerWarning: "_2l5VK2M8iq-3ux5SwW1fAt"
			}
		},
		"./src/reddit/components/SearchPostWarnings/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/components/SearchPostWarnings/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function l(e) {
				let {
					className: t,
					isQuarantined: s,
					isNSFW: n,
					isSpoiler: i
				} = e;
				return s || n || i ? r.a.createElement("div", {
					className: t
				}, s ? r.a.createElement("span", {
					className: Object(o.a)(c.a.warningText, c.a.quarantineWarning)
				}, r.a.createElement(a.a, {
					name: "quarantined_fill",
					className: Object(o.a)(c.a.warningIcon)
				}), d._("quarantined", null, {
					hk: "1j7soK"
				})) : null, n ? r.a.createElement("span", {
					className: Object(o.a)(c.a.warningText, c.a.nsfwWarning)
				}, r.a.createElement(a.a, {
					name: "nsfw_fill",
					className: Object(o.a)(c.a.warningIcon)
				}), d._("nsfw", null, {
					hk: "2IetSA"
				})) : null, i ? r.a.createElement("span", {
					className: Object(o.a)(c.a.warningText, c.a.spoilerWarning)
				}, r.a.createElement(a.a, {
					name: "spoiler_fill",
					className: Object(o.a)(c.a.warningIcon)
				}), d._("spoiler", null, {
					hk: "3SHbs3"
				})) : null) : null
			}
		},
		"./src/reddit/components/SearchResultsContent/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				commentContainer: "_2lwxooVpRNqH_bjx-Nm4m4",
				postTitleContainer: "_1nhxJR41hD8jXWqUVy3wTT",
				postTitle: "_1HsM08P8HBGOIPATQsthMA",
				commentContent: "_1i_lg5WToFS_KM8bSao5FB",
				commentAuthor: "q6Rzyt18sGpgOFFoG9gUg",
				commentFlatlist: "_3bkDvRYnc0SodO59dk5n3p",
				goToThreadLinkButton: "_3Yys9Taiw4B3XiXhmbLrra",
				mediaIcon: "_14gjyiBw0XSVan9XLN7ER-"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2u_haOaI877DTCSOfFouuF",
				commentContainer: "_2Uv1IcU4LjDH6OqbNZ0BwO",
				comment: "yNjWq2s_3V0N5m9u-Bx-D",
				link: "-fCtQc5X_zwd1tnX_0s4W",
				linkContainer: "tSwYm_NW9-rD1G91vZi4d"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				c = s.n(i),
				d = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less"),
				l = s.n(d);
			const u = e => r.a.createElement("div", {
				className: Object(o.a)(e.className, l.a.postContainer),
				"data-testid": "comment-placeholder"
			}, r.a.createElement("div", {
				className: c.a.postContent
			}, r.a.createElement("div", {
				className: c.a.postItemMetaContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subredditName, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: l.a.commentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.comment, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: l.a.linkContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.link, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: c.a.flatlist
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(a.b)(e))
			}))))
		},
		"./src/reddit/components/SearchResultsContent/Communities/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2mO8vClBdPxiJ30y_C6od2",
				title: "_1hYBlRBooHG-eY5iAHen-R",
				separator: "_1LvQXvsxpSVi-JRudk3e4e",
				previewCommunityStyles: "_3MfNPE_vLKliHPkiYMAtZm",
				loadMoreItem: "_1mLDB-TFHMY0SRGTRD-ipK",
				viewMore: "DMHO9Pay4I5LSwZTtE4TY"
			}
		},
		"./src/reddit/components/SearchResultsContent/Community/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_3BWq3z8_9gA3oThgYXnngR",
				sidebar: "iwmtpuJa21jtA4y_LuOVI",
				mFirst: "YLZe4_XS9hOtObp1VjEF-",
				container: "ei8_Bq_te0jjwNIqmk8Tw",
				subredditIcon: "_2YBzxh6YUsSdcmbcJ-kE5L",
				contentContainer: "_1Nla8vW02K39sy0E826Iug",
				subredditInfo: "_1nTSkRaTteYjCY91DwVEF3",
				title: "_2torGbn_fNOMbGw3UAasPl",
				subtitle: "_3CUjJH8t2eFynKUAv1ER7C",
				flair: "_3sOM1thDS-RiUzmUb8yzxN",
				description: "_3JYXhJlwZCvjZTBplEncbq",
				buttonContainer: "_3llSmEBMCJTcO537oPxHIH"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				communityContainer: "_2-tXnoxd32Utasnz79k34",
				sidebar: "_2PlcVxaNCQS2-GyaX_mhOA",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				contentContainer: "Lsafh1CsbqQ8tiuBPTucl",
				subredditInfo: "_1TKuN8SZONE4tjAoEul8sp",
				title: "_11V3zVIqp59I7JvzWnky0w",
				author: "_2GNPL8YTca77gPEWlF9nDb",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				buttonContainer: "_14X6ixd8jgBYsNSxRPXTbL"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = s.n(i);
			const d = e => r.a.createElement("div", {
				className: Object(o.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subreddtiIcon, Object(a.a)(e))
			}), r.a.createElement("div", {
				className: c.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(a.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(o.a)(c.a.description, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.buttonContainer, Object(a.a)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.m.less": function(e, t, s) {
			e.exports = {
				noResults: "_1VDJFxZ-XJSB8yo1UyJzsi",
				withSidebar: "_3C2YoevK_DDUuAyafjSuUs",
				header: "kKE_PXkpQNWEX-RiwWuTA",
				text: "_1tEoY-vmgG3yWH6hCdgy3p",
				image: "e6PSfRI3_H3v8fgbIqj-x",
				button: "_3FKXXAcRW_DvCNr6yMbF73"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less": function(e, t, s) {
			e.exports = {
				separatedCommunity: "_2kqt-kRLvKQ1Kqi8OjMEa7"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return lt
			})), s.d(t, "b", (function() {
				return xt
			}));
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				u = s("./src/lib/LRUCache/index.ts"),
				m = s("./src/reddit/actions/search.ts"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/config.ts"),
				h = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				x = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				f = s.n(x),
				O = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				j = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/isUrl/index.ts"),
				g = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				y = s("./src/reddit/controls/OutboundLink/index.tsx"),
				E = s("./src/reddit/helpers/clickSourceData/index.ts"),
				C = s("./src/reddit/helpers/overlay/index.ts"),
				_ = s("./src/reddit/helpers/path/index.ts"),
				S = s("./src/reddit/helpers/trackers/searchResults.ts"),
				k = s("./src/reddit/hooks/useClickSourceData.ts"),
				N = s("./src/reddit/hooks/usePageLayer.ts"),
				w = s("./src/reddit/hooks/useTheme.ts"),
				T = s("./src/reddit/selectors/searchResults.ts"),
				P = s("./src/telemetry/models/Outbound.ts"),
				I = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				R = s("./src/reddit/components/PostContainer/index.tsx"),
				M = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				L = s("./node_modules/fbt/lib/FbtPublic.js"),
				B = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				F = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				A = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = s("./src/reddit/constants/colors.ts"),
				U = s("./src/reddit/controls/InternalLink/index.tsx"),
				H = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				W = s("./src/reddit/controls/ScrollerTooltipPortal/index.tsx"),
				K = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				V = s("./src/reddit/icons/fonts/index.tsx"),
				G = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				q = s("./src/reddit/selectors/user.ts"),
				J = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				Y = s("./src/reddit/components/AuthorLink/index.tsx"),
				z = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				X = s("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				Z = s("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				Q = s("./src/reddit/components/PostTopMeta/index.tsx"),
				$ = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				ee = s.n($);

			function te(e) {
				var t;
				const {
					className: s,
					clickSourceData: n,
					onClick: r,
					subredditOrProfile: o
				} = e, c = Object(i.e)(q.db), d = null === (t = o.icon) || void 0 === t ? void 0 : t.url, l = (null == o ? void 0 : o.color) || D.a.alienblue;
				let u;
				return u = d ? a.a.createElement("img", {
					alt: L.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: s,
					style: {
						backgroundColor: l
					},
					role: "presentation",
					src: d
				}) : a.a.createElement(V.a, {
					name: "community",
					isFilled: !c,
					className: Object(j.a)(ee.a.defaultCommunityIcon, s, c && ee.a.mNightmode)
				}), a.a.createElement(U.default, {
					"data-testid": J.a,
					onClick: r,
					to: {
						pathname: o.url,
						state: n
					}
				}, u)
			}

			function se(e) {
				const t = Object(K.a)(Q.e),
					s = e.post.crosspostRootId ? L.fbt._("Crossposted by", null, {
						hk: "1r1JSX"
					}) : L.fbt._("Posted by", null, {
						hk: "3mow5F"
					});
				return a.a.createElement("div", {
					className: ee.a.metaContainer
				}, e.post.crosspostRootId && a.a.createElement(V.a, {
					name: "crosspost",
					className: Object(j.a)(ee.a.crosspostIcon, ee.a.metaSpacer)
				}), a.a.createElement("span", {
					className: ee.a.metaSpacer
				}, s), a.a.createElement(z.b, {
					postOrComment: e.post
				}, a.a.createElement(Y.a, {
					author: e.post.author,
					className: ee.a.metaSpacer,
					isAuthorDeleted: e.post.author === d.H,
					isUnstyled: !0,
					linkProps: {
						"data-click-id": O.a.USER,
						"data-testid": Q.b
					},
					onClick: e.onClickPostAuthor
				}, `u/${e.post.author}`)), !e.post.isSponsored && a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: ee.a.timestamp,
					"data-testid": Q.c,
					"data-click-id": O.a.TIMESTAMP,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					ref: t.target.ref
				}, a.a.createElement(Z.a, {
					seconds: e.post.createdAt / d.Xb
				})), a.a.createElement(W.a, null, a.a.createElement(F.a, {
					arrowProps: t.arrowProps,
					popperProps: t.popperProps,
					visible: t.visible
				}, a.a.createElement(X.a, {
					seconds: e.post.createdAt / d.Xb
				})))))
			}

			function ne(e) {
				const {
					className: t,
					isOptimizedSerp: s,
					onClickPostAuthor: n,
					onClickPostCommunity: r,
					post: o,
					subredditOrProfile: c
				} = e, d = Object(k.a)(), {
					isSubEnlarged: l
				} = Object(i.e)(G.a), u = Object(w.a)();
				return a.a.createElement("div", {
					className: Object(j.a)(t, ee.a.metaContainer, ee.a.metadataFont)
				}, !o.isSponsored && c && a.a.createElement(B.a, {
					className: Object(j.a)(ee.a.hovercardContainer, ee.a.hovercardContainer),
					postId: o.id,
					subredditName: c.name
				}, a.a.createElement(te, {
					className: Object(j.a)(ee.a.subredditIcon, l && ee.a.enlargedSubredditIcon),
					"data-click-id": O.a.SUBREDDIT,
					clickSourceData: d,
					onClick: r,
					subredditOrProfile: c
				}), a.a.createElement(U.default, {
					className: Object(j.a)(ee.a.subredditName, l && ee.a.enlargedSubredditName),
					"data-testid": J.b,
					"data-click-id": O.a.SUBREDDIT,
					onClick: r,
					to: {
						pathname: c.url,
						state: d
					}
				}, c.displayText)), !o.isSponsored && !s && a.a.createElement(a.a.Fragment, null, a.a.createElement(H.b, null), a.a.createElement(A.h, {
					type: o.belongsTo.type,
					id: o.belongsTo.id
				})), a.a.createElement(H.b, null), a.a.createElement(se, {
					className: ee.a.postTopMeta,
					onClickPostAuthor: n,
					post: o,
					theme: u
				}))
			}
			var re = s("./src/reddit/components/SearchPostWarnings/index.tsx"),
				oe = s("./src/reddit/components/SEOTitle/index.tsx"),
				ae = s("./src/reddit/components/SEOTitle/constants.ts"),
				ie = s("./src/reddit/components/Thumbnail/index.tsx"),
				ce = s("./src/reddit/components/TrackingHelper/index.tsx"),
				de = s("./src/reddit/components/SearchPost/index.m.less"),
				le = s.n(de);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function me(e) {
				const {
					isCommentsPage: t,
					post: s
				} = e, n = t ? ae.a.PostComments : ae.a.PostItem, r = Object(k.a)(), o = Object(g.a)(s.permalink, void 0, r);
				return a.a.createElement("div", {
					className: Object(j.a)(s.id, le.a.postTitleColors),
					"data-adclicklocation": O.a.TITLE
				}, a.a.createElement("div", {
					className: le.a.postTitleVisibility,
					dangerouslySetInnerHTML: {
						__html: `\n            <img alt="" src="${b.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n          `
					}
				}), a.a.createElement("div", {
					className: le.a.titleContainer
				}, a.a.createElement(h.a, {
					to: o
				}, a.a.createElement("div", {
					className: Object(j.a)(le.a.titleTextColor, le.a.titleMedium)
				}, a.a.createElement(oe.b, {
					type: n
				}, s.title)))))
			}

			function pe(e) {
				var t;
				const s = !e.theme.subredditContext.shouldShowNSFWContent && e.post.isNSFW,
					n = (null === (t = e.post.source) || void 0 === t ? void 0 : t.url) || "",
					r = a.a.createElement(ie.a, {
						alt: e.post.title,
						className: Object(j.a)(le.a.thumbnail, s && le.a.blurred),
						src: e.post.thumbnail.url,
						theme: e.theme,
						isOutbound: n && !e.post.isSponsored || !1
					});
				return a.a.createElement("div", {
					className: le.a.container
				}, Object(v.a)(n) && !e.post.media ? a.a.createElement(y.b, {
					href: n,
					isSponsored: e.post.isSponsored,
					postId: e.post.id,
					source: e.post.source,
					sourceElement: P.SourceElement.PostImage
				}, a.a.createElement("div", {
					className: le.a.thumbnailContainer
				}, r)) : r)
			}
			var be = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				he = s("./src/reddit/contexts/PageLayer/index.tsx"),
				xe = s("./src/reddit/helpers/trackers/screenview.ts"),
				fe = s("./src/reddit/selectors/tracking.ts"),
				Oe = s("./src/telemetry/index.ts"),
				je = s("./src/telemetry/models/Timer.ts"),
				ve = s("./node_modules/lodash/noop.js"),
				ge = s.n(ve),
				ye = s("./node_modules/react-router-redux/es/index.js"),
				Ee = s("./src/reddit/components/Comments/Comment/index.tsx"),
				Ce = s("./src/reddit/components/PostList/index.tsx"),
				_e = s("./src/reddit/components/PostTitle/index.tsx"),
				Se = s("./src/reddit/components/SearchPost/index.tsx"),
				ke = s("./src/reddit/connectors/PostList/index.ts"),
				Ne = s("./src/reddit/contexts/Visibility.tsx"),
				we = s("./src/reddit/controls/Button/index.tsx"),
				Te = s("./src/reddit/controls/Button/index.m.less"),
				Pe = s.n(Te),
				Ie = s("./src/reddit/hooks/useTracking.ts"),
				Re = s("./src/reddit/selectors/comments.ts"),
				Me = s("./src/reddit/selectors/commentSelector.ts"),
				Le = s("./src/reddit/selectors/posts.ts");

			function Be(e) {
				let {
					className: t,
					comment: s
				} = e;
				return a.a.createElement(M.b, {
					className: t
				}, a.a.createElement(M.d, {
					score: s.score
				}), a.a.createElement(M.a, {
					awardCountsById: s.awardCountsById
				}))
			}
			var Fe = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				Ae = s.n(Fe);
			var De;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_COMMENT_LINK = "go_to_comment_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community"
			}(De || (De = {}));
			var Ue = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				He = s("./src/lib/truncateText/index.ts"),
				We = s("./src/reddit/actions/post.ts"),
				Ke = s("./src/reddit/components/Flair/index.tsx"),
				Ve = s("./src/lib/prettyPrintNumber/index.ts"),
				Ge = s("./src/reddit/components/SubscribeButton/index.tsx"),
				qe = s("./src/reddit/helpers/karma.ts");
			var Je = s("./src/reddit/constants/tracking.ts"),
				Ye = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ze = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Xe = s("./src/reddit/selectors/telemetry.ts");
			var Ze = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Qe = s("./src/reddit/constants/posts.ts"),
				$e = s("./src/reddit/models/Flair/index.ts"),
				et = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				tt = s("./src/reddit/selectors/subreddit.ts"),
				st = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				nt = s.n(st);
			const rt = Object(c.c)({
					isBlockingInterstitialEnabled: et.b,
					isBlockingInterstitialV2Enabled: et.c,
					hideNSFWPref: q.F,
					subredditOrProfile: tt.P,
					subredditOrProfileAboutInfo: tt.L,
					userIsSubscriber: tt.jb
				}),
				ot = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: r,
						searchOptions: c,
						sidebar: d
					} = e, l = Object(he.eb)(), u = Object(Ie.a)(), m = Object(k.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: h,
						subredditOrProfile: x,
						subredditOrProfileAboutInfo: f
					} = Object(i.e)(t => rt(t, e)), {
						withCommunityDescription: O
					} = Object(i.e)(G.a), v = d && O, g = Object(i.d)(), y = Object(o.useCallback)(e => {
						x && n.type === Qe.a.PROFILE && (p || b) && (e.preventDefault(), g(Object(We.cb)(x.url))), u(Object(S.r)(c, l, n, r))
					}, [u, c, l, r, n, p, b, g, x]);
					if (!x) return null;
					const E = x.displayText,
						C = f.publicDescription,
						_ = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object(qe.a)(e),
									n = Object(Ve.b)(s);
								return L.fbt._({
									"*": "{karma count} Karma",
									_1: "1 Karma"
								}, [L.fbt._plural(s, "karma count", n)], {
									hk: "4r0tyT"
								})
							}
							const s = t;
							return "number" == typeof s.subscribers ? L.fbt._({
								"*": "{number of subscribers} Members",
								_1: "1 Member"
							}, [L.fbt._plural(s.subscribers, "number of subscribers", Object(Ve.b)(s.subscribers))], {
								hk: "vb11y"
							}) : null
						})(n.type, f),
						N = (e => {
							let {
								identifierType: t,
								subredditOrProfile: s,
								subredditOrProfileAboutInfo: n,
								onSubscribeButtonClick: r,
								subscribeEventFactory: o,
								priority: i
							} = e;
							if ("subreddit" !== t) return s.acceptFollowers ? a.a.createElement(Ge.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "profile"
								},
								onClick: r,
								priority: i,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? a.a.createElement(Ge.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "subreddit"
								},
								onClick: r,
								priority: i,
								small: !0
							}) : null
						})({
							identifierType: n.type,
							subredditOrProfile: x,
							subredditOrProfileAboutInfo: f,
							onSubscribeButtonClick: e => {
								e.preventDefault(), e.stopPropagation()
							},
							subscribeEventFactory: e => {
								return ((e, t, s) => n => {
									const r = Xe.H(n, void 0);
									return {
										source: S.c.SEARCH,
										action: Je.c.CLICK,
										noun: `${s}_${S.d[e.type]}`,
										actionInfo: Object(S.l)(n, void 0, r, void 0),
										correlationId: Object(Ye.c)(Ye.a.SearchResults),
										profile: "profile" === e.type ? Xe.X(n, e.id) : void 0,
										search: Xe.cb(n, t, ze.a.SERP),
										subreddit: "subreddit" === e.type ? Xe.nb(n, e.id) : void 0
									}
								})(n, c, e ? "unsubscribe" : "subscribe")
							},
							priority: we.c.Tertiary
						});
					return a.a.createElement(U.default, {
						"data-testid": `${n.type}-link`,
						className: Object(j.a)(nt.a.link, d && nt.a.sidebar, s ? nt.a.mFirst : void 0, t),
						onClick: y,
						to: {
							pathname: x.url,
							state: m
						}
					}, a.a.createElement("div", {
						className: nt.a.container
					}, a.a.createElement(Ze.b, {
						className: Object(j.a)(nt.a.subredditIcon, v && nt.a.sidebar),
						shouldHideNsfwIcon: h,
						subredditOrProfile: x
					}), a.a.createElement("div", {
						className: nt.a.contentContainer
					}, a.a.createElement("div", {
						className: Object(j.a)(nt.a.subredditInfo, d && nt.a.sidebar)
					}, a.a.createElement("h6", {
						className: nt.a.title
					}, E), x.isNSFW && a.a.createElement(Ke.b, {
						className: nt.a.flair,
						flair: {
							type: $e.f.Nsfw,
							text: L.fbt._("nsfw", null, {
								hk: "2nrY5X"
							})
						}
					}), _ && a.a.createElement(a.a.Fragment, null, a.a.createElement("p", {
						className: nt.a.subtitle
					}, !d && a.a.createElement(H.b, null), _))), !d && a.a.createElement("p", {
						className: nt.a.description
					}, Object(He.a)(C, 150, "..."))), a.a.createElement("div", {
						className: nt.a.buttonContainer
					}, N)), v && n.type !== Qe.a.PROFILE && a.a.createElement("p", {
						className: Object(j.a)(nt.a.description, d && nt.a.sidebar)
					}, Object(He.a)(C, 75, "...")))
				};
			var at = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				it = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				ct = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				dt = s.n(ct);
			const lt = 5,
				ut = Object(c.c)({
					apiError: T.b,
					apiPending: T.c,
					loadMore: T.t,
					viewportDataLoaded: fe.a
				}),
				mt = Object(c.c)({
					apiError: T.e,
					apiPending: T.f,
					loadMore: T.u,
					viewportDataLoaded: fe.a
				}),
				pt = Object(c.c)({
					apiError: T.h,
					apiPending: T.i,
					loadMore: T.v,
					viewportDataLoaded: fe.a
				}),
				bt = Object(c.c)({
					apiError: T.y,
					apiPending: T.z,
					loadMore: T.w,
					viewportDataLoaded: fe.a
				}),
				ht = {
					[d.hc.Comments]: {
						cacheName: "comment",
						Component: e => {
							let {
								identifier: t,
								listingKey: s,
								searchOptions: n
							} = e;
							const r = Object(he.eb)(),
								o = Object(Ie.a)(),
								c = Object(i.d)(),
								d = Object(i.e)(e => Object(Me.b)(e, {
									commentId: t
								})),
								l = Object(i.e)(e => Object(Re.m)(e, {
									commentId: t
								})),
								u = Object(i.e)(e => (null == d ? void 0 : d.postId) ? Object(Le.G)(e, {
									postId: null == d ? void 0 : d.postId
								}) : void 0),
								m = Object(i.e)(e => (null == d ? void 0 : d.postId) && Object(Le.F)(e, {
									postId: null == d ? void 0 : d.postId
								})),
								p = Object(i.e)(e => e.search.searchQuery),
								b = Object(k.a)();
							if (!(null == d ? void 0 : d.postId) || !m) return null;
							const h = Object(ke.b)(c),
								x = function(e) {
									let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ge.a;
									return function() {
										o(Object(S.q)({
											comment: d,
											key: s,
											originElement: e,
											pageLayer: r,
											searchOptions: n
										})), t(...arguments)
									}
								},
								f = Object(Ce.b)(d.postId, h),
								O = e => x(e);
							return a.a.createElement(Se.a, {
								crosspost: void 0,
								isActive: !1,
								isLoggedIn: !1,
								modModeEnabled: !1,
								moderatorPermissions: void 0,
								onClickPost: x(De.POST, null != f ? f : ge.a),
								onClickPostAuthor: O(De.POST_AUTHOR),
								onClickPostCommunity: O(De.POST_COMMUNITY),
								onIgnoreReports: ge.a,
								postId: d.postId,
								searchQuery: p,
								showEditFlair: !1,
								title: a.a.createElement(Ne.a, null, a.a.createElement("div", {
									className: Ae.a.commentContainer,
									"data-testid": "search_comment_container"
								}, a.a.createElement("div", {
									className: Ae.a.postTitleContainer,
									"data-testid": "search_comment_post_title_container",
									onClick: O(De.POST)
								}, u && a.a.createElement(_e.c, {
									className: Ae.a.postTitle,
									hideSourceLink: !0,
									post: u,
									redditStyle: !0,
									disableFlair: !0,
									size: _e.b.Metadata
								})), a.a.createElement("div", {
									className: Ae.a.commentContent,
									"data-testid": "search_comment",
									onClick: x(De.COMMENT, e => {
										e.stopPropagation(), c(Object(ye.b)(Object(g.a)(l, !0, b)))
									})
								}, a.a.createElement(Ee.a, {
									clearHovered: ge.a,
									commentId: t,
									commentsPageKey: "",
									flatlist: a.a.createElement(Be, {
										className: Ae.a.commentFlatlist,
										comment: d
									}),
									hasAwardGradient: !1,
									highlightTreatment: null,
									index: 0,
									isHighlighted: !1,
									isFirstInList: !0,
									isActive: !1,
									noFocus: !0,
									noSpacing: !0,
									onLineMouseOver: ge.a,
									onCommentAuthorClick: e => (e.stopPropagation(), O(De.COMMENT_AUTHOR)(e)),
									onCommentTimestampClick: e => (e.stopPropagation(), O(De.COMMENT_TIMESTAMP)(e)),
									postId: d.postId,
									renderedInOverlay: !1,
									restrictHeight: !0,
									rtJSONRedditStyle: !0,
									scrollToAndRemeasure: ge.a,
									showBlockingInterstitial: ge.a,
									userIconSmall: !0,
									onClickRevealSpoilerText: () => {
										o(Object(S.t)(n, d, s, r))
									}
								})), a.a.createElement(we.t, {
									kind: we.b.InternalLink,
									priority: we.c.PlainLink,
									className: Object(j.a)(Ae.a.goToThreadLinkButton, Pe.a.PlainLinkButton),
									"data-testid": "go_to_thread_link",
									onClick: x(De.GO_TO_COMMENT_LINK, e => {
										e.stopPropagation()
									}),
									to: Object(g.a)(m, !0, b)
								}, L.fbt._("Go to thread", null, {
									hk: "npBX6"
								}))))
							})
						},
						moreResultsTypes: [d.ic.Comments],
						Placeholder: Ue.a,
						selector: mt,
						telemetryComponentName: "commentSearchResults",
						telemetryViewEvent: it.c
					},
					[d.hc.Subreddits]: {
						cacheName: "community",
						Component: ot,
						moreResultsTypes: [d.ic.Subreddits],
						Placeholder: at.a,
						selector: pt,
						telemetryComponentName: "communitySearchResults",
						telemetryViewEvent: it.d
					},
					[d.hc.Users]: {
						cacheName: "author",
						Component: ot,
						moreResultsTypes: [d.ic.Users],
						Placeholder: at.a,
						selector: ut,
						telemetryComponentName: "authorSearchResults",
						telemetryViewEvent: it.d
					},
					[d.hc.Posts]: {
						cacheName: "post",
						Component: e => {
							var t, s;
							const {
								first: n,
								listingKey: r,
								searchOptions: c
							} = e, d = Object(i.e)(t => Object(T.A)(t, e)), l = Object(N.a)(), u = Object(i.d)(), m = Object(ce.b)(), p = function(e) {
								var t;
								const s = (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
									n = f.a.parse(s),
									r = n.path || "",
									o = r.length > 7 ? r.substring(0, 7) + "..." : r;
								return (n.hostname ? n.hostname.replace("www.", "") : "") + o
							}(d), b = d.thumbnail.url && Object(v.a)(d.thumbnail.url), h = Object(w.a)(), x = Object(o.useCallback)(e => {
								var t, s;
								const n = (null === (s = null === (t = e.target) || void 0 === t ? void 0 : t.dataset) || void 0 === s ? void 0 : s.clickId) || O.a.BODY;
								m(Object(S.s)(d.id, c, l, S.E[n], r)), u(Object(C.a)({
									pathname: Object(_.b)(d.permalink),
									state: Object(E.b)(l)
								}))
							}, [u, r, l, d.id, d.permalink, c, m]), g = {
								post: d,
								shouldShowSubscribeButton: !1,
								subredditOrProfile: d.subreddit || d.profile
							};
							return a.a.createElement("div", {
								className: Object(j.a)(le.a.postContainer, n && le.a.mFirst),
								"data-adclicklocation": O.a.BACKGROUND,
								"data-click-id": O.a.BACKGROUND,
								"data-testid": R.a,
								id: d.id,
								onClick: x,
								tabIndex: -1
							}, a.a.createElement(I.a, {
								"data-click-id": O.a.BACKGROUND,
								redditStyle: !0
							}, a.a.createElement("div", {
								className: le.a.postContent,
								"data-click-id": O.a.BODY
							}, a.a.createElement(ne, ue({
								className: Object(j.a)(le.a.paddingSide, le.a.postItemMetaContainer),
								key: "PostMeta",
								isOptimizedSerp: !0
							}, g)), a.a.createElement(re.a, {
								className: Object(j.a)(le.a.paddingSide, le.a.postItemWarningContainer),
								isQuarantined: (null === (t = d.subreddit) || void 0 === t ? void 0 : t.isQuarantined) || (null === (s = d.profile) || void 0 === s ? void 0 : s.isQuarantined),
								isNSFW: d.isNSFW,
								isSpoiler: d.isSpoiler
							}), a.a.createElement("div", {
								className: Object(j.a)(le.a.paddingSide, le.a.postItemTitleContainer)
							}, a.a.createElement("div", {
								className: le.a.postContent
							}, a.a.createElement(me, {
								post: d
							}), d.source && !d.crosspostRootId && a.a.createElement(y.b, {
								className: le.a.outboundLink,
								href: d.source.url,
								isSponsored: d.isSponsored,
								postId: d.id,
								source: d.source
							}, p)), b && a.a.createElement("div", {
								className: le.a.thumbnailContainer
							}, a.a.createElement(pe, {
								post: d,
								theme: h
							}))), a.a.createElement(M.c, {
								className: Object(j.a)(le.a.paddingSide, le.a.postItemFlatlistContainer),
								post: d
							}))))
						},
						moreResultsTypes: [d.ic.Posts],
						Placeholder: be.a,
						selector: bt,
						telemetryComponentName: "postList",
						telemetryViewEvent: it.e
					}
				};
			const xt = e => {
				const t = Object(o.useRef)(!1);
				let s = !1,
					n = !1;
				const c = new u.a(250),
					b = Object(o.useRef)(),
					h = Object(o.useRef)(null),
					x = Object(o.useRef)(!1),
					f = Object(he.eb)(),
					O = Object(ce.b)(),
					j = Object(i.d)(),
					{
						identifiers: v,
						listingKey: g,
						searchOptions: y,
						componentType: E,
						sidebar: C
					} = e,
					{
						cacheName: _,
						Component: S,
						moreResultsTypes: k,
						Placeholder: N,
						selector: w,
						telemetryComponentName: T,
						telemetryViewEvent: P
					} = ht[E],
					{
						apiError: I,
						apiPending: R,
						loadMore: M,
						viewportDataLoaded: L
					} = Object(i.e)(t => w(t, e)),
					B = C ? lt : v.length,
					F = C ? lt : 10,
					A = () => {
						if (!K()) return;
						const e = Oe.c.has(g) ? Oe.c.end(g) : 0;
						O(Object(xe.v)(g, y, je.TimerType.InApp, e, f)), x.current = !0
					},
					D = () => {
						const e = b.current && Array.from(b.current.children),
							t = e && e.pop();
						return t && t.getBoundingClientRect().bottom > window.innerHeight
					};
				Object(o.useEffect)(() => {
					A(), h.current && Object(Oe.b)(d.o.Redesign, {
						type: "mount",
						component: T,
						duration: Oe.c.end(h.current)
					})
				}, []), Object(o.useEffect)(() => {
					if (A(), h.current && Oe.c.has(h.current)) {
						const e = Oe.c.end(h.current);
						if (e < 10) return;
						Object(Oe.b)(d.o.Redesign, {
							duration: e,
							type: "mount",
							component: T
						})
					}
				});
				const U = Object(l.a)(g),
					H = Object(l.a)(v.length);
				Object(o.useEffect)(() => {
					h.current && Oe.c.cancel(h.current), v.length && (h.current = Oe.c.start()), (g !== U || !D() && v.length !== H) && (t.current = !1)
				}, [h, g, v.length, U, H, t]), Object(o.useEffect)(() => () => {
					h.current && Oe.c.cancel(h.current), b.current = void 0, t.current = !1
				});
				const W = () => {
						t.current = !0, A()
					},
					K = () => {
						const e = D();
						return (Oe.c.has(g) || !x.current) && (I || !n && (s || t && (e || L)))
					},
					V = e => {
						b.current = e instanceof Element ? e : void 0
					},
					G = () => {
						const e = v.slice(0, B).map((e, t) => ((e, t) => {
							let s;
							s = function(e) {
								return void 0 !== e.type
							}(e) ? e.id : e;
							const n = `${_}-search-${t}-${g}`,
								r = Object(it.b)(s, g, () => P(O, y, e, g, f));
							let o;
							if (void 0 === (o = c.get(n))) {
								const n = `${_}-search-item-[id:${s}]`;
								o = {
									estHeight: 32,
									trackOnEnteredViewport: r,
									id: s,
									render: () => a.a.createElement(S, {
										className: dt.a.separatedCommunity,
										first: 0 === t,
										identifier: e,
										key: n,
										listingKey: g,
										searchOptions: y,
										sidebar: C
									})
								}
							}
							return c.set(n, o), o
						})(e, t));
						return a.a.createElement(p.b, {
							key: g,
							innerRef: V,
							loadMoreToken: M && M.token ? M.token : void 0,
							onLastVisibleChildRendered: W,
							onLoadMore: () => {
								j(Object(m.n)(k))
							}
						}, e)
					};
				return (() => v.length > 0)() ? (s = !1, n = !1, G()) : (() => Boolean(I) || !1 === R)() ? (s = !0, n = !1, G()) : (s = !1, n = !0, (() => {
					const e = !I;
					return a.a.createElement("div", {
						"data-testid": `${E}-list-placeholder`
					}, r()(F, t => a.a.createElement(N, {
						key: t,
						isLoading: e,
						sidebar: !1
					})))
				})())
			}
		},
		"./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/trackers/searchResults.ts"),
				a = s("./src/reddit/selectors/commentSelector.ts");
			const i = new n.a(250),
				c = (new n.a(250), (e, t, s) => {
					const n = `entered-${e}-${`last-${t}`}`;
					let r = i.get(n);
					return void 0 === r && (r = s, i.set(n, r)), r
				}),
				d = (e, t, s, n, a) => e(e => Object(o.k)({
					action: r.c.VIEW,
					state: e,
					searchOptions: t,
					pageLayer: a,
					subredditOrProfileIdentifier: s,
					key: n
				})),
				l = (e, t, s, n, i) => e(e => {
					const c = Object(a.b)(e, {
						commentId: s
					});
					return Object(o.j)({
						action: r.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: i,
						comment: c,
						key: n
					})
				}),
				u = (e, t, s, n, a) => e(e => ({
					...Object(o.m)({
						state: e,
						searchOptions: t,
						pageLayer: a,
						postId: s,
						key: n
					}),
					action: r.c.VIEW
				}))
		},
		"./src/reddit/components/SearchResultsContent/index.m.less": function(e, t, s) {
			e.exports = {
				resultsContainer: "_1MTbwSHIISfMYM16YhZ8kN"
			}
		},
		"./src/reddit/components/SearchResultsContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return pt
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/lodash/isEmpty.js")),
				c = s.n(i),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				u = s("./src/lib/search/index.ts"),
				m = s("./src/reddit/actions/search.ts"),
				p = s("./src/config.ts"),
				b = s("./src/lib/intersectionObserver/index.ts"),
				h = s("./src/lib/isUrl/index.ts"),
				x = s("./src/lib/opener/index.ts"),
				f = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/components/BlankPost/index.tsx"),
				j = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				v = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/Media/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.tsx"),
				E = s("./src/reddit/components/Thumbnail/index.tsx"),
				C = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/contexts/Post/index.tsx"),
				N = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				w = s("./src/reddit/helpers/clickSourceData/index.ts"),
				T = s("./src/reddit/helpers/overlay/index.ts"),
				P = s("./src/reddit/helpers/path/index.ts"),
				I = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				R = s("./src/reddit/helpers/trackers/searchResults.ts"),
				M = s("./src/reddit/models/Media/index.ts"),
				L = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/selectors/showPromotedCTA.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				D = s("./node_modules/reselect/es/index.js"),
				U = s("./src/lib/getShortenedLink.ts"),
				H = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				W = s("./src/reddit/components/PostTitle/index.tsx"),
				K = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				V = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				G = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				q = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				J = s("./src/reddit/components/CallToActionButton/index.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				z = s("./src/reddit/hooks/useTheme.ts"),
				X = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Z = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				Q = s.n(Z);
			const {
				fbt: $
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ee = `${p.a.assetPath}/img/link-placeholder.png`, te = Object(D.c)({
				autoplayPref: A.b,
				showPromotedCTA: F.a,
				flairStyleTemplate: S.W,
				showCTAExperiment: L.a
			});

			function se(e) {
				var t;
				const {
					postId: s,
					listingKey: i,
					searchOptions: c,
					discoveryUnit: d
				} = e, l = Object(r.useRef)(), u = Object(r.useRef)(), {
					autoplayPref: m,
					flairStyleTemplate: L,
					showPromotedCTA: F,
					showCTAExperiment: A
				} = Object(a.e)(t => te(t, e)), D = Object(a.e)(e => Object(B.d)(e, {
					postId: s
				})), Z = Object(a.e)(X.b), se = Object(a.e)(X.c), ne = Object(S.eb)(), re = Object(C.b)(), oe = Object(a.d)(), ae = Object(z.a)(), {
					post: ie,
					subredditOrProfile: ce
				} = Object(k.d)(s), de = Object(r.useCallback)((e, t) => {
					oe(Object(f.P)(e, t))
				}, [oe]), le = !!ie.source && !D;
				if (Object(r.useEffect)(() => (l.current && Object(b.a)(l.current, (e, t) => {
						u.current && (t ? u.current.focusContent() : u.current.pauseContent())
					}), Object(R.x)(i, ie.id, c, ne, d), () => {
						l.current && Object(b.b)(l.current), u.current && u.current.stopContent(), l.current = null, u.current = null
					}), []), !ie) return null;
				const {
					media: ue
				} = D || ie || {}, me = (null == ue ? void 0 : ue.type) === M.o.EMBED && (null == ue ? void 0 : ue.provider) === M.v.Twitter, pe = (null == ue ? void 0 : ue.type) === M.o.VIDEO || (null == ue ? void 0 : ue.type) === M.o.GIFVIDEO;

				function be(e) {
					e.stopPropagation(), e.preventDefault(), ie.isSponsored ? (oe(Object(f.y)(ie, _.a.Click)), ie.source ? ie.source.outboundUrl ? Object(x.e)(ie.source.outboundUrl, x.d.BLANK) : Object(x.e)(ie.source.url, x.d.BLANK) : Object(x.e)(ie.permalink, x.d.BLANK)) : oe(Z || se ? Object(f.ab)(Object(P.b)(ie.permalink), ie.id) : Object(T.a)({
						pathname: Object(P.b)(ie.permalink),
						state: Object(w.b)(ne)
					}))
				}

				function he(e) {
					ie.isSponsored && pe || be(e), ie.isSponsored && function(e) {
						pe || (e.stopPropagation(), e.preventDefault()), re(Object(R.y)(ie.id, c, d, i, ne))
					}(e)
				}
				return ie.isBlank ? o.a.createElement(O.BlankPost, {
					onPostViewable: de,
					post: ie,
					postId: ie.id
				}) : o.a.createElement(k.a, {
					postId: s
				}, o.a.createElement(y.b, {
					className: Q.a.postContainer,
					eventFactory: function(e, t) {
						var s;
						let n = null,
							r = I.x;
						return ie.isSponsored || (r = I.z, n = null !== (s = R.E[t]) && void 0 !== s ? s : R.e.POST), r(c, ne, n, i, d)(e)
					},
					onClick: be,
					post: ie,
					"data-click-id": "hero_unit",
					style: {
						...Object(Y.d)({
							theme: ae,
							flairStyleTemplate: L,
							redditStyle: !1
						}),
						...Object(Y.b)(L)
					}
				}, o.a.createElement(H.a, {
					"data-click-id": "background"
				}, o.a.createElement(j.a, {
					className: Q.a.eventMeta,
					post: ie
				}), o.a.createElement("div", {
					className: Object(n.a)(Q.a.postContent, {}),
					"data-click-id": "body"
				}, o.a.createElement(V.c, {
					className: Q.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: ie,
					subredditOrProfile: ce
				}), o.a.createElement("div", {
					className: Q.a.postItemTitleContainer
				}, o.a.createElement(W.c, {
					hideSourceLink: !0,
					post: ie,
					size: W.b.Medium,
					isOverlay: !1
				}), !F && le && o.a.createElement(G.a, {
					className: Q.a.outboundLink,
					href: (null === (t = null == ie ? void 0 : ie.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: ie.isSponsored,
					postId: ie.id,
					source: ie.source
				}, Object(U.a)(ie))), function() {
					let e = o.a.createElement(o.a.Fragment, null);
					const t = !!ie.source && Object(h.a)(ie.source.url) || !!ie.thumbnail && Object(h.a)(ie.thumbnail.url),
						s = !(null == ue ? void 0 : ue.type) && t,
						r = Object(n.a)(Q.a.mediaWrapper, {
							[Q.a.marginCancel]: F && !!ie.source,
							[Q.a.promotedTrend]: ie.isSponsored
						});
					if (s) e = o.a.createElement("div", {
						className: r
					}, o.a.createElement(E.b, {
						className: Q.a.thumbnail,
						post: ie,
						templatePlaceholderImage: ee,
						usePreview: !0
					}));
					else if (ue)
						if (ue.type !== M.o.RTJSON && ue.type !== M.o.TEXT) e = o.a.createElement("div", {
							className: Object(n.a)(r, me && Q.a.twitterEmbed),
							onClickCapture: he,
							ref: e => l.current = e
						}, o.a.createElement(g.a, {
							className: Q.a.mediaContent,
							autoplayPref: m,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: ie.isSponsored,
							post: D || ie,
							primaryContent: !0,
							scrollerItemRef: e => u.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = o.a.createElement("div", {
								className: Q.a.mediaPlaceholder
							}), (ue.type === M.o.RTJSON && ue.richtextContent || ue.type === M.o.TEXT && ue.content) && Object(N.a)(ie, null == ae ? void 0 : ae.subredditContext) && (e = o.a.createElement("div", {
								className: r,
								onClickCapture: be,
								ref: e => l.current = e
							}, o.a.createElement(g.a, {
								autoplayPref: m,
								className: Q.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: D || ie,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), o.a.createElement("div", {
								className: Q.a.seeMore
							}, $._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), F && ie.source && o.a.createElement(q.a, {
					className: Q.a.adLinkWrapper,
					ctaExperimentDesign: A && "card"
				}, o.a.createElement(G.a, {
					className: Object(n.a)(Q.a.outboundLink, {
						[Q.a.ctaExperiment]: A
					}),
					href: ie.source.url.replace(p.a.redditUrl, ""),
					isSponsored: ie.isSponsored,
					postId: ie.id,
					source: ie.source
				}, ie.source.displayText), ie.callToAction && o.a.createElement(J.a, {
					className: Q.a.adCallToAction,
					href: ie.source.url.replace(p.a.redditUrl, ""),
					isSponsored: ie.isSponsored,
					postId: ie.id,
					source: ie.source,
					showCTAExperiment: A
				}, ie.callToAction)), !ie.isSponsored && o.a.createElement(K.c, {
					className: Object(n.a)(Q.a.postItemFlatlistContainer),
					post: ie
				}), o.a.createElement(v.d, null)))))
			}
			var ne = s("./src/lib/LRUCache/index.ts"),
				re = s("./src/reddit/components/Scroller/Simple.tsx"),
				oe = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				ae = s("./src/reddit/hooks/usePageLayer.ts"),
				ie = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const ce = 376,
				de = new ne.a(1);

			function le(e) {
				let {
					discoveryUnit: t,
					listingKey: s,
					searchOptions: n,
					postId: r,
					children: i
				} = e;
				const c = Object(a.d)(),
					d = Object(ae.a)();
				if (!t || !r) return null;
				const l = () => {
					const e = `entered-hero-unit-${r}`;
					let o = oe.a.get(e);
					if (void 0 === o) {
						const a = t.layout.viewTypeWeb === ie.b.PromotedTrendHero;
						o = () => {
							c((e, o) => Object(I.A)(o(), t, r, n, d, s, a))
						}, oe.a.set(e, o)
					}
					return o
				};
				return o.a.createElement(re.b, null, (() => {
					const e = `hero-unit-search-${s}`;
					let n;
					return void 0 === (n = de.get(e)) && (n = {
						estHeight: ce,
						trackOnEnteredViewport: l(),
						id: t.id,
						render: () => i
					}), de.set(e, n), [n]
				})())
			}
			var ue = s("./src/reddit/constants/page.ts"),
				me = s("./src/reddit/helpers/trackers/screenview.ts"),
				pe = s("./src/reddit/hooks/useTracking.ts"),
				be = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				he = s("./src/reddit/selectors/listings.ts"),
				xe = s("./src/reddit/selectors/platform.ts");
			const fe = e => {
				const t = e.listings.activeKey,
					s = e.searchDiscoveryUnits.models[t];
				return s || {}
			};
			var Oe = s("./src/reddit/selectors/searchFix.ts"),
				je = s("./src/reddit/selectors/searchResults.ts"),
				ve = s("./src/telemetry/index.ts"),
				ge = s("./src/telemetry/models/Timer.ts");
			const {
				Hero: ye,
				PromotedTrendHero: Ee
			} = ie.b;

			function Ce(e) {
				const t = Object.values(e).find(e => e.layout.viewTypeWeb === ye || e.layout.viewTypeWeb === Ee);
				if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
			}
			var _e = s("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				Se = s("./src/reddit/pages/SearchResults/index.tsx"),
				ke = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				Ne = s.n(ke);
			const {
				fbt: we
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Te = `${p.a.assetPath}/img/telescope-snoo.png`;
			var Pe;

			function Ie(e) {
				let {
					query: t,
					type: s,
					searchOptions: a,
					tab: i
				} = e;
				const c = Object(pe.a)();
				Object(r.useEffect)(() => {
					c(Object(R.o)(s, a))
				}, [s]);
				const d = a.restrict_sr || Se.pageConfig[i].sidebar;
				return o.a.createElement("div", {
					className: Object(n.a)(Ne.a.noResults, d && Ne.a.withSidebar),
					"data-testid": "no-results"
				}, o.a.createElement("img", {
					alt: we._("No results image", null, {
						hk: "1BoGUJ"
					}),
					src: Te,
					className: Ne.a.image
				}), o.a.createElement("h2", {
					className: Ne.a.header
				}, we._("Hm... we couldn’t find any results for “", null, {
					hk: "4fFM7J"
				}), we._("{search query}", [we._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"), o.a.createElement("p", {
					className: Ne.a.text
				}, we._("Double-check your spelling or try different keywords to {=adjust your search}", [we._param("=adjust your search", o.a.createElement("button", {
					className: Ne.a.button,
					onClick: () => {
						const e = document.querySelector('input[type="search"]');
						_e.b.set(_e.a.ADJUST_SEARCH_BUTTON), null == e || e.focus()
					}
				}, we._("adjust your search", null, {
					hk: "1pUIox"
				})))], {
					hk: "33XStx"
				})))
			}! function(e) {
				e.Comments = "comments", e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(Pe || (Pe = {}));
			var Re = s("./src/reddit/components/PostList/index.tsx"),
				Me = s("./src/reddit/components/SearchPost/index.tsx"),
				Le = s("./src/reddit/constants/postLayout.ts"),
				Be = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Fe = s("./src/reddit/helpers/trackers/post.ts"),
				Ae = s("./src/reddit/selectors/tracking.ts"),
				De = s("./src/reddit/connectors/PostList/index.ts");
			const Ue = Object(De.c)(),
				He = Object(D.c)({
					...De.d,
					layout: () => Le.g.Search,
					viewportDataLoaded: Ae.a,
					postIds: (e, t) => {
						let {
							heroPostId: s,
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: o,
							searchDiscoveryUnit: a
						} = t;
						const i = a && a.postOrder,
							c = Ce(fe(e));
						if (i && i.length > 0) {
							if (s) {
								const t = i.indexOf(s);
								if (t > -1) return i.splice(t, 1), Object(B.X)(e, i)
							}
							return Object(B.X)(e, i)
						}
						const {
							models: d
						} = e.posts;
						return Object(B.D)(e, n, r, !!o).filter(e => d && d[e] && !d[e].isSponsored && c !== e)
					}
				}),
				We = (e, t, s, n) => {
					if (s) return Object(Fe.k)(e, t);
					const {
						listingKey: r,
						searchOptions: o,
						pageLayer: a,
						searchDiscoveryUnit: i,
						sendEvent: c
					} = n;
					return c(Object(R.s)(e, o, a, R.E[t], r, i)), Object(Fe.k)(e, t)
				},
				Ke = Object(a.b)(He, (e, t) => ({
					...Object(De.b)(e),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(R.x)(t.listingKey, e, t.searchOptions, t.pageLayer, t.searchDiscoveryUnit))
					}
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					openPost: e => t.openPost(e),
					postClickEventFactory: We,
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? Be.a : Me.a
					}
				}));
			const Ve = (e => Object(C.c)(Ue(Ke(e))))(Re.a),
				Ge = () => null,
				qe = Object(D.c)({
					viewTreatment: je.D,
					searchDiscoveryUnitsModels: fe,
					hasPostResults: je.o,
					apiPending: he.d,
					postIds: B.z,
					posts: B.y,
					loadMore: he.g,
					isOverlayOpen: xe.i
				});

			function Je(e) {
				const {
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: i
				} = e, p = Object(ae.a)(), b = Object(pe.a)(), h = Object(a.d)(), {
					viewTreatment: x,
					searchDiscoveryUnitsModels: f,
					hasPostResults: O,
					postIds: j,
					isOverlayOpen: v,
					apiPending: g
				} = Object(a.e)(t => qe(t, e)), y = Object(l.a)(v), E = Object(r.useRef)(!1), C = void 0 === g || g, _ = (e, s) => b(Object(me.v)(t, i, s, e, p, Object(Oe.b)({
					pageLayer: p
				})));
				let S;
				Object(r.useEffect)(() => {
					O && !c()(j) && T()
				}, [O, j]), Object(r.useEffect)(() => {
					y && !v && T()
				}, [v, y]), x === ie.c.Trending && (S = Ce(f));
				const k = Object(u.a)(i.q || ""),
					N = Object(r.useMemo)(() => Object.values(f).find(e => e.name === be.l || e.name === be.f), [f]),
					w = S && N;

				function T() {
					if (ve.c.has(t) || !E.current) {
						E.current = !0;
						const e = ve.c.has(t) ? ve.c.end(t) : 0;
						_(e, ge.TimerType.InApp)
					}
				}
				return O || w || C ? o.a.createElement(o.a.Fragment, null, w && o.a.createElement(le, {
					key: S,
					postId: S,
					discoveryUnit: N,
					searchOptions: i,
					listingKey: t
				}, o.a.createElement(se, {
					key: S,
					discoveryUnit: N,
					postId: S,
					listingKey: t,
					searchOptions: i
				})), (O || C) && o.a.createElement(Ve, {
					key: "posts",
					listingKey: t,
					listingName: s,
					location: n,
					inSubredditOrProfile: !1,
					noPostsComponent: Ge,
					onLoadMore: function() {
						h(Object(m.n)([d.ic.Posts]))
					},
					searchOptions: i
				})) : o.a.createElement(Ie, {
					query: k,
					type: Pe.Posts,
					searchOptions: i,
					tab: ue.h.Posts
				})
			}
			var Ye = s("./src/reddit/selectors/experiments/optimizedSerpPosts.ts"),
				ze = s("./node_modules/lodash/constant.js"),
				Xe = s.n(ze),
				Ze = s("./node_modules/lodash/times.js"),
				Qe = s.n(Ze),
				$e = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				et = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				tt = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				st = s.n(tt);
			const nt = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(a.e)(e => Object(je.d)(e, {
					listingKey: t
				})), r = Object(a.e)(e => Object(je.u)(e, {
					listingKey: t
				})), i = Boolean(r && r.token) && n.length > 0;
				return o.a.createElement("div", {
					className: st.a.container,
					"data-testid": "comments-list"
				}, o.a.createElement($e.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: d.hc.Comments
				}), i && o.a.Children.toArray(Qe()(3, Xe()(o.a.createElement(et.a, {
					className: st.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var rt = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const ot = (e, t) => Boolean(t && t.token) && e.length > 0,
				at = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, n = Object(a.e)(e => Object(je.g)(e, {
						listingKey: t
					})), r = Object(a.e)(e => Object(je.v)(e, {
						listingKey: t
					}));
					return o.a.createElement("div", {
						className: st.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && o.a.createElement($e.b, {
						identifiers: n,
						listingKey: t,
						searchOptions: s,
						componentType: d.hc.Subreddits
					}), ot(n, r) && o.a.Children.toArray(Qe()(3, Xe()(o.a.createElement(rt.a, {
						className: st.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var it = s("./src/reddit/components/SearchResultsContent/index.m.less"),
				ct = s.n(it);
			const dt = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(a.e)(e => Object(je.a)(e, {
					listingKey: t
				})), r = Object(a.e)(e => Object(je.t)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: st.a.container,
					"data-testid": "people-list"
				}, !s.is_multi && o.a.createElement($e.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: d.hc.Users
				}), ot(n, r) && o.a.Children.toArray(Qe()(3, Xe()(o.a.createElement(rt.a, {
					className: st.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var lt = s("./src/reddit/components/SearchPost/Placeholder.tsx");
			const ut = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(a.e)(e => Object(je.x)(e, {
					listingKey: t
				})), r = Object(a.e)(e => Object(je.w)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: st.a.container,
					"data-testid": "posts-list"
				}, o.a.createElement($e.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: d.hc.Posts
				}), function(e, t) {
					return Boolean(t && t.token) && e.length > 0
				}(n, r) && o.a.Children.toArray(Qe()(3, Xe()(o.a.createElement(lt.a, {
					className: st.a.loadMoreItem,
					isLoading: !0
				})))))
			};

			function mt(e) {
				const {
					hasResults: t,
					searchOptions: s,
					noResultsType: n,
					searchResultsTab: r,
					pendingSelector: i
				} = e, c = Object(u.a)(s.q || ""), d = Object(a.e)(t => i(t, e)), l = void 0 === d || d;
				return o.a.createElement(o.a.Fragment, null, t || l ? e.children : o.a.createElement(Ie, {
					searchOptions: s,
					query: c,
					type: n,
					tab: r
				}))
			}

			function pt(e) {
				const {
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: i,
					tab: c
				} = e, d = Object(a.e)(e => Object(je.n)(e, {
					listingKey: t
				})), l = Object(a.e)(e => Object(je.l)(e, {
					listingKey: t
				})), u = Object(a.e)(e => Object(je.m)(e, {
					listingKey: t
				})), m = Object(a.e)(e => Object(je.p)(e, {
					listingKey: t
				})), p = Object(a.e)(e => Object(Ye.a)(e));
				return o.a.createElement("div", {
					className: Object(n.a)(ct.a.resultsContainer)
				}, c === ue.h.Listings ? o.a.createElement(mt, {
					hasResults: d,
					searchOptions: i,
					noResultsType: Pe.Communities,
					searchResultsTab: ue.h.Listings,
					listingKey: t,
					pendingSelector: je.i
				}, o.a.createElement(at, {
					listingKey: t,
					searchOptions: i,
					key: ue.h.Listings
				})) : c === ue.h.People ? o.a.createElement(mt, {
					hasResults: l,
					searchOptions: i,
					noResultsType: Pe.People,
					searchResultsTab: ue.h.People,
					listingKey: t,
					pendingSelector: je.c
				}, o.a.createElement(dt, {
					listingKey: t,
					searchOptions: i,
					key: ue.h.People
				})) : c === ue.h.Comments ? o.a.createElement(mt, {
					hasResults: u,
					searchOptions: i,
					noResultsType: Pe.Comments,
					searchResultsTab: ue.h.Comments,
					listingKey: t,
					pendingSelector: je.f
				}, o.a.createElement(nt, {
					listingKey: t,
					searchOptions: i,
					key: ue.h.Comments
				})) : p ? o.a.createElement(mt, {
					hasResults: m,
					searchOptions: i,
					noResultsType: Pe.Posts,
					searchResultsTab: ue.h.Posts,
					listingKey: t,
					pendingSelector: je.z
				}, o.a.createElement(ut, {
					listingKey: t,
					searchOptions: i,
					key: ue.h.Comments
				})) : o.a.createElement(Je, {
					key: t,
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: i
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/selectors/searchFix.ts"),
				r = s("./src/reddit/selectors/subreddit.ts");
			const o = (e, t) => {
				const s = Object(n.a)(e, t);
				return s ? Object(r.B)(e, {
					subredditName: s
				}) : null
			}
		},
		"./src/reddit/components/SearchResultsNav/index.m.less": function(e, t, s) {
			e.exports = {
				searchResultsNav: "_21H_PIzpqfpibB_EcUDwpj",
				pillRow: "_3XkfKrHLCXvnVsLyBJXzzv",
				pillElement: "_1gui9gwvmz0Ta6TaySS6jf",
				nsfwToggleContainer: "_1nT46ChOZ3tgGqgs2CyMeJ",
				searchSwitcherContainer: "_10JrVcY3xBcUNO7dNh0Js2"
			}
		},
		"./src/reddit/components/SearchResultsNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return H
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/noop.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/constants/colors.ts"),
				u = s("./src/lib/makeSearchKey/index.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts");
			const b = () => {
				const [e, t] = Object(a.useState)(!1);
				return Object(a.useEffect)(() => {
					var e;
					const s = null !== (e = Object(p.A)("should-show-comment-tab-tooltip")) && void 0 !== e ? e : 2;
					t(Boolean(s)), 2 === s ? Object(p.Eb)("should-show-comment-tab-tooltip", 1) : 1 === s && Object(p.Eb)("should-show-comment-tab-tooltip", !1)
				}, []), {
					get shouldShowCommentTabTooltip() {
						return e
					},
					resetShowCommentTabTooltip() {
						e && t(!1)
					}
				}
			};
			var h = s("./src/reddit/constants/page.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				j = s("./src/reddit/helpers/trackers/searchResults.ts"),
				v = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				g = s("./src/reddit/hooks/useTracking.ts"),
				y = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				E = s("./src/reddit/selectors/searchResults.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				S = s("./node_modules/history/esm/history.js"),
				k = s("./node_modules/react-router-redux/es/index.js"),
				N = s("./src/lib/addQueryParams/index.ts"),
				w = s("./src/lib/classNames/index.ts"),
				T = s("./src/lib/colors/constants.ts"),
				P = s("./src/reddit/constants/parameters.ts"),
				I = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				R = s("./src/reddit/hooks/usePageLayer.ts"),
				M = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				L = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				B = s.n(L);
			const F = "safe-search-toggle";

			function A(e) {
				let {
					searchOptions: t
				} = e;
				const s = Object(g.a)(),
					[r, o] = i.a.useState(!0);
				Object(a.useEffect)(() => {
					var e;
					o(null), p(!!(null === (e = null == x ? void 0 : x.queryParams) || void 0 === e ? void 0 : e.include_over_18))
				}, []);
				const d = Object(v.a)({}),
					{
						nsfwSessionSetting: u,
						setNsfwSessionSetting: p
					} = Object(M.b)(),
					{
						shouldShowTooltip: b,
						resetShowTooltip: h
					} = Object(M.c)(!u);
				Object(a.useEffect)(() => {
					if (b) return window.addEventListener("click", h), () => {
						window.removeEventListener("click", h)
					}
				}, [b]);
				const x = Object(R.a)(),
					f = Object(c.d)();
				d.arrowProps.style = {
					...d.arrowProps.style,
					borderBottom: `3px solid ${l.a.alien600}`
				}, d.popperProps.style = {
					...d.popperProps.style,
					backgroundColor: l.a.alien600,
					top: "4px",
					maxWidth: "360px",
					textAlign: "center"
				};
				const y = null != r ? r : !u;
				return i.a.createElement("div", {
					className: Object(w.a)(B.a.searchNSFWToggle),
					"data-testid": F,
					onMouseEnter: d.show,
					onMouseLeave: d.hide
				}, i.a.createElement("label", {
					htmlFor: F,
					className: Object(w.a)(B.a.searchNSFWToggleLabel)
				}, n.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), i.a.createElement(I.a, {
					activeColorOverride: T.a,
					id: F,
					onToggle: function() {
						var e;
						s(Object(j.i)(!y, t, x));
						const n = !u;
						p(n);
						const {
							include_over_18: r,
							...o
						} = (null == x ? void 0 : x.queryParams) || {}, a = (null === (e = null == x ? void 0 : x.routeMatch) || void 0 === e ? void 0 : e.match.url) || O.a, i = {
							...o,
							...n && {
								[P.h]: "1"
							}
						}, c = {
							pathname: a,
							search: Object(N.a)("", {
								...i
							})
						};
						f(Object(k.b)(Object(S.c)(c)))
					},
					on: y,
					redditStyle: !0,
					ref: d.target.ref
				}), i.a.createElement(m.a, {
					visible: b || d.visible,
					arrowProps: d.arrowProps,
					popperProps: d.popperProps
				}, y ? n.fbt._("You won’t see adult or Not Safe for Work (NSFW) search results unless you turn Safe Search off", null, {
					hk: "tefl0"
				}) : n.fbt._("You’ll see adult and Not Safe for Work (NSFW) search results unless you turn Safe Search on", null, {
					hk: "1SDOFf"
				})))
			}
			var D = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				U = s.n(D);

			function H(e) {
				let {
					activeTab: t,
					searchOptions: s,
					searchSwitcher: r
				} = e;
				const p = Object(g.a)(),
					S = Object(c.e)(C.kb),
					k = Object(c.e)(E.D),
					N = Object(x.eb)(),
					w = k === y.c.Trending,
					T = Object(v.a)({}),
					{
						shouldShowCommentTabTooltip: P,
						resetShowCommentTabTooltip: I
					} = b();
				T.arrowProps.style = {
					...T.arrowProps.style,
					borderLeft: "4px solid transparent",
					borderRight: "4px solid transparent",
					top: "-3px",
					left: "50%",
					transform: "translateX(-50%)",
					borderBottom: `3px solid ${l.a.alien600}`
				}, T.popperProps.style = {
					...T.popperProps.style,
					backgroundColor: l.a.alien600,
					top: "100%",
					left: "50%",
					transform: "translateX(-50%)",
					whiteSpace: "nowrap"
				}, Object(a.useEffect)(() => {
					if (P) return window.addEventListener("click", I), () => {
						window.removeEventListener("click", I)
					}
				}, [P]);
				const R = {
						condition: !0,
						active: t === h.h.Posts,
						target: j.b.Posts,
						contentType: d.ic.Posts,
						text: n.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					M = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === h.h.Listings,
						target: j.b.Communities,
						contentType: d.ic.Subreddits,
						text: n.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					L = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === h.h.People,
						target: j.b.People,
						contentType: d.ic.Users,
						text: n.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					B = [R, {
						condition: !(s.source === u.a.Trending || s.source === u.a.PromotedTrend),
						active: t === h.h.Comments,
						target: j.b.Comments,
						contentType: d.ic.Comments,
						text: n.fbt._("Comments", null, {
							hk: "z0DGA"
						}),
						showTooltip: !0
					}, M, L],
					F = S && !w && "1" !== s.sr_nsfw;
				return i.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: U.a.searchResultsNav
				}, i.a.createElement("div", {
					className: U.a.pillRow,
					role: "tablist"
				}, B.filter(e => e.condition).map(e => {
					const {
						active: t,
						target: r,
						text: a,
						contentType: c
					} = e;
					return i.a.createElement(f.default, {
						key: r,
						"data-testid": r,
						to: Object(O.b)({
							searchType: c,
							pageLayer: N
						}),
						"aria-selected": t,
						role: "tab",
						className: U.a.pillElement,
						onClick: () => (e => {
							e.active || p(Object(j.n)(e.target, s))
						})(e)
					}, i.a.createElement(m.a, {
						visible: Boolean(e.showTooltip) && P,
						arrowProps: T.arrowProps,
						popperProps: T.popperProps
					}, n.fbt._("Now you can search comments!", null, {
						hk: "LePo6"
					})), i.a.createElement(_.a, {
						active: t,
						onClick: o.a,
						variant: _.b.TAB_GROUP
					}, a))
				})), r && i.a.createElement("div", {
					className: U.a.searchSwitcherContainer
				}, r), F && i.a.createElement("div", {
					className: U.a.nsfwToggleContainer
				}, i.a.createElement(A, {
					searchOptions: s
				})))
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DpriHZnFiOfa0afZpg8vf",
				header: "_3n4VKjpr-iVnAmYcon-YbI",
				link: "_2tLIUcp3fYt74ZlVikNlz5",
				noResults: "YoadDFUejEmzEbJmjTvHn"
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return D
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/config.ts"),
				l = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				u = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				m = s.n(u),
				p = s("./src/lib/lessComponent.tsx");
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = p.a.div("ButtonContainer", m.a), x = p.a.div("Container", m.a), f = p.a.img("BannerImg", m.a), O = p.a.img("SnooImg", m.a), j = p.a.div("CommunityText", m.a);
			var v = () => o.a.createElement(x, null, o.a.createElement(f, {
					src: `${d.a.assetPath}/img/search-results-community-banner.png`
				}), o.a.createElement(O, {
					src: `${d.a.assetPath}/img/snoo-thinking.png`
				}), o.a.createElement(j, null, b._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), o.a.createElement(h, null, o.a.createElement(l.a, {
					className: m.a.Button,
					eventSource: "sidebar"
				}))),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				y = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				E = s("./src/reddit/components/SidebarContainer/index.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				_ = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				S = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				k = s("./src/reddit/controls/InternalLink/index.tsx"),
				N = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				w = s("./src/reddit/hooks/usePageLayer.ts"),
				T = s("./src/reddit/selectors/platform.ts"),
				P = s("./src/reddit/selectors/searchResults.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/selectors/widgets.ts"),
				L = s("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				B = s.n(L);
			const F = Object(i.c)({
					authorIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(P.a)(e, {
							listingKey: s
						})
					},
					authorLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(P.t)(e, {
							listingKey: s
						})
					},
					communityIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(P.g)(e, {
							listingKey: s
						})
					},
					communitiesLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(P.v)(e, {
							listingKey: s
						})
					},
					currentSubreddit: T.e,
					isLoggedIn: R.Q,
					hasCommunityResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(P.n)(e, {
							listingKey: s
						})
					},
					hasAuthorResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(P.l)(e, {
							listingKey: s
						})
					},
					subredditId: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(I.H)(e, s)
					},
					postFlairWidgets: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(I.H)(e, s);
						return Object(M.g)(e, {
							subredditId: n
						})
					},
					idCardWidget: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(M.d)(e, {
							subredditName: s
						})
					}
				}),
				A = e => {
					let {
						authorIdentifiers: t,
						authorLoadMore: s,
						className: r,
						communityIdentifiers: a,
						communitiesLoadMore: i,
						hasAuthorResults: d,
						hasCommunityResults: l,
						listingKey: u,
						listingName: m,
						idCardWidget: p,
						isLoggedIn: b,
						postFlairWidgets: h,
						searchOptions: x,
						currentSubreddit: f
					} = e;
					const O = Boolean(f && m === f.name && x.restrict_sr),
						j = !!x.is_multi,
						T = a.length > y.a || !!i,
						P = t.length > y.a || !!s;
					let I;
					const R = Object(w.a)();
					return O ? I = o.a.createElement(o.a.Fragment, null, p && o.a.createElement(g.a, {
						listingName: m
					}), h && h.map((e, t) => o.a.createElement(C.a, {
						key: `widgetSpacer-${t}`
					}, o.a.createElement(S.a, {
						subredditName: m,
						widget: e
					})))) : j || (I = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: B.a.container,
						"data-testid": "communities-list"
					}, o.a.createElement("h4", {
						className: B.a.header
					}, n.fbt._("Communities", null, {
						hk: "3cMR66"
					})), l ? o.a.createElement(o.a.Fragment, null, !x.is_multi && o.a.createElement(y.b, {
						componentType: c.hc.Subreddits,
						identifiers: a,
						listingKey: u,
						searchOptions: x,
						sidebar: !0
					}), T && o.a.createElement(k.default, {
						to: Object(N.b)({
							searchType: c.ic.Subreddits,
							pageLayer: R
						})
					}, o.a.createElement("p", {
						className: B.a.link
					}, n.fbt._("See more communities", null, {
						hk: "2VoaHj"
					})))) : o.a.createElement("p", {
						className: B.a.noResults
					}, n.fbt._("No results", null, {
						hk: "3feoKq"
					}))), o.a.createElement("div", {
						className: B.a.container,
						"data-testid": "authors-list"
					}, o.a.createElement("h4", {
						className: B.a.header
					}, n.fbt._("People", null, {
						hk: "2M8TqB"
					})), d ? o.a.createElement(o.a.Fragment, null, !x.is_multi && o.a.createElement(y.b, {
						componentType: c.hc.Users,
						identifiers: t,
						listingKey: u,
						searchOptions: x,
						sidebar: !0
					}), P && o.a.createElement(k.default, {
						to: Object(N.b)({
							searchType: c.ic.Users,
							pageLayer: R
						})
					}, o.a.createElement("p", {
						className: B.a.link
					}, n.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : o.a.createElement("p", {
						className: B.a.noResults
					}, n.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), b && o.a.createElement("div", {
						className: B.a.container
					}, o.a.createElement(v, null)))), o.a.createElement(E.a, {
						"data-testid": "search-results-sidebar",
						className: r
					}, I, o.a.createElement(_.a, null))
				},
				D = e => {
					const t = Object(a.e)(t => F(t, e)),
						s = {
							...e,
							...t
						};
					return o.a.createElement(A, s)
				}
		},
		"./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				tertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				AllRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j",
				allRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less": function(e, t, s) {
			e.exports = {
				SelectOption: "_iuAkxGWujgYETf2Xyv89",
				selectOption: "_iuAkxGWujgYETf2Xyv89",
				mIsSelected: "hxyadGitKiIMfl81IVThw"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/index.m.less": function(e, t, s) {
			e.exports = {
				caret: "OGoNN0lGfOACQsVwIa1wo",
				Wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				caretOpen: "_1ILOkGbdwmhXOmzBDCYXFT",
				filterButton: "BZDMD8yWu5imupa73nqYE",
				hasValue: "_1HyZhQLyitFqci_zC5jGCy",
				Dropdown: "_3RwR0q62tl_HktsM6eNnOn",
				dropdown: "_3RwR0q62tl_HktsM6eNnOn"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.m.less": function(e, t, s) {
			e.exports = {
				RightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				rightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				ArrowRight: "FGX7ywlMTix8BeUr5G7TE",
				arrowRight: "FGX7ywlMTix8BeUr5G7TE",
				Component: "_1fPZw9wLFaCEzhzp2Hkx18",
				component: "_1fPZw9wLFaCEzhzp2Hkx18",
				ComponentRedesign: "_26jxFFm8Z3TxPyZxoddAGy",
				componentRedesign: "_26jxFFm8Z3TxPyZxoddAGy"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return be
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/selectors/searchResults.ts"),
				h = s("./src/lib/addQueryParams/index.ts");
			const x = (e, t, s, n, r, o) => {
				const a = e && e[s],
					i = {};
				let c = Object(h.a)(t, {
					[s]: r
				});
				const d = [];
				for (const l of n) {
					const e = Object(h.a)(t, {
						[s]: l
					});
					i[e] = o[l](), d.push(e), a === l && (c = e)
				}
				return {
					optionLabels: i,
					options: d,
					value: c
				}
			};
			var f = s("./src/higherOrderComponents/asTooltip.tsx"),
				O = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/actions/tooltip.ts"),
				y = s("./src/reddit/selectors/tooltip.ts");
			const E = Object(a.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(y.b)(s)(e)
				}
			});
			var C = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				_ = s.n(C),
				S = s("./node_modules/query-string/index.js"),
				k = s.n(S),
				N = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/constants/history.ts"),
				P = s("./src/reddit/controls/Dropdown/Row.tsx"),
				I = s("./src/reddit/helpers/history/index.ts"),
				R = s("./node_modules/lodash/fromPairs.js"),
				M = s.n(R),
				L = s("./src/lib/extractQueryParams/index.ts"),
				B = s("./src/reddit/helpers/correlationIdTracker.ts"),
				F = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				A = s("./src/reddit/helpers/trackers/searchResults.ts"),
				D = s("./src/reddit/selectors/telemetry.ts");
			const U = (e, t) => {
					const s = M()([...Object(L.a)(e)]);
					return Object(u.zc)(s.sort) && (t.sort = s.sort), Object(u.Ac)(s.t) && (t.t = s.t), t
				},
				H = (e, t, s, n) => () => e(e => ({
					...Object(A.g)(e),
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(B.c)(B.a.SearchResults),
					actionInfo: D.d(e),
					search: D.cb(e, U(s, n), F.a.SERP)
				})),
				W = e => {
					let {
						isSelected: t,
						option: s,
						searchOptions: n,
						type: o,
						styles: a,
						displayText: c
					} = e;
					const d = Object(w.b)();
					return r.a.createElement(N.a, {
						key: s,
						to: {
							pathname: k.a.parseUrl(s).url,
							state: {
								[T.b.SearchOriginPage]: Object(I.b)(T.b.SearchOriginPage)
							},
							search: s.replace(k.a.parseUrl(s).url + "?", "")
						},
						onClick: H(d, o, s, n)
					}, r.a.createElement(P.b, {
						className: Object(i.a)(a.SelectOption, t && a.mIsSelected),
						displayText: c,
						isSelected: t
					}))
				};
			var K = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				V = s.n(K);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const q = Object(f.a)(e => r.a.createElement(j.a, G({
					className: _.a.Component
				}, e))),
				J = e => {
					let {
						active: t,
						label: s,
						options: n,
						optionLabels: a,
						searchOptions: c,
						tooltipId: d,
						type: l,
						value: u,
						...m
					} = e;
					const {
						isOpen: p,
						onClick: b
					} = (e => {
						const {
							isOpen: t
						} = Object(o.e)(t => E(t, {
							tooltipId: e
						})), s = Object(o.d)();
						return {
							isOpen: t,
							onClick: t ? () => s(Object(g.i)()) : () => s(Object(g.f)({
								tooltipId: e
							}))
						}
					})(d);
					return r.a.createElement("div", {
						className: _.a.Wrapper
					}, r.a.createElement(O.a, G({}, m, {
						active: p,
						className: Object(i.a)(_.a.filterButton, t && _.a.hasValue),
						onClick: b,
						variant: O.b.TAB_GROUP
					}), s, r.a.createElement(v.a, {
						name: "caret_down",
						className: Object(i.a)(_.a.caret, p && _.a.caretOpen)
					})), r.a.createElement("div", {
						id: d
					}, r.a.createElement(q, {
						className: _.a.Dropdown,
						isOpen: p,
						tooltipId: d
					}, n.map((e, t) => r.a.createElement(W, {
						displayText: a[e],
						key: t,
						isSelected: e === u,
						option: e,
						searchOptions: c,
						styles: {
							mIsSelected: V.a.mIsSelected,
							SelectOption: V.a.SelectOption
						},
						type: l
					})))))
				},
				Y = [u.fc.Relevance, u.fc.Hot, u.fc.Top, u.fc.New, u.fc.Comments],
				z = {
					[u.fc.Hot]: () => m.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[u.fc.Relevance]: () => m.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[u.fc.Top]: () => m.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[u.fc.New]: () => m.fbt._("New", null, {
						hk: "23egpt"
					}),
					[u.fc.Comments]: () => m.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = [u.oc.HOUR, u.oc.DAY, u.oc.WEEK, u.oc.MONTH, u.oc.YEAR, u.oc.ALL],
				Q = {
					[u.oc.HOUR]: () => m.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[u.oc.DAY]: () => m.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[u.oc.WEEK]: () => m.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[u.oc.MONTH]: () => m.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[u.oc.YEAR]: () => m.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[u.oc.ALL]: () => m.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = [u.ec.Sort, u.ec.Time],
				te = {
					[u.ec.Sort]: e => {
						let t = Object(o.e)(b.C);
						t = t !== u.Vb ? t : void 0;
						const {
							options: s,
							optionLabels: n,
							value: a
						} = x(e.queryParams, e.url, p.y, Y, t || u.Vb, z), i = {
							"data-testid": "search-results-filter-sort",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: a
						}, c = Boolean(e.queryParams[p.y] || t);
						return r.a.createElement(J, X({}, i, {
							active: c,
							label: c ? n[a] : m.fbt._("Sort", null, {
								hk: "2COMme"
							}),
							type: u.ec.Sort
						}))
					},
					[u.ec.Time]: e => {
						const t = Object(o.e)(b.C),
							{
								options: s,
								optionLabels: n,
								value: a
							} = x(e.queryParams, e.url, p.C, Z.slice().reverse(), u.Wb, Q);
						if (!e.searchOptions || e.searchOptions.sort === u.bb.NEW || e.searchOptions.sort === u.bb.HOT || t === u.bb.NEW || t === u.bb.HOT) return null;
						const i = {
							"data-testid": "search-results-filter-time",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: a
						};
						return r.a.createElement(J, $({}, i, {
							active: Boolean(e.queryParams[p.C]),
							label: e.queryParams[p.C] ? n[a] : m.fbt._("Time", null, {
								hk: "3hL0P3"
							}),
							type: u.ec.Filter
						}))
					}
				};
			var se = s("./src/lib/lessComponent.tsx"),
				ne = s("./src/reddit/controls/Button/index.tsx"),
				re = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				oe = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				ae = s.n(oe);
			const {
				fbt: ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ce = se.a.wrapped(ne.r, "TertiaryButton", ae.a), de = se.a.wrapped(ce, "AllRedditResultsButton", ae.a), le = e => {
				const t = Object(w.b)();
				return r.a.createElement(N.a, {
					to: Object(re.a)(e.queryParams)
				}, r.a.createElement(de, {
					onClick: () => {
						t(t => ({
							...Object(A.g)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, ie._("All reddit results", null, {
					hk: "2IBCsX"
				}), r.a.createElement(v.a, {
					name: "forward"
				})))
			};
			var ue = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				me = s.n(ue);
			const pe = Object(a.c)({
					subreddit: l.B
				}),
				be = e => {
					const {
						subreddit: t
					} = Object(o.e)(t => pe(t, e)), s = Object(c.eb)(), n = Object(c.X)(s), a = Object(c.db)(s), l = t && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return r.a.createElement(d.a, {
						className: Object(i.a)(me.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, ee.map((t, s) => {
						const o = te[t];
						return r.a.createElement(o, {
							key: s,
							queryParams: n,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: a
						})
					}), l && r.a.createElement(le, {
						queryParams: n,
						searchOptions: e.searchOptions
					}))
				}
		},
		"./src/reddit/components/SearchSwitcher/index.m.less": function(e, t, s) {
			e.exports = {
				searchSwitcher: "_1i7CStyaaHQU2aiG0GdpSA",
				mSr: "_3-pePLWUAV_CAVhht1dfup",
				redesign: "_3Tphf4AA5J39saIlrB1SYD",
				subredditIcon: "_3swS56fqtrGcixPfTzK_Cl",
				searchSwitcherText: "-V0kqUlRHvLoNRUAUmCy9",
				arrowIcon: "N0zmIZbfRSCGk2rUOGHSS"
			}
		},
		"./src/reddit/components/SearchSwitcher/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/ThemeProvider/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/history.ts"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/history/index.ts"),
				h = s("./src/reddit/helpers/trackers/searchResults.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				O = s.n(f);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(h.C)(!!s, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: s
					} = this.props, n = {
						[O.a.mSr]: !!t
					}, {
						pathname: o,
						search: l
					} = a.a.parse(s), u = t ? c.gc.ToSubreddit : c.gc.ToGlobal, h = t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, j._("Show results from", null, {
						hk: "3aVDvz"
					})), r.a.createElement(d.b, {
						className: O.a.subredditIcon,
						subredditOrProfile: t
					}), r.a.createElement("p", {
						className: Object(i.a)(O.a.searchSwitcherText, n)
					}, t.displayText)) : r.a.createElement(r.a.Fragment, null, j._("{=Show results from}{=all of Reddit}", [j._param("=Show results from", r.a.createElement("span", null, j._("Show results from", null, {
						hk: "4l8fSw"
					}))), j._param("=all of Reddit", r.a.createElement("p", {
						className: Object(i.a)(O.a.searchSwitcherText, n)
					}, j._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return r.a.createElement(p.default, {
						className: Object(i.a)(O.a.searchSwitcher, e && O.a.redesign, n),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: o,
							search: l,
							state: {
								searchSwitcherType: u,
								[m.b.SearchOriginPage]: Object(b.b)(m.b.SearchOriginPage)
							}
						}
					}, h, r.a.createElement(x.a, {
						name: "forward",
						className: Object(i.a)(O.a.arrowIcon, n)
					}))
				}
			}
			t.a = Object(u.c)(e => e.subreddit ? r.a.createElement(l.b, {
				subredditName: e.subreddit.name
			}, r.a.createElement(v, e)) : r.a.createElement(v, e))
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				chatIcon: "_1PhtucoKocd-ADJ-JDEoiC",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO",
				modalBody: "T4VmKX-IOkP4UG-B4jUR-"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				c = s("./src/config.ts"),
				d = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/reddit/actions/chat/toggle.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				x = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				f = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				g = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				y = s("./src/reddit/hooks/useTracking.ts"),
				E = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/Post/index.ts"),
				_ = s("./src/reddit/models/Subreddit/index.ts"),
				S = s("./src/reddit/routes/postCreation/constants.ts"),
				k = s("./src/reddit/selectors/activeModalId.ts"),
				N = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/components/ShareMenu/index.m.less"),
				T = s.n(w);
			const P = Object(h.a)(O.a),
				I = Object(i.a)(),
				R = e => {
					let {
						permalink: t,
						onShare: s
					} = e;
					return o.a.createElement(j.b, {
						id: "shareToChat",
						className: T.a.dropdownRow,
						displayText: n.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const e = Object(d.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							s(e)
						}
					}, o.a.createElement(E.a, {
						name: "chat",
						className: T.a.chatIcon
					}))
				},
				M = e => {
					let {
						permalink: t,
						sendEventWithName: s
					} = e;
					return o.a.createElement(j.b, {
						className: T.a.dropdownRow,
						displayText: n.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							s("share_embed"), window.open(`${c.a.rebedMediaUrl}/embed?url=${t}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, o.a.createElement(E.a, {
						name: "embed",
						className: T.a.embedIcon
					}))
				},
				L = e => {
					let {
						onCrosspost: t
					} = e;
					return o.a.createElement(j.b, {
						className: T.a.dropdownRow,
						displayText: n.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: t
					}, o.a.createElement(E.a, {
						name: "crosspost",
						className: T.a.crosspostIcon
					}))
				},
				B = o.a.memo(e => {
					const t = Object(a.d)(),
						s = Object(y.a)(),
						i = Object(a.e)(t => Object(N.b)(e.dropdownId)(t)),
						c = Object(a.e)(t => Object(k.b)(Object(x.a)(e.dropdownId))(t)),
						h = Object(r.useCallback)(() => {
							t(Object(b.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						O = e => t(Object(m.C)(e)),
						w = Object(r.useCallback)(() => {
							e.post && (t(Object(p.d)(e.post.id)), t(Object(u.i)(Object(x.a)(e.post.id))))
						}, [t, e.post]),
						B = !e.subredditType || e.subredditType === _.f.Public,
						F = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						A = Object(r.useCallback)(e => {
							t(Object(l.e)(e)), s(Object(g.a)())
						}, [t, s]);
					return o.a.createElement("div", {
						className: e.className,
						onClick: h,
						id: e.dropdownId
					}, e.children, o.a.createElement(P, {
						className: T.a.dropdown,
						isOpen: i,
						tooltipId: e.dropdownId
					}, o.a.createElement(j.b, {
						className: T.a.dropdownRow,
						displayText: n.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(C.q)(s)) e.sendEventWithName("share_copy", {
								referralId: I
							}), w();
							else {
								const s = Object(d.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), O(s)
							}
						}
					}, o.a.createElement(E.a, {
						name: "link_post",
						className: T.a.linkIcon
					})), F && o.a.createElement(L, {
						onCrosspost: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${S.b}?source_id=${e.post.id}`, "_blank")
						}
					}), B && o.a.createElement(M, {
						permalink: e.permalink,
						sendEventWithName: e.sendEventWithName
					}), o.a.createElement(R, {
						permalink: e.permalink,
						onShare: A
					})), c && e.post && o.a.createElement(x.b, {
						className: T.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: I
							}), O(t)), w()
						},
						url: Object(d.a)(Object(v.a)(e.post.id), {
							[f.q]: I,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = B
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("container", o.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SubredditIcon/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = s.n(c);
			const l = o.a.wrapped(a.b, "SubredditIcon", d.a),
				u = o.a.wrapped(e => r.a.createElement(i.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = s("./src/reddit/selectors/subredditMention.ts");
			class O extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(x.a)({
							...e,
							subredditName: s
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(i.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const j = Object(b.c)(O),
				v = Object(a.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				g = Object(o.b)(v),
				y = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: s,
						subredditName: n,
						userVariant: o,
						rtJsonElementProps: a
					} = e;
					if (!s || !t) return r.a.createElement(j, {
						subredditName: n,
						rtJsonElementProps: a
					});
					switch (o) {
						case h.Uf.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: a
							});
						case h.Uf.SmIconHc:
							return r.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return r.a.createElement(j, {
								subredditName: n,
								rtJsonElementProps: a
							})
					}
				};
			t.b = g(y)
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-ViewReportsDropdown-index").then(s.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return i
			}));
			const n = "comment",
				r = "comment-submission-form-markdown",
				o = "comment-submission-form-richtext",
				a = "comments-page-link-num-comments",
				i = "post-content"
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => r.a.createElement("div", {
					className: Object(o.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, r.a.createElement(i.a, {
					className: d.a.expandRight
				}, r.a.createElement(a.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				m = e => {
					let {
						className: t,
						...s
					} = e;
					return r.a.createElement(u, l({
						className: Object(o.a)(d.a.postCheckboxMenuItem, t)
					}, s))
				}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "c", (function() {
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/uniqueId.js"),
				o = s.n(r),
				a = s("./node_modules/raf/index.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = s.n(b);
			var x = Object(u.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: h.a.wrapper
					}, d.a.createElement(p.a, {
						className: h.a.titleRow
					}, s), d.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: h.a.buttonRow
					}, d.a.createElement(m.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = s("./src/reddit/controls/ErrorText/index.m.less"),
				O = s.n(f);
			class j extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: s,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: a,
						isModalOpen: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(O.a.wrapper, t)
					}, d.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), a && d.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, o), i && d.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: o = []
					} = e, a = o.length ? o : r ? [r] : [];
					return a.length ? d.a.createElement("div", {
						className: t
					}, a.map((e, t) => d.a.createElement(j, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				g = e => d.a.createElement(v, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = j
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/humanizeUTCDate/index.tsx");
			const o = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				i = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/search/searchResultsTabTo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/history.ts"),
				o = s("./src/reddit/helpers/history/index.ts");
			const a = "/search/",
				i = e => {
					let {
						searchType: t,
						pageLayer: s
					} = e;
					var i;
					const {
						type: c,
						...d
					} = (null == s ? void 0 : s.queryParams) || {}, l = {
						...d,
						type: t
					};
					return {
						pathname: (null === (i = null == s ? void 0 : s.routeMatch) || void 0 === i ? void 0 : i.match.url) || a,
						search: Object(n.a)("", {
							...l
						}),
						state: {
							[r.b.SearchOriginPage]: Object(o.b)(r.b.SearchOriginPage)
						}
					}
				}
		},
		"./src/reddit/helpers/search/searchTabType.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/constants/page.ts");
			const o = (e, t) => e.includes(n.ic.Comments) ? r.h.Comments : t || e.includes(n.ic.Posts) ? r.h.Posts : e.includes(n.ic.Users) && !e.includes(n.ic.Subreddits) ? r.h.People : r.h.Listings
		},
		"./src/reddit/helpers/search/switchSearchScope.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/parameters.ts");

			function o(e, t) {
				let s = "/search/",
					o = "",
					a = e && e[r.p] || "";
				return t ? (a = a.replace("flair:", "flair_name:"), s = `/r/${t}/search`, o = "1", Object(n.a)(s, {
					[r.p]: a,
					[r.s]: o
				})) : (a = a.replace("flair_name:", "flair:"), Object(n.a)(s, {
					[r.p]: a
				}))
			}
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(n.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(o.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/helpers/isComment.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				a = s("./src/telemetry/models/Outbound.ts");
			const i = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: s
				} = e;
				if (t && (Object(r.b)(t) || Object(o.b)(t))) return Object(r.b)(t) ? a.SourceElement.Comment : Object(n.x)(s) ? a.SourceElement.PostDetail : Object(n.H)(s) ? a.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "o", (function() {
				return u
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "p", (function() {
				return j
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "q", (function() {
				return y
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "d", (function() {
				return S
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/helpers/trackers/postEvent.ts"),
				i = s("./src/reddit/selectors/platform.ts"),
				c = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(r || (r = {}));
			const d = e => t => ({
					source: n.collection,
					noun: r.post,
					...m(t, e)
				}),
				l = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: n.collection,
						noun: s ? r.unfollow : r.follow,
						...m(e, t)
					})
				},
				u = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: a.a.postEvent,
						noun: s ? r.unfollow : r.follow,
						...m(e, t)
					})
				},
				m = (e, t) => {
					const s = {
						...c.o(e),
						action: o.c.CLICK,
						subreddit: c.jb(e)
					};
					return void 0 === t ? s : {
						...s,
						post: c.K(e, t),
						postCollection: c.M(e, {
							postId: t
						}),
						postEvent: c.N(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...f(e),
					action: o.c.VIEW,
					noun: r.collectionEducation
				}),
				b = e => ({
					...f(e),
					action: o.c.CLICK,
					noun: r.collectionEducationGotIt
				}),
				h = e => ({
					...f(e),
					action: o.c.VIEW,
					noun: r.eventEducation
				}),
				x = e => ({
					...f(e),
					action: o.c.CLICK,
					noun: r.eventEducationGotIt
				}),
				f = e => ({
					...c.o(e),
					subreddit: c.jb(e),
					source: n.postComposer
				}),
				O = (e, t) => s => ({
					...m(s, e),
					source: t || n.postOverflowMenu,
					noun: r.collectionAddPost
				}),
				j = e => t => ({
					...m(t, e),
					source: n.collectionComposer,
					noun: r.collectionRemovePost
				}),
				v = () => e => ({
					...m(e),
					source: n.collectionComposer,
					noun: r.collectionCancel
				}),
				g = () => e => {
					const t = Object(i.o)(e) || void 0;
					return {
						...m(e, t),
						source: n.collectionComposer,
						noun: r.collectionCreate
					}
				},
				y = () => e => ({
					...m(e),
					source: n.collectionComposer,
					noun: r.collectionSelect
				}),
				E = e => t => ({
					...c.o(t),
					subreddit: c.jb(t),
					source: n.collectionComposer,
					action: o.c.CLICK,
					noun: r.collectionDelete,
					postCollection: c.L(t, {
						collectionId: e
					})
				}),
				C = e => t => ({
					...m(t),
					source: n.collectionComposer,
					noun: r.collectionEdit,
					postCollection: c.L(t, {
						collectionId: e
					})
				}),
				_ = e => t => ({
					...m(t, e),
					source: n.collectionComposer,
					noun: r.startEvent
				}),
				S = () => e => {
					const t = Object(i.o)(e) || void 0;
					return {
						...m(e, t),
						source: n.collectionComposer,
						action: o.c.VIEW,
						noun: r.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return j
			}));
			var n, r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/timezone/index.ts"),
				i = s("./src/reddit/constants/tracking.ts"),
				c = s("./src/reddit/models/PostCreationForm/index.ts"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/postCreations.ts"),
				u = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(n || (n = {}));
			const p = e => u.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...u.o(e),
						source: n.postComposer,
						action: i.c.CLICK,
						noun: "event_create",
						subreddit: u.jb(e)
					})
				},
				h = e => {
					Object(m.a)({
						...u.o(e),
						source: n.postComposer,
						action: i.c.CLICK,
						noun: "event_edit",
						subreddit: u.jb(e),
						postEvent: v(e),
						postComposer: g(e)
					})
				},
				x = () => e => ({
					source: n.eventComposer,
					action: i.c.VIEW,
					noun: i.b.SCREEN,
					actionInfo: p(e),
					postEvent: v(e)
				}),
				f = e => t => ({
					...C(t, Object(d.o)(t)),
					source: n.postComposer,
					noun: "apply",
					postComposer: y(e)
				}),
				O = () => e => ({
					...C(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				j = e => t => ({
					...C(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: g(t),
					postEvent: E(e)
				}),
				v = e => {
					const t = Object(l.p)(e);
					return t && E(t)
				},
				g = e => y(Object(l.p)(e)),
				y = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(a.f)(e.startDate).getTime() / r.Xb : void 0
					}
				},
				E = e => {
					const t = Object(a.f)(e.startDate).getTime() / r.Xb,
						s = Object(a.f)(e.endDate).getTime() / r.Xb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(o.e)(t, s)
					}
				},
				C = (e, t) => {
					const s = {
						source: n.eventComposer,
						action: i.c.CLICK,
						subreddit: u.jb(e)
					};
					return t ? {
						...s,
						post: u.K(e, t),
						postEvent: u.N(e, {
							postId: t
						}),
						postCollection: u.M(e, {
							postId: t
						})
					} : s
				}
		},
		"./src/reddit/helpers/trackers/shareToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
				...Object(r.o)(e),
				source: "post",
				action: n.c.CLICK,
				noun: "share_chat",
				subreddit: Object(r.jb)(e)
			})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return y
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/helpers/isComment.ts"),
				i = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.o(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: r,
					screen: u.bb(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(i.b)(s) && !Object(a.b)(s)) return {
						outbound: void 0
					};
					const r = Object(i.b)(s) ? "postId" : "commentId",
						o = {
							url: `/r/${n}/`,
							sourceElement: Object(c.a)(t),
							subredditName: n,
							[r]: s.id
						},
						d = Object(l.B)(e, {
							subredditName: n
						});
					return d ? {
						outbound: {
							...o,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(i.b)(s) && !Object(a.b)(s)) return {};
					const n = Object(i.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.K(e, s.id),
						subreddit: u.kb(e, n),
						...b(e, t)
					}
				},
				x = e => t => ({
					...m(t),
					...h(t, e)
				}),
				f = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.lb(t, e),
					screen: u.bb(t)
				}),
				O = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: u.K(s, t),
					subreddit: u.lb(s, e),
					screen: u.bb(s)
				}),
				j = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: u.K(s, t),
					subreddit: u.lb(s, e),
					screen: u.bb(s)
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				g = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...s
				} = e;
				return r.a.createElement("i", d({
					className: Object(o.a)(Object(a.b)("comment", s.isFilled), c.a.commentIcon, t)
				}, s))
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement(o.a, a({
				name: "award"
			}, e))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("i", d({}, e, {
				className: Object(o.a)(Object(a.b)("mod", e.isFilled), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), r.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/layout/page/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				bodyContainer: "eZLYleuk3b8ykGiskfpo3",
				contentContainer: "_3Up38k81YNBWQoW1ovMU88",
				content: "_2lzCpzHH0OvyFsvuESLurr",
				mainContent: "_1BJGsKulUQfhJyO19XsBph",
				withSidebar: "_3SktesklDBwXt2pEl0sHY8",
				sidebarContent: "_2iRJ8DI-3RTbsXRSDXE5ZG"
			}
		},
		"./src/reddit/layout/page/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				i = s("./src/reddit/constants/elementClassNames.ts"),
				c = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				l = s("./src/reddit/layout/page/Listing/index.m.less"),
				u = s.n(l),
				m = s("./src/reddit/layout/page/SearchResults/index.m.less"),
				p = s.n(m);
			t.a = e => {
				let {
					backgroundColor: t,
					className: s,
					containerRef: l,
					content: m,
					navBar: b,
					redditStyle: h,
					sidebar: x,
					subredditId: f
				} = e;
				const O = Object(n.useContext)(c.a),
					j = Boolean(x);
				return r.a.createElement(a.a, {
					subredditId: f
				}, r.a.createElement("div", {
					className: Object(o.a)(u.a.outerContainer, i.i, s, {
						[u.a.outerContainerExp]: O
					}),
					ref: l
				}, r.a.createElement(d.a, {
					className: i.h,
					redditStyle: h,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: u.a.innerContainer
				}, r.a.createElement("div", {
					className: p.a.bodyContainer
				}, r.a.createElement("div", {
					className: p.a.contentContainer
				}, r.a.createElement("div", {
					className: p.a.navContent
				}, b), r.a.createElement("div", {
					className: Object(o.a)(p.a.content, j && p.a.withSidebar)
				}, r.a.createElement("div", {
					className: Object(o.a)(p.a.mainContent, j && p.a.withSidebar)
				}, m), j && r.a.createElement("div", {
					className: p.a.sidebarContent
				}, x)))))))
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: o,
					gutter: i,
					...l
				} = e;
				return r.a.createElement("div", d({
					className: Object(a.a)(c.a.expandRightContainer, t)
				}, l), r.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: o,
						height: n,
						marginRight: i
					}
				}, Array.isArray(s) && s[0]), r.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				announcement: "_38miRaQjZDUy2B55AHWYlg",
				searchSwitcherContainer: "_79QamRjUfUQIFHxCnTvSZ"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "pageConfig", (function() {
				return z
			})), s.d(t, "default", (function() {
				return X
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				u = s("./src/lib/makeSearchKey/index.ts"),
				m = s("./node_modules/lodash/isEqual.js"),
				p = s.n(m),
				b = s("./src/reddit/actions/searchQueryId/index.tsx"),
				h = s("./src/reddit/actions/survey/index.ts"),
				x = s("./src/reddit/components/JumpToContent/index.tsx"),
				f = s("./src/reddit/components/SearchResultsContent/index.tsx"),
				O = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts"),
				j = s("./src/reddit/components/SearchResultsNav/index.tsx"),
				v = s("./src/reddit/components/SearchResultsSidebar/index.tsx"),
				g = s("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				y = s("./src/reddit/components/SearchSwitcher/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/constants/covid.ts"),
				_ = s("./src/reddit/constants/page.ts"),
				S = s("./src/reddit/constants/parameters.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/helpers/correlationIdTracker.ts"),
				w = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				T = s("./src/reddit/helpers/search/searchQueryId.ts"),
				P = s("./src/reddit/helpers/search/searchTabType.ts"),
				I = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				R = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				M = s("./src/reddit/helpers/trackers/searchResults.ts"),
				L = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				B = s("./src/reddit/hooks/useTheme.ts"),
				F = s("./src/reddit/layout/page/SearchResults/index.tsx"),
				A = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				D = s("./src/reddit/selectors/searchFix.ts"),
				U = s("./src/reddit/selectors/searchQueryId.ts"),
				H = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./node_modules/lodash/isEmpty.js"),
				K = s.n(W),
				V = s("./src/reddit/pages/SearchResults/index.m.less"),
				G = s.n(V);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const J = 3e3,
				Y = Object(n.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointLegacyAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointLegacyAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx"
					}
				}),
				z = {
					[_.h.Listings]: {
						tab: _.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[_.h.People]: {
						tab: _.h.People,
						sidebar: !1,
						filterNav: !1
					},
					[_.h.Posts]: {
						tab: _.h.Posts,
						sidebar: !0,
						filterNav: !0
					},
					[_.h.Comments]: {
						tab: _.h.Comments,
						sidebar: !1,
						filterNav: !1
					}
				};

			function X(e) {
				let {
					location: t,
					match: s
				} = e;
				const n = Object(c.d)(),
					r = Object(k.eb)(),
					m = Object(E.b)(),
					W = Object(B.a)(),
					V = Object(a.useRef)(!1),
					X = Object(a.useRef)(!1),
					Z = Object(c.e)(e => Object(H.B)(e, {
						subredditName: s.params.subredditName
					})),
					Q = Object(c.e)(e => Object(O.a)(e, {
						pageLayer: r
					})),
					$ = Object(c.e)(e => Object(D.c)(e, {
						pageLayer: r
					})),
					{
						searchQueryId: ee
					} = Object(c.e)(e => Object(U.a)(e)),
					te = Object(k.X)(r),
					se = Object(k.bb)(r),
					[ne, re] = Object(a.useState)(!1),
					oe = Object(l.a)(te) || null;
				Object(L.c)(), Object(a.useEffect)((function() {
					return () => {
						w.a.clear(I.a.SERP)
					}
				}), []), Object(a.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(h.k)()), J), () => {
						Object(N.b)(N.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(a.useEffect)(() => {
					te !== oe && (V.current = !1, re(!1)), te && oe && te[S.p] !== oe[S.p] && (Object(N.b)(N.a.SearchResults), Object(N.d)(N.a.SearchResults))
				}, [te, oe]), Object(a.useEffect)(() => {
					const e = {
							...te,
							type: void 0
						},
						t = {
							...oe,
							type: void 0
						};
					!p()(e, t) && !K()(oe) && w.a.update(I.a.SERP)
				}, [te, oe]);
				const ae = s.params.multiredditName,
					ie = s.params.subredditName || ae || "",
					ce = s.params.username,
					de = Object(u.e)(o()(te || {}, S.t)),
					le = Object(u.b)(ie, ce, de);
				ee && (T.a.set(I.a.SERP, le, ee), n(Object(b.c)()));
				const ue = Z && de.restrict_sr,
					me = Object(P.a)(de.type, ue),
					pe = {
						...de,
						type: [d.ic.Posts, d.ic.Subreddits, d.ic.Users]
					},
					be = Object(u.b)(ie, ce, pe),
					he = {
						redesign: !0,
						searchOptions: de
					};
				let xe;
				Object(k.Q)(r) || Object(k.C)(r) ? xe = i.a.createElement(y.a, q({}, he, {
					url: Object(R.a)(te)
				})) : Q && $ && (xe = i.a.createElement(y.a, q({}, he, {
					subreddit: Q,
					url: Object(R.a)(te, Q.name)
				})));
				const fe = z[me].tab,
					Oe = Boolean(ue) || z[me].sidebar && !ae,
					je = z[me].filterNav,
					ve = Object(A.a)({
						redditStyle: !0,
						theme: W
					});
				return Object(a.useEffect)(() => {
					if (fe === _.h.Comments && !X.current) {
						let e = 0;
						return e = window.setTimeout(() => {
							X.current = !0, n(Object(h.j)())
						}, J), () => {
							window.clearTimeout(e)
						}
					}
				}, [fe]), i.a.createElement(F.a, {
					backgroundColor: ve.canvas,
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(x.a, null), se && !ne && (() => {
						const e = e => m(Object(M.f)(e, Object(u.e)(o()(te || {}, S.t))));
						return V.current || (e("view"), V.current = !0), i.a.createElement(Y, {
							announcement: C.a,
							className: G.a.announcement,
							onBtnClick: () => e("click"),
							onClose: () => {
								e("dismiss"), re(!0)
							}
						})
					})(), i.a.createElement(f.a, {
						listingKey: le,
						listingName: ie,
						location: t,
						searchOptions: de,
						tab: fe
					})),
					navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(j.a, {
						activeTab: fe,
						searchOptions: de,
						searchSwitcher: xe
					}), je && i.a.createElement(g.a, {
						key: "subNav",
						searchOptions: de,
						shouldHideGlobalSearchLink: !0,
						subredditName: ie,
						tab: fe
					}), xe && i.a.createElement("div", {
						className: G.a.searchSwitcherContainer
					}, xe)),
					sidebar: Oe && i.a.createElement(v.a, {
						className: G.a.sidebar,
						listingKey: be,
						listingName: ie || _.c,
						searchOptions: pe,
						tab: fe
					})
				})
			}
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = e => !!Object(o.b)(e) || Object(r.c)(e, {
				experimentEligibilitySelector: a.Q,
				experimentName: n.m
			}) === n.g.Enabled
		},
		"./src/reddit/selectors/experiments/searchSubDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./node_modules/reselect/es/index.js");
			const a = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.Ff
			}), e => ({
				isSubEnlarged: e === n.Sf.Variant1 || e === n.Sf.Variant3,
				withCommunityDescription: e === n.Sf.Variant2 || e === n.Sf.Variant3
			}))
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(n.a)(e => Object(o.c)(e, {
					experimentName: r.jg,
					experimentEligibilitySelector: o.a
				}), e => e),
				i = Object(n.a)(a, e => e === r.ag)
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.searchQueryId
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts");
			const i = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: n.Of
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === n.Uf.SmIcon || t === n.Uf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.pending[s]
				},
				u = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.error[s]
				},
				m = (e, t) => {
					let {
						subredditName: s
					} = t;
					const n = Object(a.bb)(e, {
						subredditName: s
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.c275e62bda171de26028.js.map