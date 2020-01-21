// https://www.redditstatic.com/desktop2x/Subreddit.c3105fa0638c3bc8224a.js
// Retrieved at 1/21/2020, 2:50:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~931d0449", "PostDraft~RichTextEditor~StructuredStyles", "Explore~InFeedChaining", "Explore~ProfileSnoobuilder", "CategoriesNavigation", "GovernanceLeaderboard"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/graphql/operations/SubredditLayers.json": function(e) {
			e.exports = JSON.parse('{"id":"363cd3f2e49f"}')
		},
		"./src/graphql/operations/SubredditLayersByIds.json": function(e) {
			e.exports = JSON.parse('{"id":"ac126cf0db7a"}')
		},
		"./src/graphql/operations/SubredditLayersConfig.json": function(e) {
			e.exports = JSON.parse('{"id":"58282184edf1"}')
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const n = e => e;

			function r(e, t, s) {
				const [r, a] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: o = n
				} = t || {};
				let {
					start: i = 0,
					end: c = r
				} = t || {};
				if ((i = i < 0 ? 0 : i) >= (c = c > r ? r : c)) return;
				let d = a(i),
					l = o(d, i),
					m = i;
				for (let n = i + 1; n < c; n++) {
					const e = a(n),
						t = o(e, n);
					if (t !== l) {
						if (!1 === s(d, l, m, n)) return;
						l = t, m = n, d = e
					}
				}
				s(d, l, m, c)
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/i18n/utils.ts");
			const r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				o = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, s) => {
					const o = t ? e.getUTCMonth() : e.getMonth(),
						i = s ? a : r;
					return Object(n.c)(i[o])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function d(e, t, s, n) {
				const r = new Date(1e3 * e),
					a = i(r, s, n),
					d = t ? o(r, s) + ", " : "";
				return "".concat(a, " ").concat(d).concat(c(r, s))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/app/strings/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/config.ts"),
				l = s("./src/reddit/endpoints/governance/requester.ts");
			var m = s("./src/reddit/endpoints/governance/poll.ts");
			var u = s("./src/reddit/endpoints/governance/wallet.ts"),
				p = s("./src/reddit/models/Poll/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/selectors/gov.ts"),
				x = s("./src/reddit/actions/governance/constants.ts"),
				y = s("./src/reddit/actions/governance/errorToast.ts");
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "h", (function() {
				return P
			})), s.d(t, "i", (function() {
				return B
			})), s.d(t, "f", (function() {
				return R
			})), s.d(t, "g", (function() {
				return F
			})), s.d(t, "j", (function() {
				return D
			})), s.d(t, "c", (function() {
				return A
			}));
			const f = Object(r.a)(x.b),
				v = Object(r.a)(x.c),
				E = Object(r.a)(x.d),
				C = Object(r.a)(x.e),
				O = Object(r.a)(x.f),
				j = (Object(r.a)(x.g), Object(r.a)(x.h), Object(r.a)(x.i)),
				S = Object(r.a)(x.j),
				w = Object(r.a)(x.k),
				N = Object(r.a)(x.l),
				_ = Object(r.a)(x.r),
				P = Object(r.a)(x.s),
				I = Object(r.a)(x.t),
				k = Object(r.a)(x.u),
				L = Object(r.a)(x.v),
				T = Object(r.a)(x.w),
				M = Object(r.a)(x.x),
				B = Object(r.a)(x.y),
				R = (e, t) => async (s, n, r) => {
					let a, {
							apiContext: o,
							gqlContext: c
						} = r,
						d = n().polls.models[e];
					if (s(w({
							pollId: e
						})), (a = d.type === p.a.GA ? await Object(m.c)(c(), e, t) : await Object(m.b)(o(), d.subredditId, e, t)).ok) {
						if (d.type === p.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							s(O({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else s(N(a.body));
						const r = n();
						if ((d = r.polls.models[e]) && Object(p.d)(d)) {
							const {
								postId: e
							} = d, t = r.posts.models[e];
							t && t.voteState === h.a.notVoted && s(Object(i.N)(e))
						}
					} else s(S({
						pollId: e,
						error: a.error || a.errors[0].message
					})), Object(y.a)(s, a.error || a.errors[0].messsage)
				}, F = (e, t) => async (s, r, i) => {
					let {
						apiContext: m
					} = i;
					s(I());
					const u = r().transfers.communityPoints.contentId || void 0,
						p = await
					function(e, t) {
						return Object(l.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(d.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(m(), Object.assign({}, e, {
						contentId: u
					}));
					if (p.ok) {
						const i = r().user.language;
						s(k(Object.assign({}, p.body, {
							subredditId: e.subredditId
						}))), s(Object(c.e)({
							kind: b.b.SuccessCommunity,
							text: Object(n.a)(i, "gov.transferSuccess", {
								amount: Object(a.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(g.o)(r(), {
									subredditId: e.subredditId
								})
							})
						})), t && s(Object(o.f)())
					} else s(_({
						error: p.error
					})), Object(y.a)(s, p.error)
				}, D = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					t(T());
					const a = await Object(u.a)(r(), e);
					a.ok ? t(M(a.body)) : t(L({
						error: a.error
					}))
				}, A = (e, t) => async (s, r, a) => {
					let {
						apiContext: o
					} = a;
					s(E());
					const i = await
					function(e, t, s) {
						return Object(l.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(d.a.metaUrl, "/wallets/").concat(s, "/me")
						})
					}(o(), e, t);
					if (i.ok) {
						s(M({
							[t]: i.body
						}));
						const a = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						s(Object(c.e)({
							kind: b.b.SuccessCommunity,
							text: Object(n.a)(r().user.language, a, {
								tokenName: Object(g.o)(r(), {
									subredditId: t
								})
							})
						}))
					} else Object(y.a)(s, i.error)
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return f
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/structuredStyles/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/reddit/constants/blade.ts"),
				c = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				m = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts");
			const h = Object(n.a)(a.p),
				g = Object(n.a)(a.q),
				x = Object(n.a)(a.o),
				y = (e, t, s) => async (n, r, a) => {
					const o = Object(p.B)(r(), {
						subredditName: e
					});
					if (o) return f(o, t, s)(n, r, a)
				}, f = (e, t, s) => async (n, a, p) => {
					const y = await Object(l.e)(t);
					n(h());
					const f = a();
					try {
						await Object(r.g)("communityIcon", y, e.id)(n, a, p)
					} catch (E) {
						return Object(b.a)(Object(c.c)(f, "something went wrong with the uploading the image")), n(Object(o.e)({
							kind: m.b.Error,
							text: Object(d.c)("Error uploading image, please try again later")
						})), void n(x())
					}
					const v = Object(u.d)(a(), {
						name: "communityIcon"
					});
					if (!v) return Object(b.a)(Object(c.c)(f, "image is null")), n(Object(o.e)({
						kind: m.b.Error,
						text: Object(d.c)("Error uploading image, please try again later")
					})), void n(x());
					await Object(r.k)(e.id, {
						communityIcon: v
					}, i.b.idCard, s)(n, a, p), n(Object(o.e)({
						kind: m.b.SuccessCommunity,
						text: Object(d.c)("Successfully updated Community Icon!")
					})), n(g())
				}
		},
		"./src/reddit/components/AdHocMultiredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/MultiredditSidebar/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/selectors/multireddit.ts"),
				l = s("./src/reddit/selectors/user.ts");
			const m = Object(c.t)(),
				u = Object(o.c)({
					language: l.S,
					multireddit: d.a,
					subredditCategory: c.l
				}),
				p = Object(a.b)(u);
			t.a = m(p(e => r.a.createElement(i.b, e)))
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				r = s.n(n);
			const a = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = a
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/doubleclickForPublishers/index.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/components/BannerAd/index.m.less"),
				x = s.n(g),
				y = s("./src/lib/lessComponent.tsx");
			const f = y.a.div("Container", x.a),
				v = y.a.div("LoadingHitbox", x.a),
				E = e => setTimeout(() => {
					throw e
				}, 0);
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					E(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && d.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: n
						})
					} catch (r) {
						E(r)
					}
				}
				destroySlot() {
					try {
						this.frame && d.b(this.frame)
					} catch (e) {
						E(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(h.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						E(e)
					}
					this.loader && l.a(this.loader, e => {
						this.frame && d.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.isWithinLoadingDistance = !0, this.refresh(this.props), this.loader && l.b(this.loader)
					})
				}
				componentWillUnmount() {
					this.loader && l.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && d.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: s
					} = this.props;
					return t ? r.a.createElement(f, {
						"data-slot": t
					}, r.a.createElement(v, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), r.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : r.a.createElement("div", {
						className: s
					})
				}
			}
			C.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(a.b)(() => Object(o.c)({
				properties: Object(m.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(u.b)(t.placement, e.user, Object(i.a)("".concat(n).concat(s.url), s.queryParams), Object(p.B)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? d.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(b.b)(C))
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
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
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return r.a.createElement(o.a, d({
					className: Object(a.a)(t, c.a.CallToActionButton, {
						[c.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/CategoriesNavigation/Categories/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "pIlxiRadWdcEAlZpZ3w57",
				titleFontH2: "_3vnIPkjF9gBa5GN2XFL1-n",
				titleFontH3: "MvcJW2tVfXEu3OFs8dyUn",
				titleFontH4: "_1EMItyJFgJK_DvcDtXBW5N",
				titleFontH5: "_1mVw3TrTmgMkNGKgvDGV4m",
				titleFontH6: "_1g_9si81i_Ia2WHfpJJysD",
				metadataFont: "hvzV6yOQzOK0U0lb9LIvc",
				flairFont: "_2d5LK8qj16SfFMeiO51ZxA",
				labelsFont: "_25hPBsDfNcLK2OHu5-NUuT",
				actionFont: "bd1M804sJobTLMn9jONGB",
				smallButtonFont: "_1DsZf85_3IARf2X_-StG2S",
				largeButtonFont: "_1aPJzuSXNyPQv9HMxGsdTF",
				tabFont: "_2Or84wUVDTQzfcwoGc7hDN",
				strongTextFont: "_1sReYAe6Edj9tsiVaUjiK6",
				extraSmallFont: "_3TrsJrdDIIsK6TUgXjQlLn",
				bodyFontH1: "_2Je67ruqe_x3kX9CxIJw5j",
				bodyFontH2: "_1uZDFpBkclKxCYaLJCdi8V",
				bodyFontH3: "_1Ohj1SaXQOG-zW_vtbBdJl",
				bodyFontH4: "_3nI5qwD_dLjCpstcuSuzAO",
				bodyFontH5: "_1V79Mo61gXvVAUMIbL8xII",
				bodyFontH6: "_21ljVz_9cQigv7inOMChAh",
				bodyFont: "_1FceGC28wdOKKUG8PA4aSj",
				bodyFontSmall: "G7nA9YAsdHSxeatvbcFfb",
				bodyFontMono: "_3tx_deDztLnD8a7aX8ujTQ",
				container: "_1Fvwm_nUnZInOU-lABGsba",
				item: "_2-ZGfZ8pVitk1Yqnsi6T4O",
				link: "_3F10i35Gntc-o4JIMuVHZP",
				linkActive: "_3yylOQ1SS6TbgJKQ-8Ux7T",
				arrowIcon: "_3mQpw_UbTbG4OYN4uquCwf",
				arrow: "uBD5FR-aGquNrZX3qcvqv",
				arrowLeft: "EJw8EFAUIlMSU6YEHQEpX",
				arrowRight: "_2smW023ohact6kPgSOwT5F"
			}
		},
		"./src/reddit/components/CategoriesNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3v16LgmyO8Zf2vXkCMxaap",
				showDeprecated: "Ke2rT4kBXk4aoi0TgRmOU",
				showFPR: "_2dq2JfGI0L_UOOpy9csUuG",
				showFpr: "_2dq2JfGI0L_UOOpy9csUuG",
				showM2MTopBanner: "_1hNmV-PmgC6xhngpX4Ww6c",
				showSuspended: "_3kGgzwkJvWmHQjDRfE3Zla",
				blue: "_1k8_u_fQLJ8M1TTkQFfbQR",
				innerContainer: "_3QBsJXq9YmMU-WcnI2nbsH",
				categoriesContainer: "_2GfQ0hFW3IubWuHuFqgPhn"
			}
		},
		"./src/reddit/components/CategoriesNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/isBrowserDeprecated/index.ts"),
				d = s("./src/reddit/components/AlertBanner/heights.ts"),
				l = s("./src/reddit/actions/monthsToMinutes/initHomeFeed.ts"),
				m = s("./src/reddit/components/CategoriesPlacement/EventCategory/index.tsx"),
				u = s("./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.tsx"),
				p = s("./src/reddit/components/HeaderSubredditSelector/Compact/Tooltip.tsx"),
				b = s("./src/reddit/components/OverflowMenu/index.tsx"),
				h = s("./src/reddit/components/ResizeSensor/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/categories.tsx"),
				y = s("./src/reddit/constants/listings.ts"),
				f = s("./src/reddit/constants/topic.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/Row.tsx"),
				C = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/helpers/name/index.ts"),
				j = s("./src/reddit/helpers/trackers/navigation.ts"),
				S = s("./src/reddit/i18n/components.tsx"),
				w = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				N = s("./src/reddit/selectors/monthsToMinutes.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/CategoriesPlacement/Categories/index.m.less"),
				I = s.n(P);
			const k = 16,
				L = "A",
				T = k + 20,
				M = "home-category-tooltip",
				B = ["right", "bottom"],
				R = ["right", "top"],
				F = Object(o.c)({
					isEligibleCountry: w.d,
					isHomeLinkEnabled: N.m,
					isM2MEnabled: N.w,
					isNightmode: _.U
				}),
				D = Object(a.b)(F, e => ({
					visitPopulatedHome: () => e(Object(l.b)({}))
				}));
			class A extends r.a.Component {
				constructor(e) {
					super(e), this.handleResize = () => {
						if (!this.categoriesRef || !this.visibleCategoriesRef) return;
						const e = this.categoriesRef.offsetWidth - T;
						let t = 0,
							s = 0;
						const n = Array.from(this.visibleCategoriesRef.children).filter(e => e.tagName === L);
						let r = n[0];
						for (; t < e && r;) {
							(t += r.offsetWidth + k) < e && (r = n[++s])
						}
						this.setState(e => e.visibleCategoriesCount === s ? null : {
							visibleCategoriesCount: s
						})
					}, this.sendCategoryClickEvent = e => {
						this.props.sendEvent(Object(j.b)(Object(O.f)(e)))
					}, this.sendPopularClickEvent = () => {
						this.props.sendEvent(Object(j.b)(y.b.Popular))
					}, this.sendGeopopularClickEvent = () => {
						this.props.sendEvent(Object(j.b)(x.c))
					}, this.sendEventClickEvent = () => {
						this.eventCategory && this.props.sendEvent(Object(j.b)(this.eventCategory.name))
					}, this.sendOverflowClickEvent = () => {
						this.props.sendEvent(Object(j.b)("overflow"))
					}, this.setCategoriesRef = e => {
						this.categoriesRef = e, this.handleResize()
					}, this.setVisibleCategoriesRef = e => {
						this.visibleCategoriesRef = e, this.handleResize()
					}, this.onHomeClick = e => {
						e.preventDefault(), this.props.isHomeLinkEnabled && (this.props.visitPopulatedHome(), this.props.sendEvent(Object(j.b)(y.b.Home)))
					}, this.showTooltip = () => {
						this.setState(e => e.isTooltipOpen ? null : {
							isTooltipOpen: !0
						})
					}, this.hideTooltip = () => {
						this.setState(e => e.isTooltipOpen ? {
							isTooltipOpen: !1
						} : null)
					}, this.renderVisibleCategory = (e, t) => {
						const {
							visibleCategoriesCount: s
						} = this.state, n = Object(O.f)(e.name), a = n === Object(O.f)(this.props.category || "");
						return r.a.createElement(C.a, {
							className: Object(i.a)(I.a.Link, {
								[I.a.active]: a
							}),
							onMouseDown: () => this.sendCategoryClickEvent(n),
							rel: "nofollow",
							tabIndex: t < s ? 0 : -1,
							to: Object(f.a)(n)
						}, n)
					}, this.renderHiddenCategory = e => {
						const t = Object(O.f)(e.name),
							s = t === Object(O.f)(this.props.category || "");
						return r.a.createElement(E.b, {
							className: Object(i.a)(I.a.Row, {
								[I.a.active]: s
							}),
							displayText: t,
							href: Object(f.a)(t),
							isSelected: s,
							key: t,
							onClick: () => this.sendCategoryClickEvent(t),
							rel: "nofollow"
						})
					}, this.state = {
						isTooltipOpen: !1,
						visibleCategoriesCount: e.categories.length
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize), setTimeout(() => {
						this.handleResize()
					}, 2e3)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						categories: e,
						categoriesPlacementVariant: t,
						category: s,
						className: n,
						isEligibleCountry: a,
						isHomeLinkEnabled: o,
						isM2MEnabled: c,
						isNightmode: d
					} = this.props, {
						isTooltipOpen: l,
						visibleCategoriesCount: g
					} = this.state;
					let f = e;
					if (this.eventCategory = Object(w.b)(), this.eventCategory) {
						const e = Object(O.f)(this.eventCategory.name);
						f = f.filter(t => e !== Object(O.f)(t.name))
					}
					if (0 === f.length) return null;
					const v = f.slice(g),
						E = s === y.b.Home,
						j = s === y.b.Popular,
						N = s === x.c,
						_ = s === x.b,
						P = Object(w.c)(t) && !d ? I.a.blue : void 0;
					return r.a.createElement("div", {
						className: Object(i.a)(I.a.Container, P, n)
					}, c && r.a.createElement("span", {
						id: M,
						onMouseEnter: this.showTooltip,
						onMouseLeave: this.hideTooltip,
						onMouseMove: this.showTooltip
					}, r.a.createElement(C.a, {
						className: Object(i.a)(I.a.Link, {
							[I.a.active]: E,
							[I.a.disabled]: !o
						}),
						disabled: !o,
						onMouseDown: this.onHomeClick,
						to: y.c[y.b.Home]
					}, r.a.createElement(S.c, null, "Home"), !o && r.a.createElement(p.a, {
						className: I.a.HomeDisabledTooltip,
						isOpen: l,
						tooltipId: M
					}))), r.a.createElement("span", {
						className: I.a.Item
					}, r.a.createElement(C.a, {
						className: Object(i.a)(I.a.Link, {
							[I.a.active]: j
						}),
						onMouseDown: this.sendPopularClickEvent,
						to: y.c[y.b.Popular]
					}, r.a.createElement(S.c, null, "Popular"))), this.eventCategory && r.a.createElement("span", {
						className: I.a.Item
					}, r.a.createElement(m.a, {
						className: Object(i.a)(I.a.Link, {
							[I.a.active]: _
						}),
						eventCategory: this.eventCategory,
						onMouseDown: this.sendEventClickEvent
					})), a && r.a.createElement("span", {
						className: I.a.Item
					}, r.a.createElement(u.a, {
						changeButtonClassName: I.a.ChangeButton,
						className: Object(i.a)(I.a.Link, {
							[I.a.active]: N
						}),
						onMouseDown: this.sendGeopopularClickEvent
					})), r.a.createElement("div", {
						className: I.a.Categories,
						ref: this.setCategoriesRef
					}, r.a.createElement("div", {
						className: I.a.VisibleCategories,
						ref: this.setVisibleCategoriesRef
					}, f.slice(0, g).map(this.renderVisibleCategory), v.length > 0 && r.a.createElement(b.b, {
						className: I.a.OverflowMenu,
						dropdownClassName: Object(i.a)(I.a.OverflowMenuDropdown, P),
						dropdownId: "categories-navigation",
						isFixed: !0,
						onClick: this.sendOverflowClickEvent,
						targetPosition: B,
						tooltipPosition: R
					}, v.map(this.renderHiddenCategory)), f.slice(g).map(this.renderVisibleCategory))), r.a.createElement(h.a, {
						onResize: this.handleResize
					}))
				}
			}
			var W = Object(v.t)()(D(Object(g.b)(A))),
				H = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				U = s("./src/reddit/constants/experiments.ts"),
				V = s("./src/reddit/constants/postLayout.ts"),
				G = s("./src/reddit/selectors/category.ts"),
				z = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				q = s("./node_modules/lodash/isEqual.js"),
				K = s.n(q),
				Z = s("./node_modules/react-motion/lib/react-motion.js"),
				J = s("./src/reddit/constants/page.ts"),
				Q = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Y = s("./src/reddit/actions/category.ts"),
				X = s("./src/reddit/components/CategoriesNavigation/Categories/index.m.less"),
				$ = s.n(X);
			class ee extends r.a.Component {
				constructor() {
					super(...arguments), this.sendClickEvent = () => {
						this.props.sendEvent(Object(j.b)(Object(O.f)(this.props.category.name)))
					}, this.handleButtonClick = () => {
						this.sendClickEvent(), this.props.loadSubredditsAndNavigate()
					}
				}
				render() {
					const {
						category: e
					} = this.props;
					return r.a.createElement("span", {
						className: $.a.item,
						ref: this.props.innerRef
					}, r.a.createElement(C.a, {
						className: Object(i.a)($.a.link, this.props.isActive && $.a.linkActive),
						to: "".concat(y.c[J.d.Explore], "/").concat(Object(O.f)(e.name)),
						onMouseDown: this.sendClickEvent
					}, e.name))
				}
			}
			var te = Object(a.b)(() => {
				const e = Object(G.d)();
				return Object(o.c)({
					language: _.S,
					subreddits: (t, s) => {
						let {
							category: n
						} = s;
						return e(t, {
							categoryName: Object(O.f)(n.name)
						})
					}
				})
			}, (e, t) => {
				let {
					category: s
				} = t;
				return {
					loadSubredditsAndNavigate: () => e(Y.j(s.id))
				}
			})(Object(g.b)(ee));
			class se extends r.a.Component {
				constructor() {
					super(...arguments), this.scrollTo = e => {
						this.containerRef && (this.containerRef.scrollLeft = e)
					}, this.setContainerRef = e => {
						this.containerRef = e, this.props.innerRef && this.props.innerRef(e)
					}
				}
				componentDidMount() {
					this.scrollTo(this.props.scrollLeft)
				}
				componentDidUpdate(e) {
					this.scrollTo(e.scrollLeft)
				}
				render() {
					return r.a.createElement("div", {
						className: Object(i.a)($.a.container, this.props.className),
						ref: this.setContainerRef
					}, this.props.children)
				}
			}
			const ne = 300,
				re = 24,
				ae = {
					x: 0
				},
				oe = e => r.a.createElement("div", {
					className: Object(i.a)($.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(Q.b, {
					className: $.a.arrowIcon
				}));
			class ie extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						scrollLeft: 0,
						showLeftArrow: !1,
						showRightArrow: !1
					}, this.scrollTo = e => {
						if (!this.containerRef) return;
						const t = this.getMaxScrollLeft(),
							s = Math.min(Math.max(0, e), t),
							n = {
								scrollLeft: s,
								showLeftArrow: 0 !== s,
								showRightArrow: s !== t
							};
						this.setState(e => K()(e, n) ? null : n)
					}, this.handleResize = () => {
						if (!this.containerRef) return;
						let e;
						const {
							scrollLeft: t
						} = this.state, {
							clientWidth: s,
							scrollWidth: n
						} = this.containerRef;
						e = n > s ? {
							scrollLeft: Math.min(this.getMaxScrollLeft(), t),
							showLeftArrow: t > 0,
							showRightArrow: t + s < n
						} : {
							scrollLeft: 0,
							showLeftArrow: !1,
							showRightArrow: !1
						}, this.setState(t => K()(t, e) ? null : e)
					}, this.handleLeftArrowClick = () => {
						const {
							scrollLeft: e
						} = this.state;
						if (!this.containerRef || 0 === e) return;
						this.sendScrollEvent();
						const t = Math.max(0, e - ne);
						this.setState({
							scrollLeft: t,
							showLeftArrow: 0 !== t,
							showRightArrow: !0
						})
					}, this.handleRightArrowClick = () => {
						const {
							scrollLeft: e
						} = this.state, t = this.getMaxScrollLeft();
						if (!this.containerRef || e >= t) return;
						this.sendScrollEvent();
						const s = Math.min(t, e + ne);
						this.setState({
							scrollLeft: s,
							showLeftArrow: !0,
							showRightArrow: s !== t
						})
					}, this.sendScrollEvent = () => {
						this.props.sendEvent(j.c)
					}, this.sendAllCategoriesClickEvent = () => {
						this.props.sendEvent(Object(j.b)("all"))
					}, this.sendPopularClickEvent = () => {
						this.props.sendEvent(Object(j.b)(J.d.Popular))
					}, this.setContainerRef = e => {
						this.containerRef = e, this.handleResize(), this.ensureActiveIsVisible()
					}, this.setActiveRef = e => {
						this.activeRef = e, this.ensureActiveIsVisible()
					}, this.renderCategory = e => {
						const t = Object(O.f)(e.name),
							s = t === Object(O.f)(this.props.category || "");
						return r.a.createElement(te, {
							category: e,
							innerRef: s ? this.setActiveRef : void 0,
							isActive: s,
							key: t
						})
					}, this.renderContent = e => {
						const t = void 0 === this.props.category,
							s = this.props.category === J.d.Popular;
						return r.a.createElement(se, {
							className: this.props.className,
							innerRef: this.setContainerRef,
							scrollLeft: e.x
						}, r.a.createElement("span", {
							className: $.a.item,
							ref: t ? this.setActiveRef : void 0
						}, r.a.createElement(C.a, {
							className: Object(i.a)($.a.link, t ? $.a.linkActive : ""),
							onMouseDown: this.sendAllCategoriesClickEvent,
							to: this.props.baseUrl
						}, r.a.createElement(S.c, null, "All Categories"))), Object(z.d)(this.props.exploreV2Variant) && r.a.createElement("span", {
							className: $.a.item,
							ref: s ? this.setActiveRef : void 0
						}, r.a.createElement(C.a, {
							className: Object(i.a)($.a.link, s ? $.a.linkActive : ""),
							onMouseDown: this.sendPopularClickEvent,
							to: y.c[J.d.Popular]
						}, r.a.createElement(S.c, null, "Popular"))), this.props.categories.map(this.renderCategory), this.state.showLeftArrow && r.a.createElement(oe, {
							className: $.a.arrowLeft,
							onClick: this.handleLeftArrowClick
						}), this.state.showRightArrow && r.a.createElement(oe, {
							className: $.a.arrowRight,
							onClick: this.handleRightArrowClick
						}))
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize), setTimeout(() => {
						this.ensureActiveIsVisible(), this.handleResize()
					}, 2e3)
				}
				componentDidUpdate(e) {
					this.props.category !== e.category && this.ensureActiveIsVisible()
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				getMaxScrollLeft() {
					return this.containerRef ? this.containerRef.scrollWidth - this.containerRef.clientWidth : 0
				}
				ensureActiveIsVisible() {
					if (!this.containerRef || !this.activeRef) return;
					const e = this.state.scrollLeft,
						t = this.state.scrollLeft + this.containerRef.offsetWidth,
						s = this.activeRef.offsetLeft,
						n = this.activeRef.offsetLeft + this.activeRef.offsetWidth;
					if (s > t || n < e) this.scrollTo(this.activeRef.offsetLeft - this.containerRef.offsetWidth / 2 + this.activeRef.offsetWidth / 2);
					else if (n > t) {
						const e = n - t;
						this.scrollTo(this.state.scrollLeft + e + re)
					} else if (s < e) {
						const t = e - s;
						this.scrollTo(this.state.scrollLeft - t - re)
					}
				}
				render() {
					return 0 === this.props.categories.length ? null : r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.Motion, {
						defaultStyle: ae,
						style: {
							x: Object(Z.spring)(this.state.scrollLeft)
						}
					}, this.renderContent), r.a.createElement(h.a, {
						onResize: this.handleResize
					}))
				}
			}
			var ce = Object(g.b)(ie),
				de = s("./src/reddit/components/CategoriesNavigation/index.m.less"),
				le = s.n(de);
			const me = Object(o.c)({
					categories: (e, t) => {
						const s = Object(w.a)(e, t) ? U.X : void 0;
						return Object(G.t)(e, {
							categoriesOrder: s
						})
					},
					categoriesPlacementVariant: w.a,
					exploreV2Variant: z.a,
					isLoggedIn: _.J,
					isNightmode: _.U,
					layout: v.M
				}),
				ue = Object(a.b)(me),
				pe = Object(v.t)({
					isExplore: v.x,
					pageLayer: e => e
				});
			t.default = pe(ue(e => {
				if (e.isLoggedIn) return null;
				const t = {
					browserInfo: c.a,
					showFPR: !1,
					showSuspended: !1
				};
				return r.a.createElement(H.a, {
					className: Object(i.a)(le.a.container, e.className, Object(d.b)(le.a, t), {
						[le.a.blue]: Object(w.c)(e.categoriesPlacementVariant) && !e.isNightmode
					}),
					considerPinnedSubscriptions: !1,
					containerClassName: e.categoriesPlacementVariant && le.a.innerContainer,
					render: () => {
						if (e.categoriesPlacementVariant) return r.a.createElement(W, {
							baseUrl: e.baseUrl,
							categories: e.categories,
							categoriesPlacementVariant: e.categoriesPlacementVariant,
							category: e.category
						});
						const t = r.a.createElement(ce, {
							baseUrl: e.baseUrl,
							categories: e.categories,
							category: e.category,
							exploreV2Variant: e.exploreV2Variant
						});
						return e.isExplore && e.layout === V.g.Classic ? r.a.createElement("div", {
							className: le.a.categoriesContainer
						}, t) : t
					}
				})
			}))
		},
		"./src/reddit/components/CategoriesPlacement/Categories/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "SZcX5Syr-ed8bBsQe3tNA",
				titleFontH2: "_2fKL1yMob1Wr_gF1WyKIXp",
				titleFontH3: "_17043LP2YLngEfMedYc9Fl",
				titleFontH4: "oszneSSYb1zQ76508n0pZ",
				titleFontH5: "_2t_FwfovyZ9eQtHalf2GWe",
				titleFontH6: "_2hGX9YmziVSoSGJ8_f2dmX",
				metadataFont: "C8LBLgppLu5ATIIm0lTiR",
				flairFont: "_3XE11nCGd8DnQuhC6bVvgH",
				labelsFont: "_1fWq1XHq7PX_1EGJLMjYXH",
				actionFont: "_3GaJpiZImPGC_bkhp7x6BE",
				smallButtonFont: "_3GLp704sTP-aLtGyxuTA5Q",
				largeButtonFont: "_2stgUIR1e6_0Hy9-emRsW1",
				tabFont: "_5i4NqHqMcRT3KDta2Xzso",
				strongTextFont: "_2Kp8QLDa7bi21U50tiI2pZ",
				extraSmallFont: "_3Epb7cGcKP5ddJ1qd4A66X",
				bodyFontH1: "_1GLk49zeZjL2450L3r-Mm2",
				bodyFontH2: "_2fdNRQggfR7yh9tyttjr7g",
				bodyFontH3: "_2Bxj_NWl4eNrHz0wtVvljS",
				bodyFontH4: "_3A5XahHQ6t_SPVGwtdoXXK",
				bodyFontH5: "_2C2ldq5lzTBnkQ6kqwge8h",
				bodyFontH6: "_3lWzVuf96fBXmTtSQHtISW",
				bodyFont: "NrFepRahleC53K3xBeoM1",
				bodyFontSmall: "_35lfgRA2pLgtehOJlu5xrL",
				bodyFontMono: "_3I9wY4Cm0Hs5dsLAHUyvGN",
				Container: "EsD_FVvyVtS5ZSc0S6m-4",
				container: "EsD_FVvyVtS5ZSc0S6m-4",
				Categories: "_2GoOkfqKhRysDsY24tXBRg",
				categories: "_2GoOkfqKhRysDsY24tXBRg",
				VisibleCategories: "_2E7u_tiIyY6AbdEI6kcvLD",
				visibleCategories: "_2E7u_tiIyY6AbdEI6kcvLD",
				Item: "_35ooNMaCXaIrZc9-a0AwMN",
				item: "_35ooNMaCXaIrZc9-a0AwMN",
				Link: "_1oJfQuveGUwNMnAa4Pin2q",
				link: "_1oJfQuveGUwNMnAa4Pin2q",
				active: "_8LMJC9uFN3A1P3XdDWKPh",
				disabled: "_1vPOXuj5YXKTUkq70rzAbf",
				blue: "_1Sy8gTYjJfDxmLcKc8HNKB",
				OverflowMenu: "_3UCRZhAnhRs2rUWJe1imha",
				overflowMenu: "_3UCRZhAnhRs2rUWJe1imha",
				OverflowMenuDropdown: "CaaDPlsZy89vmAHCrdrPF",
				overflowMenuDropdown: "CaaDPlsZy89vmAHCrdrPF",
				Row: "_3fEwJpirWd9u0924h8KVsg",
				row: "_3fEwJpirWd9u0924h8KVsg",
				HomeDisabledTooltip: "_2u4sZzqS4yUuzyzmHNrlOP",
				homeDisabledTooltip: "_2u4sZzqS4yUuzyzmHNrlOP",
				ChangeButton: "_17YQtRa70Gvfc6VW3gVVpD",
				changeButton: "_17YQtRa70Gvfc6VW3gVVpD"
			}
		},
		"./src/reddit/components/CategoriesPlacement/EventCategory/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/constants/categories.tsx"),
				o = s("./src/reddit/constants/topic.ts"),
				i = s("./src/reddit/controls/InternalLink/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = e => {
				const {
					eventCategory: t
				} = e, s = d(e, ["eventCategory"]);
				return r.a.createElement(i.a, c({}, s, {
					rel: "nofollow",
					to: Object(o.a)(a.b)
				}), t.name)
			}
		},
		"./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.m.less": function(e, t, s) {
			e.exports = {
				Icon: "M27cOlSyrfsU8oXk4Kssq",
				icon: "M27cOlSyrfsU8oXk4Kssq",
				ChangeButton: "joDTxMCm6RDjn1_JXPEOR",
				changeButton: "joDTxMCm6RDjn1_JXPEOR",
				ChangeIcon: "_1Qc0BQ2sBRQafmy-f-xjKP",
				changeIcon: "_1Qc0BQ2sBRQafmy-f-xjKP",
				ModalBody: "_3x6FwuogSdxQ1wuQZecnpe",
				modalBody: "_3x6FwuogSdxQ1wuQZecnpe"
			}
		},
		"./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/components/ModalStyledComponents/Modal.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/categories.tsx"),
				u = s("./src/reddit/constants/topic.ts"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/i18n/utils.ts"),
				g = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 13 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
					fill: "inherit",
					fillRule: "evenodd",
					transform: "translate(-4 -2)"
				})),
				x = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				f = s("./src/reddit/selectors/categoriesPlacement.ts"),
				v = s("./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.m.less"),
				E = s.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const j = "geopopular-category-modal",
				S = () => {},
				w = Object(o.c)({
					geoObject: f.a,
					isModalOpen: Object(y.b)(j)
				}),
				N = Object(a.b)(w, e => ({
					toggleModal: () => e(Object(c.i)(j))
				})),
				_ = () => r.a.createElement("div", {
					className: E.a.ModalBody
				}, r.a.createElement(x.a, {
					className: E.a.ChangeIcon
				}));
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.changeGeo = () => {
						this.props.toggleModal(), this.props.sendEvent(Object(b.a)(m.c))
					}
				}
				render() {
					const e = this.props,
						{
							changeButtonClassName: t,
							geoObject: s,
							isModalOpen: n,
							sendEvent: a,
							toggleModal: o
						} = e,
						c = O(e, ["changeButtonClassName", "geoObject", "isModalOpen", "sendEvent", "toggleModal"]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(p.a, C({}, c, {
						rel: "nofollow",
						to: Object(u.a)(m.c)
					}), r.a.createElement(g, {
						className: E.a.Icon
					}), " ", s), r.a.createElement("button", {
						className: Object(i.a)(E.a.ChangeButton, t),
						onClick: this.changeGeo
					}, r.a.createElement(x.a, {
						className: E.a.ChangeIcon
					})), n && r.a.createElement(d.a, {
						actionText: Object(h.c)("Got it"),
						headerText: Object(h.c)("Feature is not available now"),
						modalBody: _,
						modalId: j,
						onConfirm: S,
						toggleModal: o
					}))
				}
			}
			t.a = N(Object(l.b)(P))
		},
		"./src/reddit/components/CategoryPickerWidget/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Le71sZe40-ak2-JlezTO9",
				header: "_1xEfG7rp7vrKfyvMhw4d7B",
				categoryList: "_2TokM04UC_UEG0cmYY5zqV",
				expanded: "H2nL15newZjevdZ9kmsw6",
				categoryLink: "_3p0xqZowgYYjYMOdinU151",
				active: "_1eQr_TkUOm6M6XqM8GTZqp",
				button: "_36EQoGTqXwZI27n50gESaC"
			}
		},
		"./src/reddit/components/CategoryPickerWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/components/CategoryPickerWidget/index.m.less"),
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
			const m = e => {
				const {
					category: t,
					children: s,
					className: n,
					isActive: c,
					tabIndex: m
				} = e, u = Object(a.a)(d.a.categoryLink, c && d.a.active, n);
				return r.a.createElement("li", null, r.a.createElement(o.a, l({}, t.anchorProps, {
					className: u,
					"data-active": c,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: m,
					to: t.path || ""
				}), r.a.createElement(i.c, null, s, t.customIcon)))
			};
			var u = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/name/index.ts");
			const h = 36;
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isExpanded: !1
					}, this.shouldAutoExpand = () => {
						const {
							categories: e,
							currentCategoryName: t,
							initialNumberOfCategories: s
						} = this.props, {
							isExpanded: n
						} = this.state;
						if (!t || n || !s) return;
						return s < e.findIndex(e => e.name === t) + 1
					}, this.toggleExpanded = () => {
						this.setState(e => ({
							isExpanded: !e.isExpanded
						}), this.props.onMoreLessClick)
					}
				}
				componentDidMount() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				componentDidUpdate() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				renderCategoryList() {
					const {
						categories: e,
						categoryItemClassName: t,
						categoryItemHeight: s = h,
						categoryListContainerClassName: n,
						children: o,
						childrenOffset: i = 0,
						currentCategoryName: c,
						initialNumberOfCategories: l,
						onItemClick: u
					} = this.props, {
						isExpanded: p
					} = this.state, g = !p && l && s * l, x = i + (e ? s * e.length : 0), y = Object(a.a)(d.a.categoryList, p && d.a.expanded), f = e => !(!c || c !== Object(b.f)(e)), v = r.a.createElement("ul", {
						className: y,
						style: {
							height: g || x
						}
					}, o, e && e.map((e, n) => {
						const a = i + n * s;
						return r.a.createElement(m, {
							category: e,
							className: t,
							isActive: f(e.name),
							key: e.id,
							onSendEventClick: u,
							tabIndex: g && a >= g ? -1 : 0
						}, e.name)
					}));
					return r.a.createElement("div", {
						className: Object(a.a)(d.a.categoryListContainer, n)
					}, v)
				}
				render() {
					const {
						buttonClassName: e,
						buttonText: t = "Show",
						categories: s,
						className: n,
						header: o,
						headerClassName: c,
						initialNumberOfCategories: l
					} = this.props, m = s && l && s.length > l, b = m && !this.state.isExpanded ? "".concat(t, " More") : "".concat(t, " Less"), h = Object(a.a)(n, d.a.container);
					return r.a.createElement(u.a, {
						className: h,
						contentOnly: !0
					}, r.a.createElement("div", {
						className: Object(a.a)(d.a.header, c)
					}, r.a.createElement("h2", null, o || r.a.createElement(i.c, null, "Categories"))), this.renderCategoryList(), m && r.a.createElement(p.n, {
						className: Object(a.a)(d.a.button, e),
						onClick: this.toggleExpanded
					}, r.a.createElement(i.c, null, b)))
				}
			}
			t.a = g
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, s) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = s.n(c);
			t.a = e => r.a.createElement(o.b, {
				className: Object(a.a)(e.className, d.a.container, e.text.length > e.maxChars ? d.a.mOverflow : null)
			}, "".concat(e.maxChars - e.text.length, " ").concat(Object(i.c)("Characters")))
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = s("./src/reddit/models/Vote/index.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(p),
				h = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				g = s.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(l.t)(),
				f = Object(o.c)({
					isFakeSubreddit: l.y
				}),
				v = Object(a.b)(f),
				E = e => {
					const t = {
						interactive: !1,
						voteState: u.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(i.a)(e.className, g.a.emptyVerticalVotes)
					}, r.a.createElement(d.d, x({
						key: "u"
					}, t)), e.children, r.a.createElement(d.c, x({
						key: "d"
					}, t)))
				},
				C = () => r.a.createElement(E, null, r.a.createElement("div", {
					className: g.a.emptyScore,
					key: "s"
				}));
			t.b = y(v(e => r.a.createElement("div", {
				className: Object(i.a)(e.className, b.a.classicPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, r.a.createElement(c.b, null, r.a.createElement(C, null)), r.a.createElement("div", {
				className: g.a.mainBody
			}, r.a.createElement("div", {
				className: g.a.thumbnailContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(g.a.thumbnail, Object(m.b)(e))
			})), r.a.createElement("div", {
				className: g.a.content
			}, r.a.createElement("div", {
				key: "a"
			}, r.a.createElement("div", {
				key: "aa",
				className: Object(i.a)(g.a.title, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "ab",
				className: Object(i.a)(g.a.meta, Object(m.b)(e))
			})), r.a.createElement("div", {
				key: "f",
				className: g.a.flatlist
			}, r.a.createElement("div", {
				key: "fa",
				className: Object(i.a)(g.a.flatlistExpando, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "fb",
				className: g.a.flatlistSeparator
			}), r.a.createElement("div", {
				key: "fc",
				className: Object(i.a)(g.a.flatListItemOne, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "fd",
				className: Object(i.a)(g.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/config.ts"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/CallToActionButton/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				p = s("./src/reddit/components/ExpandoButton/index.tsx"),
				b = s("./src/reddit/components/Flatlist/index.tsx"),
				h = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/LargePost/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/index.tsx"),
				y = s("./src/reddit/components/ModModeReports/helpers.ts"),
				f = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.tsx"),
				E = s("./src/reddit/components/PostMedia/index.tsx"),
				C = s("./src/reddit/components/PostMeta/index.tsx"),
				O = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				S = s("./src/reddit/components/PostTopMeta/index.tsx"),
				w = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				P = s("./node_modules/react-redux/es/index.js"),
				I = s("./node_modules/reselect/es/index.js"),
				k = s("./src/reddit/actions/post.ts"),
				L = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/contexts/InsideOverlay.tsx"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/experiments/chatPost.ts"),
				D = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				A = s("./src/reddit/selectors/moderatorPermissions.ts"),
				W = s("./src/reddit/selectors/monthsToMinutes.ts"),
				H = s("./src/reddit/selectors/postFlair.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/user.ts");
			const G = {
					autoplayPref: V.b,
					activeModalId: R.a,
					crosspost: U.c,
					currentUser: V.i,
					isActive: U.g,
					isChatPostExperiment: F.d,
					isCurrentUserProfilePost: U.h,
					isExpanded: U.j,
					isFrontpageHome: W.g,
					isM2MHomeRedirectEnabled: D.c,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(U.o)(e, s)
					},
					language: V.S,
					moderatorPermissions: A.i,
					modModeEnabled: B.O,
					post: U.J,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: H.a,
					showMedia: B.r,
					subredditOrProfile: U.U,
					userIsOp: V.jb,
					flairStyleTemplate: B.Q
				},
				z = (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: r
					} = t;
					return {
						handleVote: t => {
							const s = t === T.a.upvoted ? Object(k.N)(r) : Object(k.o)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(k.L)(r)),
						onOpenReportsDropdown: t => e(Object(L.g)({
							tooltipId: t
						}))
					}
				},
				q = Object(P.b)(() => Object(I.c)(G), z, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var K = s("./src/lib/LRUCache/index.ts");
			const Z = Object(B.t)({
					searchQuery: B.U
				}),
				J = new K.a(250),
				Q = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let n = J.get(s);
						if (void 0 === n) {
							const a = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								o = e.title.split(a);
							for (let e = 1; e < o.length; e += 2) o[e] = r.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, o[e]);
							n = r.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, r.a.Children.toArray(o)), J.set(s, n)
						}
						return n
					}
				},
				Y = Object(P.b)(() => Object(I.c)(G), z, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: Q(s.searchQuery || "")
				}));
			var X = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				se = s.n(te),
				ne = s("./src/reddit/components/ClassicPost/index.m.less"),
				re = s.n(ne);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return me
			}));
			const oe = 16;
			class ie extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: n,
						isMeta: i,
						inSubredditOrProfile: E,
						eventFactory: P,
						first: I,
						flairStyleTemplate: k,
						formatTitle: L,
						isCheckboxSelected: T,
						isCurrentUserProfilePost: M,
						isFrontpage: B,
						isFrontpageHome: R,
						isM2MHomeRedirectEnabled: F,
						isOverlay: D,
						language: A,
						moderatorPermissions: W,
						modModeEnabled: H,
						onClickPost: U,
						onIgnoreReports: V,
						onOpenReportsDropdown: G,
						poll: z,
						post: q,
						redditStyle: K,
						scrollerItemRef: Z,
						showBulkActionCheckbox: J,
						showEditFlair: Q,
						showMedia: Y,
						subredditOrProfile: te,
						toggleCheckbox: ne,
						userIsOp: ie
					} = this.props, de = K ? void 0 : k, le = this.props.crosspost || void 0, me = Object($.a)(W), ue = Object(X.a)(W), pe = H && $.a, be = !!q.media && q.media.type === N.n.RTJSON, he = ie && be, ge = E && !Y, xe = {
						flairStyleTemplate: de,
						post: q,
						inSubredditOrProfile: E,
						isCurrentUserProfilePost: M,
						isOverlay: D,
						shouldShowSubscribeButton: !(B && R),
						subredditOrProfile: te,
						language: A
					}, ye = r.a.createElement(v.a, {
						className: Object(o.a)(se.a.classicPostStyles, re.a.postContainer, Object(ee.a)(this.props), I ? re.a.mFirst : void 0, e),
						isOverlay: D,
						style: Object.assign({}, Object(ee.d)(this.props), Object(ee.b)(this.props.flairStyleTemplate)),
						post: q,
						onClick: U,
						eventFactory: P
					}, Object(g.b)(q, s, J, T, ne, de, K), r.a.createElement(f.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, r.a.createElement(u.a, {
						className: re.a.eventMeta,
						post: q,
						language: A
					}), r.a.createElement("div", {
						className: re.a.mainBody
					}, r.a.createElement("div", {
						className: ge ? re.a.expandoContainer : re.a.thumbnailContainer
					}, !ge && r.a.createElement(_.a, {
						className: re.a.classicThumbnail,
						crosspost: le && q,
						isMeta: i,
						post: le || q,
						redditStyle: K,
						templatePlaceholderImage: de && de.postPlaceholderImage
					}), r.a.createElement(p.a, {
						crosspost: le,
						className: re.a.rightExpando,
						isExpanded: !!n,
						post: q,
						useMediaIcons: !1
					})), r.a.createElement("div", {
						className: re.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(oe, "px")
						}
					}, r.a.createElement(j.c, {
						className: z ? re.a.titleWithPoll : void 0,
						format: L,
						poll: z,
						post: q,
						redditStyle: K,
						size: j.b.Medium,
						titleColor: de && de.postTitleColor,
						isM2MHomeRedirectEnabled: F,
						isOverlay: D
					}, q.source && !le && r.a.createElement(w.a, {
						href: q.source.url,
						isSponsored: q.isSponsored,
						source: q.source
					}, Object(c.a)(q))), r.a.createElement(C.a, ae({
						key: "PostMeta"
					}, xe)), H && me && Object(y.c)(q) && r.a.createElement(x.a, {
						language: A,
						onIgnoreReports: V,
						reportable: q
					}), r.a.createElement("div", {
						className: re.a.spacer
					}), q.source && q.source.url && q.isSponsored && r.a.createElement(d.a, {
						className: re.a.adLinkWrapper
					}, r.a.createElement(w.a, {
						href: q.source.url.replace(a.a.redditUrl, ""),
						isSponsored: q.isSponsored,
						source: q.source
					}, q.source.displayText), q.callToAction && r.a.createElement(l.a, {
						href: q.source.url.replace(a.a.redditUrl, ""),
						isSponsored: q.isSponsored,
						source: q.source
					}, q.callToAction)), r.a.createElement("div", {
						className: re.a.flatlistContainer
					}, r.a.createElement(p.a, {
						className: re.a.leftExpando,
						crosspost: le,
						isExpanded: !!n,
						post: q,
						useMediaIcons: !1
					}), r.a.createElement(m.a, {
						className: re.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: q,
						onVoteClick: s
					}), r.a.createElement(b.a, {
						className: re.a.flatlistSeparator
					}), r.a.createElement(b.c, {
						className: re.a.flatlist,
						currentUser: t,
						hasModFlairPerms: ue,
						hasModPostPerms: me,
						isOverlay: !!D,
						language: A,
						modModeEnabled: H,
						onIgnoreReports: V,
						onOpenReportsDropdown: G,
						post: q,
						showEditPost: he,
						showEditFlair: Q,
						tooltipType: D ? S.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(O.h)({
							editPost: !pe,
							save: !pe,
							hide: !pe,
							report: !pe
						})
					})), r.a.createElement(h.d, {
						postId: q.id
					}))), ce(q, Z, n)));
					return r.a.createElement(r.a.Fragment, null, ye)
				}
			}
			const ce = (e, t, s) => s ? e.crosspostRootId ? r.a.createElement("div", {
					className: re.a.crosspostMediaWrapper
				}, de(e, t)) : de(e, t) : null,
				de = (e, t) => r.a.createElement(E.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				le = Object(i.a)(ie),
				me = (e => Z(Y(e)))(le);
			t.b = (e => q(Object(M.b)(e)))(le)
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				Planet: "ixfotyd9YXZz0LNAtJ25N",
				planet: "ixfotyd9YXZz0LNAtJ25N",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				subscribeButton: "_2Oxv8udy0lsocAGXEQxb8x",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				m = s("./src/reddit/components/SubredditNav/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				x = s("./src/reddit/constants/tracking.ts"),
				y = s("./src/reddit/selectors/telemetry.ts");
			var f = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				E = s("./src/reddit/selectors/widgets.ts"),
				C = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				O = s.n(C);
			const j = d.a.wrapped(f.a, "Planet", O.a),
				S = d.a.img("SubredditIcon", O.a),
				w = Object(o.c)({
					spPollsEnabled: h.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(v.a)(e, {
							subredditId: s
						})
					},
					widget: E.f
				});
			t.a = Object(a.b)(w)(Object(c.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					n = e.subreddit ? e.subreddit.url : e.subredditUrl,
					a = e.subreddit ? e.subreddit.title : "",
					o = e.subreddit && Object(g.a)(e),
					c = !(!e.theme || !o),
					d = s.charAt(0).toUpperCase() + s.slice(1),
					h = !!e.subreddit && e.subredditInlineEditingEnabled,
					f = Object(i.a)(O.a.SubredditIcon, O.a.editableIcon, {
						[O.a.emptyEditableIcon]: !o
					}),
					v = r.a.createElement(l.a, {
						className: f,
						subreddit: e.subreddit,
						iconUrl: o || void 0,
						inTopBar: !0
					}),
					E = c ? r.a.createElement(S, {
						src: o || void 0
					}) : r.a.createElement(j, null),
					C = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0);
				return r.a.createElement("div", {
					className: O.a.container,
					style: {
						maxWidth: e.layout === p.g.Large ? "".concat(984, "px") : "100%"
					}
				}, r.a.createElement("div", {
					className: O.a.subredditMetaContainer
				}, h ? v : E, r.a.createElement("div", {
					className: Object(i.a)(O.a.textContainer, {
						[O.a.textContainerNoIcon]: !c
					})
				}, r.a.createElement("div", {
					className: O.a.text
				}, r.a.createElement("h1", {
					className: O.a.title
				}, a || d), !!a && r.a.createElement("h2", {
					className: O.a.description
				}, "r/", s)), r.a.createElement("div", {
					className: O.a.subscribeButtonContainer
				}, r.a.createElement(u.a, {
					className: O.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => Object.assign({}, y.defaults(t), {
							source: "id_banner",
							action: x.c.CLICK,
							noun: e,
							subreddit: y.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: s,
						type: b.a.SUBREDDIT
					},
					small: !0
				})))), C && r.a.createElement(m.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: n,
					subredditId: t,
					subredditNavContainerClassName: O.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "k", (function() {
				return o
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "l", (function() {
				return d
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "n", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "p", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = 500,
				r = 100,
				a = 5e3,
				o = 5e4,
				i = 0,
				c = 1440,
				d = 36600,
				l = 1e9,
				m = {
					Disabled: "disabled",
					"Mods only": "modonly",
					Anyone: "anyone"
				},
				u = ["Wiki is disabled for all users except mods", "Only mods, approved wiki contributors, or those on a page's edit list may edit", "Anyone who can submit to the community may edit"],
				p = {
					Any: "any",
					"Links only": "link",
					"Text posts only": "self"
				},
				b = ["Any post type is allowed", "Only links to external sites are allowed", "Only text posts are allowed"],
				h = {
					Low: "low",
					"High (default)": "high",
					All: "all"
				},
				g = {
					"Low (default)": "low",
					High: "high",
					All: "all"
				},
				x = {
					"none (recommended)": null,
					best: "confidence",
					old: "old",
					top: "top",
					"q&a": "qa",
					"live (beta)": "live",
					controversial: "controversial",
					new: "new"
				},
				y = (e, t) => Object.keys(e).find(s => e[s] === t)
		},
		"./src/reddit/components/CommunityType/index.m.less": function(e, t, s) {
			e.exports = {
				nsfwText: "_1x9diBHPBP-hL1JiwUwJ5J",
				privateIcon: "_2B0OHMLKb9TXNdd9g5Ere-",
				quarantinedIcon: "_1xKxnscCn2PjBiXhorZef4",
				employeesIcon: "_1LLqoNXrOsaIkMtOuTBmO5",
				restrictedIcon: "QB2Yrr8uihZVRhvwrKuMS",
				TypeLabel: "_3w_KK8BUvCMkCPWZVsZQn0",
				typeLabel: "_3w_KK8BUvCMkCPWZVsZQn0"
			}
		},
		"./src/reddit/components/CommunityType/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/components/Flair/index.tsx"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/IconTooltip/index.tsx"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				u = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				p = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				b = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				h = s("./src/reddit/models/Flair/index.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				x = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/components/CommunityType/index.m.less"),
				v = s.n(f);
			const E = s("./src/lib/lessComponent.tsx").a.span("TypeLabel", v.a),
				C = Object(i.c)({
					restrictions: y.o
				}),
				O = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(o.b, {
					flair: {
						type: h.f.Nsfw,
						text: "nsfw"
					}
				}), r.a.createElement("span", {
					className: v.a.nsfwText
				}, Object(l.c)("Adult content"))),
				j = () => r.a.createElement(E, null, r.a.createElement(b.a, {
					className: v.a.quarantinedIcon
				}), r.a.createElement("span", null, Object(l.c)("Quarantined"))),
				S = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, e.subreddit.isNSFW && r.a.createElement(O, null)), r.a.createElement(E, {
					className: e.className
				}, e.description ? r.a.createElement(d.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, r.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && r.a.createElement(j, null)),
				w = Object(a.b)(C);
			t.a = w(e => {
				let {
					className: t,
					iconClassName: s,
					restrictions: n = x.e.Post,
					textClassName: a,
					subreddit: o
				} = e;
				switch (o.type) {
					case g.b.Restricted:
						return r.a.createElement(S, {
							className: t,
							icon: r.a.createElement(u.a, {
								className: Object(c.a)(v.a.restrictedIcon, s)
							}),
							text: Object(l.c)("Restricted"),
							textClassName: a,
							description: Object(x.g)(n),
							subreddit: o
						});
					case g.b.Private:
						return r.a.createElement(S, {
							className: t,
							icon: r.a.createElement(p.a, {
								className: Object(c.a)(v.a.privateIcon, s)
							}),
							text: Object(l.c)("Private"),
							textClassName: a,
							description: Object(l.c)("Only approved users can view and submit to this community"),
							subreddit: o
						});
					case g.b.EmployeesOnly:
						return r.a.createElement(S, {
							className: t,
							icon: r.a.createElement(m.a, {
								className: Object(c.a)(v.a.employeesIcon, s)
							}),
							text: o.allowContractors ? Object(l.c)("Employees & Contractors") : Object(l.c)("Employees Only"),
							textClassName: a,
							subreddit: o
						});
					default:
						return r.a.createElement(r.a.Fragment, null, o.isQuarantined && r.a.createElement(j, null), o.isNSFW && r.a.createElement(O, null))
				}
			})
		},
		"./src/reddit/components/CompactPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				emptyScore: "_3RRgbzXvoZ4MUYm45lAqp7",
				emptyVotes: "_2rSb53hAOWG9j6R_ToxoSJ",
				wrapper: "_2wuOxz4--LcoxCYSrpCBlx",
				expandoContainer: "_3CIl2qTD30RwYsMAGO2Y2S",
				expando: "_2UCpUVZ4aSncQhvkrQW_0i",
				subredditIconContainer: "_2IJnSguizdehDk_JnTKrdK",
				topLine: "_1OQE_XsSHzM7AtjVQahjoI",
				title: "_28eZmJsl2bogBZ2KPmeoFO",
				meta: "_24dJJDh8muEbehYysONmV1",
				comments: "_2-iJVRFJK-xC7a7xgBF-T5",
				ellipsis: "_1IFRAIwzfwChKq85FhLG69",
				flatList: "_3HxvQvODjYEHa-X5AuQinY"
			}
		},
		"./src/reddit/components/CompactPost/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = s("./src/reddit/models/Vote/index.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(p),
				h = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				g = s.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(l.t)(),
				f = Object(o.c)({
					isFakeSubreddit: l.y
				}),
				v = Object(a.b)(f),
				E = e => {
					const t = {
						interactive: !1,
						voteState: u.a.notVoted
					};
					return r.a.createElement("div", {
						className: g.a.emptyVotes
					}, r.a.createElement(d.d, x({
						key: "u"
					}, t)), r.a.createElement("div", {
						key: "s",
						className: g.a.emptyScore
					}), r.a.createElement(d.c, x({
						key: "d"
					}, t)))
				},
				C = e => r.a.createElement(c.a, {
					className: Object(m.a)(e)
				}),
				O = e => r.a.createElement("div", {
					className: g.a.flatList
				}, r.a.createElement("div", {
					className: Object(i.a)(g.a.comments, Object(m.b)(e))
				}), r.a.createElement("div", {
					className: Object(i.a)(g.a.ellipsis, Object(m.b)(e))
				}));
			t.a = y(v(e => r.a.createElement("div", {
				className: Object(i.a)(e.className, b.a.compactPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, r.a.createElement("div", {
				className: g.a.wrapper
			}, r.a.createElement(E, x({
				key: "c"
			}, e)), r.a.createElement("div", {
				key: "a",
				className: g.a.expandoContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(g.a.expando, Object(m.a)(e))
			})), r.a.createElement("div", {
				key: "d",
				className: g.a.subredditIconContainer
			}, r.a.createElement(C, {
				isLoading: !1
			})), r.a.createElement("div", {
				key: "e",
				className: g.a.topLine
			}, r.a.createElement("div", {
				key: "ea",
				className: Object(i.a)(g.a.title, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "eb",
				className: Object(i.a)(g.a.meta, Object(m.b)(e))
			})), r.a.createElement(O, x({
				key: "f"
			}, e))))))
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				adLinkWrapper: "_4Dt8djtbHlJ5uCZDX_SeV",
				content: "_1B7SUGHK0QDoHimxX2a9D0",
				leftRail: "_2r9FABr2qYEUDyZoenhn6N",
				bulkActionCheckbox: "_44ehKZ_pl1NGGaaTYouZR",
				subredditIcon: "_1kWbgdOrvSeXIZZRIw4uBS",
				topLine: "_2ZjElFi3ORaU3VPrwmdoCp",
				postBadges: "_126a2ACB41algqMEwA34TF",
				flatList: "_3jwri54NGT-SRatPIZYiMo",
				expandedContentWrapper: "_12wy0ZFFaS3a49145uXWXt",
				crosspostMediaWrapper: "_2fCIreZsKBNS3esgsKKksM",
				compactWrapper: "YA9IzN0YR-G5_oD5EUydl",
				compactPostRow: "WnMeTcero48dKo501T-19",
				donationAmount: "_1TjU-e4dgCSlbuHHatC0G9",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				chain: "_1el-fLKTUXg-19pIbGUHgk",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = (s("./node_modules/react-router-dom/esm/react-router-dom.js"), s("./node_modules/reselect/es/index.js")),
				i = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				p = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				f = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/actions/postFlair.ts"),
				E = s("./src/reddit/actions/tooltip.ts"),
				C = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/selectors/postFlair.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				P = s("./src/reddit/components/AwardBadges/index.tsx"),
				I = s("./src/reddit/components/CallToActionButton/index.tsx"),
				k = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				L = s("./src/reddit/components/CommentsLink/index.tsx"),
				T = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				B = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				R = s("./src/reddit/components/ExpandoButton/index.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				D = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				A = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				W = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				H = s("./src/reddit/components/ModModeReports/index.tsx"),
				U = s("./src/reddit/components/ModModeReports/helpers.ts"),
				V = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				G = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				z = s("./src/reddit/components/PostBadges/index.tsx"),
				q = s("./src/reddit/components/PostContainer/index.tsx"),
				K = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Z = s("./src/reddit/components/PostLeftRail/index.tsx"),
				J = s("./src/reddit/components/PostMedia/index.tsx"),
				Q = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Y = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				X = s("./src/reddit/components/PostTitle/index.tsx"),
				$ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ee = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				se = (s("./src/reddit/components/SubredditIcon/index.tsx"), s("./src/reddit/components/VerticalVotes/index.tsx")),
				ne = s("./src/reddit/components/ViewReportsDropdown/index.tsx"),
				re = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ae = s("./src/reddit/contexts/PageLayer/index.tsx"),
				oe = s("./src/reddit/controls/Checkbox/index.tsx"),
				ie = s("./src/reddit/controls/MetaData/index.tsx"),
				ce = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				de = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				le = s("./src/reddit/helpers/postEvent.ts"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Report/index.tsx"),
				pe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				be = s.n(pe),
				he = s("./src/reddit/components/CompactPost/index.m.less"),
				ge = s.n(he);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ye = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const fe = e => {
					var {
						isCompact: t
					} = e, s = ye(e, ["isCompact"]);
					return r.a.createElement(R.a, xe({
						className: Object(c.a)(ge.a.responsiveExpandoButton, {
							[ge.a.mHideAboveSmallTablets]: !!t,
							[ge.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				ve = Object(a.b)(() => Object(o.c)({
					activeModalId: C.a,
					crosspost: w.c,
					currentUser: N.i,
					flairStyleTemplate: ae.Q,
					isActive: w.g,
					isExpanded: w.j,
					language: N.S,
					layout: ae.M,
					moderatorPermissions: j.i,
					modModeEnabled: ae.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					post: w.J,
					showEditFlair: S.a,
					subredditOrProfile: w.U,
					userIsOp: N.jb,
					isInAdLeftSidebarExperiment: O.a
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: r
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: r
							} = t;
							return e(Object(v.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: r
							}))
						},
						handleVote: t => {
							const s = t === y.a.upvoted ? Object(f.N)(r) : Object(f.o)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(f.L)(r)),
						onOpenReportsDropdown: t => e(Object(E.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: n,
							selectedTemplateId: r
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: r
						})
					}
				}));
			class Ee extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: n,
						currentUser: a,
						eventFactory: o,
						flairStyleTemplate: d,
						handleVote: l,
						isCheckboxSelected: y = !1,
						isCommentsPage: f,
						isCommentPermalink: v,
						isExpanded: E,
						isInAdLeftSidebarExperiment: C,
						isOverlay: O,
						isProfilePostListing: j,
						inSubredditOrProfile: S = !1,
						language: w,
						layout: N,
						moderatorPermissions: R,
						modModeEnabled: J,
						onClickPost: te,
						onFlairChanged: re,
						onIgnoreReports: ae,
						poll: ie,
						post: pe,
						subredditOrProfile: he,
						userIsOp: xe,
						hideModTools: ye,
						scrollerItemRef: fe,
						showBulkActionCheckbox: ve,
						showEditFlair: Ee,
						toggleCheckbox: Oe,
						tooltipType: we,
						sendEvent: Ne
					} = this.props, _e = !!pe.media && pe.media.type === g.n.RTJSON, Pe = xe && _e, Ie = Object(K.b)(pe.id, O), ke = Object(u.a)(R), Le = Object(de.a)(R), Te = "-mod-actions-menu-".concat(pe.id), Me = !!a && Object(x.f)(a) === pe.author, Be = Object(U.c)(pe), Re = Object(D.a)("View--Reports", pe.id, we), Fe = Object(U.a)(pe), De = !(O || f || v), Ae = e => Ne(Object(h.f)(pe.id, e)), We = r.a.createElement(q.a, {
						className: Object(c.a)(be.a.compactPostStyles, ge.a.postContainer, Object(b.a)(this.props), t),
						isOverlay: O,
						style: Object.assign({}, Object(b.d)(this.props), Object(b.b)(this.props.flairStyleTemplate)),
						post: pe,
						onClick: te,
						eventFactory: o
					}, r.a.createElement("div", {
						className: ge.a.compactWrapper
					}, r.a.createElement("div", {
						className: ge.a.leftRailWrapper
					}, r.a.createElement("div", {
						className: ge.a.leftRail,
						style: {
							borderColor: Object(Z.c)({
								isRemoved: !!pe.bannedBy,
								isReported: Object(p.a)(pe),
								isSponsored: pe.isSponsored,
								theme: this.props.theme,
								isInAdLeftSidebarExperiment: C
							})
						}
					}, ve && r.a.createElement(oe.a, {
						className: ge.a.bulkActionCheckbox,
						isCheckboxSelected: y,
						toggleCheckbox: Oe
					}), r.a.createElement(se.a, {
						className: ge.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: d,
						model: pe,
						onVoteClick: l
					}), r.a.createElement(T.a, {
						className: ge.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: d,
						model: pe,
						onVoteClick: l
					}))), r.a.createElement(G.a, {
						className: Object(c.a)(ge.a.content, {
							[ge.a.isEvent]: Object(le.a)(pe)
						}),
						"data-click-id": "background",
						flairStyleTemplate: d
					}, r.a.createElement(B.a, {
						isCompactMode: !0,
						language: w,
						post: pe
					}), r.a.createElement("div", {
						className: ge.a.compactPostRow
					}, !ye && je(pe, n, E, !1), !S && !pe.isSponsored && r.a.createElement(A.h, {
						type: pe.belongsTo.type,
						id: pe.belongsTo.id
					}), r.a.createElement("div", {
						className: ge.a.topLine,
						"data-click-id": "body"
					}, r.a.createElement(X.c, {
						post: pe,
						poll: ie,
						size: X.b.Small,
						titleColor: d && d.postTitleColor,
						isOverlay: !1
					}), Se(pe, he, w), r.a.createElement($.d, {
						className: ge.a.postTopMeta,
						flairStyleTemplate: d,
						language: w,
						post: pe,
						showSub: !!he && !S && !pe.isSponsored,
						subredditOrProfile: he
					}), r.a.createElement(z.a, {
						className: ge.a.postBadges,
						displayText: he ? he.displayText : null,
						inSubredditOrProfile: S,
						language: w,
						post: pe
					}), he && r.a.createElement(M.a, {
						className: ge.a.donationAmount,
						contentId: pe.id,
						subredditId: he.id
					}), r.a.createElement(P.a, {
						isOverlay: O,
						tooltipType: we,
						thing: pe
					})), De && r.a.createElement("div", null, r.a.createElement(k.a, {
						className: ge.a.liveDiscussionIcon,
						isMod: ke,
						postId: pe.postId
					})), r.a.createElement("div", {
						className: ge.a.flatList
					}, r.a.createElement(L.a, {
						className: ge.a.commentsLink,
						hasModPostPerms: ke,
						isCommentsPage: f,
						isCommentPermalink: v,
						isOverlay: O,
						postId: pe.id,
						modModeEnabled: J,
						numComments: pe.numComments,
						type: m.g.Compact
					}), r.a.createElement(V.a, {
						className: ge.a.modToolsFlatlist,
						isOverlay: !1,
						language: w,
						layout: N,
						modModeEnabled: J,
						post: pe,
						sendEvent: Ne,
						showIconsOnly: !0
					}), ke && r.a.createElement(W.a, {
						dropdownId: Te,
						onClick: () => Ae("post_mod_action_menu")
					}, r.a.createElement(F.b, null), r.a.createElement(Q.a, {
						canEditFlair: Le && Ee,
						hasModPostPerms: ke,
						isOverlay: !1,
						isPostAuthor: Me,
						language: w,
						modModeEnabled: J,
						post: pe,
						tooltipId: Te
					})), ke && Be && !J && r.a.createElement(ee.c, {
						text: "".concat(Fe),
						onClick: () => {
							this.props.onOpenReportsDropdown(Re), Ae("post_report_menu")
						},
						id: Re
					}, r.a.createElement(ne.a, {
						model: pe,
						onIgnoreReports: () => {
							ae(), Ae(pe.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Re
					}), pe.ignoreReports ? r.a.createElement(me.a, null) : r.a.createElement(ue.a, null)), r.a.createElement(Y.g, {
						currentProfileName: s,
						isCommentsPage: f,
						isOverlay: !1,
						isProfilePostListing: j,
						layout: N,
						permalink: pe.permalink,
						postId: pe.postId,
						sendEvent: Ne,
						showEditPost: Pe,
						showEditFlair: Ee,
						dropdownId: "".concat(pe.id, "-overflow-menu"),
						useFlatlistBreakpoints: Object(Y.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ye && je(pe, n, E, !0))), pe.source && pe.source.url && pe.isSponsored && r.a.createElement(_.a, {
						className: ge.a.adLinkWrapper
					}, r.a.createElement(ce.a, {
						href: pe.source.url.replace(i.a.redditUrl, ""),
						isSponsored: pe.isSponsored,
						source: pe.source
					}, pe.source.displayText), pe.callToAction && r.a.createElement(I.a, {
						href: pe.source.url.replace(i.a.redditUrl, ""),
						isSponsored: pe.isSponsored,
						source: pe.source,
						isNotCardView: !0
					}, pe.callToAction)), J && ke && Be && r.a.createElement("div", {
						className: ge.a.compactPostRow
					}, r.a.createElement(H.a, {
						language: w,
						onIgnoreReports: ae,
						reportable: pe
					})), r.a.createElement(A.d, {
						postId: pe.id
					}))), E && r.a.createElement(Ce, {
						post: pe,
						scrollerItemRef: fe,
						flairStyleTemplate: d
					}), e === Ie && r.a.createElement(K.a, {
						flairs: pe.flair,
						subredditId: pe.belongsTo.id,
						modalId: Ie,
						onFlairChanged: re
					}));
					return r.a.createElement(r.a.Fragment, null, We)
				}
			}
			const Ce = e => r.a.createElement(G.a, {
					className: Object(c.a)(e.className, ge.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? r.a.createElement("div", {
					className: ge.a.crosspostMediaWrapper
				}, Oe(e.post, e.scrollerItemRef)) : Oe(e.post, e.scrollerItemRef)),
				Oe = (e, t) => r.a.createElement(J.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				je = (e, t, s, n) => r.a.createElement(fe, {
					crosspost: t,
					isCompact: n,
					isExpanded: s,
					post: e,
					useMediaIcons: !0
				}),
				Se = (e, t, s) => r.a.createElement("div", {
					className: ge.a.responsiveMeta
				}, r.a.createElement(ie.b, {
					isScoreHidden: e.scoreHidden,
					language: s,
					score: e.score
				}), r.a.createElement(ie.c, null), Object(ie.d)(e.numComments, s), r.a.createElement(ie.c, null), t && r.a.createElement("a", {
					href: t.url
				}, r.a.createElement(ie.a, null, t.displayText)), e.isSponsored && [r.a.createElement(te.a, {
					key: "label"
				}), r.a.createElement(ie.c, {
					key: "separator"
				})], !e.isSponsored && r.a.createElement(ie.a, null, " Posted by "), r.a.createElement($.b, {
					post: e
				}));
			t.a = ve(Object(l.b)(Object(re.b)(Object(d.a)(Ee))))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/components/IdCard/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				p = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				h = s("./src/reddit/selectors/subreddit.ts");
			const g = Object(o.c)({
				restrictions: h.o
			});
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						this.props.sendEvent(Object(u.a)(this.props.eventSource)), this.props.openContributorRequestModal()
					}
				}
				render() {
					const e = this.props.smallButton ? m.f : c.c;
					return r.a.createElement(e, {
						className: this.props.className,
						onClick: this.onRequest
					}, this.props.eventSource === b.b.Comment ? Object(p.c)("Request to comment") : Object(p.c)("Request to post"))
				}
			}
			t.a = Object(a.b)(g, e => ({
				openContributorRequestModal: () => e(Object(i.i)(l.a.CONTRIBUTOR_REQUEST))
			}))(Object(d.b)(x))
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1BIJI1DdDH_4emkRdSgYtS",
				titleFontH2: "_23v2sEqtCPdekfIaLfBZp0",
				titleFontH3: "_3IPxgawQfrpK8awcnvf2tu",
				titleFontH4: "ZuN5dJ8fJ4v1pojDMILP0",
				titleFontH5: "_2ztaAHYqZbZbLYMI-lEtHX",
				titleFontH6: "FJTuq_jN8uqei2Q4GA66j",
				metadataFont: "_1cBJStdY8xmiR_5jS9gSeH",
				flairFont: "_1fMm1d_nUYPU1bZGhGW2bC",
				labelsFont: "_2_UCOjEBwHnvHk6zBrjPsR",
				actionFont: "_2yyPZbzMoNrAUtQO_SktBd",
				smallButtonFont: "_2_b2a8o6wkToROG8VNRtMR",
				largeButtonFont: "_3Ls4y5dDOPfsU8368YWswn",
				tabFont: "_2TXH3iCv_qoKnRDI_q5ehB",
				strongTextFont: "_1VYMlogcTatyZdJyEPfw1t",
				extraSmallFont: "A_BVHp4etEzRQfPWIVxb2",
				bodyFontH1: "_2ZqUm_Cp2QP_j0eqf4TOLu",
				bodyFontH2: "_3CcMb_6AI06xq5ar12VdGR",
				bodyFontH3: "_2rQURI6yWXPMKy8zTsJVhS",
				bodyFontH4: "_20eyEQiTe3oMfPFHKZsVTk",
				bodyFontH5: "_1LGkFCI_sPLVchg392lGmP",
				bodyFontH6: "NneW2LW2rvek7WBZYLULA",
				bodyFont: "_1WbHqicmob5scrxcNoRM6z",
				bodyFontSmall: "_1JhbrLSCwywCqsws4jUAzS",
				bodyFontMono: "_1DXzqFfRPHDAA7hSJMbTxi",
				banner: "_2bVJFy1zdpBBF6tNX6MsZt",
				button: "_3dn2kMjL3eThyGPEb1oAf-",
				buttonWrapper: "_2MsQ2gmnKXnwElZFA1jCbV",
				close: "_1MiKBKJCDaPRJ7r-vSQ8xU",
				closeContainer: "_3Amqa4WXRxq65XAjmjQw8E",
				heading: "aVXYLWktPH4YxXbOJbfEg",
				postIcon: "_2cBHGzAvbCcbR3bvPSt_Y1",
				text: "_3VcroXmJS3StZ2nIi8JODq"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n, r = s("./src/app/strings/index.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/localStorageAvailable/index.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/components/Translated/index.tsx");
			! function(e) {
				e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner"
			}(n || (n = {}));
			var u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				h = e => o.a.createElement("svg", {
					viewBox: "0 0 56 56",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, o.a.createElement("g", {
					transform: "translate(1 1)",
					fill: "inherit",
					stroke: "inherit",
					fillRule: "evenodd"
				}, o.a.createElement("rect", {
					x: "16",
					y: "35",
					width: "22.4",
					height: "2.8",
					rx: "1.4",
					stroke: "none"
				}), o.a.createElement("path", {
					d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
				}), o.a.createElement("circle", {
					strokeWidth: "2",
					fill: "none",
					cx: "27",
					cy: "27",
					r: "27"
				}))),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/reddit/components/CreatePostBanner/index.m.less"),
				f = s.n(y);
			const v = Object(i.b)(null, (e, t) => {
				let {
					language: s
				} = t;
				return {
					showToast: () => {
						e(Object(d.e)({
							kind: x.b.SuccessCommunity,
							text: Object(r.a)(s, "postCreation.modBanner.dismissed")
						}))
					}
				}
			});
			class E extends o.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(p.F)(n.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
							visible: !1
						}), this.props.showToast(), this.props.sendEvent(Object(b.b)())
					}, this.createPost = () => {
						this.props.sendEvent(Object(b.a)())
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						subreddit: e
					} = this.props, t = Object(c.a)() && !Object(p.e)(n.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(Object(b.c)()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? o.a.createElement("div", {
						className: f.a.banner
					}, o.a.createElement("button", {
						className: f.a.closeContainer,
						onClick: this.closeBanner
					}, o.a.createElement(g.a, {
						className: f.a.close
					})), o.a.createElement(h, {
						className: f.a.postIcon
					}), o.a.createElement("div", {
						className: f.a.heading
					}, o.a.createElement(m.a, {
						msgId: "postCreation.modBanner.title",
						replacements: {
							displayText: e.displayText
						}
					})), o.a.createElement("div", {
						className: f.a.text
					}, o.a.createElement(m.a, {
						msgId: "postCreation.modBanner.description"
					}), o.a.createElement("div", null, o.a.createElement(m.a, {
						msgId: "postCreation.modBanner.subdescription"
					}))), o.a.createElement("div", {
						className: f.a.buttonWrapper
					}, o.a.createElement(u.g, {
						className: f.a.button,
						target: "_blank",
						href: "/".concat(e.displayText, "/submit"),
						onClick: this.createPost
					}, o.a.createElement(m.a, {
						msgId: "postCreation.modBanner.button"
					})))) : null
				}
			}
			t.a = v(Object(l.b)(E))
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/CrosspostBox/index.m.less"),
				f = s.n(y),
				v = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = v.a.div("Container", f.a),
				O = v.a.div("PostMetaWrapper", f.a),
				j = v.a.wrapped(p.c, "PostTitle", f.a),
				S = v.a.div("FlatList", f.a),
				w = v.a.div("FlatItem", f.a),
				N = v.a.span("FlatListDotSpacer", f.a),
				_ = v.a.wrapped(C, "LinkContainer", f.a),
				P = v.a.div("Content", f.a),
				I = v.a.div("ThumbnailContainer", f.a),
				k = Object(i.c)({
					isCurrentUserProfilePost: g.h,
					language: x.S,
					post: g.J,
					shouldOpenPostInNewTab: x.W,
					subreddit: g.U
				}),
				L = Object(a.b)(k);
			t.a = L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					mediaProps: n,
					post: a,
					subreddit: o,
					language: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: o,
						language: i,
						tooltipType: "".concat("CrosspostBox", "--").concat(n.isListing)
					},
					d = t;
				return a && !a.media ? r.a.createElement(_, {
					className: d
				}, r.a.createElement(P, null, r.a.createElement(O, null, r.a.createElement(u.a, c)), T(a), a.source && r.a.createElement(b.a, {
					post: a
				}), B(e)), F(e)) : r.a.createElement(C, {
					className: d
				}, r.a.createElement(O, null, r.a.createElement(u.a, c)), T(a), M(e), B(e))
			});
			const T = e => r.a.createElement(j, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				M = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(m.a, E({}, n, {
						className: f.a.mediaContainer
					})))
				},
				B = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: n
					} = s;
					return r.a.createElement(S, null, r.a.createElement(w, null, Object(c.c)(t, "posts.points.noun", n, {
						count: Object(l.b)(n)
					})), r.a.createElement(N, null), r.a.createElement(w, null, R(e)))
				},
				R = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: a
					} = s;
					return r.a.createElement(o.a, {
						"data-click-id": "comments",
						to: Object(d.a)(s.permalink, !0),
						target: n ? "_blank" : void 0
					}, Object(c.c)(t, "posts.comments.noun", a, {
						count: Object(l.b)(a)
					}))
				},
				F = e => r.a.createElement(I, null, r.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_22LJahVHZg-w-Ok4e54Ekf",
				arrowIcon: "_2vWDDpepKDRWqekB9vJEi"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/colors.ts");
			const d = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(t, "-du-left-").concat(e)
			};
			var l = e => {
				const {
					seed: t = ""
				} = e, s = d("a", t), n = d("b", t), r = d("c", t), a = d("d", t);
				return o.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("defs", null, o.a.createElement("circle", {
					id: n,
					cx: "18",
					cy: "18",
					r: "18"
				}), o.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, o.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), o.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), o.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), o.a.createElement("path", {
					id: r,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), o.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, o.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, o.a.createElement("use", {
					fill: c.a.black,
					filter: "url(#".concat(s, ")"),
					xlinkHref: "#".concat(n)
				}), o.a.createElement("use", {
					fill: c.a.white,
					xlinkHref: "#".concat(n)
				})), o.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, o.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), o.a.createElement("mask", {
					id: a,
					fill: c.a.white
				}, o.a.createElement("use", {
					xlinkHref: "#".concat(r)
				})), o.a.createElement("use", {
					fill: c.a.black,
					xlinkHref: "#".concat(r)
				}), o.a.createElement("g", {
					fill: c.a.alienblue,
					mask: "url(#".concat(a, ")")
				}, o.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			};
			const m = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(t, "-du-right-").concat(e)
			};
			var u = e => {
					const {
						seed: t = ""
					} = e, s = m("a", t), n = m("b", t), r = m("c", t), a = m("d", t);
					return o.a.createElement("svg", {
						className: e.className,
						onClick: e.onClick,
						viewBox: "4 0 45 45",
						version: "1.1",
						xmlns: "http://www.w3.org/2000/svg"
					}, o.a.createElement("defs", null, o.a.createElement("circle", {
						id: n,
						cx: "18",
						cy: "18",
						r: "18"
					}), o.a.createElement("filter", {
						id: s,
						x: "-33.3%",
						y: "-25%",
						width: "166.7%",
						height: "166.7%"
					}, o.a.createElement("feOffset", {
						dy: "3",
						in: "SourceAlpha",
						result: "shadowOffsetOuter1"
					}), o.a.createElement("feGaussianBlur", {
						in: "shadowOffsetOuter1",
						result: "shadowBlurOuter1"
					}), o.a.createElement("feColorMatrix", {
						in: "shadowBlurOuter1",
						values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
					})), o.a.createElement("path", {
						id: r,
						d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
					})), o.a.createElement("g", {
						fill: "none",
						fillRule: "evenodd"
					}, o.a.createElement("g", {
						fillRule: "nonzero",
						transform: "translate(7 4)"
					}, o.a.createElement("use", {
						fill: c.a.black,
						filter: "url(#".concat(s, ")"),
						xlinkHref: "#".concat(n)
					}), o.a.createElement("use", {
						fill: c.a.white,
						xlinkHref: "#".concat(n)
					})), o.a.createElement("g", {
						transform: "rotate(90 9.326 23.5)"
					}, o.a.createElement("path", {
						d: "M0 16h16V0H0z"
					}), o.a.createElement("mask", {
						id: a,
						fill: c.a.white
					}, o.a.createElement("use", {
						xlinkHref: "#".concat(r)
					})), o.a.createElement("use", {
						fill: c.a.black,
						xlinkHref: "#".concat(r)
					}), o.a.createElement("g", {
						fill: c.a.alienblue,
						mask: "url(#".concat(a, ")")
					}, o.a.createElement("path", {
						d: "M0 0h16v16H0z"
					})))))
				},
				p = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				b = s.n(p);
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			}));
			const h = e => o.a.createElement("button", {
					className: Object(i.a)(b.a.arrow, e.className),
					onClick: e.onClick
				}, o.a.createElement(l, {
					className: b.a.arrowIcon,
					seed: e.seed
				})),
				g = e => o.a.createElement("button", {
					className: Object(i.a)(b.a.arrow, e.className),
					onClick: e.onClick
				}, o.a.createElement(u, {
					className: b.a.arrowIcon,
					seed: e.seed
				}));
			class x extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
					}, this.makeVisibilityChangeHandler = e => t => {
						this.setState({
							viewableItems: Object.assign({}, this.state.viewableItems, {
								[e]: t.isIntersecting && t.intersectionRatio >= .99
							})
						})
					}, this.getVisibleItemsCount = () => {
						return r()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
					}, this.getMaxScrollIndex = e => null != e && this.props.items ? this.props.items.length - e : null, this.getSpacerCount = e => e + 1, this.getMarginLeft = e => {
						let {
							adjustment: t,
							itemWidth: s,
							scrollIndex: n,
							spacerWidth: r = 0
						} = e;
						return t - n * (s + r) + r
					}, this.itemsFitInContainer = e => {
						let {
							container: t,
							items: s,
							itemWidth: n,
							spacerWidth: r = 0
						} = e;
						if (!t) return !0;
						const a = s.length * n,
							o = this.getSpacerCount(s.length) * r;
						return t.offsetWidth >= a + o
					}, this.getAdjustment = e => {
						let {
							itemWidth: t,
							maxScrollIndex: s,
							scrollIndex: n,
							spacerWidth: r = 0,
							visibleItemsCount: a
						} = e, o = 0;
						if (n === s && a) {
							const e = a * t + this.getSpacerCount(a) * r;
							o = (this.container ? this.container.offsetWidth : e) - e
						} else n > 0 && (o = 0);
						return o
					}, this.setContainerRef = e => {
						this.container = e
					}, this.id = "", this.onClickNext = this.onClickNext.bind(this), this.onClickPrev = this.onClickPrev.bind(this)
				}
				componentDidMount() {
					const e = this.getVisibleItemsCount();
					this.setState({
						visibleItemsCount: e
					})
				}
				onClickNext() {
					const e = this.getVisibleItemsCount(),
						t = this.getMaxScrollIndex(e),
						s = Math.max(1, e),
						n = Math.min(this.state.scrollIndex + s, t);
					this.setState({
						scrollIndex: n,
						visibleItemsCount: e
					})
				}
				onClickPrev() {
					const e = this.getVisibleItemsCount(),
						t = Math.max(1, e),
						s = Math.max(0, this.state.scrollIndex - t);
					this.setState({
						scrollIndex: s,
						visibleItemsCount: e
					})
				}
			}
			t.c = x
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const a = Object(n.a)({
				getComponent: () => Object(r.a)(() => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("Explore~InFeedChaining"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = a
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less": function(e, t, s) {
			e.exports = {
				body: "_1TdTKnpCL4r-8b_P6N_s2H",
				thumbnailWrapper: "_1GhzoJvAGDHDieNmaBbc1j",
				thumbnail: "_29LP0yOv3qdH7Hw0i42rY1",
				thumbnailContainer: "_3D4UF6ZAO5wiwsAaqGPFD_",
				thumbnailLinkIcon: "_3nmCxKiXx-UyUgMfxQMQYO",
				bodyWrapper: "_2DMHAzKjqjnl-PBICpGvvP",
				mediaWrapper: "_2nVhK4TJW8rFpCW0J71MeZ",
				textWrapper: "_3HyzG7Bun5vaTrdBWvTTmT",
				postTitle: "_1ft5B5IP2RM9FAOkd6O_30",
				postTitleCompact: "_2y0S2HAq5enRe-8puwGqvp",
				flexSpacer: "_2pXLfUYWqtorJfsnyUPLpy"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_16DxRuw4PntaiR7Mb8IpKz",
				metaText: "_2OKlRpghzNcnid45bc1QFg"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_1eoxIROAsv7YNisHStsspM",
				icon: "_1r7shGI3FRi8x8jB0wJFIw",
				iconLink: "_2aYABiczSUxClJTIX1tUoW",
				name: "_3n6BCmTgHdb1J5H2L_XX4A",
				link: "_3ZwhnERcT6sV1cfCBsQmAP",
				subscribe: "_1NVoS5Yuc3mBX9AM0jW19e"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = 236
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2-uI1CWUC-WOhm-MolZUT8",
				background: "_2KsrA9nTjIN0VD69GqImgf"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/MiniCardPost/index.tsx"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/config.ts"),
				h = s("./src/lib/isUrl/index.ts"),
				g = s("./src/reddit/components/Media/index.tsx"),
				x = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				v = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				E = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/components/MiniCardPost/index.m.less"),
				j = s.n(O),
				S = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				w = s.n(S);
			const N = "".concat(b.a.assetPath, "/img/link-placeholder.png");
			var _ = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: a,
						flairStyleTemplate: i,
						forceLoadMedia: c,
						post: d,
						scrollerItemRef: l,
						shouldPause: m
					} = e, {
						media: u
					} = a || d, p = u && r.a.createElement(g.a, {
						autoplayPref: t,
						availableWidth: s,
						className: j.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: C.c,
						imageBoxClassName: j.a.mediaImageBox,
						imageBoxContentImageClassName: j.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: a || d,
						scrollerItemRef: l,
						shouldLoad: c,
						shouldPause: m,
						showCentered: !1,
						showFull: !1
					});
					let b, O = !0;
					const S = !!d.source && Object(h.a)(d.source.url) || !!d.thumbnail && Object(h.a)(d.thumbnail.url);
					return !u && S ? (O = !1, b = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: w.a.flexSpacer
					}), r.a.createElement("div", {
						className: w.a.mediaWrapper
					}, r.a.createElement(x.a, {
						className: w.a.thumbnailWrapper,
						thumbnailClassName: w.a.thumbnail,
						thumbnailContainerClassName: w.a.thumbnailContainer,
						thumbnailLinkIconClassName: w.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: d,
						showPlaceholderContentType: !i || !i.postPlaceholderImage,
						templatePlaceholderImage: i ? i.postPlaceholderImage : N,
						usePreview: !0
					})))) : u && p ? u.type !== C.n.RTJSON && u.type !== C.n.TEXT ? (O = !1, b = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: w.a.flexSpacer
					}), r.a.createElement("div", {
						className: w.a.mediaWrapper
					}, p))) : b = Object(E.a)(d) || Object(v.c)(d) && Object(f.a)(d) ? r.a.createElement("div", {
						className: w.a.textWrapper
					}, p) : r.a.createElement("div", {
						className: w.a.flexSpacer
					}) : b = r.a.createElement("div", {
						className: w.a.flexSpacer
					}), r.a.createElement("div", {
						className: Object(o.a)(w.a.body, n)
					}, r.a.createElement(y.c, {
						className: O ? w.a.postTitle : w.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: d,
						size: y.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: i && i.postTitleColor
					}), b)
				},
				P = s("./src/app/strings/index.ts"),
				I = s("./src/lib/prettyPrintNumber/index.ts"),
				k = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				L = s.n(k);
			var T = e => {
					const {
						className: t,
						language: s,
						post: n
					} = e;
					return r.a.createElement("div", {
						className: Object(o.a)(L.a.footer, t)
					}, r.a.createElement("span", {
						className: L.a.metaText
					}, Object(P.c)(s, "posts.points.noun", n.score, {
						count: Object(I.b)(n.score)
					})), r.a.createElement("span", {
						className: L.a.metaText
					}, Object(P.c)(s, "posts.comments.noun", n.numComments, {
						count: Object(I.b)(n.numComments)
					})))
				},
				M = s("./src/reddit/components/SubredditIcon/index.tsx"),
				B = s("./src/reddit/components/SubscribeButton/index.tsx"),
				R = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				F = s("./src/reddit/constants/posts.ts"),
				D = s("./src/reddit/controls/InternalLink/index.tsx"),
				A = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				W = s.n(A);
			var H = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: n,
						shouldShowSubscribeButton: a,
						subredditOrProfile: i
					} = e, c = Object(p.d)(i) ? F.a.PROFILE : F.a.SUBREDDIT;
					return r.a.createElement("div", {
						className: Object(o.a)(W.a.header, t)
					}, r.a.createElement(D.a, {
						className: W.a.iconLink,
						"data-redditstyle": !0,
						to: i.url,
						onMouseDown: n
					}, r.a.createElement(M.b, {
						className: W.a.icon,
						subredditOrProfile: i
					})), r.a.createElement("div", {
						className: W.a.name
					}, r.a.createElement(D.a, {
						className: W.a.link,
						"data-redditstyle": !0,
						to: i.url,
						onMouseDown: n
					}, Object(R.b)(i.displayText || i.name, c))), a && r.a.createElement(B.a, {
						className: W.a.subscribe,
						"data-redditstyle": !0,
						getEventFactory: s,
						icon: !0,
						identifier: {
							name: i.name,
							type: c
						},
						small: !0
					}))
				},
				U = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				V = s.n(U),
				G = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				z = s.n(G),
				q = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const K = Object(a.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(p.d)(e) ? t : s).some(t => t.id === e.id)
			});
			class Z extends r.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditOrProfileClicked = e => {
						e.stopPropagation(), this.props.onSubredditOrProfileClick(this.props.postId)
					}, this.getSubscribeEventFactory = e => {
						const t = this.props.getSubscribeEventFactory(this.props.postId);
						if (t) return t(e)
					}
				}
				render() {
					const e = this.props,
						{
							className: t
						} = e,
						s = q(e, ["className"]),
						{
							eventFactory: n,
							flairStyleTemplate: a,
							language: i,
							onClickPost: d,
							post: p,
							subredditOrProfile: b,
							subscribedProfiles: h,
							subscribedSubreddits: g
						} = s,
						x = !K({
							subredditOrProfile: b,
							subscribedProfiles: h,
							subscribedSubreddits: g
						});
					return r.a.createElement(m.a, {
						className: Object(o.a)(z.a.container, V.a.largeAndMediumActiveStyles, V.a.largeAndMediumPostStyles, V.a.mUseRedditTheme, j.a.postContainer, Object(u.a)(this.props), t),
						eventFactory: n,
						onClick: d,
						post: p,
						style: Object.assign({}, Object(u.b)(this.props.flairStyleTemplate), Object(u.d)(this.props))
					}, r.a.createElement(l.a, {
						className: z.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: a
					}, b && r.a.createElement(H, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: b,
						shouldShowSubscribeButton: x
					}), r.a.createElement(_, s), r.a.createElement(T, {
						"data-redditstyle": !0,
						language: i,
						post: p
					})), r.a.createElement(c.d, {
						postId: p.id
					}))
				}
			}
			t.a = Object(d.a)(Object(i.a)(Z))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DZ4N46-GxcZN4myRo1Jov",
				metaLine: "_3RsomDBMRm4zJwQoMA4H1I",
				bodyWrapper: "_8QyJR-f-gRDrBnB_U9d9M",
				mediaWrapper: "aAoswTeXSP59D_O0jbLMm",
				textWrapper: "_2QMHsv2ah510M8yVPnDIDo",
				meta: "_3OnBTLhwkjT_qb7jDZaN9k",
				metaWrapper: "_2kgjZeq5YSkBzbG2wBt-_",
				thumbnailWrapper: "_1QpRu40opbkSjXtHCoSpBr",
				thumbnail: "_1DSgZoQLneHjWE3l_dVvDG",
				thumbnailContainer: "_1cYdO4iDTKirKmKc6pjuYh",
				flatlist: "_15Tcsv4uOZy408GvAhSm6S",
				postTitle: "_20l1A0LHN5sLYdsFa4q_mv",
				postTitleCompact: "-si4FJBkXt7YGgVfE6_gR",
				flexSpacer: "oE0WBXnmx0c_cycbOzIeZ",
				innerContainer: "_2-GgqVSOuBRpxRqecJixsh"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsPlaceholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-redux/es/index.js")),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				g = s.n(h),
				x = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				y = s.n(x);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const E = Object(m.t)(),
				C = Object(i.c)({
					isFakeSubreddit: m.y
				}),
				O = Object(o.b)(C),
				j = e => {
					const t = {
						interactive: !1,
						voteState: b.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(a.a)(y.a.emptyVotes, e.className)
					}, r.a.createElement(l.d, t), r.a.createElement("div", {
						className: Object(a.a)(y.a.emptyScore, Object(u.b)({
							isLoading: e.isLoading
						}))
					}), r.a.createElement(l.c, t))
				};
			var S = E(O(Object(c.a)(e => {
					var {
						className: t,
						isLoading: s,
						showSubreddit: n
					} = e, o = v(e, ["className", "isLoading", "showSubreddit"]);
					return r.a.createElement("div", {
						className: Object(a.a)(y.a.container, g.a.largeAndMediumPostStyles, t)
					}, r.a.createElement("div", {
						className: Object(a.a)(y.a.thumbnail, Object(u.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: y.a.content
					}, r.a.createElement("div", {
						className: y.a.titleContainer
					}, r.a.createElement("div", {
						className: Object(a.a)(y.a.title, Object(u.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(a.a)(y.a.title, Object(u.b)({
							isLoading: s
						}))
					})), n && r.a.createElement(p.a, {
						className: y.a.subreddit
					}, r.a.createElement(d.a, f({
						className: Object(a.a)(Object(u.b)({
							isLoading: !1
						}))
					}, o)), r.a.createElement("div", {
						className: Object(a.a)(y.a.subredditName, Object(u.b)({
							isLoading: s
						}))
					})), r.a.createElement(p.a, null, r.a.createElement(j, f({
						isLoading: s
					}, o)), r.a.createElement("div", {
						className: Object(a.a)(y.a.comments, Object(u.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(a.a)(y.a.share, Object(u.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(a.a)(y.a.ellipsis, Object(u.b)({
							isLoading: s
						}))
					}))))
				}))),
				w = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				N = s.n(w);
			t.a = e => r.a.createElement("div", {
				className: Object(a.a)(N.a.container, e.className)
			}, r.a.createElement("div", {
				className: N.a.largePosts
			}, r.a.createElement(S, {
				className: N.a.topPostLargePost,
				isLoading: !0,
				showSubreddit: e.showSubreddit
			}), r.a.createElement(S, {
				className: N.a.topPostLargePost,
				isLoading: !0,
				showSubreddit: e.showSubreddit
			}), r.a.createElement(S, {
				className: N.a.topPostLargePost,
				isLoading: !0,
				showSubreddit: e.showSubreddit
			})))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_380AW2tV1AjseFZoaW2xp3",
				topPosts: "_3RDCFf4elKrhJHKKZkPPD",
				topPostsLargePostsContainer: "_1iE8_7IcegvYg_Wg3A0jTR",
				largePosts: "_2jBymLZmAms1MelhCFZsUI",
				"m-large": "_2lujqkV5X6gCVwiA3jxvA1",
				mLarge: "_2lujqkV5X6gCVwiA3jxvA1",
				"m-subreddit": "_3UFkxiq8tu1X9rAES7YEk7",
				mSubreddit: "_3UFkxiq8tu1X9rAES7YEk7",
				topPostLargePosts: "_1B27sUe973sxluKyC6_HnP",
				topPost: "_3_Nr3saSmaO8BeqrN2u7Pb",
				largePost: "_21q6EU8IrGnKgnRi9Fcrko",
				topPostLargePost: "_3rjlIRqkC_nm_BoSlEQ8u-",
				smallPosts: "_1XdjckgSGhgpGEGUohL62w",
				smallPost: "_69IUkr5xucpVcbGP5l070"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsLargePostsContainer: "blJHXrhp2aDTr_eU2819a",
				postsWrapper: "_31N1g4ul5_oWaf7McMDm4z",
				arrow: "_3PrQgt3ZKPk7QhsYwrdYga",
				arrowLeft: "_1GoqoM-Z9VRJCHgekfYoZE",
				arrowRight: "SGDu37agzx7_Dwp8seKWa",
				posts: "Fa7qwmMMPp0OdoJcQuaNG",
				largePost: "_2rsZ95X0CQMIjB--1M9rHS",
				slideIn: "_11Gk71fxo8Xiw2sUIcEJd7"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-motion/lib/react-motion.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				l = s("./src/reddit/helpers/overlay/index.ts"),
				m = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				u = s("./src/lib/isUrl/index.ts"),
				p = s("./src/lib/prettyPrintNumber/index.ts"),
				b = s("./src/app/strings/index.ts"),
				h = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				g = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				x = s("./src/lib/timeAgo/index.ts"),
				y = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/components/Translated/index.tsx"),
				v = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				O = s.n(C);
			var j = e => {
					const t = y.a.PROFILE,
						s = Object(v.a)(e.author, t);
					return a.a.createElement("div", {
						className: Object(c.a)(O.a.container, e.className)
					}, a.a.createElement(E.a, {
						className: O.a.layout
					}, a.a.createElement("div", {
						className: O.a.textContainer
					}, a.a.createElement("span", {
						className: O.a.description
					}, a.a.createElement(f.a, {
						msgId: "posts.postedBy"
					})), a.a.createElement(g.a, {
						className: O.a.authorName,
						to: s
					}, Object(v.b)(e.author, t)), a.a.createElement("span", {
						className: O.a.timestamp
					}, Object(x.d)(e.language, e.created / 1e3)))))
				},
				S = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				w = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				N = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				_ = s.n(N);
			var P = e => {
					const t = Object(v.a)(e.name, e.type);
					return a.a.createElement("div", {
						className: Object(c.a)(_.a.container, e.className)
					}, a.a.createElement(w.a, {
						className: _.a.layout
					}, a.a.createElement("div", {
						className: _.a.iconContainer
					}, e.iconUrl ? a.a.createElement("img", {
						className: _.a.icon,
						src: e.iconUrl
					}) : a.a.createElement(S.a, {
						className: _.a.planetIcon,
						"data-redditstyle": !0
					})), a.a.createElement("div", {
						className: _.a.textContainer
					}, a.a.createElement(g.a, {
						className: _.a.name,
						to: t
					}, Object(v.b)(e.displayText || e.name, e.type)), a.a.createElement("span", {
						className: _.a.separator
					}, "•"), a.a.createElement("span", {
						className: _.a.timestamp
					}, Object(x.d)(e.language, e.created / 1e3)))))
				},
				I = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				k = s("./src/reddit/components/Media/index.tsx"),
				L = s("./src/reddit/components/MiniCardPost/index.tsx"),
				T = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				M = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				R = s("./src/reddit/components/PostContainer/index.tsx"),
				F = s("./src/reddit/components/PostTitle/index.tsx"),
				D = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				A = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/models/Subreddit/index.ts"),
				U = s("./src/reddit/models/Widgets/index.ts"),
				V = s("./src/reddit/components/MiniCardPost/index.m.less"),
				G = s.n(V),
				z = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				q = s.n(z),
				K = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				Z = s.n(K);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class Q extends a.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: n,
						crosspostSubredditOrProfile: r,
						eventFactory: o,
						flairStyleTemplate: i,
						forceLoadMedia: d,
						hideNSFWPref: l,
						isMiniCard: m = !0,
						language: h,
						onClickPost: g,
						post: x,
						scrollerItemRef: y,
						shouldPause: f,
						showAuthorBlock: v = !1,
						showMetaLine: E = !0,
						showSubscribeBlock: C = !1,
						subredditOrProfile: O
					} = this.props, {
						media: S
					} = n || x, w = !S && !!x.source && Object(u.a)(x.source.url);
					let N = S && a.a.createElement(k.a, {
							autoplayPref: e,
							availableWidth: t,
							className: G.a.media,
							forceAspectRatio: W.c,
							imageBoxClassName: G.a.mediaImageBox,
							imageBoxContentImageClassName: G.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: n || x,
							scrollerItemRef: y,
							shouldPause: f,
							shouldLoad: d,
							showCentered: !1,
							showFull: !1
						}),
						_ = !1;
					S && N && (S.type !== W.n.RTJSON && S.type !== W.n.TEXT ? (N = a.a.createElement("div", {
						className: Z.a.mediaWrapper
					}, N), _ = !0) : S && S.content && Object(D.a)(x) && (N = a.a.createElement("div", {
						className: Z.a.textWrapper
					}, N)));
					const L = !_ && !w;
					let V;
					return O && (V = Object(H.d)(O) ? Object(U.h)(O) : Object(U.i)(O)), a.a.createElement(R.a, {
						className: Object(c.a)(Z.a.container, q.a.largeAndMediumActiveStyles, q.a.largeAndMediumPostStyles, G.a.postContainer, Object(A.a)(this.props), s),
						post: x,
						onClick: g,
						eventFactory: o,
						style: Object.assign({}, Object(A.b)(this.props.flairStyleTemplate), Object(A.d)(this.props), this.props.style)
					}, a.a.createElement(B.a, {
						className: G.a.backgroundWrapper,
						flairStyleTemplate: i
					}, a.a.createElement("div", {
						className: Object(c.a)(Z.a.innerContainer, G.a.innerContainer)
					}, C && O && a.a.createElement(P, J({
						created: x.created,
						language: h
					}, V)), v && O && a.a.createElement(j, J({
						created: x.created,
						language: h,
						author: x.author
					}, V)), a.a.createElement(F.c, {
						className: L ? Z.a.postTitle : Z.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: x,
						size: F.b.Large,
						titleColor: i && i.postTitleColor
					}), E && O && a.a.createElement(T.a, {
						className: Z.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: l,
						language: h,
						post: x,
						subredditOrProfile: O
					}), (_ || w) && a.a.createElement("div", {
						className: Z.a.flexSpacer
					}), w && a.a.createElement("div", {
						className: Z.a.mediaWrapper
					}, a.a.createElement(M.a, {
						className: Z.a.thumbnailWrapper,
						thumbnailClassName: Z.a.thumbnail,
						thumbnailContainerClassName: Z.a.thumbnailContainer,
						post: x,
						templatePlaceholderImage: i && i.postPlaceholderImage
					})), N, a.a.createElement("div", {
						className: Z.a.metaWrapper
					}, a.a.createElement("span", {
						className: Z.a.meta
					}, Object(b.c)(h, "posts.points.noun", x.score, {
						count: Object(p.b)(x.score)
					})), a.a.createElement("span", {
						className: Z.a.meta
					}, Object(b.c)(h, "posts.comments.noun", x.numComments, {
						count: Object(p.b)(x.numComments)
					}))))), a.a.createElement(I.d, {
						postId: x.id
					}))
				}
			}
			var Y = Object(L.a)(Object(h.a)(Q)),
				X = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsPlaceholder.tsx"),
				$ = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				ee = s.n($),
				te = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const se = 326,
				ne = 12,
				re = {
					stiffness: 210,
					damping: 30
				},
				ae = 100,
				oe = e => {
					var {
						root: t,
						handleVisibilityChange: s,
						renderPost: r
					} = e, o = te(e, ["root", "handleVisibilityChange", "renderPost"]);
					const i = r ? r(o) : a.a.createElement(Y, o);
					return a.a.createElement(n.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, i)
				},
				ie = Object(i.b)(null, (e, t) => {
					let {
						discoveryUnit: s,
						searchDiscoveryUnit: n
					} = t;
					return {
						openOverlay: t => e(Object(l.a)(t.permalink)),
						trackPostClick: (t, s) => e((e, r) => n ? m.v(r(), n, t, s) : null),
						trackPostSubredditClick: t => e((e, r) => s ? m.x(r(), s, t) : n ? m.x(r(), n, t) : null)
					}
				});
			class ce extends d.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
					}, this.onClickPost = (e, t) => {
						this.props.openOverlay(t), this.props.trackPostClick(t.id, this.props.searchOptions)
					}, this.itemPostClickEventFactory = e => {
						const {
							discoveryUnit: t,
							discoveryUnitSubreddit: s,
							searchDiscoveryUnit: n
						} = this.props;
						return (n ? m.J() : m.u(t, s))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: n,
							singleSubredditMode: r
						} = this.props;
						return a.a.createElement(oe, {
							className: ee.a.largePost,
							eventFactory: this.itemPostClickEventFactory,
							forceLoadMedia: !0,
							isMiniCard: s,
							onClickPost: this.onClickPost,
							showAuthorBlock: !!r,
							showMetaLine: !1,
							showSubscribeBlock: !r,
							handleVisibilityChange: this.makeVisibilityChangeHandler(t),
							renderPost: n,
							root: this.id,
							key: e,
							postId: e
						})
					}, this.renderPosts = e => a.a.createElement("div", {
						className: ee.a.posts,
						style: e
					}, this.props.items.map(this.renderPost)), this.id = "PostsCarousel"
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					this.state !== t && this.trackPostsViewed(this.props)
				}
				componentWillReceiveProps(e) {
					this.props.items !== e.items && this.trackPostsViewed(e)
				}
				trackPostsViewed(e) {
					if (e.isLoading || 0 === e.items.length) return;
					const t = Math.min(this.state.scrollIndex + this.getVisibleItemsCount(), this.props.items.length);
					e.items.slice(this.state.scrollIndex, t).forEach(t => this.props.searchDiscoveryUnit ? e.onPostView(this.props.searchDiscoveryUnit, t, e.searchOptions) : this.props.discoveryUnit ? e.onPostView(this.props.discoveryUnit, t) : null)
				}
				trackArrowClick() {
					const {
						discoveryUnit: e,
						onArrowClick: t,
						searchDiscoveryUnit: s,
						searchOptions: n
					} = this.props, r = s || e;
					r && t && t(r, n)
				}
				onClickNext() {
					super.onClickNext(), this.trackArrowClick(), this.trackPostsViewed(this.props)
				}
				onClickPrev() {
					super.onClickPrev(), this.trackArrowClick(), this.trackPostsViewed(this.props)
				}
				render() {
					const {
						isHidden: e,
						leftArrowClassName: t,
						rightArrowClassName: s,
						seed: n,
						shouldSlideIn: r,
						springConfig: i
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return a.a.createElement(X.a, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: l = se
					} = this.props, {
						scrollIndex: m,
						visibleItemsCount: u
					} = this.state, p = this.getMaxScrollIndex(u), b = this.getAdjustment({
						itemWidth: l,
						maxScrollIndex: p,
						scrollIndex: m,
						spacerWidth: ne,
						visibleItemsCount: u
					}), h = e ? ae : this.getMarginLeft({
						adjustment: b,
						itemWidth: l,
						scrollIndex: m,
						spacerWidth: ne
					}), g = this.itemsFitInContainer({
						container: this.container,
						items: this.props.items,
						itemWidth: l,
						spacerWidth: ne
					});
					return a.a.createElement("div", {
						className: Object(c.a)(ee.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, a.a.createElement(o.Motion, {
						defaultStyle: {
							marginLeft: e || r ? ae : 0
						},
						style: {
							marginLeft: Object(o.spring)(h, i || re)
						}
					}, this.renderPosts), 0 !== m && a.a.createElement(d.a, {
						className: Object(c.a)(ee.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: n
					}), !g && (null == p || m < p) && a.a.createElement(d.b, {
						className: Object(c.a)(ee.a.arrowRight, r && !e && ee.a.slideIn, s),
						onClick: this.onClickNext,
						seed: n
					}))
				}
			}
			t.a = ie(ce)
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				c = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				d = s.n(c);
			t.a = e => r.a.createElement("div", {
				className: Object(a.a)(Object(i.c)(e.exploreV2Variant) ? d.a.oldContainer : e.exploreV2Variant ? Object(a.a)(d.a.smallContainer, o.b) : d.a.heroContainer, e.className)
			}, r.a.createElement("div", {
				className: Object(a.a)(d.a.header, e.headerClassName)
			}, e.header), r.a.createElement("div", {
				className: Object(a.a)(e.hidePadding ? d.a.bodyHidePadding : d.a.body, e.bodyClassName)
			}, e.children))
		},
		"./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_2REdLXF0mpSj8m3oeNFnQI",
				textContainer: "_25evCORf3YPgobOP7A0KBH",
				timestamp: "_12ZMpGOwwzQ5LQDmj2sycd",
				authorName: "_2cI137mSn1p19S7GzCn4aj",
				description: "_3WMX64jyXL-FNQ0kNYl267"
			}
		},
		"./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_3w4KSJJGE7TS9xZVlkChNX",
				iconContainer: "_8eVKEiEgNTHopUF8DqZhu",
				separator: "_2dPygXwKlm02lGuxfWM6hJ",
				subscribeIcon: "_3C-lBXRQY9_CCGVZfQJODL",
				subscribeButton: "_26ierA6Rodr6VMGHkKwTPE",
				textContainer: "ZseEDtQar85FcCdC4sPE7",
				timestamp: "_3AdY0o-9CnsxnxO_VDj8Zh",
				icon: "_3YX9w39yU25-vbz-5gk236",
				planetIcon: "f6zRrQi4zqlZ4aoPrzGIN",
				name: "lyBM6dpYVMHQASC9SYGiO",
				subscribers: "uPyUGlwdDzPsq3i6O_w_G",
				right: "_9gZLJghZHrkIQlPvwZYDE",
				visitCommunity: "_1BAg1jhNwLExU7vX1TAvxR",
				description: "_3PWARIYmlsbZulr9sGQAVC",
				descriptionLine: "_2-CpYCxMGuxCYjr8tTgDTR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_1sf7GjDaEBhme5ClA39yBo",
				closeButton: "_3NeLiUZNL4IFv7G1HHx8Km",
				communityBackground: "_1pX_BOlTi53SAMVSDu_OrT",
				seeAllPosts: "_2zf-tJ6dr3umn1gcuEpDk8",
				communityDescriptionPlaceholder: "_1RYE13EcDNn1A1X1-h42f_",
				arrowPlaceholder: "_1q9k3G4VKHdAOsl64CbSge",
				headerLink: "_2HnhAFvq_dYxe2LgLqRXfK",
				layout: "_1p-hDqS1MBOTryteGnBenr",
				widgetHeader: "_3vKpqOprvaCysVAD8GUe6L"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/app/strings/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				p = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				b = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = s("./src/reddit/components/Widgets/Base/index.tsx"),
				g = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				x = s("./src/reddit/constants/experiments.ts"),
				y = s("./src/reddit/helpers/chooseVariant/index.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const v = e => Object(f.G)(e) || x.Eb.ShowTopContent === Object(y.c)(e, {
				experimentEligibilitySelector: y.a,
				experimentName: x.zb
			});
			var E = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less"),
				O = s.n(C);
			const j = Object(i.b)(() => Object(d.c)({
				inSubredditTopContentExperiment: v,
				language: f.S,
				subredditUrl: E.d
			}), e => ({
				trackDiscoveryUnitView: t => e((e, s) => g.f(s(), t)),
				trackDismissClick: t => e((e, s) => g.h(s(), t)),
				trackPostView: r()((t, s, n) => e((e, r) => g.A(r(), t, s, n)), (e, t) => {
					let {
						id: s
					} = e;
					return "".concat(s, "-").concat(t)
				})
			}));
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.onCloseClick = () => {
						const {
							discoveryUnit: e,
							onCloseClick: t,
							trackDismissClick: s
						} = this.props;
						e && s(e), t()
					}
				}
				componentDidMount() {
					const {
						discoveryUnit: e,
						trackDiscoveryUnitView: t
					} = this.props;
					e && t(e)
				}
				render() {
					const {
						inSubredditTopContentExperiment: e,
						subredditUrl: t,
						topContent: s
					} = this.props;
					if (!e || !s) return null;
					const {
						postIds: n,
						range: r
					} = s, a = "".concat(t).concat(m.N.TOP, "?t=").concat(r), i = o.a.createElement(h.a, {
						className: O.a.widgetHeader
					}, o.a.createElement("button", {
						className: O.a.closeButton,
						onClick: this.onCloseClick
					}, o.a.createElement(b.b, {
						className: O.a.closeIcon,
						"data-redditstyle": !0
					})), o.a.createElement(c.a, {
						className: O.a.headerLink,
						to: a
					}, Object(l.a)(this.props.language, "discoveryUnits.topContentLast", {
						range: r
					})));
					return o.a.createElement("div", {
						className: this.props.className
					}, o.a.createElement(u.a, {
						className: O.a.layout,
						header: i,
						hidePadding: !0
					}, o.a.createElement(p.a, {
						discoveryUnit: this.props.discoveryUnit,
						searchDiscoveryUnit: this.props.searchDiscoveryUnit,
						isLoading: !1,
						isMiniCard: !1,
						items: n,
						searchOptions: this.props.searchOptions,
						showSubreddit: !0,
						showTopPosts: !0,
						singleSubredditMode: !0,
						onPostView: this.props.trackPostView
					})))
				}
			}
			t.a = j(S)
		},
		"./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3CNr3KWyHutDn4avrLhQm4",
				carousel: "_1YUX10qTanZHdNGMK7Qxxw",
				header: "_14PIPff0hFgFWRHElDmceB",
				title: "_2sxfe3nF2A96A4ZWU5rEvn",
				body: "_2B1hYKEvll_ipGyHRuObmJ",
				arrow: "_1HYBn36eKjeT9y8jRpW2sq",
				CloseButton: "_30UnonAzQEzi-R8bJ3wFKT",
				closeButton: "_30UnonAzQEzi-R8bJ3wFKT",
				closeIcon: "_1KLdpw5i0UeptlH_oJyGEv"
			}
		},
		"./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/icons/svgs/Close/index.tsx"),
				u = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				p = s("./src/reddit/selectors/discoveryUnit.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx"),
				g = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts"),
				x = s("./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.m.less"),
				y = s.n(x);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = [],
				E = () => {},
				C = () => void 0,
				O = c.a.button("CloseButton", y.a),
				j = Object(o.a)(b.C, e => e.filter(e => 9 === e.length)),
				S = Object(o.c)({
					discoveryUnit: e => Object(p.f)(e, {
						unitName: u.r
					}),
					postIds: j
				}),
				w = Object(a.b)(S);
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !0
					}, this.handleCloseClick = () => this.setState({
						isVisible: !1
					}), this.renderPost = e => {
						const {
							discoveryUnit: t
						} = this.props;
						return t ? r.a.createElement(h.a, f({}, e, {
							getSubscribeEventFactory: C,
							onSubredditOrProfileClick: E,
							subscribedProfiles: v,
							subscribedSubreddits: v
						})) : null
					}
				}
				render() {
					const {
						className: e,
						discoveryUnit: t,
						postIds: s
					} = this.props;
					return this.state.isVisible && s.length ? r.a.createElement("div", {
						className: Object(i.a)(y.a.container, e)
					}, r.a.createElement("div", {
						className: y.a.header
					}, r.a.createElement("div", {
						className: y.a.title
					}, r.a.createElement(l.c, null, "Top posts of the week")), r.a.createElement(O, {
						onClick: this.handleCloseClick
					}, r.a.createElement(m.a, {
						className: y.a.closeIcon
					}))), r.a.createElement("div", {
						className: y.a.body
					}, r.a.createElement(d.a, {
						className: y.a.carousel,
						discoveryUnit: t,
						isLoading: !1,
						items: s,
						itemWidth: g.a,
						leftArrowClassName: y.a.arrow,
						onPostView: E,
						renderPost: this.renderPost,
						rightArrowClassName: y.a.arrow
					}))) : null
				}
			}
			t.a = w(N)
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.m.less": function(e, t, s) {
			e.exports = {
				loading: "_3gWqsGamiiRTC2h_yOIcgS"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/featureFlags/component.tsx"),
				c = s("./src/reddit/components/Economics/CommunityTipJar/async.m.less"),
				d = s.n(c);
			const l = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: Object(o.a)(t, d.a.loading)
					})
				},
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsCommunityTipJar")]).then(s.bind(null, "./src/reddit/components/Economics/CommunityTipJar/index.tsx")).then(e => e.default)
			});
			t.a = Object(i.a)("spCommunityTipJar", l)
		},
		"./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less": function(e, t, s) {
			e.exports = {
				checkContainer: "vLDY173Vj0GmHGlQQPGsJ",
				check: "_1PIZA9aT40J0xlDyxPr-bH",
				col: "_2ueaZW2VmYFP3k8IpO59IR",
				explanation: "_3X0Y99cKtJPNprvvqIyeOk",
				header: "_2tkUUsImD0I5jWUKt77ZAH",
				img: "_2qJnksxaH_YpcbYwW6ggtA",
				tutorial: "_13vSv0_15yzB5YMudJnPJt"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less": function(e, t, s) {
			e.exports = {
				button: "aq9ZqWnC2Xwbkzhr1C8hJ",
				container: "m7z0uN9mDxptXfSHafLTw",
				cover: "xyt2inBPUfRQ_Efcqt_Ab",
				description: "KX_LU59tHaCYNg437pykk",
				freeCard: "_3qfrF-S8Mak5I9Y5F6oJFF",
				fullWidth: "_3c3Kr_1Q_oJTZvtAYy1N-6",
				img: "_2VRR41zg0aqqAAjxIzZGz0",
				title: "gRNqnS3tiW9yK_OX8aSV3",
				premiumCard: "_1J7mAZ1dsFqB0jBKT2A-Ry"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less": function(e, t, s) {
			e.exports = {
				container: "yQNQSPTLUWPNXeKzlqNu6",
				cover: "_24vnSg5ae29l97QtBxVV3-",
				divider: "_2fEN3CscLjkwMnMGeO-Gbi",
				trial: "_2o92N1SUEIcx7a3P7K3tJT"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less": function(e, t, s) {
			e.exports = {
				container: "ez89jyuMsOzC0NO44ciD1",
				cover: "i990kFkfa3m_m5S_U0sma",
				description: "a7ZSke4zXeciCfufC-OWq",
				image: "_29JFielihsv0FuuO4vTOLb",
				preview: "_1gyHt90KLC-GJrapFWERJx",
				redo: "_1sHLf9k2ibP_C7Mx2o9Xcf",
				title: "_2F4sRR7iIwaKQvPPvqmiX-"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less": function(e, t, s) {
			e.exports = {
				crown: "YKwhmGUT9303yZWJlH-QT",
				heading: "_2-PLWgbnP8j-2wARSQiPC6",
				prompt: "_34l-xSb_Lf_m0uJryaeQRG",
				sponsorship: "_2gij23f36Hizly0kdb-hWD",
				text: "NgOyQpTLN-QLfbsXr_kxQ"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less": function(e, t, s) {
			e.exports = {
				container: "bIIqFNgEct-dJixmNGzH8",
				controller: "U9kRmM-8uzmN81_cyWilS",
				planet: "OsL6tpn4UXSU4UwEHQpxf",
				user: "_3Q0T-a4HcsAzBW8-YqMrdZ",
				selected: "_2rCRpMr2CIl-rgIl_ikgYT",
				triangle: "_1SxOqeKmgCBvhzxL632u7q"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_1-fWFAeAioWlCembFKUHMX",
				container: "_1ftim-rZF9xZL_CTpqF85f",
				title: "_3sTbD7175DPlp68I03ayUK"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less": function(e, t, s) {
			e.exports = {
				claim: "_2h8JoT5ednzNOqKdVKCHlM",
				close: "_308nelFEzZOnhnqbW5RpPv",
				container: "_26wdyRSALASUyhdTxV6U4k",
				content: "_3D6as82_3SjWTXYShWM5lz",
				dismissedContainer: "_2EAX2PYbs1gAVQGLJ5XaB9",
				dismissedText: "DBgaCJDh9aY3K_vHjS9Q3",
				example: "_3jYACS0eVj0IZYGd02X11f",
				header: "_12kLHf53On8M30LOB009-F",
				successContainer: "_1wtFNjoeAGTIux27TBYRFN"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/uuid/v4.js"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/config.ts"),
				b = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/reddit/icons/svgs/Approve/index.tsx"),
				g = s("./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less"),
				x = s.n(g);
			const y = {
					description: Object(b.c)("Add your new emoji to comments! Use the action in the bottom right corner to add an emoji."),
					src: "".concat(p.a.assetPath, "/img/memberships/banners/how_to_use_emoji.gif")
				},
				f = {
					description: Object(b.c)("Open 'My Badges' in the Sidebar to apply your badge."),
					src: "".concat(p.a.assetPath, "/img/memberships/banners/how_to_apply_badge.gif")
				},
				v = {
					description: Object(b.c)("Want to change your badge? Visit the Gallery in the Sidebar to view the latest styles."),
					src: "".concat(p.a.assetPath, "/img/memberships/banners/how_to_apply_badge.gif")
				};

			function E(e) {
				const t = (e.hideEmoji ? [] : [y]).concat(e.boughtBadge ? f : v);
				return r.a.createElement("article", {
					className: Object(l.a)(e.className, x.a.container)
				}, r.a.createElement("header", {
					className: x.a.header
				}, r.a.createElement("div", {
					className: x.a.checkContainer
				}, r.a.createElement(h.a, {
					className: x.a.check
				})), Object(b.c)("Congrats! Here's how to use it")), r.a.createElement("div", {
					className: x.a.tutorial
				}, t.map(e => {
					let {
						description: t,
						src: s
					} = e;
					return r.a.createElement("div", {
						className: x.a.col,
						key: t
					}, r.a.createElement("img", {
						className: x.a.img,
						src: s
					}), r.a.createElement("div", {
						className: x.a.explanation
					}, t))
				})))
			}
			var C = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/contexts/ApiContext.tsx"),
				j = s("./src/reddit/controls/Button/index.tsx"),
				S = s("./src/reddit/endpoints/economics/banners.ts"),
				w = s("./src/reddit/endpoints/economics/emojis.ts"),
				N = s("./src/reddit/helpers/economics/membershipPage.ts"),
				_ = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				P = s("./src/reddit/icons/svgs/Close/index.tsx"),
				I = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/selectors/economics.ts"),
				L = s("./src/reddit/selectors/telemetry.ts"),
				T = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less"),
				M = s.n(T);

			function B(e) {
				return r.a.createElement("article", {
					className: Object(l.a)(e.className, M.a.container, {
						[M.a.fullWidth]: !!e.fullWidth
					})
				}, r.a.createElement("div", {
					className: M.a.cover
				}), r.a.createElement("header", {
					className: M.a.title
				}, e.title), r.a.createElement("img", {
					className: M.a.img,
					src: e.img
				}), r.a.createElement("div", {
					className: M.a.description
				}, e.description), r.a.createElement(j.n, {
					className: M.a.button,
					onClick: e.onClaim
				}, e.cta))
			}
			var R = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts"),
				F = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less"),
				D = s.n(F);

			function A(e) {
				const {
					className: t,
					platform: s,
					playerType: n,
					region: a,
					userIsSubscriber: o,
					onClaim: i
				} = e, c = Object(R.d)({
					platform: s,
					playerType: n,
					region: a,
					style: "bw"
				}), d = Object(R.d)({
					platform: s,
					playerType: n,
					region: a,
					style: "color"
				});
				return r.a.createElement("div", {
					className: Object(l.a)(D.a.container, t)
				}, !o && r.a.createElement(r.a.Fragment, null, r.a.createElement(B, {
					className: D.a.freeCard,
					cta: Object(b.c)("claim"),
					img: c,
					title: Object(b.c)("Claim Free Badge"),
					onClaim: () => i(!1)
				}), r.a.createElement("div", {
					className: D.a.divider
				}, r.a.createElement("div", {
					className: D.a.cover
				}), "OR"), r.a.createElement(B, {
					className: D.a.premiumCard,
					cta: Object(b.c)("become a supporter"),
					description: Object(b.c)("Colored badge + dozens more,\nemojis and GIFs in comments"),
					img: d,
					title: Object(b.c)("Claim Premium Badge"),
					onClaim: () => i(!0)
				}), r.a.createElement("img", {
					className: D.a.trial,
					src: "".concat(p.a.assetPath, "/img/memberships/banners/free-trial.png")
				})), o && r.a.createElement(B, {
					fullWidth: !0,
					className: D.a.fullWidthCard,
					cta: Object(b.c)("claim"),
					img: d,
					title: Object(b.c)("Claim Premium Badge"),
					onClaim: () => i(!1)
				}))
			}
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var W = s("./node_modules/lodash/sample.js"),
				H = s.n(W),
				U = s("./node_modules/react-motion/lib/react-motion.js"),
				V = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				G = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less"),
				z = s.n(G);
			const q = {
				stiffness: 210,
				damping: 20
			};

			function K() {
				return {
					platform: H()(Object.keys(R.a)) || "pc",
					playerType: H()(Object.keys(R.b)) || "casual",
					region: H()(Object.keys(R.c)) || "nae"
				}
			}
			class Z extends r.a.Component {
				constructor(e) {
					super(e), this.state = K()
				}
				render() {
					const {
						platform: e,
						playerType: t,
						region: s
					} = this.state, n = R.a[e], a = R.b[t], o = R.c[s];
					return r.a.createElement("article", {
						className: Object(l.a)(z.a.container, this.props.className)
					}, r.a.createElement("div", {
						className: z.a.cover
					}), r.a.createElement("header", {
						className: z.a.title
					}, Object(b.c)("Example")), r.a.createElement(U.TransitionMotion, {
						defaultStyles: [{
							key: Object(R.d)(Object.assign({}, this.state, {
								style: "color"
							})),
							style: {
								rotation: 0
							}
						}],
						styles: [{
							key: Object(R.d)(Object.assign({}, this.state, {
								style: "color"
							})),
							style: {
								rotation: Object(U.spring)(0, q)
							}
						}],
						willEnter: () => ({
							rotation: -180
						}),
						willLeave: () => ({
							rotation: Object(U.spring)(180, q)
						})
					}, e => r.a.createElement("div", {
						className: z.a.preview
					}, e.map(e => r.a.createElement("img", {
						className: z.a.image,
						key: e.key,
						src: e.key,
						style: {
							transform: "rotateY(".concat(e.style.rotation, "deg)")
						}
					})))), r.a.createElement("footer", {
						className: z.a.description
					}, "".concat(o, ", ").concat(n, ", ").concat(a)), r.a.createElement(V.a, {
						className: z.a.redo,
						onClick: () => this.setState(K())
					}))
				}
			}
			var J = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less"),
				Q = s.n(J);
			const Y = Object(i.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(k.r)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var X = Object(a.b)(Y)((function(e) {
					const t = e.subreddit ? e.subreddit.displayText : "the community";
					return r.a.createElement("header", {
						className: Object(l.a)(Q.a.container, e.className)
					}, r.a.createElement("div", {
						className: Q.a.heading
					}, Object(b.c)("looking for game badge")), r.a.createElement("div", {
						className: Q.a.prompt
					}, Object(b.c)("Find New Gamers to Play Together"), r.a.createElement("div", {
						className: Q.a.sponsorship
					}, r.a.createElement("img", {
						className: Q.a.crown,
						src: "".concat(p.a.assetPath, "/img/memberships/paywall/fortnitebr/Crown.gif")
					}), Object(b.c)("Sponsored by ".concat(Object(b.b)("members", e.meta.memberAltPlural))))), r.a.createElement("div", {
						className: Q.a.text
					}, Object(b.c)("Get a badge that lets you find new teammates in ".concat(Object(b.b)("community", t), ". ")), Object(b.c)("Specify your region, platform, and your play style for the best match. "), Object(b.c)("The badge helps other players find you, and makes it easier for others to start a conversation in Reddit chat.")))
				})),
				$ = s("./src/higherOrderComponents/asTooltip.tsx"),
				ee = s("./src/reddit/controls/Dropdown/index.tsx"),
				te = s("./src/reddit/controls/Dropdown/Row.tsx"),
				se = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				ne = s("./src/reddit/icons/svgs/Planet/index.tsx"),
				re = s("./src/reddit/icons/svgs/User/index.tsx"),
				ae = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less"),
				oe = s.n(ae);
			const ie = new Map;
			ie.set(R.a, "LFG_BANNER_PLATFORM_DROPDOWN"), ie.set(R.b, "LFG_BANNER_PLAYERTYPE_DROPDOWN"), ie.set(R.c, "LFG_BANNER_REGION_DROPDOWN");
			const ce = new Map;
			ce.set(R.a, "platform"), ce.set(R.b, "playerType"), ce.set(R.c, "region");
			const de = new Map;
			de.set(R.a, r.a.createElement(e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.7658 8.30457C15.5196 6.40434 14.6685 3.93402 13.992 2.18306C13.4831 0.865888 12.2136 0 10.8015 0H5.01677C3.60472 0 2.33517 0.865888 1.82628 2.18306C1.1498 3.93402 0.298684 6.40434 0.0525311 8.30457C-0.374308 11.5997 1.94027 12 1.94027 12L5.31936 7.9067H10.4989L13.878 12C13.878 12 16.1926 11.5997 15.7658 8.30457ZM4.36141 3.50639C4.94606 3.50639 5.42001 3.03243 5.42001 2.44778C5.42001 1.86313 4.94606 1.38918 4.36141 1.38918C3.77676 1.38918 3.3028 1.86313 3.3028 2.44778C3.3028 3.03243 3.77676 3.50639 4.36141 3.50639ZM7.02295 5.43958C7.02295 6.02423 6.549 6.49818 5.96435 6.49818C5.3797 6.49818 4.90574 6.02423 4.90574 5.43958C4.90574 4.85493 5.3797 4.38097 5.96435 4.38097C6.549 4.38097 7.02295 4.85493 7.02295 5.43958ZM11.4569 3.50639C12.0416 3.50639 12.5155 3.03244 12.5155 2.44779C12.5155 1.86314 12.0416 1.38919 11.4569 1.38919C10.8723 1.38919 10.3983 1.86314 10.3983 2.44779C10.3983 3.03244 10.8723 3.50639 11.4569 3.50639ZM10.9126 5.43958C10.9126 6.02423 10.4386 6.49818 9.85398 6.49818C9.26933 6.49818 8.79538 6.02423 8.79538 5.43958C8.79538 4.85493 9.26933 4.38097 9.85398 4.38097C10.4386 4.38097 10.9126 4.85493 10.9126 5.43958Z"
			})), {
				className: oe.a.controller
			})), de.set(R.b, r.a.createElement(re.a, {
				className: oe.a.user
			})), de.set(R.c, r.a.createElement(ne.a, {
				className: oe.a.planet
			}));
			const le = Object($.a)(ee.a);
			var me, ue = Object(C.b)((function(e) {
					const t = de.get(e.type),
						s = ie.get(e.type);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(l.a)(oe.a.container, e.className, {
							[oe.a.selected]: !!e.selected
						}),
						id: s,
						onClick: e.onToggleDropdown
					}, t, e.text, r.a.createElement(se.b, {
						className: oe.a.triangle
					})), r.a.createElement(le, {
						tooltipId: s,
						isOpen: !!e.tooltipVisible
					}, Object.keys(e.type).map((t, s) => r.a.createElement(te.b, {
						"data-redditStyle": !0,
						key: s,
						index: s,
						displayText: String(e.type[t]),
						onClick: () => {
							e.onChange(t), e.sendEvent(s => {
								const n = L.defaults(s);
								return Object.assign({
									source: "meta",
									action: "click",
									noun: "lfg_banner_customize_badge",
									correlationId: e.correlationId
								}, n, {
									actionInfo: Object.assign({}, n.actionInfo, {
										paneName: ce.get(e.type),
										reason: t
									}),
									subreddit: L.subreddit(s)
								})
							})
						}
					}))))
				})),
				pe = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less"),
				be = s.n(pe),
				he = Object(C.b)(class extends r.a.Component {
					constructor() {
						super(...arguments), this.state = {
							selectedPlatform: void 0,
							selectedPlayerType: void 0,
							selectedRegion: void 0,
							visibleDropdown: void 0
						}
					}
					render() {
						const {
							className: e,
							onGenerate: t
						} = this.props, {
							selectedPlatform: s,
							selectedPlayerType: n,
							selectedRegion: a,
							visibleDropdown: o
						} = this.state, i = s ? R.a[s] : Object(b.c)("platform"), c = n ? R.b[n] : Object(b.c)("player type"), d = a ? R.c[a] : Object(b.c)("region");
						return r.a.createElement("article", {
							className: Object(l.a)(be.a.container, e)
						}, r.a.createElement("header", {
							className: be.a.title
						}, Object(b.c)("Setup Your Badge")), r.a.createElement(ue, {
							correlationId: this.props.correlationId,
							selected: !!a,
							tooltipVisible: "region" === o,
							text: d,
							type: R.c,
							onChange: e => this.setState({
								selectedRegion: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "region"
							}))
						}), r.a.createElement(ue, {
							correlationId: this.props.correlationId,
							selected: !!s,
							tooltipVisible: "platform" === o,
							text: i,
							type: R.a,
							onChange: e => this.setState({
								selectedPlatform: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "platform"
							}))
						}), r.a.createElement(ue, {
							correlationId: this.props.correlationId,
							selected: !!n,
							tooltipVisible: "playerType" === o,
							text: c,
							type: R.b,
							onChange: e => this.setState({
								selectedPlayerType: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "playerType"
							}))
						}), r.a.createElement(j.f, {
							className: be.a.button,
							disabled: !s || !n || !a,
							onClick: () => {
								s && n && a && (t({
									platform: s,
									playerType: n,
									region: a
								}), this.props.sendEvent(e => Object.assign({
									source: "meta",
									action: "click",
									noun: "lfg_banner_generate_badge",
									correlationId: this.props.correlationId
								}, L.defaults(e), {
									subreddit: L.subreddit(e)
								})))
							}
						}, Object(b.c)("generate badge")))
					}
				}),
				ge = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less"),
				xe = s.n(ge);
			! function(e) {
				e.CanClaim = "canclaim", e.Claimed = "claimed", e.Dismissed = "dismissed", e.Generating = "generating", e.Hidden = "hidden", e.Select = "select"
			}(me || (me = {}));
			class ye extends r.a.Component {
				constructor(e) {
					super(e), this.handleClaim = async e => {
						const {
							subscriberState: t,
							subreddit: s
						} = this.props, {
							selectedRegion: n,
							selectedPlatform: r,
							selectedPlayerType: a
						} = this.state;
						if (!(n && r && a && s && t !== k.b.DontKnow)) return null;
						const o = "".concat(n, "_").concat(r, "_").concat(a, "_badge"),
							i = await Object(w.a)(this.props.apiContext(), {
								productId: o,
								subredditId: this.props.subredditId
							});
						i.ok ? (this.setState({
							show: me.Claimed
						}), Object(S.c)(this.props.apiContext(), this.props.subredditId, S.a.LFG), this.props.onBadgeClaimed(o)) : this.props.onError(i.error), e && this.props.onOpenLandingPage(s, this.correlationId), this.props.sendEvent(t => {
							const s = L.defaults(t);
							return Object.assign({
								source: "meta",
								action: "click",
								noun: e && this.correlationId ? "lfg_banner_claim_premium" : "lfg_banner_claim",
								correlationId: this.correlationId
							}, s, {
								actionInfo: Object.assign({}, s.actionInfo, {
									reason: o,
									paneName: S.a.LFG
								}),
								subreddit: L.subreddit(t)
							})
						})
					}, this.handleDismiss = () => {
						this.state.show === me.Claimed ? this.setState({
							show: me.Hidden
						}) : (this.setState({
							show: me.Dismissed
						}), this.props.sendEvent(e => {
							const t = L.defaults(e);
							return Object.assign({
								source: "meta",
								action: "click",
								noun: "lfg_banner_dismiss",
								correlationId: this.correlationId
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									paneName: S.a.LFG
								}),
								subreddit: L.subreddit(e)
							})
						})), Object(S.c)(this.props.apiContext(), this.props.subredditId, S.a.LFG)
					}, this.handleUndoDismiss = () => {
						this.setState({
							show: me.Select
						}), Object(S.e)(this.props.apiContext(), this.props.subredditId, S.a.LFG), this.props.sendEvent(e => {
							const t = L.defaults(e);
							return Object.assign({
								source: "meta",
								action: "click",
								noun: "lfg_banner_undo_dismiss",
								correlationId: this.correlationId
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									paneName: S.a.LFG
								}),
								subreddit: L.subreddit(e)
							})
						})
					}, this.state = {
						show: me.Hidden
					}, this.correlationId = d()()
				}
				async componentDidMount() {
					if (this.props.userIsLoggedIn) {
						!!(await Object(S.b)(this.props.apiContext(), this.props.subredditId))[S.a.LFG] || (this.setState({
							show: me.Select
						}), this.props.sendEvent(e => {
							const t = L.defaults(e);
							return Object.assign({
								source: "meta",
								action: "view",
								noun: "lfg_banner",
								correlationId: this.correlationId
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									paneName: S.a.LFG
								}),
								subreddit: L.subreddit(e)
							})
						}))
					}
				}
				render() {
					const {
						className: e,
						subredditId: t,
						subscriberState: s,
						userIsLoggedIn: n
					} = this.props, {
						show: a,
						selectedRegion: o,
						selectedPlatform: i,
						selectedPlayerType: c
					} = this.state;
					return n && s !== k.b.DontKnow && a !== me.Hidden ? this.state.show === me.Dismissed ? r.a.createElement("div", {
						className: Object(l.a)(xe.a.dismissedContainer, e)
					}, r.a.createElement("div", {
						className: xe.a.dismissedText
					}, Object(b.c)("Ok, we won't show you this again.")), r.a.createElement(j.f, {
						onClick: this.handleUndoDismiss
					}, Object(b.c)("undo"))) : this.state.show === me.Claimed ? r.a.createElement("div", {
						className: Object(l.a)(xe.a.successContainer, e)
					}, r.a.createElement(P.a, {
						className: xe.a.close,
						onClick: this.handleDismiss
					}), r.a.createElement(E, {
						boughtBadge: !0,
						hideEmoji: !0
					})) : r.a.createElement("article", {
						className: Object(l.a)(xe.a.container, e)
					}, r.a.createElement(X, {
						className: xe.a.header,
						subredditId: t
					}), r.a.createElement("div", {
						className: xe.a.content
					}, r.a.createElement(he, {
						correlationId: this.correlationId,
						onGenerate: e => this.setState(() => ({
							show: me.CanClaim,
							selectedRegion: e.region,
							selectedPlatform: e.platform,
							selectedPlayerType: e.playerType
						}))
					}), a === me.Select && r.a.createElement(Z, {
						className: xe.a.example
					}), a === me.CanClaim && o && i && c && r.a.createElement(A, {
						className: xe.a.claim,
						platform: i,
						playerType: c,
						region: o,
						userIsSubscriber: s === k.b.Subscribed,
						onClaim: e => this.handleClaim(e)
					})), r.a.createElement(P.a, {
						className: xe.a.close,
						onClick: this.handleDismiss
					})) : null
				}
			}
			const fe = Object(i.c)({
					subreddit: (e, t) => {
						let {
							subredditId: s
						} = t;
						return e.subreddits.models[s]
					},
					subscriberState: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(k.y)(e, s)
					},
					userIsLoggedIn: e => !!e.user.account
				}),
				ve = Object(C.b)(ye);
			t.a = Object(O.b)(Object(a.b)(fe, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onError: t => e(Object(u.e)({
						duration: 5e3,
						kind: I.b.Error,
						text: Object(_.a)(t)
					})),
					onBadgeClaimed: t => {
						e(Object(m.c)(s, t))
					},
					onOpenLandingPage: (t, s) => {
						e(Object(o.b)(Object(N.a)(t.name, s)))
					}
				}
			})(ve))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, s) {
			"use strict";
			var n, r, a, o;

			function i(e) {
				const {
					platform: t,
					playerType: s,
					region: n,
					style: r
				} = e;
				return "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_".concat(r, "/").concat(n, "_").concat(t, "_").concat(s, "_").concat(r, ".svg")
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})), s.d(t, "c", (function() {
					return a
				})), s.d(t, "d", (function() {
					return i
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(n || (n = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(r || (r = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(a || (a = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(o || (o = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const a = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumNewUserWelcome").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spPremium", a)
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/upperFirst.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/config.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/isFakeSubreddit/index.ts"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/components/EmptySubreddit.m.less"),
				g = s.n(h),
				x = s("./src/lib/lessComponent.tsx");
			const y = x.a.div("PrimaryText", g.a),
				f = x.a.div("SecondaryText", g.a),
				v = x.a.div("MainContentWrapper", g.a),
				E = x.a.div("MainContent", g.a),
				C = x.a.wrapped(b.a, "BackgroundPlaceholder", g.a),
				O = x.a.wrapped(p.h, "SubmitLink", g.a),
				j = x.a.img("SnooImg", g.a),
				S = x.a.div("EmptyHomepage", g.a),
				w = e => {
					switch (e) {
						case c.N.RISING:
							return Object(m.c)("Create a new post and take all the glory");
						case c.N.TOP:
						case c.N.CONTROVERSIAL:
							return null;
						default:
							return Object(m.c)("Be the first to till this fertile land.")
					}
				},
				N = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const n = w(s);
					return o.a.createElement(E, null, o.a.createElement(y, null, (e => {
						switch (e) {
							case c.N.RISING:
								return Object(m.c)("Looks like nothing is rising fast enough in this subreddit");
							case c.N.TOP:
							case c.N.CONTROVERSIAL:
								return Object(m.c)("No posts were found using the ".concat(r()(e), " sort. Try changing the sort."));
							default:
								return Object(m.c)("There are no posts in this subreddit")
						}
					})(s)), t && !Object(d.a)(t) && !!n && o.a.createElement(o.a.Fragment, null, o.a.createElement(f, null, w(s)), o.a.createElement(O, {
						to: "/r/".concat(t, "/submit")
					}, o.a.createElement(l.c, null, "Add a post"))))
				},
				_ = () => o.a.createElement(E, null, o.a.createElement(j, {
					src: "".concat(i.a.assetPath, "/img/snoo_discovery@1x.png")
				}), o.a.createElement(y, null, o.a.createElement(l.c, null, "Reddit gets better when you join communities, so find some that you’ll love!")), o.a.createElement(O, {
					to: "/r/popular"
				}, o.a.createElement(l.c, null, "Browse Popular Posts")));
			t.a = x.a.wrapped(e => o.a.createElement(S, null, o.a.createElement(C, {
				isLoading: !1,
				layout: u.g.Classic
			}), o.a.createElement(v, null, e.subreddit ? o.a.createElement(N, e) : o.a.createElement(_, null))), "Component", g.a)
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(u);
			const b = i.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: n,
					post: i
				} = e;
				if (!Object(m.a)(i)) return null;
				const u = i && i.eventInfo,
					h = Object(l.a)(i),
					g = u && Object(o.c)(u.eventStart, u.eventEnd);
				return r.a.createElement("div", {
					className: Object(a.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, r.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					language: n,
					post: i
				}), !h && g && r.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: i,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/eventTools/index.ts"),
				o = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				i = s("./src/lib/constants/index.ts");

			function c(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = s("./src/reddit/icons/fonts/Live/index.tsx"),
				u = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.span("PostEventFutureText", p.a),
				g = b.a.span("PostEventPastText", p.a),
				x = b.a.span("PostEventNowText", p.a),
				y = b.a.span("Container", p.a),
				f = b.a.wrapped(l.a, "CalendarIcon", p.a),
				v = b.a.wrapped(m.a, "LiveIcon", p.a),
				E = b.a.div("LoadingState", p.a);
			class C extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						language: t,
						post: s
					} = this.props, {
						eventInfo: n
					} = s;
					if (!n) return null;
					const {
						eventEnd: l,
						eventIsLive: m,
						eventStart: u
					} = n, p = Object(a.e)(u, l);
					let b, C;
					if (this.state.mounted || p === a.a.Live) b = function(e, t, s, n) {
						const r = Object(a.e)(e, t),
							d = new Date(e * i.Bb);
						let l;
						if (r === a.a.Live || n) return Object(o.a)(s, "posts.event.inProgress");
						r === a.a.Future ? l = Object(a.d)(e) ? Object(o.a)(s, "posts.event.today") : Object(a.b)(e) >= 5 ? c(d, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(d, s) : r === a.a.Past && (l = Object(a.d)(e) ? Object(o.a)(s, "posts.event.today") : c(d, s));
						const m = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(d, s);
						return "".concat(l, " @ ").concat(m)
					}(u, l, t, m);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						b = r.a.createElement(E, {
							className: e
						})
					}
					if (m) C = r.a.createElement(x, null, r.a.createElement(v, null), b);
					else if (p === a.a.Future) C = r.a.createElement(h, null, r.a.createElement(f, null), b);
					else {
						if (p !== a.a.Past) return null;
						C = r.a.createElement(g, null, r.a.createElement(f, null), b)
					}
					return r.a.createElement(y, {
						className: e
					}, C)
				}
			}
			t.a = C
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				g = s("./src/reddit/icons/fonts/helpers.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				y = s.n(x);
			var f = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(g.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", y.a),
				v = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				E = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				C = s("./src/reddit/icons/fonts/Link/index.tsx"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				S = s("./src/reddit/icons/fonts/Text/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/components/ExpandoButton/index.m.less"),
				_ = s.n(N);
			const P = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.p)({
						postId: t.post.id
					}))
				})),
				I = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(i.a)(_.a.icon, _.a.hideOnHover);
					if (t) return r.a.createElement(p.a, {
						className: s
					});
					switch (e) {
						case w.n.GIFVIDEO:
							return r.a.createElement(E.a, {
								className: s
							});
						case w.n.IMAGE:
							return r.a.createElement(j.a, {
								className: s
							});
						case w.n.TEXT:
						case w.n.RTJSON:
							return r.a.createElement(S.a, {
								className: s
							});
						case w.n.VIDEO:
							return r.a.createElement(v.a, {
								className: s
							});
						case w.n.EMBED:
						default:
							return r.a.createElement(C.a, {
								className: s
							})
					}
				};
			t.a = P(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isExpanded: a,
					post: l,
					toggle: p,
					useMediaIcons: g
				} = e, x = s || l, y = n && !!s;
				return x.media && !(("rtjson" === x.media.type || "text" === x.media.type) && !Object(u.a)(x)) ? r.a.createElement("button", {
					"aria-expanded": a,
					"aria-haspopup": !0,
					"aria-label": Object(d.c)("Expand content"),
					className: Object(i.a)(t, _.a.outer),
					"data-click-id": a ? "expando_close" : "expando_open",
					onClick: p
				}, a ? r.a.createElement(b.a, {
					className: _.a.icon
				}) : g ? r.a.createElement(r.a.Fragment, null, I(x.media && x.media.type, y), r.a.createElement(h.a, {
					className: Object(i.a)(_.a.icon, _.a.showOnHover)
				})) : r.a.createElement(h.a, {
					className: _.a.icon
				})) : x.source && x.source.url ? r.a.createElement(m.a, {
					"aria-label": Object(d.c)("Open external content"),
					className: Object(i.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					href: x.source.url,
					isSponsored: l.isSponsored,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(O.a, {
					className: Object(i.a)(_.a.icon, _.a.outboundLinkIcon)
				})) : r.a.createElement(o.a, {
					"aria-label": Object(d.c)("View content"),
					className: Object(i.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(x.permalink),
					rel: "nofollow"
				}, r.a.createElement(f, {
					className: _.a.icon
				}))
			})
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				TimeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				timeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/higherOrderComponents/asTooltip.tsx"),
				b = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				h = s("./src/reddit/actions/tooltip.ts"),
				g = s("./src/reddit/constants/postLayout.ts"),
				x = s("./src/reddit/contexts/Tooltip.ts"),
				y = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				C = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				O = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				j = s("./src/reddit/selectors/telemetry.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				N = s.n(w);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "view--layout--FUE",
				I = "LayoutSwitch--picker",
				k = Object(p.a)(y.a),
				L = {
					[g.d.Card]: O.a,
					[g.d.Classic]: E.a,
					[g.d.Compact]: C.a
				},
				T = {
					[g.d.Card]: Object(v.c)("card"),
					[g.d.Classic]: Object(v.c)("classic"),
					[g.d.Compact]: Object(v.c)("compact")
				},
				M = Object(l.t)(),
				B = Object(u.c)({
					dropdownIsOpen: Object(S.b)(I),
					postLayout: l.M,
					redditStyle: l.B
				});
			class R extends r.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: r
						} = this.props;
						t ? t(e) : (s(e, r), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(j.screen)(t),
							subreddit: Object(j.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: a
						} = this.props, i = s || g.e[a], c = e === i, d = L[e];
						return r.a.createElement(f.b, _({}, t, {
							className: Object(o.a)(N.a.LayoutItem, {
								[N.a.selected]: c
							}),
							"data-layout": e,
							displayText: T[e],
							iconWrapperClassName: N.a.LayoutItemIconWrapper,
							isSelected: c,
							noHover: c,
							onClick: c ? void 0 : () => this.changeLayout(e),
							textClassName: N.a.LayoutItemTextClassName
						}), r.a.createElement(d, {
							className: N.a.LayoutIcon,
							onClick: c ? void 0 : n
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(k, _({}, e, {
							className: N.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: N.a.DropdownRow,
							rowIconClassName: N.a.DropdownRowIcon,
							rowSelectedClassName: N.a.DropdownRowSelected,
							tooltipId: I
						}), this.renderItem(g.d.Card), this.renderItem(g.d.Classic), this.renderItem(g.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, a = t || g.e[n];
					return r.a.createElement("div", {
						className: Object(o.a)(N.a.Container, e),
						id: P
					}, r.a.createElement("div", {
						className: N.a.DropdownContainer,
						onClick: s
					}, this.renderItem(a, {
						id: I,
						showDropdownTriangle: !0
					}), r.a.createElement(x.a.Consumer, null, this.renderDropdown)))
				}
			}
			var F = M(Object(a.b)(B, e => ({
					onListingLayoutChange: (t, s) => e(Object(c.v)(t, s)),
					openDropdown: () => e(Object(h.g)({
						tooltipId: I
					}))
				}))(Object(d.b)(Object(b.a)(R)))),
				D = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/addQueryParams/index.ts")),
				A = s("./src/lib/constants/index.ts"),
				W = s("./src/reddit/components/ListingSort/index.tsx"),
				H = s("./src/reddit/components/TimeSort/index.tsx"),
				U = s("./src/reddit/constants/listingSorts.ts"),
				V = s("./src/reddit/controls/InternalLink/index.tsx"),
				G = s("./src/reddit/helpers/path/index.ts"),
				z = s("./src/reddit/helpers/trackers/navigation.ts"),
				q = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				K = s("./src/reddit/selectors/user.ts"),
				Z = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				J = s.n(Z);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Y = new Set([A.N.CONTROVERSIAL, A.N.TOP]),
				X = new Set([A.N.CONTROVERSIAL, A.N.RISING]),
				$ = "ListingSort--Overflow",
				ee = Object(l.t)({
					isFrontpage: l.z,
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				te = Object(u.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, K.i, (e, t, s) => {
					if (e) return e;
					const n = [A.N.HOT, A.N.NEW, A.N.TOP, A.N.RISING];
					return t && s && n.unshift(A.N.BEST), n
				}),
				se = Object(u.c)({
					sortOptions: te
				});
			class ne extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(z.d)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(D.a)(t, {
							sort: e
						}) : Object(G.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							sort: t
						} = this.props;
						return r.a.createElement(V.a, {
							className: Object(o.a)(J.a.SortLink, e === t && J.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, r.a.createElement(W.a, {
							className: J.a.SortIcon,
							sort: e
						}), r.a.createElement("div", {
							className: J.a.SortLabel
						}, U.a[e]))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: a,
						timeSort: i
					} = this.props, c = !t && Y.has(n), d = X.has(n), l = a.filter(e => !X.has(e)), m = a.filter(e => X.has(e) && e !== n);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(W.d, Q({}, this.props, {
						buttonClassName: J.a.DropdownButton,
						className: Object(o.a)(J.a.SortDropdown, e),
						rowClassName: J.a.DropdownRow,
						rowIconClassName: J.a.DropdownRowIcon,
						rowSelectedClassName: J.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(o.a)(J.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(n), c && r.a.createElement(H.a, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: J.a.DropdownButton,
						className: J.a.TimeSort,
						listingSort: n,
						onChange: s,
						rowClassName: J.a.DropdownRow,
						rowSelectedClassName: J.a.DropdownRowSelected,
						timeSort: i || A.Pb,
						wrapperClassName: J.a.TimeSortWrapper
					}), m.length > 0 && r.a.createElement(W.d, Q({}, this.props, {
						className: Object(o.a)(J.a.SortOverflow, e),
						dropdownId: $,
						rowClassName: J.a.DropdownRow,
						rowIconClassName: J.a.DropdownRowIcon,
						rowSelectedClassName: J.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), r.a.createElement("button", {
						className: J.a.SortOverflowButton,
						id: $
					}, r.a.createElement(q.a, null))))
				}
			}
			var re = ee(Object(a.b)(se)(Object(d.b)(ne))),
				ae = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				oe = s.n(ae);
			const ie = Object(l.t)({
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				ce = Object(a.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const r = Object(i.c)({
									sort: t,
									timeSort: n
								});
								e(Object(c.G)(s, r))
							}
						}
					}
				});
			class de extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: n = !1,
						isProfilePage: a,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return r.a.createElement("div", {
						className: Object(o.a)(oe.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(re, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !a && r.a.createElement(F, {
						className: oe.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = ie(ce(Object(d.b)(de)))
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less": function(e, t, s) {
			e.exports = {
				publicAddressSection: "e0Te0bBkUsDG6nuCjsFky",
				publicAddress: "_3GWjMTgC3OErgLOUT3TdHw",
				yourWalletAddress: "_2ZVoGra9kSZDSEzU8EoxXp",
				settingsButton: "g2yJ86Mg6P4M5NIoQA0Ve",
				settingsIcon: "_1ZIhSQEemVyqYNEOTZVZGv"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less": function(e, t, s) {
			e.exports = {
				alertIcon: "_281dcYAIoQvZtLs7iI7QLT",
				risk: "_1r7M4su-D_hCOMd066XY3J",
				riskBody: "_12gDkO_ygs4ikCeyu5bcVg",
				riskTitle: "_3iYb38SYPwjAd1VG859AKs"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less": function(e, t, s) {
			e.exports = {
				overflowingText: "_3s4m8dsZEYcHZ4ojNFUV0R",
				cell: "_1-v1Zgj9IOmc-oaS_dfHfI",
				cellBottomLine: "_1YrPtUZyIgZmt7BoC3IOjC",
				cellContainer: "_3y3jYnCjkWtjpibBnc9e3l",
				cellTopLine: "-pS2f0b04dtavABCVdrie",
				explanation: "_1n5fyOsQxmVlxXd1xuw6fH",
				title: "_2Q8Se5aIjJDpE5JnGoGI5R",
				token: "_2tQrDQoIjV3V6CMgrLYXU3",
				tokenCell: "_2rBuuOwPxb-X6wEPWDBmYH",
				button: "_1Vg1f_Cp7IF32wBdY1l2Gq"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3WnHen22bLKwTkOL3W6F_D",
				link: "_3LjXe6j5_bQ3U8GZLY0HYO",
				showAll: "eRbX9WCebKIuLXdJIwNjK",
				title: "_3il8HJMlHzKppQleJjuboQ"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.m.less": function(e, t, s) {
			e.exports = {
				loading: "Jfh68QhZqpLgByZUbKyD1",
				section: "_3o2O8sLNM51xpdzuDH-ocD"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.tsx": function(e, t, s) {
			"use strict";
			var n, r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/selectors/gov.ts"),
				m = s("./src/app/strings/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/prettyPrintNumber/index.ts"),
				b = s("./src/reddit/actions/governance/index.ts"),
				h = s("./src/reddit/actions/login.ts"),
				g = s("./src/reddit/components/Governance/Token/index.tsx"),
				x = s("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/endpoints/governance/crypto.ts"),
				E = s("./src/reddit/helpers/governance/tokens.ts"),
				C = s("./src/reddit/i18n/components.tsx");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(n || (n = {}));
			var O = s("./src/reddit/selectors/user.ts"),
				j = s("./src/higherOrderComponents/asTooltip.tsx"),
				S = s("./src/lib/copyToClipboard/index.ts"),
				w = s("./src/reddit/actions/governance/errorToast.ts"),
				N = s("./src/reddit/actions/toaster.ts"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				P = s("./src/reddit/contexts/ApiContext.tsx"),
				I = s("./src/reddit/controls/Dropdown/index.tsx"),
				k = s("./src/reddit/controls/Dropdown/Row.tsx"),
				L = s("./src/reddit/helpers/governance/ethereum.ts"),
				T = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				M = s("./src/reddit/models/Toast/index.ts"),
				B = s("./src/reddit/selectors/tooltip.ts"),
				R = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				F = s.n(R);
			const D = Object(j.a)(I.a),
				A = "BlockchainWalletInfo--SettingsMenu";
			class W extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(S.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(v.b)(this.props.apiContext(), this.props.provider, this.props.publicAddress);
						e.ok ? this.props.onWalletRemoved() : this.props.onGovernanceError(e.error)
					}
				}
				render() {
					const {
						dropdownIsOpen: e,
						onOpenDropdown: t,
						provider: s,
						publicAddress: n,
						token: r,
						tokenName: o
					} = this.props;
					if (!n) return null;
					const i = s === v.a.Ethereum || s === v.a.Rinkeby,
						c = s === v.a.Stellar;
					return a.a.createElement("div", {
						className: F.a.publicAddressSection
					}, a.a.createElement("div", {
						className: F.a.publicAddress,
						title: n
					}, function(e, t) {
						switch (t) {
							case v.a.Stellar:
								return e.slice(0, 6) + "..." + e.slice(e.length - 6);
							default:
								return e
						}
					}(n, s)), a.a.createElement("div", {
						className: F.a.yourWalletAddress
					}, a.a.createElement(C.c, null, "Your Wallet Address"), (i || c) && a.a.createElement("button", {
						className: F.a.settingsButton,
						title: Object(d.c)("Wallet address settings"),
						role: "menu",
						onClick: t,
						id: A
					}, a.a.createElement(T.a, {
						className: F.a.settingsIcon
					})), i && a.a.createElement(D, {
						tooltipId: A,
						isOpen: e,
						renderContentsHidden: !0
					}, a.a.createElement(k.b, {
						displayText: Object(d.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}), s && a.a.createElement(k.b, {
						displayText: Object(d.c)("Remove My Wallet"),
						onClick: this.onRemoveMyWallet
					}), r && a.a.createElement(k.b, {
						displayText: Object(d.c)("Track ".concat(Object(d.b)("tokenName", o), " in MetaMask")),
						onClick: () => Object(L.i)(r)
					})), c && a.a.createElement(D, {
						tooltipId: A,
						isOpen: e,
						renderContentsHidden: !0
					}, a.a.createElement(k.b, {
						displayText: Object(d.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}))))
				}
			}
			const H = Object(i.c)({
					dropdownIsOpen: Object(B.b)(A),
					provider: l.a,
					token: l.q,
					tokenName: l.o
				}),
				U = Object(o.b)(H, (e, t) => ({
					onGovernanceError: t => {
						Object(w.a)(e, t)
					},
					onOpenDropdown: () => e(Object(_.g)({
						tooltipId: A
					})),
					onWalletRemoved: () => {
						e(Object(b.j)({
							subredditId: t.subredditId
						})), e(Object(N.e)({
							kind: M.b.SuccessCommunityGreen,
							text: Object(d.c)("Wallet removed successfully!")
						}))
					}
				}));
			var V = Object(P.b)(U(W)),
				G = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				z = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				q = s.n(z);

			function K(e) {
				return a.a.createElement("div", {
					className: q.a.risk
				}, a.a.createElement("div", {
					className: q.a.riskTitle
				}, a.a.createElement(G.a, {
					className: q.a.alertIcon
				}), e.title), a.a.createElement("div", {
					className: q.a.riskBody
				}, e.body))
			}
			var Z = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less"),
				J = s.n(Z);
			class Q extends a.a.PureComponent {
				componentDidMount() {
					const {
						pageLayer: e,
						provider: t,
						wallet: s
					} = this.props, n = s && s.publicAddress;
					Object(x.b)(e) && t && !n && this.props.onOpenRegistrationModal()
				}
				render() {
					const {
						className: e,
						distribution: t,
						isLoggedIn: s,
						language: r,
						onOpenLoginModal: o,
						onOpenRegistrationModal: i,
						onOpenTransferModal: c,
						provider: d,
						subredditId: l,
						tokenDisplayConversion: b,
						tokenName: h,
						useCrypto: x,
						wallet: y
					} = this.props, O = y && y.inactive && function(e, t, s) {
						const r = e.actionScheduledAt - Date.now(),
							a = Math.max(1, Math.floor(r / u.w)),
							o = 1 !== a ? "gov.pointsDecay.inactive.time.plural" : "gov.pointsDecay.inactive.time.singular",
							i = Object(m.a)(t, o, {
								numDays: a
							});
						switch (e.reason) {
							case n.Initial:
								return {
									title: Object(m.a)(t, "gov.pointsDecay.inactive.title", {
										tokenName: s
									}), body: Object(m.a)(t, "gov.pointsDecay.inactive.body", {
										time: i,
										tokenName: s
									})
								};
							case n.Mod:
								return {
									title: Object(m.a)(t, "gov.pointsDecay.election.title"), body: Object(m.a)(t, "gov.pointsDecay.election.body", {
										time: i,
										tokenName: s
									})
								}
						}
					}(y.inactive, r, h), j = y && y.publicAddress, S = d === v.a.Ethereum || d === v.a.Rinkeby;
					return a.a.createElement("div", {
						className: e
					}, a.a.createElement("div", {
						className: J.a.title
					}, h), a.a.createElement("div", {
						className: J.a.cellContainer
					}, y && Y(a.a.createElement("div", {
						className: J.a.tokenCell
					}, a.a.createElement(g.a, {
						className: J.a.token,
						subredditId: l
					}), Object(p.a)(Object(E.b)(y.amount, b))), Object(m.a)(r, "sidebar.gov.yourTokens", {
						tokenName: h
					})), t && Y(Object(p.a)(Object(E.b)(t.totalAvailable, b)), Object(m.a)(r, "sidebar.gov.tokensIssued"))), O && a.a.createElement(K, {
						body: O.body,
						title: O.title
					}), a.a.createElement("div", {
						className: J.a.explanation
					}, Object(m.a)(r, "sidebar.gov.tokenExplanation", {
						tokenName: h
					})), d && a.a.createElement(V, {
						publicAddress: j,
						subredditId: l
					}), d && !j && S && a.a.createElement(f.f, {
						className: J.a.button,
						onClick: s ? i : o
					}, a.a.createElement(C.c, null, "register")), y && !x && a.a.createElement(f.i, {
						className: J.a.button,
						onClick: c
					}, a.a.createElement(C.c, null, "send")))
				}
			}

			function Y(e, t) {
				return a.a.createElement("div", {
					className: J.a.cell
				}, a.a.createElement("div", {
					className: J.a.cellTopLine
				}, e), a.a.createElement("div", {
					className: J.a.cellBottomLine
				}, t))
			}
			const X = Object(i.c)({
				isLoggedIn: O.J,
				provider: l.a,
				tokenName: l.o,
				tokenDisplayConversion: l.n,
				language: e => e.user.language,
				useCrypto: l.r
			});
			var $ = Object(o.b)(X, e => ({
					onOpenLoginModal: () => e(Object(h.e)()),
					onOpenRegistrationModal: () => e(Object(b.i)()),
					onOpenTransferModal: () => e(Object(b.h)())
				}))(Object(y.t)()(Q)),
				ee = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				te = s("./src/lib/classNames/index.ts"),
				se = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				ne = s("./src/reddit/actions/subreddit.ts"),
				re = s("./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less"),
				ae = s.n(re);
			const oe = Object(i.c)({
				proposals: (e, t) => Object.keys(e.polls.models).map(t => e.polls.models[t]).filter(e => e.subredditId === t.subredditId).sort((e, t) => e.createdAt > t.createdAt ? -1 : e.createdAt < t.createdAt ? 1 : 0).map(t => e.posts.models[t.postId]).filter(Boolean).slice(0, 5)
			});
			var ie = Object(y.t)()(Object(o.b)(oe, (e, t) => ({
					onFilterProposals: () => e(Object(ne.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(y.F)(e.pageLayer) && e.proposals.length ? a.a.createElement("div", {
						className: Object(te.a)(e.className, ae.a.container)
					}, a.a.createElement("div", {
						className: ae.a.title
					}, a.a.createElement(C.c, null, "Latest Polls")), e.proposals.map(e => a.a.createElement(ee.a, {
						className: ae.a.link,
						key: e.permalink,
						title: e.title,
						to: Object(se.a)(e.permalink)
					}, e.title)), a.a.createElement("a", {
						className: ae.a.showAll,
						onClick: e.onFilterProposals
					}, a.a.createElement(C.c, null, "show all"))) : null
				}))),
				ce = s("./src/reddit/components/Governance/CommunityCard/index.m.less"),
				de = s.n(ce);
			const le = Object(i.c)({
				tokenName: l.o,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				wallet: l.g,
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			t.a = Object(o.b)(le)((function(e) {
				return a.a.createElement(c.a, {
					className: e.className,
					title: Object(d.c)("Subreddit Points")
				}, e.distribution ? a.a.createElement(r.Fragment, null, a.a.createElement($, {
					className: de.a.section,
					distribution: e.distribution,
					subredditId: e.subredditId,
					wallet: e.wallet
				}), e.subreddit && a.a.createElement(ie, {
					className: de.a.section,
					subredditId: e.subreddit.id
				})) : a.a.createElement("div", {
					className: de.a.loading
				}))
			}))
		},
		"./src/reddit/components/Governance/Leaderboard/Distribution/SettingsDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2-JKQYYtQFdjMQJhVbDG_e",
				row: "q2yTYZFv4fUHEGX1rFR_m"
			}
		},
		"./src/reddit/components/Governance/Leaderboard/Distribution/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_32q2laSPP2zynVHz3RnmFA",
				description: "_2z340UMqfRQMV5dbkf27cg",
				descriptionSmall: "_2lGyUBe0npnlVdJSyTAQgH",
				disabledText: "_1VlkCIi5HF6re6HYIEjcO-",
				explanation: "_3HY9KL4hLnHIN0SXTtd7sP",
				gear: "_3UQtcgIc1btF7TSSH4q4iH",
				noRelease: "_13P3kuENlFnVlvkkfqFrwK",
				releasing: "_2PMbulVzccnHrw7DDPiqto",
				title: "_2rd8DPLmnfPIFKHbLCyR1n",
				token: "oPTB7VC8RAKk1jXQ0HRYu",
				wallet: "_1oM70Z_WtiI7ZfhIvZbyOR"
			}
		},
		"./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3U3eyY-903VKXVQvAX6Oci",
				line: "_2rsENdHzxqXJ3jqSdUylB9",
				text: "R99kMDIZ0Rs3Ftsu750Im"
			}
		},
		"./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less": function(e, t, s) {
			e.exports = {
				flexRow: "_27XFXY0Nde6JEGFwKDLXpX",
				container: "_2nlSSvS0u4wdSdhODO2_LD",
				points: "_3dubtJAHgSz_JV7AiRzk12",
				position: "AzD_FyWlGp7oFW4xH0-MO",
				badge: "_2i9Lr8K4mvo7KpJoZHGbz0",
				badgeContainer: "_3tJG1HTVRm3dk-oHnTSl5h",
				currentUser: "_1M58uBin1CihyNgByc5_pr",
				user: "_3W7d8zooppcYXYlpjKZZRj",
				username: "_1vyJFDQjwC9W6mhvljSan",
				rank: "_3vpolg8V6jVUdNQB8lNsBS"
			}
		},
		"./src/reddit/components/Governance/Leaderboard/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1l8stWgw-zYCekbwl-n3c_",
				datePickerContainer: "_3PZpCplhcmXmVN4-Ltw1jj",
				distribution: "_20giigIncPELawj1dJQbkq",
				divider: "_1zf-p8IC8IigBUFPt-H_45",
				entryUser: "-h3bdtmpLuhCRS6K-O5el",
				error: "XeA-6vh3Ag_VPJZW95yd_",
				errorIcon: "_3WI9lKaqHMMq_zIu6QXRY-",
				header: "_286cfq1tt7CbwNBqdqxRi0",
				loading: "pyciUPy6JIviG5S3kASOu"
			}
		},
		"./src/reddit/components/Governance/Leaderboard/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n, r, a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/badge.ts"),
				l = s("./src/config.ts"),
				m = s("./src/lib/constants/index.ts");

			function u(e, t) {
				return "".concat(e, "-").concat(t)
			}! function(e) {
				e[e.Divider = 0] = "Divider", e[e.User = 1] = "User"
			}(n || (n = {})),
			function(e) {
				e.Month = "points-monthly", e.Week = "points-weekly"
			}(r || (r = {}));
			var p = s("./src/reddit/endpoints/governance/requester.ts");
			var b = s("./src/lib/makeActionCreator/index.ts"),
				h = s("./src/reddit/actions/leaderboard/constants.ts");
			Object(b.a)(h.a);
			const g = Object(b.a)(h.b),
				x = Object(b.a)(h.c),
				y = Object(b.a)(h.d);

			function f(e) {
				return e.type === n.User
			}
			const v = (e, t) => async (s, r, a) => {
				let {
					apiContext: o
				} = a;
				const i = u(e, t),
					c = r(),
					b = !!c.leaderboard.models[i],
					h = !!c.leaderboard.api.pending[i];
				if (b || h) return;
				s(x({
					key: i
				}));
				const v = await
				function(e, t) {
					return Object(p.a)(e, {
						endpoint: "".concat(l.a.metaUrl, "/ratings/").concat(t.subredditId, "/").concat(t.dateRange),
						method: m.bb.GET
					}).then(e => {
						if (e.ok) {
							let t = 0;
							const s = [];
							return e.body.forEach(e => {
								const r = e.position - t;
								r > 1 && s.push({
									numUsers: r,
									type: n.Divider
								}), s.push(Object.assign({}, e, {
									type: n.User
								})), t = e.position
							}), Object.assign({}, e, {
								body: {
									leaderboard: s
								}
							})
						}
						return e
					})
				}(o(), {
					dateRange: t,
					subredditId: e
				});
				if (v.ok) {
					s(y({
						key: i,
						data: v.body.leaderboard
					}));
					const t = v.body.leaderboard.filter(f).map(e => e.userId);
					s(Object(d.l)({
						subredditId: e,
						userIds: t
					}))
				} else s(g({
					key: i,
					data: v.error
				}))
			};
			var E = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				C = s("./src/reddit/featureFlags/index.ts"),
				O = s("./src/reddit/i18n/components.tsx"),
				j = s("./src/reddit/i18n/utils.ts"),
				S = s("./src/reddit/icons/svgs/Info/index.tsx"),
				w = s("./src/reddit/selectors/economics.ts"),
				N = s("./src/reddit/selectors/gov.ts"),
				_ = s("./src/app/strings/index.ts"),
				P = s("./src/lib/classNames/index.ts"),
				I = s("./src/lib/prettyPrintNumber/index.ts"),
				k = s("./src/lib/timeUntil/index.ts"),
				L = s("./src/reddit/components/Governance/Token/index.tsx"),
				T = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				M = s("./src/reddit/actions/governance/index.ts"),
				B = s("./src/reddit/controls/Button/index.tsx");
			var R = Object(i.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						onOptIn: () => e(Object(M.c)(!1, s))
					}
				})((function(e) {
					return o.a.createElement(B.i, {
						className: e.className,
						onClick: e.onOptIn
					}, o.a.createElement(O.c, null, "enable"))
				})),
				F = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/components/OverlayAwareTooltip/index.tsx")),
				D = s("./src/reddit/controls/Dropdown/index.tsx"),
				A = s("./src/reddit/controls/Dropdown/Row.tsx"),
				W = s("./src/reddit/components/Governance/Leaderboard/Distribution/SettingsDropdown/index.m.less"),
				H = s.n(W);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var V = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const G = Object(F.a)((function(e) {
					const {
						className: t,
						language: s,
						tokenName: n,
						subredditId: r
					} = e, a = V(e, ["className", "language", "tokenName", "subredditId"]);
					return o.a.createElement(D.a, U({
						className: Object(P.a)(e.className, H.a.container)
					}, a), o.a.createElement(A.b, {
						noIcon: !0,
						className: H.a.row,
						onClick: e.onOpenOptOutModal
					}, Object(_.a)(s, "polls.optOutModalTitle", {
						tokenName: n
					})))
				})),
				z = Object(c.c)({
					tokenName: N.o,
					language: e => e.user.language
				});
			var q = Object(i.b)(z, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						onOpenOptOutModal: () => e(Object(M.d)({
							subredditId: s
						}))
					}
				})(G),
				K = s("./src/reddit/components/Governance/Leaderboard/Distribution/index.m.less"),
				Z = s.n(K);
			const J = "distribution-opt-out";
			class Q extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showDropdown: !1
					}, this.handleOpenDropdown = () => {
						this.setState({
							showDropdown: !0
						}), document.body.addEventListener("click", this.handleCloseDropdown)
					}, this.handleCloseDropdown = () => {
						setTimeout(() => this.setState({
							showDropdown: !1
						})), document.body.removeEventListener("click", this.handleCloseDropdown)
					}
				}
				render() {
					const e = "".concat(J).concat(this.props.uniqueId || ""),
						t = !!this.props.distribution && !!this.props.distribution.nextIssue && !!this.props.distribution.nextIssueAt;
					return this.props.specialMembership ? o.a.createElement("div", {
						className: Object(P.a)(this.props.className, Z.a.container)
					}, o.a.createElement("div", {
						className: Object(P.a)(Z.a.descriptionSmall)
					}, o.a.createElement(O.c, null, "You earn Karma Points from your posts and comments in this subreddit. Earn enough Karma Points and you’ll get an Achievement Badge! Scores are updated once a week."))) : o.a.createElement("div", {
						className: Object(P.a)(this.props.className, Z.a.container)
					}, o.a.createElement("div", {
						className: Z.a.amount
					}, o.a.createElement("div", {
						className: Object(P.a)(Z.a.description, {
							[Z.a.disabledText]: !!this.props.wallet && !!this.props.wallet.optOut
						})
					}, t ? this.renderRelease() : this.renderNoRelease())), this.props.wallet && this.props.wallet.optOut && o.a.createElement(R, {
						subredditId: this.props.subreddit.id
					}), this.props.wallet && !this.props.wallet.optOut && o.a.createElement(T.a, {
						className: Z.a.gear,
						id: e,
						onClick: this.state.showDropdown ? this.handleCloseDropdown : this.handleOpenDropdown
					}), this.props.wallet && !this.props.wallet.optOut && o.a.createElement(q, {
						isOpen: this.state.showDropdown,
						subredditId: this.props.subreddit.id,
						tooltipPosition: ["right", "top"],
						targetPosition: ["right", "bottom"],
						tooltipId: e
					}))
				}
				renderRelease() {
					return this.props.distribution && this.props.distribution.nextIssue && this.props.distribution.nextIssueAt ? o.a.createElement(a.Fragment, null, o.a.createElement("div", {
						className: Z.a.wallet
					}, o.a.createElement(L.a, {
						className: Z.a.token,
						subredditId: this.props.subreddit.id
					}), o.a.createElement("div", null, Object(I.a)(this.props.distribution.nextIssue))), o.a.createElement("div", {
						className: Z.a.releasing
					}, Object(_.a)(this.props.language, "sidebar.gov.tokensReleasing", {
						date: Object(k.a)(this.props.language, new Date(this.props.distribution.nextIssueAt), !0)
					}))) : null
				}
				renderNoRelease() {
					return o.a.createElement("div", {
						className: Z.a.noRelease
					}, o.a.createElement(O.c, null, "There are currently no new distributions scheduled."))
				}
			}
			const Y = Object(c.c)({
				distribution: (e, t) => {
					let {
						subreddit: s
					} = t;
					return e.subreddits.gov.distributions[s.id]
				},
				language: e => e.user.language,
				specialMembership: C.d.spPremium,
				wallet: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(N.g)(e, {
						subredditId: s.id
					})
				}
			});
			var X = Object(i.b)(Y)(Q),
				$ = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less")),
				ee = s.n($);
			const te = Object(c.c)({
				language: e => e.user.language
			});
			var se = Object(i.b)(te)((function(e) {
					const t = Object(I.a)(e.entry.numUsers.toString()),
						s = 1 === e.entry.numUsers ? Object(_.a)(e.language, "gov.leaderboard.users.singular") : Object(_.a)(e.language, "gov.leaderboard.users.plural");
					return o.a.createElement("div", {
						className: Object(P.a)(ee.a.container, e.className)
					}, o.a.createElement("div", {
						className: ee.a.line
					}), o.a.createElement("div", {
						className: ee.a.text
					}, "".concat(t, " ").concat(s)), o.a.createElement("div", {
						className: ee.a.line
					}))
				})),
				ne = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				re = s("./node_modules/uuid/v4.js"),
				ae = s.n(re),
				oe = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ce = s("./src/reddit/selectors/telemetry.ts"),
				de = s("./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less"),
				le = s.n(de);
			const me = (e, t, s) => n => {
				const r = ce.defaults(n);
				return Object.assign({
					action: e,
					correlationId: t,
					source: "meta",
					noun: "leaderboard_user_name"
				}, r, {
					actionInfo: Object.assign({}, r.actionInfo, {
						reason: s
					}),
					subreddit: ce.subreddit(n)
				})
			};
			const ue = Object(c.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badgesEnabled: e => C.d.spBadges(e) || C.d.spPremium(e)
			});
			var pe = Object(ie.b)(Object(i.b)(ue)((function(e) {
					const t = ae()();
					return o.a.createElement(ne.a, {
						className: Object(P.a)(le.a.container, e.className, {
							[le.a.currentUser]: e.entry.userId === e.accountId
						}),
						to: "/user/".concat(e.entry.userName, "/"),
						onClick: () => {
							e.sendEvent(me("click", t, e.entry.userName))
						},
						onMouseEnter: () => {
							e.sendEvent(me("hover", t, e.entry.userName))
						}
					}, o.a.createElement("div", {
						className: le.a.user
					}, e.badgesEnabled && o.a.createElement("div", {
						className: le.a.badgeContainer
					}, o.a.createElement(oe.c, {
						className: le.a.badge,
						correlationId: t,
						subredditId: e.subredditId,
						uniqueIdentifier: e.uniqueIdentifier,
						userId: e.entry.userId
					})), o.a.createElement("div", {
						className: le.a.username
					}, e.entry.userName)), o.a.createElement("div", {
						className: le.a.rank
					}, o.a.createElement("div", {
						className: le.a.points
					}, Object(I.a)(e.entry.score)), o.a.createElement("div", {
						className: le.a.position
					}, "#".concat(Object(I.a)(e.entry.position.toString())))))
				}))),
				be = s("./src/reddit/components/Governance/Leaderboard/index.m.less"),
				he = s.n(be);
			class ge extends o.a.Component {
				componentDidMount() {
					this.props.onFetchLeaderboardData(this.props.currentDateRange)
				}
				render() {
					return this.props.userOptedOut ? null : o.a.createElement(E.a, {
						className: this.props.className,
						title: this.props.specialMembership ? Object(j.c)("Top Karma Earners (Last Week)") : Object(j.c)("Leaderboard (Past Week)")
					}, this.props.subreddit && o.a.createElement(X, {
						className: he.a.distribution,
						subreddit: this.props.subreddit,
						uniqueId: this.props.uniqueId
					}), o.a.createElement("div", {
						className: he.a.header
					}, o.a.createElement("div", {
						className: he.a.topUsers
					}, o.a.createElement(O.c, null, "top 10 users")), o.a.createElement("div", {
						className: he.a.tokens
					}, this.props.tokenName)), (() => this.props.leaderboardErrored ? o.a.createElement("div", {
						className: he.a.error
					}, o.a.createElement(S.a, {
						className: he.a.errorIcon
					})) : this.props.leaderboard ? o.a.createElement(a.Fragment, null, this.props.leaderboard.map(e => {
						switch (e.type) {
							case n.User:
								return o.a.createElement(pe, {
									className: he.a.entryUser,
									entry: e,
									subredditId: this.props.subredditId,
									uniqueIdentifier: this.props.uniqueId
								});
							case n.Divider:
								return o.a.createElement(se, {
									className: he.a.divider,
									entry: e
								})
						}
					})) : Array.from({
						length: 8
					}).map((e, t) => o.a.createElement("div", {
						className: he.a.loading,
						key: t
					})))())
				}
			}
			const xe = (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.leaderboard.dateRangeSelection[s] || r.Week
				},
				ye = Object(c.c)({
					tokenName: N.o,
					currentDateRange: xe,
					distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
					leaderboard: (e, t) => {
						let {
							subredditId: s
						} = t;
						const n = u(s, xe(e, {
							subredditId: s
						}));
						return e.leaderboard.models[n]
					},
					leaderboardErrored: (e, t) => {
						let {
							subredditId: s
						} = t;
						const n = u(s, xe(e, {
							subredditId: s
						}));
						return !!e.leaderboard.api.error[n]
					},
					specialMembership: C.d.spPremium,
					subreddit: (e, t) => e.subreddits.models[t.subredditId],
					userOptedOut: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(w.A)(e, s)
					}
				});
			t.default = Object(i.b)(ye, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onFetchLeaderboardData: t => e(v(s, t))
				}
			})(ge)
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				c = s.n(i);
			t.a = function(e) {
				return r.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, r.a.createElement(o.c, null, "Error: Could not load poll"))
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less": function(e, t, s) {
			e.exports = {
				emptyPie: "_3FcFVjZN0xHslbheCZ6YtB",
				fullPie: "_51DvHNRm7RdZvtEr4YB90",
				checkIcon: "b6nqW0WFO2M4SexVBxfHU",
				container: "_1QSw_HlkZ06PQ4H_Gl5Qmi",
				decisionIcon: "tIv0l4mIAasOfzH_1MZzr",
				decisionThreshold: "vdDwj3MECrKPWOzGvwtX4",
				pie: "_1kLHoqYVgmdy-N798MqUkD",
				pieContainer: "_19t_3cFD9b1D_z7gV6r1Lf",
				pieInvertedMask: "_240PIKFetxH16NIbed3MhP",
				pieMask: "faQEx7XG3jztMB7Ba0IzB",
				pieSwap: "sBNylAozOUua3KlWKF9bf",
				text: "_3kJ7s4NNHNqugbRuUIg9B9"
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1399Kcm0dM3RnJzlAPzZsE",
				selectable: "_3-DDU6UwhIWiQZZtZLB8nv",
				selected: "biqV2RX059eee3GcVedKg"
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_16Gygedl8JROR3rsORhsAq"
			}
		},
		"./src/reddit/components/Governance/Proposal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3agF4JIMydb6n5U8QiQ6Tv",
				govIcon: "Biin4hWHcVT2EfDytVnNn",
				poll: "_2-Y0QlWKQ9uE8EEq087km1",
				resultsSelector: "_31DHxzl3U6nsgzY4XJjCSD",
				votingReward: "_2JVvMYg8RBHtf5C2szMdV7"
			}
		},
		"./src/reddit/components/Governance/Proposal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Governance/Token/index.tsx"),
				m = s("./src/reddit/components/Governance/VotingReward/index.m.less"),
				u = s.n(m);

			function p(e) {
				return o.a.createElement("div", {
					className: Object(d.a)(u.a.container, e.className)
				}, o.a.createElement("div", {
					className: u.a.pill
				}, o.a.createElement(l.a, {
					className: u.a.token,
					subredditId: e.subredditId
				}), o.a.createElement("span", {
					className: u.a.amount
				}, "+", e.amount)))
			}
			var b, h = s("./src/reddit/actions/governance/index.ts"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/models/Poll/index.ts"),
				v = s("./src/reddit/selectors/gov.ts"),
				E = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				C = s("./src/lib/bigNumberUtils/percent.ts"),
				O = s("./src/lib/prettyPrintNumber/index.ts"),
				j = s("./src/reddit/helpers/governance/tokens.ts"),
				S = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				w = s("./src/reddit/components/Poll/ResultOption/index.m.less"),
				N = s.n(w);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(b || (b = {}));
			var _ = function(e) {
					const t = e.poll.options.filter(t => t.id === e.optionId)[0],
						s = e.result.totalVotes,
						r = e.result.options[e.optionId],
						a = new n.BigNumber(s).isZero() ? 0 : Object(C.a)(r.votes, s),
						i = Object(j.c)(r.votes, e.tokenDisplayConversion);
					return o.a.createElement("div", {
						className: Object(d.a)(e.className, N.a.container),
						title: e.displayType === b.Count ? r.votes : "".concat(a.toFixed(2), "% (").concat(i, " ").concat(e.tokenName, ")")
					}, o.a.createElement("div", {
						className: N.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: "".concat(a, "%")
						}
					}), o.a.createElement("div", {
						className: Object(d.a)(N.a.count, {
							[N.a.hide]: e.displayType !== b.Count,
							[N.a.show]: e.displayType === b.Count
						})
					}, Object(O.b)(parseInt(r.votes))), o.a.createElement("div", {
						className: Object(d.a)(N.a.percent, {
							[N.a.hide]: e.displayType === b.Count,
							[N.a.show]: e.displayType !== b.Count
						})
					}, "".concat(a.toFixed(1), "%")), o.a.createElement("div", {
						className: N.a.text
					}, t.text), r.userSelected && o.a.createElement(S.a, {
						className: N.a.check
					}))
				},
				P = s("./src/reddit/components/Poll/ClosedPoll/index.m.less"),
				I = s.n(P);
			const k = Object(c.c)({
				tokenName: v.o,
				tokenDisplayConversion: v.n,
				language: e => e.user.language
			});
			var L = Object(i.b)(k)((function(e) {
					let t;
					return e.poll.options.forEach(s => {
						t || (t = s);
						const r = e.result.options[s.id],
							a = e.result.options[t.id];
						new n.BigNumber(a.votes).isLessThan(new n.BigNumber(r.votes)) && (t = s)
					}), o.a.createElement("div", {
						className: e.className
					}, e.poll.options.map((s, n) => o.a.createElement(_, {
						key: n,
						className: I.a.option,
						displayType: e.displayType,
						isWinningOption: s === t,
						optionId: s.id,
						poll: e.poll,
						result: e.result,
						tokenName: e.tokenName,
						tokenDisplayConversion: e.tokenDisplayConversion
					})), o.a.createElement(E.a, {
						className: I.a.metaData,
						language: e.language,
						poll: e.poll
					}))
				})),
				T = s("./node_modules/lodash/isNil.js"),
				M = s.n(T),
				B = s("./src/reddit/constants/elementClassNames.ts"),
				R = s("./src/reddit/controls/Button/index.tsx"),
				F = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				D = s("./src/reddit/i18n/components.tsx"),
				A = s("./src/reddit/components/Poll/OpenPoll/index.m.less"),
				W = s.n(A);

			function H(e) {
				return "INPUT" === e.tagName
			}
			class U extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						optionIsSelected: !1
					}, this.handleOptionSelected = () => this.setState({
						optionIsSelected: !0
					}), this.handleSubmit = e => {
						const {
							poll: t
						} = this.props;
						e.preventDefault();
						const s = e.currentTarget,
							n = function(e) {
								for (const t of e)
									if (t.checked) return parseInt(t.value)
							}(Array.from(s.elements).filter(H));
						M()(n) || (this.props.onVoteSelection(t.options[n]), this.props.sendEvent(Object(y.e)(t.id, t.postId, n)))
					}
				}
				render() {
					return o.a.createElement("form", {
						className: this.props.className,
						onSubmit: this.handleSubmit
					}, o.a.createElement("div", null, this.props.poll.options.map((e, t) => o.a.createElement("label", {
						key: t,
						className: W.a.option
					}, o.a.createElement("input", {
						className: W.a.optionRadio,
						onChange: this.handleOptionSelected,
						type: "radio",
						name: "proposal",
						value: t
					}), o.a.createElement("div", {
						className: W.a.optionText
					}, e.text)))), o.a.createElement("div", {
						className: W.a.controlRow
					}, o.a.createElement("div", {
						className: W.a.buttonContainer
					}, o.a.createElement(R.i, {
						className: B.p,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? o.a.createElement(F.a, {
						className: W.a.loadingIcon,
						sizePx: 20
					}) : o.a.createElement(a.Fragment, null, this.props.votingIcon, o.a.createElement(D.c, null, "vote"))), !this.props.userIsLoggedIn && o.a.createElement("div", {
						className: W.a.loggedOutTooltip
					}, o.a.createElement(D.c, null, "You must be logged in to vote"))), o.a.createElement(E.a, {
						className: W.a.metaData,
						language: this.props.language,
						poll: this.props.poll
					})))
				}
			}
			const V = Object(c.c)({
				language: e => e.user.language,
				userIsLoggedIn: e => !!e.user.account
			});
			var G = Object(i.b)(V)(Object(g.b)(U)),
				z = s("./src/reddit/components/Poll/index.m.less"),
				q = s.n(z);
			class K extends o.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(f.g)(e, t), this.sendPollResultsEvent = () => {
						const {
							poll: e,
							sendEvent: t
						} = this.props;
						e && t(Object(y.d)(e.id, e.postId))
					}
				}
				componentDidMount() {
					const {
						isCommentsPage: e,
						poll: t,
						result: s
					} = this.props;
					e && this.userAlreadyMadeSelection(t, s) && this.sendPollResultsEvent()
				}
				componentDidUpdate(e) {
					!this.userAlreadyMadeSelection(e.poll, e.result) && this.userAlreadyMadeSelection(this.props.poll, this.props.result) && this.sendPollResultsEvent()
				}
				render() {
					const {
						className: e,
						displayType: t,
						onVoteSelection: s,
						poll: n,
						result: r,
						subredditId: a,
						title: i,
						voteInProgress: c,
						votingIcon: d
					} = this.props;
					return n ? o.a.createElement("div", {
						className: e
					}, i && o.a.createElement("div", {
						className: q.a.title
					}, i), r && Object(f.e)(n, r) ? o.a.createElement(L, {
						displayType: t,
						poll: n,
						result: r,
						subredditId: a
					}) : o.a.createElement(G, {
						poll: n,
						onVoteSelection: s,
						voteInProgress: c,
						votingIcon: d
					})) : null
				}
			}
			const Z = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				result: (e, t) => e.polls.results[t.resultType][t.pollId],
				voteInProgress: (e, t) => !!e.polls.api.voting.pending[t.pollId]
			});
			var J = Object(x.t)({
					isCommentsPage: x.w
				})(Object(i.b)(Z, (e, t) => ({
					onVoteSelection: s => e(Object(h.f)(t.pollId, s.id))
				}))(Object(g.b)(K))),
				Q = s("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				Y = s("./src/app/strings/index.ts"),
				X = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M10.7771 0.961401C10.3769 0.466643 9.62244 0.466642 9.22221 0.961401L8.71391 1.58973C8.42377 1.9484 7.92591 2.06204 7.50887 1.86478L6.77829 1.51921C6.20302 1.2471 5.52329 1.57445 5.37735 2.19386L5.19202 2.98051C5.08623 3.42955 4.68698 3.74795 4.22565 3.75117L3.41748 3.75681C2.78112 3.76125 2.31073 4.3511 2.44801 4.97249L2.62234 5.76165C2.72186 6.21213 2.50029 6.67222 2.08605 6.87528L1.36036 7.23101C0.788947 7.51112 0.621066 8.24665 1.01436 8.74695L1.51383 9.38231C1.79895 9.745 1.79895 10.2557 1.51383 10.6184L1.01436 11.2537C0.621067 11.754 0.788947 12.4895 1.36036 12.7697L2.08605 13.1254C2.50029 13.3284 2.72186 13.7885 2.62234 14.239L2.44801 15.0282C2.31073 15.6496 2.78112 16.2394 3.41748 16.2439L4.22565 16.2495C4.68698 16.2527 5.08623 16.5711 5.19202 17.0202L5.37735 17.8068C5.52329 18.4262 6.20302 18.7536 6.77829 18.4815L7.50887 18.1359C7.92591 17.9386 8.42376 18.0523 8.71391 18.4109L9.22221 19.0393C9.62244 19.534 10.3769 19.534 10.7771 19.0393L11.2854 18.4109C11.5756 18.0523 12.0734 17.9386 12.4905 18.1359L13.221 18.4815C13.7963 18.7536 14.476 18.4262 14.622 17.8068L14.8073 17.0202C14.9131 16.5711 15.3124 16.2527 15.7737 16.2495L16.5819 16.2439C17.2182 16.2394 17.6886 15.6496 17.5513 15.0282L17.377 14.239C17.2775 13.7885 17.499 13.3284 17.9133 13.1254L18.639 12.7697C19.2104 12.4895 19.3783 11.754 18.985 11.2537L18.4855 10.6184C18.2004 10.2557 18.2004 9.745 18.4855 9.38231L18.985 8.74695C19.3783 8.24665 19.2104 7.51112 18.639 7.23101L17.9133 6.87528C17.499 6.67222 17.2775 6.21213 17.377 5.76165L17.5513 4.97249C17.6886 4.3511 17.2182 3.76125 16.5819 3.75681L15.7737 3.75117C15.3124 3.74795 14.9131 3.42956 14.8073 2.98051L14.622 2.19386C14.476 1.57445 13.7963 1.2471 13.221 1.51921L12.4905 1.86478C12.0734 2.06204 11.5756 1.94841 11.2854 1.58973L10.7771 0.961401ZM12.5231 7.71779L13.0827 8.27779C13.2391 8.43419 13.2391 8.68699 13.0827 8.84339L9.44271 12.4834C9.36471 12.5614 9.26231 12.6006 9.1599 12.6006C9.0575 12.6006 8.95551 12.5614 8.8771 12.4834L6.9171 10.5234C6.7607 10.3674 6.7607 10.1142 6.9171 9.95779L7.4771 9.39779C7.6335 9.24139 7.8867 9.24139 8.0427 9.39779L9.1599 10.515L11.9575 7.71779C12.0323 7.64259 12.1339 7.60059 12.2403 7.60059C12.3463 7.60059 12.4479 7.64259 12.5231 7.71779Z"
				})))),
				$ = s("./src/reddit/selectors/user.ts"),
				ee = s("./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less"),
				te = s.n(ee);

			function se(e) {
				return o.a.createElement(a.Fragment, null, o.a.createElement("div", {
					className: te.a.text
				}, o.a.createElement(D.c, null, "Achieved Decision Threshold")), o.a.createElement("div", {
					className: te.a.decisionIcon,
					title: e.votes
				}, o.a.createElement(X, {
					className: te.a.decisionThreshold
				})))
			}

			function ne(e) {
				return o.a.createElement(a.Fragment, null, o.a.createElement("div", {
					className: te.a.text
				}, Object(Y.a)(e.language, "polls.decisionThreshold", {
					amount: Object(O.b)(parseInt(Object(j.b)(e.threshold, e.tokenDisplayConversion)))
				})), o.a.createElement(re, {
					percent: e.percent
				}))
			}

			function re(e) {
				const t = Math.floor(e.percent / 100 * 360);
				return o.a.createElement("div", {
					className: te.a.pieContainer,
					title: "".concat(e.percent, "%")
				}, o.a.createElement("div", {
					className: te.a.pie
				}), o.a.createElement("div", {
					className: te.a.pieInvertedMask
				}), o.a.createElement("div", {
					className: Object(d.a)(te.a.pieMask, {
						[te.a.pieSwap]: e.percent >= 50
					}),
					style: {
						transform: e.percent < 50 ? "rotate(".concat(t, "deg)") : "rotate(".concat(t - 180, "deg)")
					}
				}))
			}
			const ae = Object(c.c)({
				language: $.S,
				poll: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.models[s]
				},
				pollResult: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.results.byVotingPower[s]
				},
				tokenDisplayConversion: v.n
			});
			var oe = Object(i.b)(ae)((function(e) {
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const t = Object(f.c)(e.poll, e.pollResult),
						s = new r.a(e.pollResult.options[t.id].votes),
						n = e.poll.decisionThreshold,
						a = s.isGreaterThanOrEqualTo(new r.a(n)),
						i = Object(C.a)(e.pollResult.options[t.id].votes, n);
					return o.a.createElement("div", {
						className: Object(d.a)(te.a.container, e.className)
					}, a ? o.a.createElement(se, {
						language: e.language,
						votes: s.toString()
					}) : o.a.createElement(ne, {
						language: e.language,
						threshold: n,
						percent: i,
						tokenDisplayConversion: e.tokenDisplayConversion
					}))
				})),
				ie = s("./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less"),
				ce = s.n(ie);

			function de(e) {
				return o.a.createElement("a", {
					className: Object(d.a)(e.className, ce.a.container, {
						[ce.a.selectable]: !!e.selectable,
						[ce.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			var le = s("./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less"),
				me = s.n(le);
			const ue = Object(c.c)({
				tokenName: v.o,
				tokenDisplayConversion: v.n,
				distribution: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.gov.distributions[s]
				},
				language: e => e.user.language,
				poll: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.models[s]
				},
				pollIsClosed: (e, t) => {
					let {
						pollId: s,
						resultsByVoters: n
					} = t;
					const r = e.polls.models[s];
					return !!(r && n && Object(f.e)(r, n))
				},
				wallet: v.g
			});
			var pe = Object(i.b)(ue)((function(e) {
					const {
						distribution: t,
						poll: s,
						resultsByVoters: r,
						resultsByVotingPower: a,
						tokenDisplayConversion: i,
						tokenName: c,
						wallet: l
					} = e, m = a ? a.totalVotes : "0", u = !new n.BigNumber(m).isZero() && l && t ? Object(C.a)(m, t.totalAvailable) : 0, p = r ? r.totalVotes : "0", b = Object(j.c)(m, i), h = Object(O.b)(parseInt(p));
					return o.a.createElement("div", {
						className: Object(d.a)(e.className, me.a.container)
					}, o.a.createElement("div", null, s.type !== f.a.GA && o.a.createElement(de, {
						isSelected: e.currentResultType === f.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: "".concat(b, " ").concat(c),
						tooltipText: Object(Y.a)(e.language, "polls.votingBreakdown", {
							tokenName: c,
							count: Object(j.c)(m, i),
							percent: u.toFixed(2)
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(f.b.ByVotingPower)
					}), o.a.createElement(de, {
						isSelected: e.currentResultType === f.b.ByVoters,
						selectable: e.pollIsClosed,
						text: Object(Y.c)(e.language, "polls.numVotes", parseInt(p), {
							count: h
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(f.b.ByVoters)
					})), Object(f.d)(s) && o.a.createElement(oe, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				be = s("./src/reddit/components/Governance/Proposal/index.m.less"),
				he = s.n(be);
			class ge extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayReward: !1,
						resultType: this.props.poll.type === f.a.GA ? f.b.ByVoters : f.b.ByVotingPower
					}, this.handleResultTypeChange = e => this.setState({
						resultType: e
					}), this.handleContainerClick = e => {
						this.props.poll.type === f.a.GA && e.stopPropagation()
					}
				}
				componentDidUpdate(e, t) {
					if (!!this.props.pollReward && !new n.BigNumber(this.props.pollReward).isZero()) {
						const s = xe(e, t.resultType),
							n = xe(this.props, this.state.resultType);
						if (s && n) {
							const t = !Object(f.e)(e.poll, s),
								r = Object(f.e)(this.props.poll, n);
							t && r && this.setState({
								displayReward: !0
							})
						}
					}
				}
				render() {
					return o.a.createElement("div", {
						className: Object(d.a)(this.props.className, he.a.container),
						onClick: this.handleContainerClick
					}, o.a.createElement(pe, {
						className: he.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: this.props.pollId,
						resultsByVoters: this.props.resultsByVoters,
						resultsByVotingPower: this.props.resultsByVotingPower,
						subredditId: this.props.subredditId,
						onChangeResultType: this.handleResultTypeChange
					}), o.a.createElement(J, {
						key: this.props.pollId,
						className: he.a.poll,
						displayType: this.state.resultType === f.b.ByVoters ? b.Count : b.Percent,
						pollId: this.props.pollId,
						resultType: this.state.resultType,
						subredditId: this.props.subredditId,
						votingIcon: Object(f.d)(this.props.poll) ? o.a.createElement(Q.a, {
							className: he.a.govIcon
						}) : void 0
					}), this.props.pollReward && this.state.displayReward && o.a.createElement(p, {
						amount: this.props.pollReward,
						className: he.a.votingReward,
						subredditId: this.props.subredditId
					}))
				}
			}

			function xe(e, t) {
				return t === f.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const ye = Object(c.c)({
				language: e => e.user.language,
				poll: (e, t) => e.polls.models[t.pollId],
				pollReward: (e, t) => e.polls.rewards[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId],
				resultsByVotingPower: (e, t) => e.polls.results.byVotingPower[t.pollId]
			});
			t.a = Object(i.b)(ye)(ge)
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/selectors/gov.ts");
			const d = Object(o.c)({
				tokenSymbol: c.p
			});
			t.a = Object(a.b)(d)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return r.a.createElement("img", {
					className: e.className,
					src: "".concat(i.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/VotingBanner/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx");
			const r = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceVotingBanner").then(s.bind(null, "./src/reddit/components/Governance/VotingBanner/index.tsx")).then(e => e.default)
			});
			t.a = r
		},
		"./src/reddit/components/Governance/VotingReward/index.m.less": function(e, t, s) {
			e.exports = {
				amount: "_2uGwXKrmP9OljxIhbSCOjc",
				container: "dVX1qcOidD13L5NRRKOPb",
				pill: "_2tKg0JJT2prOVVIOrtS2JP",
				pillAnim: "_3qV2ZaEJd_k1NSZDxMjK-g",
				token: "_3dLs5lIwl_kKHq589IyKz5",
				tokenRotation: "_1C5oqr8CA_wteJsqqSRq0B"
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(o.c)({
				featureEnabled: c.d.spWalletRegistrationBanner
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./src/lib/addQueryParams/index.ts");
			const r = "metamaskInstalled";

			function a() {
				window.location.replace(Object(n.a)(window.location.href, {
					[r]: "true"
				}))
			}

			function o(e) {
				return !!(e && e.queryParams && e.queryParams[r])
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistrationStellarBanner").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.tsx")).then(e => e.default)
			});
			const l = Object(o.c)({
				featureEnabled: c.d.spStellarWalletRegistration
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, s) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				u = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/components/HeaderImage/index.m.less"),
				h = s.n(b);
			const g = c.a.wrapped(m.a, "Planet", h.a),
				x = c.a.div("SubredditIcon", h.a),
				y = c.a.div("PositionedImage", h.a),
				f = c.a.div("HeaderContent", h.a),
				v = c.a.div("HeaderContainer", h.a),
				E = c.a.span("HeaderText", h.a),
				C = c.a.wrapped(a.a, "HeaderUrl", h.a),
				O = c.a.span("Container", h.a),
				j = Object(i.a)(e => {
					const t = Object(u.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(p.a)(e).banner.positionedImageAlignment,
						a = Object(p.a)(e).banner.positionedImage,
						i = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let c;
					switch (n) {
						case "right":
							c = {
								right: "-8px"
							};
							break;
						case "centered":
							c = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							c = {
								left: "-8px"
							}
					}
					const m = !!a && !!i && "left" === n,
						b = Object(u.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						j = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						S = "".concat(4 + j, "px");
					return r.a.createElement(O, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: "".concat(Object(p.a)(e).banner.height, "px")
						}
					}, r.a.createElement(C, {
						className: e.className,
						to: e.url
					}, r.a.createElement(v, {
						className: Object(o.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || d.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(f, {
						className: Object(o.a)({
							[h.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (s ? r.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: S,
							width: S
						}
					}) : r.a.createElement(g, {
						style: {
							padding: "".concat(Object(p.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: S,
							width: S
						}
					})), r.a.createElement(E, {
						style: {
							paddingTop: 32 === j ? "4px" : "14px"
						}
					}, t)), r.a.createElement(y, {
						className: Object(o.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!a,
							[h.a.hoverPositionedImage]: !!a && !!i
						}),
						style: Object.assign({}, c, {
							height: "".concat(Object(p.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = j
		},
		"./src/reddit/components/IdCard/CommunityOptions/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Qx5bBCG_O8wVZee9J-KyJ",
				content: "_2NbKFI9n3wPM76pgfAPEsN",
				stylesToggle: "_2btz68cXFBI3RWcfSNwbmJ",
				disabled: "QgBK4ECuqpeR2umRjYcP2",
				expandButton: "_4OtOUaGIjjp2cNJMUxme_",
				TertiaryButton: "_1ra1vBLrjtHjhYDZ_gOy8F",
				tertiaryButton: "_1ra1vBLrjtHjhYDZ_gOy8F",
				redditStyle: "_2UlgIO1LIFVpT30ItAtPfb"
			}
		},
		"./src/reddit/components/IdCard/DescriptionBlock/index.m.less": function(e, t, s) {
			e.exports = {
				descriptionContainer: "_1EPynDYoibfs7nDggdH7Gq",
				truncated: "_3-0c12FCnHoLz34dQVveax",
				description: "_1zPvgKHteTOub9dKkvrOl4",
				showMore: "_1dp4_svQVkkuV143AIEKsf",
				ellipsis: "_5VBcBVybCfosCzMJlXzC3",
				showFullDescriptionButton: "_3YNtuKT-Is6XUBvdluRTyI",
				transition: "_2ZTVnRPqdyKo1dA7Q7i4EL",
				noTransition: "k51Bu_pyEfHQF6AAhaKfS",
				editableDescriptionContainer: "_2qi_L6gKnhyJ0ZxPmwbDFK",
				activeEditableDescriptionContainer: "_3GG6tRGPPJiejLqt2AZfh4",
				defaultEditableDescriptionContainer: "IzSmZckfdQu5YP9qCsdWO",
				emptyDescription: "_1YvJWALkJ8iKZxUU53TeNO",
				editableDescriptionControlRow: "_3adDzm8E3q64yWtEcs5XU7",
				characterCountdown: "_3jyKpErOrdUDMh0RFq5V6f",
				save: "dqhlvajEe-qyxij0jNsi0",
				cancel: "_12nHw-MGuz_r1dQx5YPM2v",
				editableDescription: "_3zTJ9t4vNwm1NrIaZ35NS6",
				activeEditableDescription: "_2JIiUcAdp9rIhjEbIjcuQ-",
				loadingIcon: "_2I2LpaEhGCzQ9inJMwliNO",
				pencil: "_42Nh7O6pFcqnA6OZd3bOK",
				tooltip: "voBVX1iPkvafjXv9Ymq9e"
			}
		},
		"./src/reddit/components/IdCard/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/IdCard/placeholder.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const l = o.a.wrapped(e => {
					var {
						isLoading: t,
						gradientType: s
					} = e, n = d(e, ["isLoading", "gradientType"]);
					return r.a.createElement("div", n)
				}, "Shimmer", c.a),
				m = o.a.div("Container", c.a);
			t.a = e => {
				let {
					isLoading: t
				} = e;
				return r.a.createElement(m, {
					className: c.a.container
				}, r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.banner
				}), r.a.createElement("div", {
					className: c.a.title
				}, r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.icon
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.name
				})), r.a.createElement("div", {
					className: c.a.counts
				}, r.a.createElement("div", {
					className: c.a.side
				}, r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.count
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.text
				})), r.a.createElement("div", {
					className: c.a.side
				}, r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.count
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.text
				}))), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: Object(a.a)(c.a.desc, c.a.one)
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: Object(a.a)(c.a.desc, c.a.two)
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: Object(a.a)(c.a.desc, c.a.three)
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: Object(a.a)(c.a.desc, c.a.four)
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.subscribe
				}))
			}
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/app/strings/index.ts"),
				r = s("./src/config.ts"),
				a = s("./src/reddit/constants/listings.ts"),
				o = s("./src/reddit/constants/page.ts");
			const i = e => e && e.toLowerCase() === a.b.Popular,
				c = e => e && e.toLowerCase() === a.b.All,
				d = e => e && e === o.c,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: s,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, s, o, m, u, {
						language: p,
						listingName: b,
						isM2MEnabled: h,
						subreddit: g,
						idCardWidget: x,
						shouldRenderSuperbOwlIcon: y
					} = e;
					const f = x && x.subscribersText || Object(n.a)(p, "structuredStyles.widgets.id-card.subscribersText"),
						v = x && x.currentlyViewingText || Object(n.a)(p, "structuredStyles.widgets.id-card.currentlyViewingText");
					let E, C;
					const O = y ? "snoo-superbowl@2x.png" : "snoo-home@2x.png";
					if (d(b))
						if (t = "".concat(r.a.assetPath, "/img/id-cards/home-banner@2x.png"), o = l("url('".concat(r.a.assetPath, "/img/id-cards/").concat(O, "')")), u = a.c[a.b.Home], h) m = Object(n.a)(p, "listings.populatedHome.title"), s = Object(n.a)(p, "listings.populatedHome.longDescription");
						else {
							s = Object(n.a)(p, "listings.home.longDescription");
							const e = Object(n.a)(p, "listings.home.title");
							m = e.charAt(0).toUpperCase() + e.slice(1)
						}
					else c(b) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), s = Object(n.a)(p, "listings.all.longDescription"), o = l("url('".concat(r.a.assetPath, "/img/id-cards/").concat(O, "')")), m = "r/all", u = a.c[a.b.All]) : i(b) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), s = Object(n.a)(p, "listings.popular.longDescription"), o = l("url('".concat(r.a.assetPath, "/img/id-cards/").concat(O, "')")), m = "r/popular", u = a.c[a.b.Popular]) : b && (s = x && x.description, o = l(""), m = g.displayText, u = g.url, C = x && x.subscribersCount, E = x && x.currentlyViewingCount);
					return Object.assign({
						snooBackground: o,
						description: s,
						titleText: m,
						url: u,
						subscribersCount: C,
						subscribersText: f,
						currentlyViewingText: v,
						currentlyViewingCount: E
					}, t ? {
						bannerBackgroundImage: t
					} : {})
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, s) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				RequestButton: "_36GxpQyxUKhq8m_dGYqIBE",
				requestButton: "_36GxpQyxUKhq8m_dGYqIBE",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				CreateAccountButton: "_2wIWA7CTxkwjuDQ4-Msi_r",
				createAccountButton: "_2wIWA7CTxkwjuDQ4-Msi_r",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/humanizeDate/index.ts"),
				b = s("./src/lib/isFakeSubreddit/index.ts"),
				h = s("./src/lib/prettyPrintNumber/index.ts"),
				g = s("./src/lib/timeAgo/index.ts"),
				x = s("./src/reddit/actions/tooltip.ts"),
				y = s("./src/reddit/actions/modal.ts"),
				f = s("./src/reddit/actions/multireddit/index.ts"),
				v = s("./src/reddit/actions/subscription/index.ts"),
				E = s("./src/reddit/components/CategoryTagList/index.tsx"),
				C = s("./src/higherOrderComponents/makeAsync.tsx"),
				O = s("./src/lib/loadWithRetries/index.ts"),
				j = Object(C.a)({
					getComponent: () => Object(O.a)(() => Promise.all([s.e("AdminCommunityTopics~SubredditInlineEditing"), s.e("AdminCommunityTopics")]).then(s.bind(null, "./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				S = s("./src/reddit/components/CommunityType/index.tsx"),
				w = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx"),
				N = s("./src/lib/isSimpleClick/index.ts"),
				_ = s("./src/reddit/actions/login.ts"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				I = s("./src/reddit/constants/accountManager.ts"),
				k = s("./src/reddit/constants/listings.ts"),
				L = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/reddit/helpers/makeAccountManagerUrl/index.ts"),
				M = s("./src/reddit/helpers/trackers/monthsToMinutes.ts"),
				B = s("./src/reddit/i18n/components.tsx"),
				R = s("./src/reddit/selectors/meta.ts"),
				F = s("./src/reddit/selectors/user.ts");
			const D = Object(m.c)({
				isLoggedIn: F.J,
				origin: R.g
			});
			class A extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(N.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(Object(M.e)()), this.props.openRegisterModal())
					}
				}
				render() {
					const {
						origin: e
					} = this.props;
					return a.a.createElement(L.g, {
						href: Object(T.a)(I.a.Register, e),
						onClick: this.onClick
					}, a.a.createElement(B.c, null, "Create an account"))
				}
			}
			var W = Object(o.b)(D, e => ({
					openRegisterModal: () => {
						e(Object(y.k)({
							actionSource: y.a.IdCard,
							redirectUrl: k.c[k.b.Home]
						})), e(Object(_.f)())
					}
				}))(Object(P.b)(A)),
				H = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				U = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/helpers/getSubredditUrl/index.ts")),
				V = s("./src/reddit/i18n/utils.ts"),
				G = s("./src/reddit/selectors/telemetry.ts");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var q = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const K = Object(m.c)({
				isLoggedIn: F.J
			});
			var Z = Object(o.b)(K, e => ({
				openLoginModal: () => {
					e(Object(y.k)({
						actionSource: y.a.Post
					})), e(Object(_.f)())
				}
			}))(Object(P.b)(e => {
				var {
					isContributorRequestPending: t,
					isLoggedIn: s,
					listingName: n,
					openLoginModal: r,
					sendEvent: o,
					subreddit: i
				} = e, c = q(e, ["isContributorRequestPending", "isLoggedIn", "listingName", "openLoginModal", "sendEvent", "subreddit"]);
				const d = "".concat(Object(U.a)(i) || "/", "submit");
				return a.a.createElement(L.h, z({}, c, {
					onClick: e => {
						o(e => ({
							action: "click",
							noun: "create_post",
							source: "id_card",
							screen: Object(G.screen)(e),
							subreddit: Object(G.subreddit)(e),
							actionInfo: Object(G.actionInfo)(e)
						})), s || (r(), e.preventDefault())
					},
					to: d
				}), t ? Object(V.c)("Draft post") : Object(V.c)("Create post"))
			}));
			const J = Object(C.a)({
				getComponent: () => Object(O.a)(() => s.e("CreatePollButton").then(s.bind(null, "./src/reddit/components/IdCard/CreatePollButton/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var Q = s("./node_modules/react-autosize-textarea/lib/index.js"),
				Y = s.n(Q),
				X = s("./src/lib/classNames/index.ts"),
				$ = s("./src/reddit/actions/subredditSettings.ts"),
				ee = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				te = s("./src/reddit/components/CommunitySettings/helpers.ts"),
				se = s("./src/reddit/components/ContentTooltip/index.tsx"),
				ne = s("./src/lib/fastdom/index.ts"),
				re = s("./src/lib/lessComponent.tsx"),
				ae = s("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				oe = s.n(ae);
			const ie = re.a.div("DescriptionContainer", oe.a);
			class ce extends a.a.Component {
				constructor(e) {
					super(e), this.containerRef = null, this.textRef = null, this.showFullDescription = e => {
						e.preventDefault(), e.stopPropagation(), this.setState({
							shouldTruncateDescription: !1
						})
					}, this.setContainerRef = e => this.containerRef = e, this.setTextRef = e => this.textRef = e, this.state = {
						shouldDisplayShowMore: !1,
						shouldTruncateDescription: e.shouldTruncateDescription
					}
				}
				componentDidMount() {
					this.state.shouldTruncateDescription && ne.a.read(() => {
						this.containerRef && this.textRef && this.textRef.offsetHeight > this.containerRef.offsetHeight && this.setState({
							shouldDisplayShowMore: !0
						})
					})
				}
				render() {
					const {
						children: e,
						description: t,
						subreddit: s
					} = this.props, {
						shouldDisplayShowMore: n,
						shouldTruncateDescription: r
					} = this.state, o = a.a.createElement(B.c, null, s && "Welcome to r/".concat(s.name));
					return a.a.createElement(ie, {
						className: Object(X.a)(oe.a.descriptionContainer, r && oe.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef
					}, a.a.createElement("div", {
						className: oe.a.description,
						ref: this.setTextRef
					}, t || o, e), r && n && a.a.createElement("div", {
						className: oe.a.showMore
					}, a.a.createElement(B.c, null, "..."), a.a.createElement(L.n, {
						className: oe.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, a.a.createElement(B.c, null, "MORE"))))
				}
			}
			var de = ce,
				le = s("./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx"),
				me = s("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				ue = s("./src/reddit/constants/tooltips.ts"),
				pe = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				be = s("./src/reddit/helpers/localStorage/index.ts"),
				he = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				ge = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				xe = s("./src/reddit/selectors/activeModalId.ts"),
				ye = s("./src/reddit/selectors/subreddit.ts");
			const fe = 6,
				ve = Object(m.c)({
					apiPending: ye.T,
					unsavedChangesModalIsOpen: Object(xe.b)(me.a)
				});
			class Ee extends a.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.containerRef = a.a.createRef(), this.isSaving = !1, this.setTextAreaRef = e => {
						this.textAreaRef = e
					}, this.handleOnFocus = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.state.editing) {
							const t = e.target !== this.textAreaRef ? () => this.focusTextArea() : void 0;
							this.setState({
								editing: !0
							}, t), this.props.sendEvent(he.a)
						}
					}, this.focusTextArea = () => {
						this.textAreaRef && this.textAreaRef.focus && this.textAreaRef.focus({
							preventScroll: !0
						})
					}, this.handleOnBlur = e => {
						e.relatedTarget === this.textAreaRef || e.target.contains(e.relatedTarget) || e.relatedTarget === this.containerRef.current || (e.preventDefault(), e.stopPropagation(), this.stopEditing(!0, !1))
					}, this.onCancel = () => {
						this.setState({
							description: this.props.description
						}, () => this.stopEditing(!1, !0))
					}, this.onSave = () => {
						this.props.updateSubredditSettings({
							publicDescription: this.state.description
						}), this.isSaving = !0, this.stopEditing(!1, !0);
						const e = this.state.description,
							t = this.props.description;
						this.props.sendEvent(Object(he.d)(e, t))
					}, this.state = {
						description: e.description || "",
						editing: !1,
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					this.setState({
						tooltipDismissed: Object(be.l)(this.props.subreddit.id)
					}, () => {
						this.tooltipEnabled() && this.props.onShowTooltip()
					})
				}
				tooltipEnabled() {
					return !this.state.tooltipDismissed && !this.props.isCommentsPage
				}
				hasFocus() {
					return !!document.activeElement && (document.activeElement === this.containerRef.current || this.containerRef.current && this.containerRef.current.contains(document.activeElement))
				}
				componentWillReceiveProps(e) {
					!e.apiPending && this.props.apiPending && (this.isSaving = !1), e.description === this.props.description || this.hasPendingChanges() || this.setState({
						description: e.description
					})
				}
				stopEditing(e, t) {
					e && this.hasPendingChanges() && !this.isSaving && this.props.openUnsavedChangesModal(), this.setState({
						editing: !1
					}), t && this.containerRef.current && this.containerRef.current.blur()
				}
				renderInactiveDescription() {
					const e = this.props.apiPending ? a.a.createElement(pe.a, {
						className: oe.a.loadingIcon,
						sizePx: fe
					}) : void 0;
					return this.state.description ? a.a.createElement(a.a.Fragment, null, a.a.createElement(de, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, a.a.createElement(ge.a, {
						className: oe.a.pencil
					}), e)) : a.a.createElement("div", {
						className: oe.a.emptyDescription
					}, a.a.createElement(B.c, null, "Add description"), e)
				}
				renderTextArea() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(Y.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: Object(V.c)("Tell us about your community"),
						className: Object(X.a)(oe.a.editableDescription, oe.a.activeEditableDescription),
						onChange: e => this.setState({
							description: e.currentTarget.value
						}),
						maxLength: te.c,
						value: this.state.description
					}), a.a.createElement("div", {
						className: oe.a.editableDescriptionControlRow
					}, a.a.createElement(ee.a, {
						className: oe.a.characterCountdown,
						maxChars: te.c,
						text: this.state.description
					}), a.a.createElement("span", {
						className: oe.a.cancel,
						onClick: this.onCancel
					}, Object(V.c)("Cancel")), a.a.createElement("span", {
						className: oe.a.save,
						onClick: this.onSave
					}, Object(V.c)("Save"))))
				}
				hasPendingChanges() {
					return this.state.description !== this.props.description
				}
				getContainerClassNames() {
					if (!this.state.editing && this.state.description) return [oe.a.defaultEditableDescriptionContainer];
					const e = [oe.a.editableDescriptionContainer];
					return this.state.editing && e.push(oe.a.activeEditableDescriptionContainer), e
				}
				renderTooltip() {
					return a.a.createElement(se.a, {
						className: oe.a.tooltip,
						tooltipId: ue.a,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, a.a.createElement(le.a, {
						includeIcon: !1,
						subredditId: this.props.subreddit.id
					}))
				}
				render() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						id: this.tooltipEnabled() ? ue.a : void 0,
						ref: this.containerRef,
						className: Object(X.a)(...this.getContainerClassNames()),
						tabIndex: 0,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && a.a.createElement(me.b, {
						withOverlay: !0,
						ignoreDefaultFocus: !0,
						onCancel: this.focusTextArea,
						onDiscard: this.onCancel,
						onSave: this.onSave
					})), this.tooltipEnabled() && this.renderTooltip())
				}
			}
			var Ce = Object(o.b)(ve, (e, t) => {
					let {
						subreddit: s
					} = t;
					return {
						updateSubredditSettings: t => e(Object($.h)(s.id, t, !0)),
						openUnsavedChangesModal: () => {
							e(Object(x.h)()), e(Object(y.h)(me.a))
						},
						onShowTooltip: () => {
							e(Object(x.f)({
								tooltipId: ue.a
							}))
						}
					}
				})(Object(P.b)(Ee)),
				Oe = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				je = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				Se = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				we = s.n(Se);
			var Ne = Object(C.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => a.a.createElement("div", {
						className: we.a.container
					}, a.a.createElement(je.a, null)),
					getComponent: () => Object(O.a)(() => Promise.all([s.e("AdminCommunityTopics~SubredditInlineEditing"), s.e("SubredditInlineEditing")]).then(s.bind(null, "./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx"))).then(e => e.default)
				}),
				_e = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Pe = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Ie = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				ke = s("./src/reddit/components/SubscribeButton/index.tsx"),
				Le = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Te = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Me = s("./src/reddit/constants/modals.ts"),
				Be = s("./src/reddit/constants/page.ts"),
				Re = s("./src/reddit/constants/posts.ts"),
				Fe = s("./src/reddit/controls/Dropdown/Row.tsx"),
				De = s("./src/reddit/controls/ImageInput/index.tsx"),
				Ae = s("./src/reddit/featureFlags/index.ts"),
				We = s("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				He = s("./src/reddit/helpers/getFakeUserIcons.ts"),
				Ue = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				Ve = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Ge = s("./src/reddit/helpers/trackers/modHub.ts"),
				ze = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				qe = s("./src/reddit/icons/fonts/helpers.tsx"),
				Ke = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				Ze = s.n(Ke);
			var Je = re.a.wrapped(e => a.a.createElement("i", {
					className: "".concat(Object(qe.b)("modSettings"), " ").concat(e.className)
				}), "ModSettings", Ze.a),
				Qe = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				Ye = s("./src/reddit/icons/svgs/Help/index.tsx"),
				Xe = s("./src/reddit/models/ApiRequestState/index.ts"),
				$e = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				et = s("./src/reddit/selectors/category.ts"),
				tt = s("./src/reddit/selectors/comments.ts"),
				st = s("./src/reddit/selectors/experiments/categories.ts"),
				nt = s("./src/reddit/constants/experiments.ts"),
				rt = s("./src/reddit/helpers/chooseVariant/index.ts");
			var at = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				ot = s("./src/reddit/selectors/listings.ts"),
				it = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ct = s("./src/reddit/selectors/monthsToMinutes.ts"),
				dt = s("./src/reddit/selectors/structuredStyles.ts"),
				lt = s("./src/reddit/selectors/subscriptions.ts"),
				mt = s("./src/reddit/selectors/widgets.ts"),
				ut = s("./src/reddit/actions/preferences.ts"),
				pt = s("./src/app/strings/index.ts"),
				bt = s("./src/reddit/actions/authorFlair.ts"),
				ht = s("./src/reddit/actions/badge.ts"),
				gt = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				xt = s("./src/reddit/components/Flair/index.tsx"),
				yt = s("./src/reddit/featureFlags/component.tsx"),
				ft = s("./src/reddit/models/User/index.ts"),
				vt = s("./src/reddit/selectors/userFlair.ts"),
				Et = s("./src/reddit/components/SidebarFlairSettings/index.m.less"),
				Ct = s.n(Et);
			const Ot = re.a.div("FlairSettingsContainer", Ct.a),
				jt = re.a.div("FlairPreview", Ct.a),
				St = re.a.wrapped(e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 14 14",
					xmlns: "http://www.w3.org/2000/svg",
					version: "1.1"
				}, a.a.createElement("title", {
					id: "".concat(e.title, "-title")
				}, e.title), a.a.createElement("g", null, a.a.createElement("path", {
					fill: "inherit",
					d: "M8.1168,3.0832 L10.9168,5.8832 C11.0728,6.0392 11.0728,6.2928 10.9168,6.4488 L4.0824,13.2832 C4.0072,13.3584 3.9056,13.4 3.8,13.4 L1,13.4 C0.7784,13.4 0.6,13.2216 0.6,13 L0.6,10.2 C0.6,10.0944 0.6416,9.9928 0.7168,9.9176 L7.5512,3.0832 C7.7072,2.9272 7.9608,2.9272 8.1168,3.0832 Z M13.5168,2.152 C13.9848,2.62 13.9848,3.3808 13.5168,3.8488 L12.048,5.3176 C11.9696,5.396 11.8672,5.4352 11.7656,5.4352 C11.6632,5.4352 11.5608,5.396 11.4824,5.3176 L8.6824,2.5176 C8.5264,2.3616 8.5264,2.108 8.6824,1.952 L10.1512,0.4832 C10.6192,0.0152 11.38,0.0152 11.848,0.4832 L13.5168,2.152 Z"
				}))), "EditPencil", Ct.a),
				wt = re.a.div("PreviewTitle", Ct.a),
				Nt = re.a.wrapped(xt.b, "FlairComponent", Ct.a),
				_t = re.a.wrapped(L.n, "TertiaryButton", Ct.a),
				Pt = re.a.wrapped(_t, "IconButton", Ct.a),
				It = re.a.span("Username", Ct.a),
				kt = Object(yt.a)("spBadges", gt.a),
				Lt = Object(m.c)({
					badgesEnabled: Ae.d.spBadges,
					currentUser: F.i,
					language: F.S,
					userFlairData: vt.c,
					userHasBadge: (e, t) => {
						const s = e.user.account;
						if (s) {
							return !!((e.users.appliedBadges[s.id] || {})[t.subredditId] || []).length
						}
						return !1
					}
				}),
				Tt = Object(o.b)(Lt, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						onToggleModal: t => e(Object(bt.b)({
							username: t,
							subredditId: s
						})),
						onToggleBadgeModal: () => e(Object(ht.j)())
					}
				}),
				Mt = e => a.a.createElement(Pt, {
					onClick: e.onClick
				}, a.a.createElement(St, null)),
				Bt = e => a.a.createElement(_t, {
					onClick: e.onClick
				}, e.userFlairData.displaySettings.isEnabled ? e.userFlairData.applied || e.userHasBadge ? Object(pt.a)(e.language, "flair.editUserFlairAndBadge") : Object(pt.a)(e.language, "flair.addUserFlairAndBadge") : e.userHasBadge ? Object(pt.a)(e.language, "flair.editUserBadge") : Object(pt.a)(e.language, "flair.addUserBadge"));
			class Rt extends a.a.Component {
				constructor() {
					super(...arguments), this.onFlairLinkClick = () => {
						const e = this.props.currentUser ? Object(ft.f)(this.props.currentUser) : null;
						this.props.onToggleModal(e), this.props.sendEvent(Object(Ve.a)("user_flair_picker"))
					}
				}
				render() {
					const {
						badgesEnabled: e,
						currentUser: t,
						language: s,
						onToggleBadgeModal: n,
						subredditId: r,
						userFlairData: o,
						userHasBadge: i
					} = this.props;
					return t && o ? a.a.createElement(Ot, null, a.a.createElement(wt, null, a.a.createElement(B.c, null, "user flair preview"), a.a.createElement(Mt, {
						onClick: this.onFlairLinkClick
					})), a.a.createElement(jt, null, i && a.a.createElement(kt, {
						className: Ct.a.badge,
						subredditId: r,
						uniqueIdentifier: r
					}), a.a.createElement(It, null, "u/".concat(t.displayText)), o.applied && o.displaySettings.isUserEnabled && a.a.createElement(Nt, {
						flair: o.applied,
						forceSmallEmojis: !0
					})), e ? a.a.createElement(Bt, {
						userFlairData: o,
						userHasBadge: i,
						language: s,
						onClick: n
					}) : null) : null
				}
			}
			var Ft = Tt(Object(P.b)(Rt)),
				Dt = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				At = s("./src/reddit/helpers/trackers/idCard.ts"),
				Wt = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ht = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				Ut = s("./src/reddit/icons/svgs/Show/index.tsx"),
				Vt = e => a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("path", {
					d: "M4.59 8l-2.3 2.29A1 1 0 0 0 3.7 11.7L6 9.41zM6 11a4 4 0 0 0 5.34 3.75l-5.1-5.1A4 4 0 0 0 6 11zM18.71 17.29l-5-5A3.87 3.87 0 0 0 14 11a4 4 0 0 0-.68-2.22c.07.06.15.11.21.17l2.76 2.76a1 1 0 0 0 1.41-1.41l-2.75-2.76A7 7 0 0 0 7.42 6L2.71 1.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.41-1.41z"
				})),
				Gt = s("./src/reddit/components/IdCard/CommunityOptions/index.m.less"),
				zt = s.n(Gt);
			const qt = re.a.wrapped(L.n, "TertiaryButton", zt.a),
				Kt = Object(m.c)({
					shouldShowFlairPicker: vt.b,
					stylesDisabledForSubreddit: F.eb,
					stylesDisabledGlobally: F.fb
				});
			class Zt extends a.a.Component {
				constructor(e) {
					super(e), this.onContainerClick = e => {
						e.stopPropagation()
					}, this.onExpandButtonClick = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.onToggleStylesSwitch = () => {
						const e = !!this.props.stylesDisabledForSubreddit;
						this.props.sendEvent(Object(At.c)(e)), this.props.updateSubredditPrefs(this.props.subredditId, {
							stylesEnabled: e
						})
					}, this.state = {
						isOpen: !1
					}
				}
				render() {
					const {
						isOverlay: e,
						isSubmissionPage: t,
						shouldShowFlairPicker: s,
						stylesDisabledForSubreddit: n,
						stylesDisabledGlobally: r,
						subredditId: o
					} = this.props, {
						isOpen: i
					} = this.state, c = i ? a.a.createElement("div", {
						className: zt.a.content
					}, a.a.createElement("div", {
						className: Object(X.a)(zt.a.stylesToggle, {
							[zt.a.disabled]: r
						}),
						title: r ? Object(V.c)("This is unavailable because themes have been disabled globally in your user settings") : void 0
					}, a.a.createElement("label", {
						className: zt.a.stylesToggleLabel
					}, n ? a.a.createElement(Vt, null) : a.a.createElement(Ut.a, null), a.a.createElement(B.c, null, "Community theme")), a.a.createElement(Dt.a, {
						disabled: r,
						on: !n,
						onToggle: this.onToggleStylesSwitch
					})), s && !e && a.a.createElement(Ft, {
						subredditId: o
					})) : null;
					return a.a.createElement("div", {
						className: zt.a.container,
						onClick: this.onContainerClick
					}, a.a.createElement(qt, {
						className: Object(X.a)(zt.a.expandButton, {
							[zt.a.redditStyle]: t
						}),
						onClick: this.onExpandButtonClick
					}, a.a.createElement(B.c, null, "Community options"), i ? a.a.createElement(Ht.a, null) : a.a.createElement(Wt.a, null)), c)
				}
			}
			var Jt = Object(o.b)(Kt, e => ({
					updateSubredditPrefs: (t, s) => {
						e(Object(ut.H)(t, s))
					}
				}))(Zt),
				Qt = s("./src/reddit/components/IdCard/helpers.ts"),
				Yt = s("./src/reddit/components/IdCard/Placeholder.tsx"),
				Xt = s("./src/reddit/components/IdCard/index.m.less"),
				$t = s.n(Xt);

			function es() {
				return (es = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "f", (function() {
				return ss
			})), s.d(t, "a", (function() {
				return rs
			})), s.d(t, "b", (function() {
				return Es
			})), s.d(t, "c", (function() {
				return Os
			})), s.d(t, "g", (function() {
				return Rs
			})), s.d(t, "d", (function() {
				return Fs
			}));
			const ts = "IDCARD_OVERFLOW_DROPDOWN_ID",
				ss = e => !Object(b.a)(e) || Object(Qt.c)(e) || Object(Qt.d)(e) || Object(Qt.e)(e),
				ns = re.a.div("Banner", $t.a),
				rs = e => {
					const {
						bannerBackgroundImage: t
					} = e;
					return a.a.createElement(ns, {
						style: t && t.length ? {
							backgroundImage: "url(".concat(t, ")")
						} : void 0
					})
				},
				as = re.a.div("Title", $t.a),
				os = re.a.wrapped(as, "TitleShifted", $t.a),
				is = re.a.wrapped(e => {
					let {
						className: t,
						children: s,
						shouldRenderSuperbOwlIcon: n,
						snooBackground: r
					} = e;
					return a.a.createElement("div", {
						className: t,
						title: n ? "r/SuperbOwl" : "",
						style: {
							background: r.image,
							backgroundSize: "".concat(r.width, "px ").concat(r.height, "px"),
							height: r.height,
							width: r.width
						}
					}, s)
				}, "AdorableSnoo", $t.a),
				cs = re.a.wrapped(i.a, "TitleLink", $t.a),
				ds = re.a.span("TitleText", $t.a),
				ls = re.a.div("TitleTextShiftedContainer", $t.a),
				ms = re.a.div("UserCounts", $t.a),
				us = re.a.wrapped(Te.a, "ThemedWidget", $t.a),
				ps = re.a.div("SubscriberCount", $t.a),
				bs = re.a.div("Online", $t.a),
				hs = re.a.div("CakeDayContainer", $t.a),
				gs = re.a.div("CakeDay", $t.a),
				xs = re.a.p("Count", $t.a),
				ys = re.a.span("CountMetaText", $t.a),
				fs = re.a.p("UserType", $t.a),
				vs = re.a.wrapped(Le.a, "WidgetHeader", $t.a),
				Es = re.a.div("Description", $t.a),
				Cs = re.a.div("Buttons", $t.a),
				Os = re.a.wrapped(L.f, "RequestButton", $t.a),
				js = re.a.wrapped(ke.a, "SubscribeButton", $t.a),
				Ss = re.a.wrapped(W, "CreateAccountButton", $t.a),
				ws = re.a.wrapped(Z, "CreatePostButton", $t.a),
				Ns = re.a.wrapped(H.a, "CreateCommunityButton", $t.a),
				_s = re.a.wrapped(L.k, "VisitCommunityButton", $t.a),
				Ps = re.a.wrapped(Je, "ModSettings", $t.a),
				Is = re.a.wrapped(i.a, "ModToolsLink", $t.a),
				ks = re.a.div("CategoryContainer", $t.a),
				Ls = re.a.hr("HorizontalLine", $t.a),
				Ts = re.a.div("CommunityTypeContainer", $t.a),
				Ms = Object(o.b)(() => Object(m.c)({
					postCategories: (e, t) => Object(et.s)(e, t.postId),
					commentsApiError: (e, t) => {
						let {
							commentsPageKey: s
						} = t;
						return s ? Object(tt.c)(e, {
							commentsPageKey: s
						}) : null
					},
					commentsApiPending: (e, t) => {
						let {
							commentsPageKey: s
						} = t;
						return !!s && Object(tt.d)(e, {
							commentsPageKey: s
						})
					},
					favoriteSubredditsIds: lt.a,
					frontpageIsHome: e => Object(ct.g)(e),
					idCardWidget: (e, t) => Object(mt.d)(e, {
						subredditName: t.listingName
					}),
					isContributorRequestPending: e => Object(ye.h)(e, $e.e.Post),
					isLoggedIn: F.J,
					isM2MEnabled: ct.w,
					language: F.S,
					listingApiError: (e, t) => {
						let {
							listingKey: s
						} = t;
						return s ? Object(ot.c)(e, {
							listingKey: s
						}) : null
					},
					listingApiPending: (e, t) => {
						let {
							listingKey: s
						} = t;
						return !!s && Object(ot.d)(e, {
							listingKey: s
						})
					},
					m2mHomeRedirectVariant: at.f,
					moderatorPermissions: (e, t) => {
						const s = Object(ye.G)(e, t.listingName);
						if (s) return Object(it.j)(e, {
							subredditId: s
						})
					},
					isInCategoriesExperiment: st.a,
					showContributorRequestFlow: e => Object(ye.t)(e, $e.e.Post),
					showCreatePollButton: e => (e => Object(rt.c)(e, {
						experimentEligibilitySelector: rt.a,
						experimentName: nt.h
					}) === nt.m.Treatment)(e) && !Object(be.f)(),
					shouldRenderSuperbOwlIcon: Ae.d.superbOwl,
					subreddit: (e, t) => Object(ye.B)(e, {
						subredditName: t.listingName
					}),
					subredditAboutInfo: (e, t) => Object(ye.y)(e, {
						subredditName: t.listingName
					}),
					subredditCoins: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(ye.D)(e, {
							subredditName: s
						})
					},
					subredditIcon: (e, t) => Object(dt.q)(e, {
						subredditName: t.listingName
					}),
					adminCommunityTopicsEnabled: Ae.d.adminCommunityTopics,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(ye.B)(e, {
							subredditName: s
						});
						return !!n && Object(l.a)(e, {
							subredditId: n.id
						})
					}
				}), (e, t) => ({
					addToMultiClicked: () => {
						e(Object(f.g)(!0, !0)), e(Object(y.h)(Me.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					dispatchPush: t => e(Object(c.b)(t)),
					toggleFavorite: t => e(Object(v.c)({
						id: t,
						type: Re.a.SUBREDDIT
					})),
					toggleTooltip: t => e(Object(x.g)({
						tooltipId: t
					})),
					onCommunityIconSelected: (s, n) => {
						e(Object(d.b)(t.listingName, s, n))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					isEligibleForCommunityAwards: Object(We.a)(e.subreddit),
					isFavoriteSubreddit: !!e.subreddit && e.favoriteSubredditsIds.indexOf(e.subreddit.id) > -1,
					onContainerClick: () => s.isOverlay && t.dispatchPush(e.subreddit.url),
					onToggleFavoriteClick: () => t.toggleFavorite(e.subreddit.id)
				}));
			class Bs extends a.a.Component {
				constructor() {
					super(...arguments), this.iconFilePickerRef = null, this.setIconFilePickerRef = e => this.iconFilePickerRef = e, this.onClickModTools = () => this.props.sendEvent(Object(Ge.a)()), this.handleVisitCommunityClick = () => this.props.sendEvent(Object(Ve.a)("visit")), this.getListingNameToUse = () => {
						const {
							frontpageIsHome: e,
							isLoggedIn: t,
							listingName: s
						} = this.props;
						return t || s !== Be.c || e ? s : k.b.Popular
					}, this.onIconImageSelected = e => {
						this.props.onCommunityIconSelected(e, Object(Xe.b)())
					}, this.openIconFilePicker = () => {
						this.iconFilePickerRef && this.iconFilePickerRef.click(), this.props.sendEvent(he.b)
					}, this.renderCreatePostButtons = () => {
						const {
							isContributorRequestPending: e,
							listingName: t,
							showCreatePollButton: s,
							showContributorRequestFlow: n,
							subreddit: r
						} = this.props, o = Object(b.a)(this.getListingNameToUse());
						return !o && n ? a.a.createElement(w.a, {
							eventSource: $e.b.IdCard
						}) : a.a.createElement(a.a.Fragment, null, a.a.createElement(ws, {
							isContributorRequestPending: e,
							listingName: t,
							subreddit: r
						}), !e && !o && s && a.a.createElement(J, {
							listingName: t
						}))
					}, this.renderButtons = () => {
						const {
							isCommentsPage: e,
							isLoggedIn: t,
							isM2MEnabled: s,
							isMinimal: n,
							isOverlay: r,
							isSubmissionPage: o,
							listingName: i,
							subreddit: c,
							subredditAboutInfo: d
						} = this.props, l = this.getListingNameToUse(), m = Object(b.a)(l), u = !t && s && Object(Qt.d)(i), p = n && c && !r, h = e && !m && !p, g = t && !p && !u && !o && !r && !(d && d.userIsBanned);
						return a.a.createElement(Cs, null, h && a.a.createElement(js, {
							getEventFactory: e => Object(Ve.a)(e ? "unsubscribe" : "subscribe"),
							id: "subscribe-button-".concat(c.id),
							identifier: {
								name: c.name,
								type: "subreddit"
							},
							onClick: e => e.stopPropagation()
						}), u && a.a.createElement(Ss, null), g && this.renderCreatePostButtons(), t && !o && !r && !c && a.a.createElement(Ns, {
							eventSource: "id_card"
						}), p && a.a.createElement(_s, {
							onClick: this.handleVisitCommunityClick,
							to: c.url
						}, a.a.createElement(B.c, null, "Visit Community")))
					}
				}
				render() {
					const {
						addToMultiClicked: e,
						className: t,
						commentsApiError: s,
						commentsApiPending: r,
						idCardWidget: o,
						isCommentsPage: i,
						isEligibleForCommunityAwards: c,
						isInCategoriesExperiment: d,
						isLoggedIn: l,
						isM2MEnabled: m,
						isMinimal: u,
						isOverlay: p,
						isSubmissionPage: h,
						language: g,
						listingApiError: x,
						listingApiPending: y,
						m2mHomeRedirectVariant: f,
						moderatorPermissions: v,
						onContainerClick: C,
						postCategories: O,
						postId: w,
						shouldRenderSuperbOwlIcon: N,
						subreddit: _,
						subredditAboutInfo: P,
						subredditCoins: I,
						subredditIcon: k,
						toggleTooltip: L,
						subredditInlineEditingEnabled: T
					} = this.props, M = this.getListingNameToUse(), R = Object(b.a)(M);
					if (!R && !o) return a.a.createElement(Yt.a, {
						isLoading: r && !s || y && !x
					});
					const {
						bannerBackgroundImage: F,
						currentlyViewingCount: D,
						currentlyViewingText: A,
						description: W,
						snooBackground: H,
						subscribersCount: U,
						subscribersText: G,
						titleText: z,
						url: q
					} = Object(Qt.a)({
						language: g,
						listingName: M,
						isM2MEnabled: m,
						subreddit: _,
						idCardWidget: o,
						shouldRenderSuperbOwlIcon: N
					}), K = R || p || h, Z = !R && _.id ? _.id : "", J = P && P.created, Q = n.fbt._("Cake Day", null, {
						hk: "gZ29b"
					}), Y = "IdCard--Subscribers--".concat(p, "--").concat(Z), X = "IdCard--CurrentlyViewing--".concat(p, "--").concat(Z), $ = "IdCard--CakeDay--".concat(p, "--").concat(Z), ee = "IdCard--CoinCoint--".concat(p, "--").concat(Z), te = u && !p, se = !!p && Object(at.e)(f), ne = !R && !p && T && !h, re = ne ? a.a.createElement(Ce, {
						description: W,
						shouldTruncateDescription: se,
						isCommentsPage: !!i,
						subreddit: _
					}) : a.a.createElement(de, {
						description: W,
						shouldTruncateDescription: se,
						subreddit: _
					});
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(us, {
						className: t,
						onClick: p ? C : void 0,
						headerButton: a.a.createElement("div", {
							className: $t.a.headerButtonsContainer
						}, !K && _ && v && a.a.createElement(Is, {
							to: v.posts ? "".concat(_.url, "about/modqueue") : "".concat(_.url, "about/"),
							onClick: this.onClickModTools
						}, a.a.createElement(Ps, null), a.a.createElement(B.c, null, "Mod tools")), l && _ && a.a.createElement(_e.b, {
							className: $t.a.overflowButton,
							dropdownId: ts,
							targetPosition: ["right", "bottom"],
							tooltipPosition: ["right", "top"]
						}, !_.isQuarantined && a.a.createElement(Fe.b, {
							className: $t.a.dropdownRow,
							displayText: Object(V.c)("Add to Custom Feed"),
							onClick: e
						}), a.a.createElement(Fe.b, {
							className: $t.a.dropdownRow,
							displayText: this.props.isFavoriteSubreddit ? Object(V.c)("Remove from Favorites") : Object(V.c)("Add to Favorites"),
							onClick: this.props.onToggleFavoriteClick
						}))),
						redditStyle: R || h,
						title: K ? void 0 : n.fbt._("About Community", null, {
							hk: "31Lg8f"
						}),
						titleClassName: R ? void 0 : $t.a.subredditTitle
					}, K && a.a.createElement(rs, {
						bannerBackgroundImage: F
					}), R || h || i ? R ? Rs({
						titleText: z,
						snooBackground: H,
						shouldRenderSuperbOwlIcon: N
					}) : a.a.createElement(Fs, {
						isTargetBlank: h,
						linkUrl: R ? void 0 : q,
						subredditIcon: k,
						canEditIcon: ne,
						subreddit: _,
						titleText: z,
						onOpenFilePicker: this.openIconFilePicker
					}) : null, re, !R && !te && As(g, U, G, Y, D, A, X, J, Q, $, L), !R && a.a.createElement(Ts, null, a.a.createElement(S.a, {
						className: $t.a.communityType,
						iconClassName: $t.a.communityTypeIcon,
						subreddit: _,
						textClassName: $t.a.communityTypeText
					})), c && v && void 0 !== I && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ls, null), a.a.createElement("div", {
						className: $t.a.communityCoinCount
					}, a.a.createElement(ze.a, {
						className: $t.a.coinIcon
					}), a.a.createElement(B.c, null, a.a.createElement(B.b, {
						name: "number-community-coins"
					}, I.toLocaleString()), " Coins"), a.a.createElement("span", {
						id: ee,
						onMouseLeave: () => L(ee),
						onMouseEnter: () => L(ee)
					}, a.a.createElement(Ye.a, {
						className: $t.a.helpIcon
					})), a.a.createElement(Oe.c, {
						tooltipId: ee
					}, a.a.createElement("p", {
						className: $t.a.coinsTooltipContent
					}, a.a.createElement(B.c, null, "The community gets Coins from Awards given by members"))))), ne && a.a.createElement(Ne, {
						context: Ue.a.idCard,
						subredditId: Z
					}), !R && te && !se && Ds(_, U, D), !se && this.renderButtons(), d && O && w && (i || p) && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ls, null), a.a.createElement(ks, null, a.a.createElement(vs, null, a.a.createElement(B.c, null, "Discover more in:")), a.a.createElement(E.a, {
						postId: w,
						inLightboxHeader: !0,
						postCategories: O
					}))), !R && l && a.a.createElement(a.a.Fragment, null, a.a.createElement(Jt, {
						isOverlay: p,
						isSubmissionPage: h,
						sendEvent: this.props.sendEvent,
						subredditId: _.id
					})), ne && a.a.createElement(De.a, {
						key: "icon-file-picker",
						className: $t.a.iconFilePicker,
						inputRef: this.setIconFilePickerRef,
						multiple: !1,
						onChange: this.onIconImageSelected
					}), !R && l && this.props.adminCommunityTopicsEnabled && a.a.createElement(j, {
						key: "admin-community-topics",
						subredditId: Z
					})))
				}
			}
			const Rs = e => {
					let {
						titleText: t,
						snooBackground: s,
						shouldRenderSuperbOwlIcon: n
					} = e;
					return a.a.createElement(os, null, a.a.createElement(is, {
						snooBackground: s,
						shouldRenderSuperbOwlIcon: n
					}), a.a.createElement(ls, null, a.a.createElement(ds, null, t)))
				},
				Fs = e => {
					const {
						canEditIcon: t,
						isTargetBlank: s,
						largeSubredditIcon: n,
						linkUrl: r,
						subredditIcon: o,
						titleText: i,
						primaryColor: c,
						subreddit: d,
						onOpenFilePicker: l
					} = e, m = o.url ? a.a.createElement(B.c, null, "Update icon") : a.a.createElement(B.c, null, "Add icon");
					return a.a.createElement(as, {
						className: e.className
					}, t && d ? a.a.createElement(Ie.a, {
						className: n ? $t.a.largeSubredditIcon : $t.a.subredditIcon,
						key: o.url,
						iconUrl: o.url,
						primaryColor: c,
						subreddit: d,
						inTopBar: !1
					}) : a.a.createElement(Pe.b, {
						className: n ? $t.a.largeSubredditIcon : $t.a.subredditIcon,
						key: o.url,
						iconUrl: o.url,
						primaryColor: c
					}), a.a.createElement("div", {
						className: $t.a.titleTextContainer
					}, r ? a.a.createElement(cs, es({
						key: r,
						to: r,
						onClick: e => e.stopPropagation()
					}, s ? {
						target: "_blank"
					} : {}), a.a.createElement(ds, {
						title: i
					}, i)) : a.a.createElement(ds, {
						key: i
					}, i), t && d && l && a.a.createElement("div", {
						className: $t.a.editIconText,
						onClick: l
					}, m)))
				},
				Ds = (e, t, s) => {
					const n = Object(He.a)(e.name),
						r = t > 1 ? "".concat("member", "s") : "member";
					return a.a.createElement("span", {
						className: $t.a.metaTextContainer
					}, n.map((e, t) => {
						let {
							color: s,
							image: n
						} = e;
						return a.a.createElement("img", {
							alt: 0 === t ? Object(V.c)("Members icons") : "",
							className: $t.a.memberIcon,
							key: n,
							src: n,
							style: {
								backgroundColor: s
							}
						})
					}), a.a.createElement(ys, {
						className: $t.a.metaText
					}, a.a.createElement(B.c, null, a.a.createElement(B.b, {
						name: "subscribersCount"
					}, "".concat(Object(h.b)(t).toUpperCase(), " ")), a.a.createElement(B.b, {
						name: "members"
					}, r))), a.a.createElement(ys, {
						className: $t.a.metaText
					}, a.a.createElement(B.c, null, a.a.createElement(B.b, {
						name: "viewingCount"
					}, Object(h.b)(s)), " online")))
				},
				As = (e, t, s, r, o, i, c, d, l, m, u) => a.a.createElement(a.a.Fragment, null, a.a.createElement(ms, null, a.a.createElement(ps, {
					onMouseEnter: () => u(r),
					onMouseLeave: () => u(r)
				}, a.a.createElement(xs, null, Object(h.b)(t)), a.a.createElement(fs, {
					id: r
				}, s), a.a.createElement(Oe.c, {
					caretOnTop: !0,
					text: "".concat(Object(h.b)(t, !0), " ").concat(s),
					tooltipId: r
				})), a.a.createElement(bs, {
					onMouseEnter: () => u(c),
					onMouseLeave: () => u(c)
				}, a.a.createElement(xs, null, Object(h.b)(o)), a.a.createElement(fs, {
					id: c
				}, i), a.a.createElement(Oe.c, {
					caretOnTop: !0,
					text: "".concat(Object(h.b)(o, !0), " ").concat(i),
					tooltipId: c
				})), a.a.createElement("div", null)), d && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ls, null), a.a.createElement(hs, {
					onMouseEnter: () => u(m),
					onMouseLeave: () => u(m)
				}, a.a.createElement(gs, {
					id: m
				}, a.a.createElement(Qe.a, {
					className: $t.a.cakeIcon,
					key: "cakeDay"
				}), n.fbt._("Created {cakeday}", [n.fbt._param("cakeday", Object(p.a)(d, !0, !0, !0))], {
					hk: "8Y46b"
				})), a.a.createElement(Oe.c, {
					caretOnTop: !0,
					text: Object(g.d)(e, d),
					tooltipId: m
				}))));
			t.e = Object(P.b)(Ms(Object(u.a)(Bs)))
		},
		"./src/reddit/components/IdCard/placeholder.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Tqjvz23rS-5hNHwFjEkoG",
				banner: "c_dVyWK3BXRxSN3ULLJ_t",
				title: "_1OQL3FCA9BfgI57ghHHgV3",
				icon: "_33jgwegeMTJ-FJaaHMeOjV",
				name: "_1wQQNkVR4qNpQCzA19X4B6",
				counts: "_39IvqNe6cqNVXcMFxFWFxx",
				side: "_29TSdL_ZMpyzfQ_bfdcBSc",
				count: "JEV9fXVlt_7DgH-zLepBH",
				text: "_3YCOmnWpGeRBW_Psd5WMPR",
				desc: "_2iO5zt81CSiYhWRF9WylyN",
				one: "_2E9u5XvlGwlpnzki78vasG",
				two: "fDElwzn43eJToKzSCkejE",
				three: "_2kNB7LAYYqYdyS85f8pqfi",
				four: "_1XmngqAPKZO_1lDBwcQrR7",
				subscribe: "_3XbVvl-zJDbcDeEdSgxV4_",
				Shimmer: "_3640Mx-3jD362-XXyVwXur",
				shimmer: "_3640Mx-3jD362-XXyVwXur",
				gradientAnimation: "_3XkHjK4wMgxtjzC1TvoXrb",
				Container: "_3Tqjvz23rS-5hNHwFjEkoG"
			}
		},
		"./src/reddit/components/InFeedPostCreation/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2jJNpBqXMbbyOiGCElTYxZ",
				container: "_2jJNpBqXMbbyOiGCElTYxZ",
				Input: "zgT5MfUrDMC54cpiCpZFu",
				input: "zgT5MfUrDMC54cpiCpZFu",
				Button: "_27e9yld2jAIIWQNc4A70if",
				button: "_27e9yld2jAIIWQNc4A70if"
			}
		},
		"./src/reddit/components/InFeedPostCreation/index.tsx": function(e, t, s) {
			"use strict";
			var n, r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				g = s("./src/reddit/icons/svgs/Media/index.tsx"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/reddit/components/InFeedPostCreation/index.m.less"),
				v = s.n(f);
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(n || (n = {}));
			const E = e => {
					switch (e) {
						case l.Fb.MEDIA:
							return "?media=true";
						case l.Fb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				C = e => {
					switch (e) {
						case l.Fb.MEDIA:
							return "media_post";
						case l.Fb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				O = Object(d.c)({
					subredditAboutInfo: x.y,
					subreddit: x.B
				}),
				j = Object(o.b)(O, e => ({
					navigateTo: t => e(Object(c.b)(t)),
					toggleTooltip: t => e(Object(m.g)({
						tooltipId: t
					}))
				})),
				S = Object(b.c)("Create Media Post"),
				w = Object(b.c)("Create Link Post");
			t.a = Object(p.b)(j(e => {
				let {
					subredditAboutInfo: t,
					subreddit: s,
					sendEvent: r,
					subredditName: o,
					navigateTo: c,
					toggleTooltip: d
				} = e;
				const m = (o ? "/r/".concat(o) : "") + "/submit",
					p = function(e, t) {
						if (!e) return {
							link: !0,
							media: !0
						};
						const s = t && t.allowedPostTypes;
						if (!s) return {
							link: !0,
							media: !0
						};
						const {
							images: n,
							links: r,
							videos: a
						} = s;
						return {
							link: r,
							media: (a || n) && !e.isNSFW
						}
					}(s, t),
					x = e => {
						r(t => Object.assign({
							source: "post_composer_du",
							action: "click",
							noun: C(e)
						}, y.defaults(t)))
					},
					f = () => {
						x(l.Fb.POST), c(m)
					};
				return a.a.createElement("div", {
					className: v.a.Container
				}, a.a.createElement("input", {
					className: v.a.Input,
					onChange: f,
					onClick: f,
					onKeyPress: f,
					placeholder: Object(b.c)("Create Post"),
					type: "text"
				}), p.media && a.a.createElement(i.a, {
					"aria-label": S,
					className: v.a.Button,
					id: n.Media,
					onClick: () => x(l.Fb.MEDIA),
					onMouseEnter: () => d(n.Media),
					onMouseLeave: () => d(n.Media),
					to: m + E(l.Fb.MEDIA)
				}, a.a.createElement(g.a, null), a.a.createElement(u.c, {
					caretOnTop: !0,
					tooltipId: n.Media,
					text: S
				})), p.link && a.a.createElement(i.a, {
					"aria-label": w,
					className: v.a.Button,
					id: n.Link,
					onClick: () => x(l.Fb.LINK_ONLY),
					onMouseEnter: () => d(n.Link),
					onMouseLeave: () => d(n.Link),
					to: m + E(l.Fb.LINK_ONLY)
				}, a.a.createElement(h.a, null), a.a.createElement(u.c, {
					caretOnTop: !0,
					tooltipId: n.Link,
					text: w
				})))
			}))
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = s.n(o),
				c = s("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", i.a),
				l = c.a.div("TextWrapper", i.a);
			t.a = e => {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: o,
					title: c
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(t, i.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, r.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? r.a.createElement(d, null, n) : r.a.createElement(d, null), r.a.createElement(l, null, r.a.createElement("div", {
					className: i.a.title
				}, c), o && r.a.createElement("div", {
					className: i.a.subtitle
				}, o)))
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				x = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				y = s.n(x);
			const f = r.a.createElement(p.a, {
					className: y.a.icon
				}),
				v = Object(o.c)({
					language: h.S,
					subreddit: b.B,
					subredditAboutInfo: b.y
				}),
				E = Object(a.b)(v);
			t.a = E(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s,
					language: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const a = s && s.quarantineMessageHtml,
					o = s && s.quarantineMessage || Object(i.a)(n, "contentGate.quarantinedSubreddit.quarantineMsg");
				return r.a.createElement(g.a, {
					className: y.a.container,
					color: d.a.quarantine,
					icon: f,
					subtitle: r.a.createElement("span", null, r.a.createElement(m.c, null, "This community is"), " ", r.a.createElement("a", {
						className: y.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, r.a.createElement(m.c, null, "quarantined")), ": ", a ? r.a.createElement(c.a, {
						className: y.a.rawHtmlDisplay,
						html: a
					}) : o, " ", r.a.createElement(l.a, {
						className: y.a.link,
						to: "/"
					}, r.a.createElement(m.c, null, "Click to return home."))),
					title: Object(u.c)("Community Quarantined")
				})
			})
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				loading: "_2cHgYGbfV9EZMSThqLt2tx",
				small: "_3Q7WCNdCi77r0_CKPoDSFY",
				large: "_2wgLWvNKnhoJX3DUVT_3F-"
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.m.less"),
				o = s.n(a);
			t.a = () => r.a.createElement("div", null, r.a.createElement("div", {
				className: o.a.small
			}), r.a.createElement("div", {
				className: o.a.large
			}))
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less": function(e, t, s) {
			e.exports = {
				transition: "Rd5g7JmL4Fdk-aZi1-U_V",
				title: "_2TMXtA984ePtHXMkOpHNQm",
				container: "CneW1mCG4WJXxJbZl5tzH",
				pencil: "_11ARF4IQO4h3HeKPpPg0xb",
				inlineTopicsContainer: "_1I3N-uBrbZH-ywcmCnwv_B",
				modIcon: "_33CSUrVoafEXJUDX3qOQtf",
				emptyStateContainer: "_2IvhQwkgv_7K0Q3R0695Cs",
				inlineTopicsContainerEditing: "IeceazVNz_gGZfKXub0ak",
				optionsListDropdown: "_35hmSCjPO8OEezK36eUXpk",
				searchBar: "_3aEIeAgUy9VfJyRPljMNJP",
				numSelected: "_25yWxLGH4C6j26OKFx8kD5",
				titleSubtext: "_1i46tE0yFLStZBdRfHnYIa",
				controlRow: "_2YsVWIEj0doZMxreeY6iDG",
				cancel: "_1hFCAcL4_gkyWN0KM96zgg",
				save: "_1dF0IdghIrnqkJiUxfswxd",
				newBadge: "_3VGrhUu842I3acqBMCoSAq",
				relatedTopicsCopy: "edyFgPHILhf5OLH2vk-tk",
				relatedTopicsContainer: "_19lMIGqzfTPVY3ssqTiZSX",
				relatedTopicsContainerEmptyState: "_3MAHaXXXXi9Xrmc_oMPTdP"
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/selectors/widgets.ts"),
				b = s("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				h = s.n(b);
			const g = Object(o.c)({
					idCardWidget: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(p.d)(e, {
							subredditId: s
						})
					}
				}),
				x = e => e.includeIcon ? e.idCardWidget && e.idCardWidget.description ? r.a.createElement(u.c, null, "Edit your description and custom icon") : r.a.createElement(u.c, null, "Add a community description and custom icon") : e.idCardWidget && e.idCardWidget.description ? r.a.createElement(u.c, null, "Edit your description") : r.a.createElement(u.c, null, "Add a community description"),
				y = e => e.includeIcon ? r.a.createElement(u.c, null, "Tell us about your community and upload a custom avatar so users can easily identify your community") : r.a.createElement(u.c, null, "Tell us more about your community.");
			class f extends r.a.Component {
				componentDidMount() {
					this.props.sendEvent(m.e), this.props.onViewTooltip()
				}
				render() {
					const e = x(this.props),
						t = y(this.props);
					return r.a.createElement("div", {
						className: h.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, r.a.createElement("span", {
						className: h.a.topRow
					}, r.a.createElement("h3", {
						className: h.a.title
					}, e)), r.a.createElement("p", {
						className: h.a.tooltipBody
					}, t), r.a.createElement(d.f, {
						className: h.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, r.a.createElement(u.c, null, "Got it")))
				}
			}
			t.a = Object(a.b)(g, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onDismissTooltip: () => {
						e(Object(i.h)()), Object(l.O)(s, !0)
					},
					onViewTooltip: () => {
						Object(l.ab)()
					}
				}
			})(Object(c.b)(f))
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, s) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/actions/inFeedChaining.ts"),
				p = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Poll/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				f = s("./src/reddit/selectors/activeModalId.ts"),
				v = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				E = s("./src/reddit/selectors/inFeedChaining.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/monthsToMinutes.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				w = s("./src/lib/classNames/index.ts"),
				N = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				_ = s("./src/reddit/components/CallToActionButton/index.tsx"),
				P = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				I = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				k = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				L = s("./src/reddit/components/Flatlist/index.tsx"),
				T = s("./src/reddit/components/Governance/Proposal/index.tsx"),
				M = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				B = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				D = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				A = s("./src/reddit/components/PostContainer/index.tsx"),
				W = s("./src/reddit/components/PostLeftRail/index.tsx"),
				H = s("./src/reddit/components/PostMedia/index.tsx"),
				U = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				V = s("./src/reddit/i18n/components.tsx"),
				G = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				z = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				q = s.n(z);
			var K = () => r.a.createElement("div", {
					className: q.a.container
				}, r.a.createElement(G.a, {
					className: q.a.pinnedIcon
				}), r.a.createElement("span", {
					className: q.a.metaText
				}, r.a.createElement(V.c, null, "pinned by moderators"))),
				Z = s("./src/reddit/components/PostTitle/index.tsx"),
				J = s("./src/reddit/components/PostTopLine/index.tsx"),
				Q = s("./src/reddit/components/SourceLink/index.tsx"),
				Y = s("./src/reddit/components/VerticalVotes/index.tsx"),
				X = s("./src/reddit/contexts/InsideOverlay.tsx"),
				$ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ee = s("./src/reddit/controls/Checkbox/index.tsx"),
				te = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				se = s("./src/reddit/helpers/isCrosspost.ts"),
				ne = s("./src/reddit/helpers/postEvent.ts"),
				re = s("./src/reddit/constants/experiments.ts"),
				ae = s("./src/reddit/helpers/chooseVariant/index.ts"),
				oe = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ie = Object(o.a)(j.O, e => e.some(oe.c)),
				ce = Object(o.a)(ie, e => e),
				de = (e, t) => Object(ae.c)(e, {
					experimentName: re.y,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ce(e, {
							listingKey: s
						})
					}
				});
			var le = s("./src/reddit/selectors/postFlair.ts"),
				me = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ue = s.n(me),
				pe = s("./src/reddit/components/LargePost/index.m.less"),
				be = s.n(pe);
			s.d(t, "b", (function() {
				return fe
			}));
			const he = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(j.O)(e, {
						listingKey: s
					}) : void 0
				},
				ge = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(j.C)(e, {
						listingKey: s
					}) : void 0
				},
				xe = Object(a.b)(() => Object(o.c)({
					autoplayPref: S.b,
					activeModalId: f.a,
					currentUser: S.i,
					hideNSFWPref: S.z,
					flairStyleTemplate: $.Q,
					isCurrentUserProfilePost: j.h,
					isFrontpageHome: O.g,
					isM2MHomeRedirectEnabled: v.c,
					language: S.S,
					isActive: j.g,
					isPostChainDismissed: E.c,
					isPostChained: E.d,
					moderatorPermissions: C.i,
					modModeEnabled: $.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					pollResult: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.results.byVoters[s] : null
					},
					post: j.J,
					posts: he,
					postHeightVariant: de,
					postIds: ge,
					showEditFlair: le.a,
					subredditOrProfile: j.U,
					userIsOp: S.jb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: r
					} = t;
					return {
						chainPost: () => {
							n && s && e(Object(u.d)({
								listingKey: s,
								listingName: n,
								postId: r
							}))
						},
						handleVote: t => {
							const s = t === y.a.upvoted ? Object(p.N)(r) : Object(p.o)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(p.L)(r)),
						onOpenReportsDropdown: t => e(Object(b.g)({
							tooltipId: t
						}))
					}
				}),
				ye = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: n,
						className: a,
						currentUser: o,
						eventFactory: l,
						flairStyleTemplate: u,
						forceLoadMedia: p,
						hideNSFWPref: b,
						inSubredditOrProfile: y = !1,
						isCommentsPage: f,
						isCurrentUserProfilePost: v,
						isFrontpage: E,
						isFrontpageHome: C,
						isM2MHomeRedirectEnabled: O,
						isOverlay: j,
						isPostChainDismissed: S,
						isPostChained: V,
						language: G,
						listingKey: z,
						listingName: q,
						moderatorPermissions: Y,
						modModeEnabled: X,
						onClickPost: $,
						onIgnoreReports: ee,
						onOpenReportsDropdown: ae,
						poll: oe,
						pollResult: ie,
						post: ce,
						postHeightVariant: de,
						scrollerItemRef: le,
						showEditFlair: me,
						subredditOrProfile: pe,
						userIsOp: he
					} = e, ge = !!e.redditStyle || !!e["data-redditstyle"], xe = ge ? void 0 : u, ye = Object(d.a)(Y), ve = X && ye, Ee = Object(c.a)(Y), Ce = Object(F.c)(ce), Oe = !!ce.media && ce.media.type === h.n.RTJSON, je = he && Oe, Se = s ? s - W.a : void 0, we = !!ie && !!Object.keys(ie.options).filter(e => ie.options[e].userSelected).length, Ne = !(E && C), _e = (e => e === re.jb.OnlyTitles)(de) && !Object(se.a)(ce), Pe = (e => e === re.jb.MediumHeight)(de) && !Object(se.a)(ce), Ie = (e => {
						const {
							post: t,
							postIds: s,
							posts: n
						} = e;
						if (!Object(x.k)(t)) return;
						const r = s && 0 === s.indexOf(t.id),
							a = s && 1 === s.indexOf(t.id),
							o = n && n[1] && Object(x.k)(n[1]);
						return {
							hasTopCompactPostStyles: r && o,
							hasBottomCompactPostStyles: a,
							showPinnnedHeader: r
						}
					})(e), ke = r.a.createElement(A.a, {
						className: Object(w.a)(be.a.container, a, ue.a.largeAndMediumPostStyles, ue.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[ue.a.mUseRedditTheme]: ge,
							promotedvideolink: ce.isSponsored && !(ce.media && h.a.has(ce.media.type)),
							[be.a.topCompactPost]: Ie && Ie.hasTopCompactPostStyles,
							[be.a.bottomCompactPost]: Ie && Ie.hasBottomCompactPostStyles
						}),
						isOverlay: j,
						style: Object(m.b)(e.flairStyleTemplate),
						post: ce,
						onClick: $,
						onPostContentClick: n,
						eventFactory: l
					}, fe(ce, e.handleVote, e.showBulkActionCheckbox, e.isCheckboxSelected, e.toggleCheckbox, xe, ge), r.a.createElement(D.a, {
						className: Object(w.a)(be.a.backgroundWrapper, {
							[be.a.isEvent]: Object(ne.a)(ce)
						}),
						"data-click-id": "background",
						flairStyleTemplate: xe,
						post: ce,
						redditStyle: ge
					}, r.a.createElement(k.a, {
						post: ce,
						language: G
					}), Ie && Ie.showPinnnedHeader && r.a.createElement(K, null), r.a.createElement(J.a, {
						className: be.a.postTopLine,
						hideNSFWPref: b,
						iconClassName: be.a.postTopLineIcon,
						inSubredditOrProfile: y,
						isCommentsPage: !!f,
						isCompactPinnedPost: !!Ie,
						isCurrentUserProfilePost: v,
						isOverlay: !!j,
						language: G,
						post: ce,
						shouldShowSubscribeButton: Ne,
						showSubreddit: !y && !ce.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: pe
					}), r.a.createElement(Z.c, {
						className: be.a.postTitle,
						post: ce,
						redditStyle: ge,
						size: Z.b.Large,
						titleColor: xe && xe.postTitleColor,
						isM2MHomeRedirectEnabled: O,
						isOverlay: j
					}), ce.source && !ce.isSponsored && r.a.createElement(Q.a, {
						className: be.a.sourceLink,
						post: ce
					}), r.a.createElement("div", {
						className: Object(w.a)(be.a.postMediaWrapper, {
							[be.a.votedContent]: we
						})
					}, !Ie && r.a.createElement(H.a, {
						isListing: !0,
						isMediumHeight: Pe,
						isNotCardView: !!j,
						isTitleOnly: _e,
						showCentered: !0,
						flairStyleTemplate: xe,
						post: ce,
						availableWidth: Se,
						shouldLoad: p,
						scrollerItemRef: le,
						autoplayPref: t
					})), oe && r.a.createElement(T.a, {
						className: Object(w.a)(be.a.proposal, {
							[be.a.mHasNotVoted]: !ie,
							[be.a.mPollIsClosed]: !!ie && Object(g.e)(oe, ie),
							[be.a.mGAPoll]: oe.type === g.a.GA
						}),
						pollId: oe.id,
						subredditId: ce.belongsTo.id
					}), ce.isMeta && !oe && r.a.createElement(M.a, {
						className: be.a.noProposal
					}), ce.source && ce.source.url && ce.isSponsored && r.a.createElement(N.a, {
						className: be.a.adLinkWrapper
					}, r.a.createElement(te.a, {
						href: ce.source.url.replace(i.a.redditUrl, ""),
						isSponsored: ce.isSponsored,
						source: ce.source
					}, ce.source.displayText), ce.callToAction && r.a.createElement(_.a, {
						href: ce.source.url.replace(i.a.redditUrl, ""),
						isSponsored: ce.isSponsored,
						source: ce.source
					}, ce.callToAction)), X && ye && Ce && r.a.createElement(R.a, {
						language: G,
						onIgnoreReports: ee,
						reportable: ce
					}), r.a.createElement(B.d, {
						postId: ce.id
					}), r.a.createElement("div", {
						className: be.a.flatListContainer
					}, r.a.createElement(P.a, {
						className: be.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: xe,
						model: ce,
						onVoteClick: e.handleVote
					}), r.a.createElement(L.c, {
						currentUser: o,
						hasModFlairPerms: Ee,
						hasModPostPerms: ye,
						isLargePost: !0,
						isOverlay: !!j,
						language: G,
						modModeEnabled: X,
						onIgnoreReports: ee,
						onOpenReportsDropdown: ae,
						post: ce,
						showEditPost: je,
						showEditFlair: me,
						useFlatlistBreakpoints: Object(U.h)({
							editPost: !1,
							save: !ve,
							hide: !1,
							report: !1
						})
					}))));
					return r.a.createElement(r.a.Fragment, null, ke, V && !S && r.a.createElement(I.a, {
						className: be.a.chain,
						listingKey: z,
						listingName: q,
						postId: ce.id
					}))
				}),
				fe = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
						o = arguments.length > 5 ? arguments[5] : void 0,
						i = arguments.length > 6 ? arguments[6] : void 0;
					const c = "upvote-button-".concat(e.id);
					return r.a.createElement(W.b, {
						isRemoved: !!e.bannedBy,
						isReported: Object(l.a)(e),
						isSponsored: e.isSponsored,
						redditStyle: i
					}, s && r.a.createElement(ee.a, {
						isCheckboxSelected: n,
						toggleCheckbox: a
					}), r.a.createElement(Y.a, {
						flairStyleTemplate: o,
						model: e,
						onVoteClick: t,
						redditStyle: i,
						upvoteTooltipId: c
					}))
				};
			t.a = xe(Object(X.b)(ye))
		},
		"./src/reddit/components/LargePost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_1yYeg-XN7v7i06TrK8Lh13",
				emptyVerticalVotes: "_3Qm3gV6v4Y9YWuQgCqMvJr",
				emptyScore: "y9vamInQ4LrXndusvhkBl",
				topLine: "_3QuUl4wSXyqVEAkIgGaLXl",
				topMetaOne: "_3vDeGQp8VifbnDC95HagCL",
				topMetaTwo: "Nci_4K-inwrSvpM-HSgWy",
				title: "_1QxTngAAL4xURgv5RVNOq1",
				media: "_2cFr_UVzM0pQGvZVL2Pmx5",
				flatlist: "_33_7mRxP4egdr8CL9OMSdb",
				flatlistItemOne: "_EVV9UvUf3cYf-HtTUL33",
				flatListItemTwo: "_2Ovk4TwuzZDamFhAj_X5Nl",
				bottomMeta: "_3Yno3UEEUpbfXOklgaEf27",
				postActionBar: "_3-iHWkhaRqC0JmCwckFVg1",
				postActionButton: "_314KvlynGyTcpUjSXckrbY",
				long: "_3EpUFkJ6GGzK-aVzndYmTT"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersCanvas/DragHandler/index.m.less": function(e, t, s) {
			e.exports = {
				dragHandle: "wtIX2QV-WhdMOY61s3LTY"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersCanvas/Inspector/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3_4fT2G-XHTG7R9Bm3LWg3",
				header: "_2Fo5iLX6dDRjb63yp94VnJ",
				title: "_3fjMoim4PzelRvk9PfJioM",
				addLayerIcon: "_1o9R8bOgo5mNno5Cm_65zo",
				text: "-Ar0Brssk7m0WKu8C21ae",
				layers: "_1_PpuNfvKwXJGcj6He2ZE_",
				layer: "_1VpjTNzCkLYpwmqldahKjd",
				loader: "_1FB380L1wxoCW-3J0eDFsZ"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersCanvas/index.m.less": function(e, t, s) {
			e.exports = {
				picker: "_3PrR5es3SdXl4u88yiyfw_"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/DraftLayer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1zsywIMroi20Y30J9I01Yk",
				pencilIcon: "_2h2zKkb3oPLCmLPjI6GcLL",
				trashIcon: "Lt-ewjhAwhlIenLoIHJW2"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_3gPOzQ-Y1W8-CKUhvYB2D_",
				help: "_15Q4CvvbF8SFmwANTPkmDV"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/Header/index.m.less": function(e, t, s) {
			e.exports = {
				addLayer: "_3f1Cf0b1OEcNOC6YKKgVz4",
				addLayerActive: "_2iRm5mzDyW97KE07uRVaIK",
				selectLayerMessage: "_3hnQDAv93FRkjBgk_QCo8I",
				header: "-F190yKxcU1_kIFAcTX-m",
				icon: "_3Evo53HEI4GWjtyrccB1EK",
				wordmark: "_3r35-vS1zSk0NJfa8HxowZ",
				surfaceIcon: "_2kknLzR7Uq1wRbIe5mOtjZ"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/PanelEntry/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3zLvgzKhjaMhzMnmY4K9Iw",
				surfaceAdd: "_24BZf-gAps1VXqTxp83c84",
				active: "LxPQJcYKZcp6adKtSVC8C",
				surfaced: "_33N5jQa90cmt3WHSGtmcTF",
				image: "_1Fu01xrp-tXgahOIW0NjL4",
				name: "_138DakBgGtlmZXzEa2mqec",
				verticalRule: "_5psjtuaQfHE_ZUv7__KHG",
				overflow: "vL2qFYLXyjQCRzrLZx_XH",
				surfaceIcon: "_235IdoYFgEzHnNdwgONCZJ",
				surfaceRemove: "mSC7i3LTFntS_jgMHzNNk"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/SearchBar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "OeG7XLTdyJ15F3XXZRzvn",
				iconContainer: "_3nYpomZ1Bkrhh-_2o9w26Z",
				input: "_1NFsWAP_lH4aov7zk6ubKD"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/index.m.less": function(e, t, s) {
			e.exports = {
				scroller: "_2GY0smo7wzakRUqH1dMEGr",
				loader: "_1wrteWUfM9MNUnKB7uciJi",
				surfaceHeader: "_1jZScJrE3mQWzIynSAjcny",
				addSurface: "oFNH1hy7vcljNY6jShFSn",
				surfaceHeaderText: "_2O9z2_0dn7JU5RG5cnTpFr",
				surfacesCount: "_3El6lpCxfKrk5zRm5pxeVi",
				surfacesWrapper: "_3F9GI6VLGlupTkn4h5uU1Z",
				surfacesScroller: "_1jMQKGk0lLDeWIEu3oWPi5",
				surfaceIconBase: "_3AAH1H6fM7pdWM6ZXMGkNl",
				surfaceIcon: "_3jD5l9TjTECztjU3-E-GGA",
				surfaceIconPlus: "mrMwZ7RnAHq2jZkiyAQm6",
				surfaceItem: "_3Nxp_iRyS4WUncZ1fWhrD6",
				surfaceTitle: "_1UIxrPtiIUYVi1eBbFcFFw",
				surfaceLayersCount: "MAby4JtyOny85mfd21NQ0",
				surfaceActive: "X0VrJaQnVec7sedGhxgJe",
				surfaceEmptyText: "_204qFBG8qG0hdJu0dERP7w"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/AddLayer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1aj78cfK2DGcYjXfhW__PZ",
				iconDefault: "_1g9Q65em5fLQj2SIiGi2LO",
				iconRotated: "kIptq_dA-Mun0HyCZiz-b",
				a: "_3z3DB3aJhX_RGfQwH8Hmam",
				b: "_3-6PYkXFR_dBBL0GTvgLc9",
				e: "_3_XiNR8JzWIOxD56fQVwag",
				f: "_3_8M_8x6gyr1R6O4bhEkDg"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/Cancel/index.m.less": function(e, t, s) {
			e.exports = {
				background: "yV4tMM31xw5fd2pymWPdW"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/Confirm/index.m.less": function(e, t, s) {
			e.exports = {
				background: "_2rPZqOFClOpkti3begBIUX"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/DragHandlerGrapple/index.m.less": function(e, t, s) {
			e.exports = {
				dragHandlerGrapple: "_2uHtla0ud_2r4GWanqohBh"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/Help/index.m.less": function(e, t, s) {
			e.exports = {
				a: "_3rEFPDUQzmzMVR-6svmjFs",
				c: "pkOpm1ZzSJxm6lGaxNncr"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/Logo/index.m.less": function(e, t, s) {
			e.exports = {
				b: "_3pI0LE1AQ-31WgHUVSU8Pk",
				c: "sFCmWWMZd6IrFPaJJu2zv",
				d: "UoHVV1dqFgE9UqQ5iPsa0"
			}
		},
		"./src/reddit/components/LayersEmbed/index.m.less": function(e, t, s) {
			e.exports = {
				colCanvas: "_2izXpZ70xuGNsFcot44f9E",
				colPanel: "_2VmMmY56AK0rUzJ9CkeTIp",
				container: "XvQHkxZYIFQufipWrmO44",
				fixedArInner: "_3bsSnSTsmdOmGl0BqmFEhM",
				fixedArWrapper: "_3xUZammIe2BU8uUjvEpjh5",
				loaderWrapper: "_3cW2flEQE3_TQkwYSB3bQe"
			}
		},
		"./src/reddit/components/LayersEmbed/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				a = s("./node_modules/lodash/isEqual.js"),
				o = s.n(a),
				i = s("./node_modules/lodash/omit.js"),
				c = s.n(i),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/getUrlQueryParams/index.ts"),
				b = s("./src/reddit/actions/layers.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
				g = s("./src/reddit/components/ConfirmUserActionModal/index.tsx");
			const x = 32,
				y = 10,
				f = 100;
			var v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/contexts/ApiContext.tsx"),
				C = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = s("./src/reddit/endpoints/post/index.tsx"),
				j = s("./src/graphql/operations/SubredditLayers.json"),
				S = s("./src/graphql/operations/SubredditLayersByIds.json"),
				w = s("./src/graphql/operations/SubredditLayersConfig.json"),
				N = s("./src/lib/makeGqlRequest/index.ts");
			const _ = (e, t) => Object(N.a)(e, Object.assign({}, w, {
					variables: {
						subredditId: t
					}
				})),
				P = (e, t, s, n, r, a) => Object(N.a)(e, Object.assign({}, j, {
					variables: {
						subredditId: t,
						first: s,
						after: n,
						box: r,
						layerName: a
					}
				})),
				I = (e, t, s) => Object(N.a)(e, Object.assign({}, S, {
					variables: {
						subredditId: t,
						ids: s
					}
				}));
			var k = s("./src/reddit/featureFlags/layers.ts"),
				L = e => {
					if (!(e && e.id && e.layersByIds && Array.isArray(e.layersByIds))) return {};
					const {
						id: t,
						layersByIds: s
					} = e;
					return {
						[t]: s.filter(Boolean)
					}
				},
				T = e => {
					let t = null;
					if (e.layersConfig) {
						const {
							image: s,
							websocketUrl: n
						} = e.layersConfig;
						t = {
							canvasImage: {
								url: s.url,
								width: s.dimensions.width,
								height: s.dimensions.height
							},
							websocketUrl: n
						}
					}
					return {
						[e.id]: t
					}
				},
				M = s("./node_modules/lodash/get.js"),
				B = s.n(M),
				R = s("./src/reddit/endpoints/post/create.ts"),
				F = e => {
					if (!(e && e.id && e.layers && Array.isArray(e.layers.edges))) return {};
					const {
						id: t,
						layers: s
					} = e;
					return {
						[t]: {
							cursor: B()(s, "pageInfo.endCursor", ""),
							layers: s.edges.map(e => Object.assign({}, e.node, {
								authorId: B()(e, "node.postInfo.authorInfo.id", null),
								postId: Object(R.e)(e.node.postUrl)
							}))
						}
					}
				},
				D = s("./src/reddit/helpers/localStorage/index.ts"),
				A = s("./src/reddit/helpers/trackers/layers.ts"),
				W = s("./src/reddit/i18n/utils.ts"),
				H = s("./src/reddit/models/Toast/index.ts"),
				U = s("./src/reddit/selectors/layers.ts"),
				V = s("./src/reddit/selectors/moderatorPermissions.ts"),
				G = s("./src/config.ts"),
				z = s("./node_modules/lodash/clamp.js"),
				q = s.n(z),
				K = s("./src/lib/getMobileOperatingSystem/index.ts"),
				Z = s("./src/reddit/components/LayersEmbed/icons/AddLayer/index.m.less"),
				J = s.n(Z),
				Q = e => {
					let {
						isRotated: t,
						className: s,
						onClick: n
					} = e;
					return l.a.createElement("svg", {
						className: s,
						onClick: n,
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24"
					}, l.a.createElement("defs", null, l.a.createElement("clipPath", null, l.a.createElement("rect", {
						className: J.a.a,
						width: "24",
						height: "24"
					})), l.a.createElement("clipPath", null, l.a.createElement("rect", {
						className: J.a.b,
						width: "24",
						height: "24"
					}))), l.a.createElement("g", {
						className: J.a.container
					}, l.a.createElement("g", {
						transform: "translate(4 4)"
					}, l.a.createElement("rect", {
						className: J.a.e,
						width: "16",
						height: "16",
						rx: "3.164"
					}), l.a.createElement("g", {
						transform: t ? "translate(5 5) rotate(45, 3, 3)" : "translate(5 5)"
					}, l.a.createElement("line", {
						className: J.a.f,
						y2: "6",
						transform: "translate(3)"
					}), l.a.createElement("line", {
						className: J.a.f,
						x1: "6",
						transform: "translate(0 3)"
					})))))
				},
				Y = s("./src/reddit/components/LayersEmbed/icons/Cancel/index.m.less"),
				X = s.n(Y);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class ee extends l.a.Component {
				render() {
					return l.a.createElement("svg", $({
						height: ee.size,
						width: ee.size
					}, this.props, {
						style: Object.assign({
							position: "absolute",
							cursor: "pointer"
						}, this.props.style ? this.props.style : {})
					}), l.a.createElement("g", null, l.a.createElement("g", {
						className: X.a.background
					}, l.a.createElement("path", {
						d: "M26 39.008c-2.105 0-4.16-.408-6.109-1.213a15.951 15.951 0 01-7.19-5.894 15.951 15.951 0 01-2.702-8.897c0-3.179.934-6.255 2.701-8.897a15.951 15.951 0 017.191-5.894A15.917 15.917 0 0126 7c2.097 0 4.145.404 6.085 1.2a15.913 15.913 0 015.254 3.507 15.922 15.922 0 014.66 11.297A15.92 15.92 0 0137.34 34.3a15.914 15.914 0 01-5.254 3.507c-1.94.797-3.987 1.2-6.085 1.2zm.04-15.653l.707.707 3.53 3.53.121.121.074.155a.325.325 0 00.34.181.322.322 0 00.273-.272.322.322 0 00-.181-.34l-.155-.074-.121-.122-3.53-3.53-.708-.707.708-.707 3.365-3.366a.324.324 0 00-.35-.35l-3.366 3.365-.707.707-.708-.707-3.365-3.366a.325.325 0 00-.35.351l3.365 3.366.707.707-.707.707-3.366 3.365a.324.324 0 00.351.351l3.365-3.365.708-.707z"
					}), l.a.createElement("path", {
						fill: "#fff",
						d: "M26 8a15.004 15.004 0 1010.63 25.595c5.826-5.86 5.826-15.323 0-21.182A15.002 15.002 0 0026 8m.04 13.239l3.53-3.53a1.322 1.322 0 011.506.258c.397.397.5 1 .259 1.507l-3.53 3.53 3.53 3.53A1.324 1.324 0 1129.57 28.3l-3.53-3.53-3.53 3.53a1.322 1.322 0 01-1.507-.258c-.397-.397-.5-1-.259-1.507l3.53-3.53-3.53-3.53a1.324 1.324 0 011.765-1.766l3.53 3.53M26 6v2-2c2.23 0 4.405.43 6.466 1.276 2.1.862 3.978 2.115 5.582 3.725a16.916 16.916 0 014.952 12.003c0 4.528-1.758 8.79-4.95 12a16.91 16.91 0 01-5.584 3.728A16.939 16.939 0 0126 40.008c-2.237 0-4.42-.434-6.49-1.29a16.948 16.948 0 01-7.641-6.261 16.948 16.948 0 01-2.87-9.453c0-3.377.993-6.646 2.87-9.453a16.948 16.948 0 017.64-6.262A16.911 16.911 0 0126 5.999z"
					}))))
				}
			}
			ee.size = 52;
			var te = s("./src/reddit/components/LayersEmbed/icons/Confirm/index.m.less"),
				se = s.n(te);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class re extends l.a.Component {
				render() {
					return l.a.createElement("svg", ne({
						height: re.size,
						width: re.size
					}, this.props, {
						style: Object.assign({
							position: "absolute",
							cursor: "pointer"
						}, this.props.style ? this.props.style : {})
					}), l.a.createElement("g", null, l.a.createElement("g", {
						className: se.a.background
					}, l.a.createElement("path", {
						d: "M26 39.008c-2.105 0-4.16-.408-6.109-1.213a15.951 15.951 0 01-7.19-5.894 15.951 15.951 0 01-2.702-8.897c0-3.179.934-6.255 2.701-8.897a15.951 15.951 0 017.191-5.894A15.917 15.917 0 0126 7c2.097 0 4.145.404 6.085 1.2a15.913 15.913 0 015.254 3.507 15.922 15.922 0 014.66 11.297A15.92 15.92 0 0137.34 34.3a15.914 15.914 0 01-5.254 3.507c-1.94.797-3.988 1.2-6.085 1.2zm-6.403-13.994l3.513 3.514a.322.322 0 00.458 0l8.725-8.726a.323.323 0 00-.38-.428l-7.816 7.764-.7.695-.705-.69-2.636-2.584a.323.323 0 00-.443.014.323.323 0 00-.016.441z"
					}), l.a.createElement("path", {
						fill: "#fff",
						d: "M26 8a15.004 15.004 0 1010.63 25.595c5.825-5.86 5.825-15.323 0-21.182A15.002 15.002 0 0026 8m-2.661 21.622a1.32 1.32 0 01-.936-.387l-3.53-3.53a1.324 1.324 0 011.871-1.872l2.648 2.595 7.943-7.89a1.32 1.32 0 011.617.242c.419.444.48 1.117.148 1.63l-8.826 8.825a1.32 1.32 0 01-.935.387M25.999 6v2-2c2.23 0 4.405.43 6.466 1.276 2.1.862 3.978 2.115 5.582 3.725a16.916 16.916 0 014.952 12.003c0 4.528-1.758 8.79-4.95 12a16.91 16.91 0 01-5.584 3.728A16.939 16.939 0 0126 40.008c-2.237 0-4.42-.434-6.49-1.29a16.948 16.948 0 01-7.641-6.261 16.948 16.948 0 01-2.87-9.453c0-3.377.993-6.646 2.87-9.453a16.948 16.948 0 017.64-6.262A16.911 16.911 0 0126 5.999z"
					}))))
				}
			}
			re.size = 52;
			var ae = s("./src/reddit/components/LayersEmbed/icons/DragHandlerGrapple/index.m.less"),
				oe = s.n(ae);

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ce = e => l.a.createElement("svg", ie({
					className: oe.a.dragHandlerGrapple,
					viewBox: "0 0 38 20"
				}, e), l.a.createElement("g", null, l.a.createElement("path", {
					d: "M8,2 C8,2 9,2 9,3 L9,5 C9,5 8,6 8,6 L6,6 C5,6 5,5 5,5 L5,3 C5,2 5,2 6,2 L8,2 Z M14,2 C14,2 15,2 15,3 L15,5 C15,5 14,6 14,6 L12,6 C11,6 11,5 11,5 L11,3 C11,2 11,2 12,2 L14,2 Z M20,2 C20,2 21,2 21,3 L21,5 C21,5 20,6 20,6 L18,6 C17,6 17,5 17,5 L17,3 C17,2 17,2 18,2 L20,2 Z M26,2 C26,2 27,2 27,3 L27,5 C27,5 26,6 26,6 L24,6 C25,6 23,5 23,5 L23,3 C23,2 23,2 24,2 L26,2 Z M32,2 C32,2 33,2 33,3 L33,5 C33,5 32,6 32,6 L30,6 C31,6 29,5 29,5 L29,3 C29,2 29,2 30,2 L32,2 Z M8,8 C8,8 9,8 9,9 L9,11 C9,11 8,12 8,12 L6,12 C5,12 5,11 5,11 L5,9 C5,8 5,8 6,8 L8,8 Z M14,8 C14,8 15,8 15,9 L15,11 C15,11 14,12 14,12 L12,12 C11,12 11,11 11,11 L11,9 C11,8 11,8 12,8 L14,8 Z M20,8 C20,8 21,8 21,9 L21,11 C21,11 20,12 20,12 L18,12 C17,12 17,11 17,11 L17,9 C17,8 17,8 18,8 L20,8 Z M26,8 C26,8 27,8 27,9 L27,11 C27,11 26,12 26,12 L24,12 C23,12 23,11 23,11 L23,9 C23,8 23,8 24,8 L26,8 Z M32,8 C32,8 33,8 33,9 L33,11 C33,11 32,12 32,12 L30,12 C29,12 29,11 29,11 L29,9 C29,8 29,8 30,8 L32,8 Z M8,14 C8,14 9,14 9,15 L9,17 C9,17 8,18 8,18 L6,18 C5,18 5,17 5,17 L5,15 C5,14 5,14 6,14 L8,14 Z M14,14 C14,14 15,14 15,15 L15,17 C15,17 14,18 14,18 L12,18 C11,18 11,17 11,17 L11,15 C11,14 11,14 12,14 L14,14 Z M20,14 C20,14 21,14 21,15 L21,17 C21,17 20,18 20,18 L18,18 C17,18 17,17 17,17 L17,15 C17,14 17,14 18,14 L20,14 Z M26,14 C26,14 27,14 27,15 L27,17 C27,17 26,18 26,18 L24,18 C23,18 23,17 23,17 L23,15 C23,14 23,14 24,14 L26,14 Z M32,14 C32,14 33,14 33,15 L33,17 C33,17 32,18 32,18 L30,18 C29,18 29,17 29,17 L29,15 C29,14 29,14 30,14 L32,14 Z"
				}))),
				de = s("./src/reddit/components/LayersEmbed/icons/Help/index.m.less"),
				le = s.n(de);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ue = e => l.a.createElement("svg", me({
					xmlns: "http://www.w3.org/2000/svg",
					width: "25.568",
					height: "25.568",
					viewBox: "0 0 25.568 25.568"
				}, e), l.a.createElement("defs", null, l.a.createElement("clipPath", null, l.a.createElement("rect", {
					className: le.a.a,
					width: "25.568",
					height: "25.568"
				}))), l.a.createElement("g", null, l.a.createElement("path", {
					className: le.a.c,
					d: "M752.523,29.045A8.523,8.523,0,1,0,744,20.523,8.523,8.523,0,0,0,752.523,29.045Zm-1-8.642v1.956h1.79v-.92a3.068,3.068,0,0,0,.852-.281,2.587,2.587,0,0,0,.716-.524,2.5,2.5,0,0,0,.665-1.739,2.593,2.593,0,0,0-.213-1.074,2.247,2.247,0,0,0-.6-.831,2.858,2.858,0,0,0-.946-.533,3.667,3.667,0,0,0-1.214-.192,3.4,3.4,0,0,0-1.15.179,2.893,2.893,0,0,0-.845.473,2.426,2.426,0,0,0-.562.652,3.185,3.185,0,0,0-.331.746l1.558.652a1.567,1.567,0,0,1,.436-.78,1.178,1.178,0,0,1,.831-.307,1.065,1.065,0,0,1,.746.256.931.931,0,0,1,.293.746v.179a1.1,1.1,0,0,1-.511,1.023A3.292,3.292,0,0,1,751.522,20.4Zm.042,4.807a1.171,1.171,0,0,0,.882.281,1.133,1.133,0,0,0,.869-.281.959.959,0,0,0,.269-.69v-.307a.959.959,0,0,0-.268-.69,1.133,1.133,0,0,0-.869-.281,1.172,1.172,0,0,0-.882.281.989.989,0,0,0-.255.69v.307a.989.989,0,0,0,.256.69Z",
					transform: "translate(-739.739 -7.739)"
				}))),
				pe = s("./src/reddit/components/LayersEmbed/icons/Logo/index.m.less"),
				be = s.n(pe),
				he = e => {
					let {
						className: t
					} = e;
					return l.a.createElement("svg", {
						className: t,
						xmlns: "http://www.w3.org/2000/svg",
						width: "21.023",
						height: "21.023",
						viewBox: "0 0 21.023 21.023"
					}, l.a.createElement("defs", null, l.a.createElement("clipPath", null, l.a.createElement("rect", {
						width: "21.023",
						height: "21.023"
					}))), l.a.createElement("g", {
						transform: "translate(1.168 1.168)"
					}, l.a.createElement("circle", {
						className: be.a.b,
						cx: "9.344",
						cy: "9.344",
						r: "9.344"
					}), l.a.createElement("path", {
						className: be.a.c,
						d: "M11.154,263.411,9.7,262.687l-3.194,1.591a1.889,1.889,0,0,1-1.678,0l-3.193-1.59-1.451.723a.332.332,0,0,0,0,.6l4.943,2.461a1.227,1.227,0,0,0,1.086,0l4.943-2.461a.332.332,0,0,0,0-.6Zm0,0",
						transform: "translate(3.597 -252.321)"
					}), l.a.createElement("path", {
						className: be.a.d,
						d: "M.184,3.516,5.127,5.978a1.226,1.226,0,0,0,1.086,0l4.941-2.462a.332.332,0,0,0,0-.6L6.213.46a1.226,1.226,0,0,0-1.086,0L.184,2.921a.332.332,0,0,0,0,.6Zm0,0",
						transform: "translate(3.597 4.684)"
					})))
				},
				ge = e => l.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					width: "3",
					height: "14",
					viewBox: "0 0 3 14"
				}, l.a.createElement("g", {
					transform: "translate(0 0)",
					fill: "inherit"
				}, l.a.createElement("circle", {
					cx: "1.5",
					cy: "1.5",
					r: "1.5",
					transform: "translate(0 5.5)"
				}), l.a.createElement("circle", {
					cx: "1.5",
					cy: "1.5",
					r: "1.5"
				}), l.a.createElement("circle", {
					cx: "1.5",
					cy: "1.5",
					r: "1.5",
					transform: "translate(0 11)"
				})));

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ye = e => l.a.createElement("svg", xe({
					width: 86,
					height: 18.174
				}, e), l.a.createElement("defs", null, l.a.createElement("clipPath", {
					id: "wordmarkPrefixA"
				}, l.a.createElement("path", {
					d: "M0 0h86v18.174H0z"
				}))), l.a.createElement("g", {
					clipPath: "url(#wordmarkPrefixA)"
				}, l.a.createElement("path", {
					fill: "none",
					d: "M0 0h86v18.174H0z"
				}), l.a.createElement("g", {
					"data-name": "Group 1305"
				}, l.a.createElement("g", {
					"data-name": "Group 544"
				}, l.a.createElement("g", {
					"data-name": "Group 543"
				}, l.a.createElement("path", {
					"data-name": "Path 367",
					d: "M24.654 9.346a29.894 29.894 0 01-.577-1.863c-.237.969-.509 1.98-.868 3.054h1.834z",
					fill: "none"
				}), l.a.createElement("path", {
					"data-name": "Path 368",
					d: "M79.823 5.678a2.32 2.32 0 00-.035-.392 3.55 3.55 0 00-1.065-.151h-1.786v2.77h.607a2.107 2.107 0 002.279-2.227z",
					fill: "none"
				}), l.a.createElement("path", {
					"data-name": "Path 369",
					d: "M10.928 14.199l.154-1.4H6.047v1.4z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 370",
					d: "M4.764 1.395V0H-.001v16.775h1.283V1.395z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 371",
					d: "M24.591 5.748h-.1c-.132.567-.265 1.144-.409 1.736.167.606.355 1.226.577 1.863l.388 1.191h-1.834l-.069.208-.414 1.191h3.6l-.389-1.191a47.136 47.136 0 01-1.35-4.998z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 372",
					d: "M26.908 1.395L26.437 0h-6.318l-5.7 16.775h1.756l5.223-15.38z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 373",
					d: "M26.777 15.584l.4 1.19h.807l-.4-1.19z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 374",
					d: "M34.083 1.395h4.712L38.212 0H32.8l5.645 11.1v5.678h1.283v-4.283z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 375",
					d: "M42.106 7.976c.466-1.346.906-2.512 1.4-3.781l1.114-2.8h3.5l.709-1.4h-5.49l-1.114 2.8c-.368.948-.706 1.837-1.048 2.788.279.768.539 1.555.829 2.391z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Rectangle 1061",
					fill: "#ff4500",
					d: "M59.19 12.8h6.408v1.399H59.19z"
				}), l.a.createElement("path", {
					"data-name": "Path 376",
					d: "M65.397 1.395V0H53.149v16.775h1.283V1.395z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 377",
					d: "M64.471 7.903l.145-1.4h-5.428v1.4z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 378",
					d: "M84.607 13.795l.109-.993h-.207a2.024 2.024 0 01-.962-.269 3.311 3.311 0 001.06 1.262z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 379",
					d: "M78.003 13.299c.053.1.108.206.163.316a6 6 0 001.852 2.443 9.462 9.462 0 01-.569-1.044 3.175 3.175 0 00-1.446-1.715z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 380",
					d: "M76.937 1.395h1.994a8.639 8.639 0 014.959 1.327C82.765.767 80.207.001 77.649.001H70.89v16.774h1.283V1.395z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 381",
					d: "M79.789 5.283a2.322 2.322 0 01.035.392 2.107 2.107 0 01-2.279 2.227h-.607v1.4h1.89a2.107 2.107 0 002.279-2.227 1.747 1.747 0 00-1.318-1.792z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Rectangle 1062",
					fill: "#14d8c3",
					d: "M4.765 1.399h1.283v11.444H4.765z"
				}), l.a.createElement("path", {
					"data-name": "Path 382",
					d: "M10.643 16.774h-9.36v1.4h10.643l.44-3.988h-1.437z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 383",
					d: "M10.928 14.196H6.047v-1.394H4.764v-11.4H1.282v15.373h9.36z",
					fill: "#1e2a3e"
				}), l.a.createElement("path", {
					"data-name": "Path 384",
					d: "M23.313 4.355h-.1a48.845 48.845 0 01-1.346 5l-.414 1.191h1.766c.359-1.073.632-2.085.869-3.054-.307-1.094-.541-2.137-.775-3.137z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 385",
					d: "M20.193 14.185l-.906 2.589h-3.11l-.474 1.4h4.868l.906-2.59h5.33l-.476-1.4z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 386",
					d: "M26.867 1.399l5.2 15.38H27.98l.476 1.394h4.894L27.679 1.399z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 387",
					d: "M26.899 1.399h-5.507l-5.223 15.375h3.114l.906-2.58h6.137l.476 1.394h.807l.4 1.186h4.087zm-4.16 10.526l.414-1.187.069-.208h-1.766l.414-1.187a48.489 48.489 0 001.346-4.979h.1c.233 1 .468 2.035.77 3.124.145-.59.277-1.165.409-1.73h.1a46.781 46.781 0 001.346 4.979l.388 1.187z",
					fill: "#1e2a3e"
				}), l.a.createElement("path", {
					"data-name": "Path 388",
					d: "M40.736 6.577h.1c.118-.341.234-.67.35-.992-.17-.468-.347-.928-.543-1.389l-1.165-2.8h-.7l.582 1.4c.522 1.219.911 2.434 1.376 3.781z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 389",
					d: "M43.18 11.102v5.678h-3.482v1.394h4.765v-5.678l5.645-11.1h-1.992z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 390",
					d: "M43.194 11.099l4.936-9.7h-3.5l-1.114 2.786a108.379 108.379 0 00-1.4 3.767h-.1c-.29-.834-.549-1.618-.829-2.383-.116.321-.232.649-.35.989h-.105c-.466-1.342-.855-2.554-1.372-3.767l-.582-1.392h-4.712l5.645 11.094v4.282h3.482z",
					fill: "#1e2a3e"
				}), l.a.createElement("path", {
					"data-name": "Path 391",
					d: "M65.599 16.774H54.427v1.4h12.455v-3.988h-1.283z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 392",
					d: "M57.902 3.962v2.564h1.283V5.362l7.483.026V1.4h-1.283v2.589z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 393",
					d: "M57.904 10.479v2.331h1.283v-.931h6.292l.414-3.988h-1.428l-.269 2.588z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 394",
					d: "M65.602 14.196h-6.408v-1.394h-1.283V10.48h6.292l.269-2.579h-5.279V6.507H57.91V3.953l7.483.026V1.4H54.428v15.375H65.6z",
					fill: "#1e2a3e"
				}), l.a.createElement("path", {
					"data-name": "Path 395",
					d: "M78.724 5.139a3.55 3.55 0 011.065.15c-.188-1.107-1.182-1.55-2.347-1.55h-1.787v4.169h1.283v-2.77z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 396",
					d: "M85.793 14.186a2.13 2.13 0 01-1.185-.406l-.331 2.995H82.49a4.145 4.145 0 01-2.473-.716 4.12 4.12 0 003.755 2.115h1.787l.44-3.988z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 397",
					d: "M75.654 11.647v5.127h-3.482v1.4h4.765v-5.127a3.251 3.251 0 011.066.252 2.544 2.544 0 00-2.349-1.652z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 398",
					d: "M81.351 9.995a3.224 3.224 0 01.88 1.113 3.217 3.217 0 001.317 1.466l-.035-.067a3.224 3.224 0 00-.88-1.114 5.9 5.9 0 003.133-4.868 4.433 4.433 0 00-1.877-3.8 4.733 4.733 0 01.594 2.4 5.9 5.9 0 01-3.132 4.87z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 399",
					d: "M84.277 16.774l.33-2.984a3.306 3.306 0 01-1.059-1.257 3.211 3.211 0 01-1.317-1.461 3.216 3.216 0 00-.88-1.109c1.657-1.058 3.133-2.632 3.133-4.85a4.7 4.7 0 00-.594-2.388 8.641 8.641 0 00-4.959-1.327h-6.758v15.375h3.482v-5.108a2.543 2.543 0 012.349 1.646 3.168 3.168 0 011.446 1.709 9.417 9.417 0 00.569 1.04 4.156 4.156 0 002.473.713zm-5.45-7.481h-1.89V7.899h-1.283V3.745h1.787c1.165 0 2.159.441 2.348 1.544a1.741 1.741 0 011.317 1.785 2.1 2.1 0 01-2.279 2.219z",
					fill: "#1e2a3e"
				})))))),
				fe = s("./src/lib/classNames/index.ts"),
				ve = s("./src/reddit/components/LayersEmbed/LayersCanvas/DragHandler/index.m.less"),
				Ee = s.n(ve);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class Oe extends l.a.Component {
				render() {
					const {
						className: e,
						style: t
					} = this.props, s = Object(fe.a)(Ee.a.dragHandle, e), n = Object.assign({
						height: Oe.height
					}, t || {});
					return l.a.createElement("div", Ce({}, this.props, {
						className: s,
						style: n
					}), l.a.createElement(ce, null))
				}
			}
			Oe.height = 25;
			var je = Oe,
				Se = s("./src/reddit/components/Scroller/Simple.tsx"),
				we = s("./src/reddit/controls/Typography/index.tsx"),
				Ne = s("./src/reddit/actions/post.ts"),
				_e = s("./src/reddit/actions/reportFlow.ts"),
				Pe = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Ie = s("./src/reddit/components/ReportFlow/index.tsx"),
				ke = s("./src/reddit/controls/Dropdown/Row.tsx");

			function Le() {
				return (Le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Te = e => l.a.createElement("svg", Le({
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, e), l.a.createElement("path", {
					d: "M18.4,11.1l-2.6-1.3l2.9-1.5c0.3-0.2,0.5-0.4,0.5-0.6c0-0.2-0.2-0.5-0.5-0.6l-7.7-3.9C10.8,3.1,10.4,3,10,3 C9.6,3,9.3,3.1,9,3.2L1.2,7.1C0.9,7.3,0.7,7.5,0.7,7.7c0,0.2,0.2,0.5,0.5,0.6l2.9,1.5l-2.6,1.3c-0.5,0.2-0.8,0.7-0.8,1.1 c0,0.5,0.3,0.9,0.8,1.1l7.2,3.6c0.3,0.2,0.8,0.3,1.2,0.3c0.5,0,0.9-0.1,1.2-0.3l7.2-3.6c0.5-0.2,0.8-0.7,0.8-1.1 C19.2,11.7,18.9,11.3,18.4,11.1z M9,12.2l0-4L7.2,8.1l2.8-3l2.8,3.1h-1.9l0.1,4l3.2-1.6l3.1,1.6l-6.8,3.4c-0.1,0.1-0.4,0.1-0.6,0.1 c-0.2,0-0.4,0-0.6-0.1l-6.8-3.4l3.1-1.6L9,12.2z"
				})),
				Me = s("./src/reddit/components/LayersEmbed/LayersPanel/PanelEntry/index.m.less"),
				Be = s.n(Me);
			const Re = Object(u.c)({
				currentUserId: e => B()(e, "user.account.id", null),
				reportFlowIsOpen: (e, t) => {
					let {
						layer: s
					} = t;
					return e.reportFlow.postOrCommentId === _e.a + s.postId
				}
			});
			var Fe = Object(m.b)(Re, e => ({
					onViewPostClick: t => {
						const s = {
							permalink: t
						};
						e(Object(Ne.x)({
							postOrComment: s
						}))
					},
					onReportPostClick: t => e(Object(Ne.q)(t))
				}))(e => {
					let {
						className: t,
						currentUserId: s,
						dropdownId: n,
						isActive: r,
						isCreationEnabled: a,
						isSurfacingEnabled: o,
						isModerator: i,
						layer: c,
						reportFlowIsOpen: d,
						onLayerSelect: m,
						onViewPostClick: u,
						onReferenceClick: p,
						onReportPostClick: b,
						showDeleteModal: h,
						onAddLayerToSurface: g,
						onRemoveLayerFromSurface: x,
						isSurfaced: y
					} = e;
					return l.a.createElement("div", {
						className: Object(fe.a)(Be.a.container, r ? Be.a.active : void 0, t),
						onClick: m
					}, l.a.createElement("img", {
						className: Be.a.image,
						src: c.imageUrl,
						alt: c.name
					}), l.a.createElement("div", {
						className: Be.a.verticalRule
					}), l.a.createElement(we.b, {
						className: Be.a.name,
						title: Object(W.c)("Layer ".concat(c.id))
					}, Object(W.c)("Layer ".concat(c.id))), o && l.a.createElement(Te, {
						className: Object(fe.a)(Be.a.surfaceIcon, y ? Be.a.surfaceRemove : Be.a.surfaceAdd),
						onClick: y ? x : g
					}), l.a.createElement(Pe.b, {
						className: Be.a.overflow,
						dropdownId: n,
						icon: l.a.createElement(ge, null)
					}, l.a.createElement(ke.b, {
						onClick: () => u(c.postUrl),
						displayText: Object(W.c)("View Post")
					}), a && l.a.createElement(ke.b, {
						onClick: () => p(c.imageUrl, c.box),
						displayText: Object(W.c)("Use as Reference")
					}), c.authorId && c.authorId !== s && l.a.createElement(ke.b, {
						onClick: () => b(c.postId),
						displayText: Object(W.c)("Report")
					}), i && l.a.createElement(ke.b, {
						onClick: h,
						displayText: Object(W.c)("Delete Post")
					})), d && l.a.createElement(Ie.a, {
						withOverlay: !0,
						overlayCustomStyles: Ie.b,
						postId: c.postId
					}))
				}),
				De = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				Ae = s("./src/reddit/components/LayersEmbed/LayersCanvas/Inspector/index.m.less"),
				We = s.n(Ae);
			class He extends l.a.PureComponent {
				constructor() {
					super(...arguments), this.scrollContainerId = "layers-inspector-scroll-container", this.estimatedEntryHeightPx = 40, this.loaderSizePx = 10, this.getContainer = () => document.getElementById(this.scrollContainerId), this.onLayerSelectFromInspector = e => () => this.props.onLayerSelect(e, !0), this.onAddLayerToSurface = e => () => this.props.addLayerToSurface(e), this.onRemoveLayerFromSurface = e => () => this.props.removeLayerFromSurface(e)
				}
				render() {
					const {
						isCreationEnabled: e,
						isSurfacingEnabled: t,
						layerInspectorElementOffset: s,
						layers: n,
						loading: r,
						loadError: a,
						point: o,
						show: i,
						onAddLayer: c,
						onLoadMore: d,
						onReferenceClick: m,
						isModerator: u,
						openDeleteModal: p,
						surfaces: b,
						currentSurfaceId: h
					} = this.props;
					if (!i || !o) return null;
					let g;
					if (a) g = l.a.createElement(we.d, {
						className: We.a.text
					}, Object(W.c)("Load error"));
					else if (n && 0 === n.length) g = l.a.createElement(we.d, {
						className: We.a.text
					}, Object(W.c)("None"));
					else {
						const s = n && n.length ? n[n.length - 1].id : void 0;
						g = n && l.a.createElement("div", {
							id: this.scrollContainerId,
							className: We.a.layers
						}, l.a.createElement(Se.b, {
							getContainer: this.getContainer,
							loadMoreToken: s,
							onLoadMore: d,
							preventScrollOnMount: !0
						}, n.map(s => {
							const n = h ? b[h] : null,
								r = !!n && !!n.find(e => s.id === e.id);
							return {
								estHeight: this.estimatedEntryHeightPx,
								id: r ? "surfaced-".concat(s.id) : s.id,
								render: () => l.a.createElement(Fe, {
									onAddLayerToSurface: this.onAddLayerToSurface(s),
									onRemoveLayerFromSurface: this.onRemoveLayerFromSurface(s.id),
									isSurfaced: r,
									isModerator: u,
									showDeleteModal: p(s.postId),
									className: We.a.layer,
									dropdownId: "inspector-".concat(s.id),
									isActive: s.id === this.props.activeLayerId,
									isCreationEnabled: e,
									isSurfacingEnabled: t,
									key: s.id,
									layer: s,
									onLayerSelect: this.onLayerSelectFromInspector(s),
									onReferenceClick: m
								})
							}
						}))) || null
					}
					const x = {
						left: o.x + He.baseOffsetPx + s.x,
						top: o.y + He.baseOffsetPx + s.y
					};
					return l.a.createElement("div", {
						className: We.a.container,
						style: x
					}, l.a.createElement("div", {
						className: We.a.header
					}, l.a.createElement(we.e, {
						className: We.a.title
					}, Object(W.c)("LAYERS HERE:")), r && l.a.createElement(C.a, {
						className: We.a.loader,
						sizePx: this.loaderSizePx
					}), e && l.a.createElement("div", {
						className: We.a.addLayerIcon,
						onClick: c
					}, l.a.createElement(De.a, null))), g)
				}
			}
			He.baseOffsetPx = 5;
			var Ue = He,
				Ve = s("./src/reddit/components/LayersEmbed/LayersCanvas/index.m.less"),
				Ge = s.n(Ve);
			const ze = "url(".concat(G.a.assetPath, "/img/transparency-background.png)");
			class qe extends l.a.Component {
				constructor(e) {
					super(e), this._canvas = l.a.createRef(), this._picker = l.a.createRef(), this.ctx = null, this.image = new Image, this.ws = null, this.wsMessageProcessTimeout = 5e3, this.layerInspectorElementOffset = {
						x: 0,
						y: 0
					}, this.confirmPosition = {
						x: 0,
						y: 0
					}, this.cancelPosition = {
						x: 0,
						y: 0
					}, this.isMobile = Object(K.a)(), this.inspectedAreaBorderColor = "#F04921", this.highlightedAreaBorderColor = "#2699FB", this.pickerBorderWidth = 6, this.inspectedAreaSize = 50, this.layerImage = new Image, this.pickerBox = {
						x: 0,
						y: 0,
						width: 100,
						height: 100
					}, this.setImage = () => {
						const {
							canvasImage: e
						} = this.props.layersConfig;
						this.image.src = e.url + "?dummy=" + Math.random()
					}, this.debouncedSetImage = r()(this.setImage, 1e3, {
						leading: !0,
						maxWait: 1e3
					}), this.processWsMessage = e => {
						"update" === JSON.parse(e.data).type && this.setImage()
					}, this.debouncedProcessWsMessage = r()(this.processWsMessage, this.wsMessageProcessTimeout, {
						leading: !0,
						maxWait: this.wsMessageProcessTimeout
					}), this.componentDidUpdate = e => {
						let t, s;
						e.isPickerBoxEnabled && !this.props.isPickerBoxEnabled && (t = !1), e.isInspectorActiveLayer && !this.props.isInspectorActiveLayer && (s = !1), this.props.isPickerBoxEnabled && this.state.showInspector && (this.props.onLayerSelect(null, !1), s = !1);
						const n = {
							showConfirmButtons: t,
							showInspector: s
						};
						if (Object.keys(n).map(e => n[e]).some(e => void 0 !== e) && this.setState(Object.assign({}, n)), this.canvas && !e.isPickerBoxEnabled && this.props.isPickerBoxEnabled) {
							const {
								width: e,
								height: t
							} = this.canvas;
							this.pickerBox = Object.assign({}, this.pickerBox, {
								x: e / 2 - this.pickerBox.width / 2,
								y: t / 2 - this.pickerBox.height / 2
							}), this.forceUpdate()
						}
						this.draw()
					}, this.onMouseEnter = () => {
						if (this.canvas && (!this.state.showConfirmButtons || !this.props.isPickerBoxEnabled)) return this.props.isPickerBoxEnabled && !this.isMobile && this.picker ? (this.canvas.onmousemove = this.onMove, this.picker.onmousemove = this.onMove, void(this.picker.onclick = this.confirmBackgroundSelection)) : void(this.props.isPickerBoxEnabled && this.isMobile || (this.canvas.onclick = this.onLayersInspect))
					}, this.onMouseLeaveCanvas = () => {
						this.canvas && (this.canvas.onmousemove = null, this.canvas.onclick = null)
					}, this.onMouseLeavePicker = () => {
						this.picker && (this.picker.onmousemove = null, this.picker.onclick = null)
					}, this.clearEventHandlers = () => {
						this.onMouseLeaveCanvas(), this.onMouseLeavePicker()
					}, this.updateCanvasEventHandlers = () => {
						this.clearEventHandlers(), this.onMouseEnter()
					}, this.onMove = e => {
						if (!this.picker || !this.canvas) return;
						const t = this.canvas.width / this.canvas.offsetWidth;
						let s;
						s = this.isMobile ? this.getShiftedTouchPosition(this.canvas, e) : this.getShiftedMousePosition(this.canvas, e);
						const {
							canvasImage: n
						} = this.props.layersConfig;
						this.pickerBox.x = q()(s.x, 0, n.width - this.pickerBox.width), this.pickerBox.y = q()(s.y, 0, n.height - this.pickerBox.height), this.picker.style.left = "".concat(this.pickerBox.x / t, "px"), this.picker.style.top = "".concat(this.pickerBox.y / t, "px")
					}, this.onTouchStart = () => {
						document.documentElement.style.overflow = "hidden", this.setState(e => Object.assign({}, e, {
							showConfirmButtons: !1
						}))
					}, this.onTouchEnd = () => {
						this.confirmBackgroundSelection(), document.documentElement.style.overflow = "auto"
					}, this.onLayersInspect = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.canvas) return;
						if (this.props.onLayerSelect(null, !0), this.state.showInspector) return void this.setState({
							inspectedArea: void 0,
							inspectedPoint: void 0,
							showInspector: !1
						});
						const t = this.getMousePagePosition(this.canvas, e),
							s = this.getMouseCanvasPosition(this.canvas, e),
							n = this.getInspectedAreaFromPoint(this.canvas, s),
							r = this.canvas.width / this.canvas.offsetWidth;
						this.layerInspectorElementOffset = {
							x: n.endPoint.x / r - t.x,
							y: n.endPoint.y / r - t.y
						}, this.props.fetchInspectorLayers(n), this.setState({
							inspectedArea: n,
							inspectedPoint: t,
							showInspector: !0
						})
					}, this.onLoadMoreInspectedLayers = () => {
						this.state.inspectedArea && this.props.fetchInspectorLayers(this.state.inspectedArea)
					}, this.draw = () => {
						if (!this.ctx) return;
						this.clear(this.ctx), this.drawImage(this.ctx);
						const {
							surfaces: e,
							currentSurfaceId: t
						} = this.props, s = t ? e[t] : null;
						if (s && s.forEach(e => this.highlightLayer(this.ctx, e)), !this.props.isPickerBoxEnabled) {
							this.highlightInspectedArea(this.ctx);
							const e = this.props.isInspectorActiveLayer ? this.highlightedAreaBorderColor : this.inspectedAreaBorderColor;
							this.highlightLayer(this.ctx, this.props.activeLayer, e)
						}
						this.updateCanvasEventHandlers()
					}, this.drawImage = e => {
						if (!e || !this.image) return;
						const {
							width: t,
							height: s
						} = this.props.layersConfig.canvasImage;
						e.drawImage(this.image, 0, 0, t, s)
					}, this.highlightLayer = (e, t, s) => {
						if (!e || !t) return;
						const n = B()(t, "box.startPoint"),
							r = B()(t, "box.endPoint");
						if (!(n && r && n.x && n.y && r.x && r.y)) return;
						const a = r.x - n.x,
							o = r.y - n.y;
						s && (e.strokeStyle = s, e.beginPath(), e.rect(n.x, n.y, a, o), e.closePath(), e.stroke());
						const i = new Image;
						i.onload = () => {
							e.drawImage(i, n.x, n.y, a, o)
						}, i.src = t.imageUrl
					}, this.highlightInspectedArea = e => {
						const {
							showInspector: t,
							inspectedArea: s
						} = this.state;
						t && s && (e.strokeStyle = this.inspectedAreaBorderColor, e.beginPath(), e.rect(s.startPoint.x, s.startPoint.y, s.endPoint.x - s.startPoint.x, s.endPoint.y - s.startPoint.y), e.closePath(), e.stroke())
					}, this.getShiftedMousePosition = (e, t) => {
						const s = this.getMouseCanvasPosition(e, t),
							n = this.pickerBox.width / 2,
							r = this.pickerBox.height / 2;
						return {
							x: s.x - n,
							y: s.y - r
						}
					}, this.getShiftedTouchPosition = (e, t) => {
						const s = this.getTouchCanvasPosition(e, t),
							n = e.width / e.offsetWidth,
							r = this.pickerBox.width / 2,
							a = this.pickerBox.height,
							o = je.height * n / 2;
						return {
							x: s.x - r,
							y: s.y - (a + o)
						}
					}, this.getTouchCanvasPosition = (e, t) => {
						const s = e.getBoundingClientRect(),
							n = s.left,
							r = s.top,
							a = e.width / e.offsetWidth,
							o = t.targetTouches[0];
						return o ? {
							x: (o.clientX - n) * a,
							y: (o.clientY - r) * a
						} : {
							x: 0,
							y: 0
						}
					}, this.getMouseCanvasPosition = (e, t) => {
						const s = e.getBoundingClientRect(),
							n = s.left,
							r = s.top,
							a = e.width / e.offsetWidth;
						return {
							x: (t.clientX - n) * a,
							y: (t.clientY - r) * a
						}
					}, this.getMousePagePosition = (e, t) => {
						const s = e.getBoundingClientRect();
						return {
							x: t.clientX - s.left,
							y: t.clientY - s.top
						}
					}, this.getLayerBackground = () => {
						const {
							x: e,
							y: t,
							width: s,
							height: n
						} = this.pickerBox, r = {
							startPoint: {
								x: e,
								y: t
							},
							endPoint: {
								x: e + s,
								y: t + n
							}
						}, a = document.createElement("canvas");
						if (!a) return;
						const o = a.getContext("2d");
						o && (a.width = s, a.height = n, o.drawImage(this.image, e, t, s, n, 0, 0, s, n), this.props.onBackgroundSelect(a.toDataURL(), r), this.setState({
							showConfirmButtons: !1
						}, this.updateCanvasEventHandlers))
					}, this.getLayerBackgroundFromInspector = () => {
						this.state.inspectedArea && (this.pickerBox.x = this.state.inspectedArea.startPoint.x, this.pickerBox.y = this.state.inspectedArea.startPoint.y), this.getLayerBackground()
					}, this.confirmBackgroundSelection = () => {
						if (!this.canvas) return;
						const {
							x: e,
							y: t,
							width: s,
							height: n
						} = this.pickerBox, r = this.canvas.width / this.canvas.offsetWidth;
						this.confirmPosition = {
							x: (e + s) / r,
							y: (t + n / 2) / r
						}, this.cancelPosition = {
							x: e / r - ee.size,
							y: (t + n / 2) / r
						}, this.setState({
							showConfirmButtons: !0
						}, this.updateCanvasEventHandlers)
					}, this.continueBackgroundSelection = () => this.setState(e => Object.assign({}, e, {
						showConfirmButtons: !1
					}), this.updateCanvasEventHandlers), this.state = {
						showInspector: !1,
						showConfirmButtons: !1,
						inspectedPoint: void 0,
						inspectedArea: void 0
					}
				}
				get canvas() {
					return this._canvas.current
				}
				get picker() {
					return this._picker.current
				}
				componentDidMount() {
					if (!this.canvas) return;
					if (this.ctx = this.canvas.getContext("2d"), !this.ctx) return;
					const {
						canvasImage: e,
						websocketUrl: t
					} = this.props.layersConfig, {
						width: s,
						height: n
					} = e;
					this.ctx.canvas.width = s, this.ctx.canvas.height = n, this.ctx.lineWidth = this.pickerBorderWidth, this.image.setAttribute("crossOrigin", "anonymous"), this.image.onload = this.draw, this.image.onerror = () => {
						this.image = new Image
					}, this.debouncedSetImage(), this.ws = new WebSocket(t), this.ws.onmessage = this.debouncedProcessWsMessage, this.ws.onerror = e => {
						this.ws && this.ws.close()
					}, this.layerImage.onload = () => {
						this.draw()
					}
				}
				componentWillUnmount() {
					this.ws && this.ws.close()
				}
				getInspectedAreaFromPoint(e, t) {
					const {
						x: s,
						y: n
					} = t, r = this.inspectedAreaSize, a = s + r > e.width ? Math.abs(e.width - s - r) : 0, o = n + r > e.height ? Math.abs(e.height - n - r) : 0, i = {
						x: s > r ? s - r - a : 0,
						y: n > r ? n - r - o : 0
					}, c = 0 === i.x ? Math.abs(s - r) : 0, d = 0 === i.y ? Math.abs(n - r) : 0;
					return {
						startPoint: i,
						endPoint: {
							x: s + r < e.width ? s + r + c : e.width,
							y: n + r < e.height ? n + r + d : e.height
						}
					}
				}
				clear(e) {
					const {
						width: t,
						height: s
					} = this.props.layersConfig.canvasImage;
					e.clearRect(0, 0, t, s)
				}
				render() {
					const {
						activeLayer: e,
						isCreationEnabled: t,
						isSurfacingEnabled: s,
						isPickerBoxEnabled: n,
						layersConfig: r,
						layersInspected: a,
						onLayerSelect: o,
						onBackgroundSelect: i,
						layersInspectedRequestInProgress: c,
						layersInspectedRequestFailed: d,
						isModerator: m,
						openDeleteModal: u,
						surfaces: p,
						currentSurfaceId: b,
						addLayerToSurface: h,
						removeLayerFromSurface: g
					} = this.props, {
						showConfirmButtons: x,
						showInspector: y,
						inspectedPoint: f
					} = this.state, v = this.confirmPosition.y - re.size / 2, E = {
						top: v,
						left: this.confirmPosition.x
					}, C = {
						top: v,
						left: this.cancelPosition.x
					}, {
						width: O,
						height: j
					} = r.canvasImage, S = n && !x, w = {
						cursor: S ? "none" : "pointer",
						backgroundImage: ze
					}, N = this.canvas ? this.canvas.width / this.canvas.offsetWidth : 1;
					return l.a.createElement(l.a.Fragment, null, l.a.createElement("canvas", {
						width: O,
						height: j,
						ref: this._canvas,
						style: w,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeaveCanvas
					}), l.a.createElement(Ue, {
						surfaces: p,
						currentSurfaceId: b,
						addLayerToSurface: h,
						removeLayerFromSurface: g,
						activeLayerId: e && e.id || null,
						isCreationEnabled: t,
						isSurfacingEnabled: s,
						isModerator: m,
						openDeleteModal: u,
						layerInspectorElementOffset: this.layerInspectorElementOffset,
						show: y,
						point: f,
						layers: a,
						loading: c,
						loadError: d,
						onAddLayer: this.getLayerBackgroundFromInspector,
						onLoadMore: this.onLoadMoreInspectedLayers,
						onLayerSelect: o,
						onReferenceClick: i
					}), n && x && l.a.createElement(l.a.Fragment, null, l.a.createElement(ee, {
						onClick: this.continueBackgroundSelection,
						style: C
					}), l.a.createElement(re, {
						onClick: this.getLayerBackground,
						style: E
					})), n && l.a.createElement("div", {
						className: Ge.a.picker,
						ref: this._picker,
						style: {
							cursor: S ? "none" : "default",
							left: Math.floor(this.pickerBox.x / N),
							top: Math.floor(this.pickerBox.y / N),
							height: Math.floor(this.pickerBox.height / N),
							width: Math.floor(this.pickerBox.width / N)
						}
					}, this.isMobile && l.a.createElement(je, {
						onTouchStart: this.onTouchStart,
						onTouchMove: this.onMove,
						onTouchEnd: this.onTouchEnd,
						style: {
							marginTop: this.pickerBox.height / N
						}
					})))
				}
			}
			var Ke = qe,
				Ze = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				Je = s("./src/lib/copyToClipboard/index.ts"),
				Qe = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ye = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				Xe = s("./src/reddit/icons/svgs/LayerDuplicate/index.tsx"),
				$e = s("./src/reddit/icons/svgs/Share/index.tsx"),
				et = s("./src/reddit/icons/svgs/Trash/index.tsx"),
				tt = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				st = s("./src/reddit/components/LayersEmbed/LayersPanel/DraftLayer/index.m.less"),
				nt = s.n(st);
			var rt = e => l.a.createElement("div", {
					className: Object(fe.a)(Be.a.container, nt.a.container)
				}, l.a.createElement(tt.a, {
					className: nt.a.pencilIcon,
					onClick: e.onEditDraft
				}), l.a.createElement("div", {
					className: Be.a.verticalRule
				}), l.a.createElement(we.b, {
					className: Be.a.name,
					title: Object(W.c)("Layer Draft")
				}, Object(W.c)("Layer Draft")), l.a.createElement(et.a, {
					className: nt.a.trashIcon,
					onClick: e.onDeleteDraft
				})),
				at = s("./src/reddit/components/LayersEmbed/LayersPanel/Footer/index.m.less"),
				ot = s.n(at);
			var it = () => l.a.createElement("div", {
					className: ot.a.footer
				}, l.a.createElement("a", {
					"data-redditstyle": !0,
					href: "https://www.reddit.com/r/Layer/comments/cxkwxu/the_layer_maker_quick_start_guide_user_manual/",
					target: "_blank"
				}, l.a.createElement(ue, {
					className: ot.a.help
				}))),
				ct = s("./src/reddit/components/LayersEmbed/LayersPanel/Header/index.m.less"),
				dt = s.n(ct);
			const lt = () => l.a.createElement("div", {
				className: dt.a.icon
			});
			var mt = e => {
					let {
						isPickerBoxEnabled: t,
						isCreationEnabled: s,
						isSurfacingEnabled: n,
						onAddLayerClick: r,
						onExpandSurfacesClick: a
					} = e;
					const o = Object(fe.a)(dt.a.icon, dt.a.addLayer, {
							[dt.a.addLayerActive]: t
						}),
						i = Object(W.c)("<< SELECT AN AREA FOR YOUR LAYER");
					return l.a.createElement("div", {
						className: dt.a.header
					}, t ? l.a.createElement(we.b, {
						className: dt.a.selectLayerMessage,
						title: i
					}, i) : l.a.createElement(l.a.Fragment, null, l.a.createElement(he, {
						className: dt.a.icon
					}), l.a.createElement(ye, {
						className: dt.a.wordmark
					})), s ? l.a.createElement(Q, {
						isRotated: t,
						onClick: r,
						className: o
					}) : n ? l.a.createElement(Te, {
						className: dt.a.surfaceIcon,
						onClick: a
					}) : l.a.createElement(lt, null))
				},
				ut = s("./src/reddit/controls/Input/index.tsx"),
				pt = s("./src/reddit/icons/svgs/Search/index.tsx"),
				bt = s("./src/reddit/components/LayersEmbed/LayersPanel/SearchBar/index.m.less"),
				ht = s.n(bt);
			var gt = e => l.a.createElement("div", {
					className: ht.a.container
				}, l.a.createElement("div", {
					className: ht.a.iconContainer
				}, l.a.createElement(pt.a, null)), l.a.createElement(ut.a, {
					onChange: e.onSearchTextChange,
					value: e.value,
					className: ht.a.input,
					type: "search"
				})),
				xt = s("./src/reddit/components/LayersEmbed/LayersPanel/index.m.less"),
				yt = s.n(xt);
			class ft extends l.a.Component {
				constructor(e) {
					super(e), this.scrollContainerId = "layers-embed-scroll-container", this.estimatedEntryHeightPx = 40, this.getContainer = () => document.getElementById(this.scrollContainerId), this.onLayerSelectFromPanelFactory = e => () => this.props.onLayerSelect(e, !1), this.onToggleSurfaceFactory = e => () => this.props.toggleSurface(e), this.onDuplicateSurfaceFactory = e => t => {
						t.stopPropagation(), this.props.duplicateSurface(e)
					}, this.onRemoveSurfaceFactory = e => t => {
						t.stopPropagation(), this.props.removeSurface(e)
					}, this.onAddLayerToSurfaceFactory = e => () => this.props.addLayerToSurface(e), this.onRemoveLayerFromSurfaceFactory = e => () => this.props.removeLayerFromSurface(e), this.copySurfaceUrlToClipboardFactory = e => t => {
						t.stopPropagation();
						const {
							currentSurfaceId: s,
							surfaces: n,
							toggleSurface: r
						} = this.props, a = n[e] || [];
						if (!a.length) return void this.props.showToast(Object(h.d)(Ze.fbt._("Surface is empty", null, {
							hk: "3Ek7Zj"
						}), H.b.Error));
						const o = a.map(e => e.id).join(","),
							i = "".concat(window.location.origin, "/r/").concat(this.props.subredditName, "/?surfaceLayers=").concat(o);
						Object(Je.a)(i) ? this.props.showToast(Object(h.d)(Ze.fbt._("Link has been copied", null, {
							hk: "3tMDVE"
						}), H.b.SuccessCommunityGreen)) : this.props.showToast(Object(h.d)(Ze.fbt._("Something went wrong", null, {
							hk: "1z7tqe"
						}), H.b.Error)), s !== e && r(e)
					}, this.toggleExpandSurfacesPanel = () => this.setState(e => ({
						isSurfacingPanelExpanded: !e.isSurfacingPanelExpanded
					})), this.toggleExpandSurfaceFactory = e => t => {
						t.stopPropagation();
						const {
							currentSurfaceId: s,
							toggleSurface: n
						} = this.props;
						if (s !== e) return n(e), void this.setState({
							isSurfaceExpanded: !0
						});
						this.setState(e => ({
							isSurfaceExpanded: !e.isSurfaceExpanded
						}))
					}, this.state = {
						isSurfaceExpanded: !1,
						isSurfacingPanelExpanded: !!Object.keys(e.surfaces).length
					}
				}
				componentDidUpdate(e) {
					Object.keys(e.surfaces).length < Object.keys(this.props.surfaces).length && !this.state.isSurfacingPanelExpanded && this.setState({
						isSurfacingPanelExpanded: !0
					})
				}
				render() {
					const {
						openDeleteModal: e,
						isModerator: t,
						hasLayerDraft: s,
						isLoading: n,
						isCreationEnabled: r,
						isSurfacingEnabled: a,
						isPickerBoxEnabled: o,
						layersSearchValue: i,
						layers: c,
						layersSearchResult: d,
						layersSearchRequestCompleted: m,
						onLoadMore: u,
						onAddLayerClick: p,
						onReferenceClick: b,
						onEditDraft: h,
						onDeleteDraft: g,
						onLayersSearch: v,
						surfaces: E,
						addSurface: O,
						currentSurfaceId: j,
						isSurfaceLoading: S
					} = this.props, {
						isSurfaceExpanded: w,
						isSurfacingPanelExpanded: N
					} = this.state;
					let _, P;
					d && d.length ? _ = d : m && i.length > 1 ? _ = d : (_ = c, P = c && c.length ? c[c.length - 1].id : void 0);
					const I = j ? E[j] : null,
						k = _ ? _.map(s => {
							const n = !!I && !!I.find(e => s.id === e.id);
							return {
								estHeight: this.estimatedEntryHeightPx,
								id: n ? "surfaced-".concat(s.id) : s.id,
								render: () => l.a.createElement(Fe, {
									onAddLayerToSurface: this.onAddLayerToSurfaceFactory(s),
									onRemoveLayerFromSurface: this.onRemoveLayerFromSurfaceFactory(s.id),
									isSurfaced: n,
									isModerator: t,
									showDeleteModal: e(s.postId),
									dropdownId: "panel-".concat(s.id),
									isActive: s.id === this.props.activeLayerId,
									isCreationEnabled: r,
									isSurfacingEnabled: a,
									layer: s,
									key: s.id,
									onLayerSelect: this.onLayerSelectFromPanelFactory(s),
									onReferenceClick: b
								})
							}
						}) : [],
						L = Object.keys(E).length,
						T = S ? l.a.createElement(C.a, {
							center: !0,
							sizePx: x / 2
						}) : L < y ? l.a.createElement("p", {
							className: yt.a.addSurface,
							onClick: O
						}, l.a.createElement(De.a, {
							className: yt.a.surfaceIconPlus
						}), Ze.fbt._("Add new surface", null, {
							hk: "8n8YY"
						}), l.a.createElement(we.f, {
							className: yt.a.surfacesCount
						}, L, " / ", y)) : l.a.createElement("p", {
							className: yt.a.surfaceHeaderText
						}, Ze.fbt._("Maximum number of surfaces reached", null, {
							hk: "heKT9"
						}));
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(mt, {
						isPickerBoxEnabled: o,
						isCreationEnabled: r,
						isSurfacingEnabled: a,
						onAddLayerClick: p,
						onExpandSurfacesClick: this.toggleExpandSurfacesPanel
					}), N && l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: yt.a.surfaceHeader
					}, T), l.a.createElement("div", {
						className: yt.a.surfacesWrapper
					}, l.a.createElement("div", {
						className: yt.a.surfacesScroller
					}, Object.keys(E).sort((e, t) => Number(e) - Number(t)).map(s => {
						const n = E[s];
						return l.a.createElement(l.a.Fragment, {
							key: "surface-".concat(s)
						}, l.a.createElement("div", {
							className: Object(fe.a)(yt.a.surfaceItem, j === s ? yt.a.surfaceActive : void 0),
							onClick: this.onToggleSurfaceFactory(s)
						}, l.a.createElement("p", {
							className: yt.a.surfaceTitle
						}, Ze.fbt._("Surface {surfaceId}", [Ze.fbt._param("surfaceId", s)], {
							hk: "17Jo0q"
						}), l.a.createElement(we.f, {
							className: yt.a.surfaceLayersCount
						}, "".concat(n ? n.length : 0, "/").concat(f))), l.a.createElement("p", {
							onClick: this.onDuplicateSurfaceFactory(s)
						}, l.a.createElement(Xe.a, {
							className: yt.a.surfaceIcon
						})), l.a.createElement("p", {
							onClick: this.copySurfaceUrlToClipboardFactory(s)
						}, l.a.createElement($e.a, {
							className: yt.a.surfaceIcon
						})), l.a.createElement("p", {
							onClick: this.onRemoveSurfaceFactory(s)
						}, l.a.createElement(et.a, {
							className: yt.a.surfaceIcon
						})), l.a.createElement("p", {
							onClick: this.toggleExpandSurfaceFactory(s)
						}, j === s && w ? l.a.createElement(Ye.a, {
							className: yt.a.surfaceIconBase
						}) : l.a.createElement(Qe.a, {
							className: yt.a.surfaceIconBase
						}))), j === s && w && (I && I.length ? I.map(n => l.a.createElement(Fe, {
							onAddLayerToSurface: this.onAddLayerToSurfaceFactory(n),
							onRemoveLayerFromSurface: this.onRemoveLayerFromSurfaceFactory(n.id),
							isSurfaced: !0,
							isModerator: t,
							showDeleteModal: e(n.postId),
							dropdownId: "surface-".concat(s, "-").concat(n.id),
							isActive: n.id === this.props.activeLayerId,
							isCreationEnabled: r,
							isSurfacingEnabled: a,
							layer: n,
							key: "surface-".concat(s, "-").concat(n.id),
							onLayerSelect: this.onLayerSelectFromPanelFactory(n),
							onReferenceClick: b
						})) : l.a.createElement("p", {
							className: yt.a.surfaceEmptyText
						}, Ze.fbt._("Surface is empty, add some layers", null, {
							hk: "3iXJZp"
						}))))
					})))), l.a.createElement(gt, {
						value: i,
						onSearchTextChange: v
					}), l.a.createElement("div", {
						id: this.scrollContainerId,
						className: yt.a.scroller
					}, s && r && l.a.createElement(rt, {
						onEditDraft: h,
						onDeleteDraft: g
					}), n ? l.a.createElement(C.a, {
						center: !0,
						className: yt.a.loader,
						sizePx: x
					}) : l.a.createElement(Se.b, {
						getContainer: this.getContainer,
						loadMoreToken: P,
						onLoadMore: u,
						preventScrollOnMount: !0
					}, k)), l.a.createElement(it, null))
				}
			}
			var vt = ft,
				Et = s("./src/reddit/components/LayersEmbed/index.m.less"),
				Ct = s.n(Et);
			const Ot = Object(u.c)({
					isCreationEnabled: k.a,
					isSurfacingEnabled: k.d,
					isModerator: V.g,
					layerDraft: U.b
				}),
				jt = Object(m.b)(Ot, (e, t) => ({
					openEditor: t => e(b.g(t)),
					openLayerDraft: () => e(b.j()),
					deleteLayerDraft: () => e(b.h()),
					showToast: t => e(Object(h.e)(Object.assign({}, t, {
						duration: h.a
					})))
				}));
			class St extends l.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.layersFetchLimit = 25, this.updateComponentHeightTimeoutMs = 500, this.updateComponentHeight = () => {
						const e = document.querySelector(".".concat(Ct.a.fixedArWrapper));
						e && this.setState({
							componentHeight: "".concat(Math.floor(e.getBoundingClientRect().height), "px")
						})
					}, this.debouncedUpdateComponentHeight = r()(this.updateComponentHeight, this.updateComponentHeightTimeoutMs, {
						leading: !0,
						maxWait: this.updateComponentHeightTimeoutMs
					}), this.onLayerSelect = (e, t) => this.setState(s => {
						let n = e;
						return n && s.activeLayer && s.activeLayer.id === n.id && (n = null), {
							isInspectorActiveLayer: t,
							isPickerBoxEnabled: !1,
							activeLayer: n
						}
					}), this.hideDeleteModal = () => this.setState({
						layerToDeleteId: null,
						shouldShowDeleteModal: !1
					}), this.openDeleteModal = e => () => this.setState({
						layerToDeleteId: e,
						shouldShowDeleteModal: !0
					}), this.deleteLayer = async () => {
						const {
							apiContext: e,
							showToast: t
						} = this.props;
						if (this.state.layerToDeleteId)
							if ((await Object(O.l)(e(), this.state.layerToDeleteId, !1)).ok) {
								t(Object(h.d)(Object(W.c)("Post has been deleted"), H.b.SuccessMod))
							} else {
								t(Object(h.d)(Object(W.c)("Post has not been deleted"), H.b.Error))
							}
					}, this.syncPersistedSurfaces = () => {
						const e = Object.keys(this.state.surfaces).reduce((e, t) => {
							const s = this.state.surfaces[t];
							return Object.assign({}, e, {
								[t]: s ? s.map(e => e.id) : null
							})
						}, {});
						Object(D.Z)(e)
					}, this.addSurface = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
						const s = Object.keys(t.state.surfaces).length;
						s >= 10 ? t.props.showToast(Object(h.d)(Object(W.c)("Maximum number of surfaces reached"), H.b.Error)) : t.setState(t => {
							const s = t.latestSurfaceId + 1;
							return {
								latestSurfaceId: s,
								currentSurfaceId: String(s),
								surfaces: Object.assign({}, t.surfaces, {
									[String(s)]: e.length ? [...e] : []
								})
							}
						}, t.syncPersistedSurfaces)
					}, this.duplicateSurface = e => {
						const t = this.state.surfaces[e];
						t && this.addSurface(t)
					}, this.removeSurface = e => this.setState(t => ({
						surfaces: c()(t.surfaces, e),
						currentSurfaceId: t.currentSurfaceId === e ? null : t.currentSurfaceId
					}), this.syncPersistedSurfaces), this.toggleSurface = e => {
						this.state.surfaces[e] && this.setState(t => ({
							currentSurfaceId: t.currentSurfaceId !== e ? e : null
						}))
					}, this.addLayerToCurrentSurface = e => {
						const {
							currentSurfaceId: t,
							surfaces: s
						} = this.state;
						if (0 === Object.keys(s).length) return void this.addSurface([e]);
						if (!t) {
							const e = Object(h.d)(Object(W.c)("Please select surface to add layer."), H.b.Error);
							return void this.props.showToast(e)
						}
						const n = this.state.surfaces[t];
						n && (n.length >= f ? this.props.showToast(Object(h.d)(Object(W.c)("Layers per surface limit exceeded."), H.b.Error)) : this.setState(s => ({
							surfaces: Object.assign({}, s.surfaces, {
								[t]: [...n || [], e]
							})
						}), this.syncPersistedSurfaces))
					}, this.removeLayerFromSurface = e => {
						const {
							currentSurfaceId: t
						} = this.state;
						if (!t) return;
						const s = this.state.surfaces[t] || [];
						this.setState(n => ({
							surfaces: Object.assign({}, n.surfaces, {
								[t]: s.filter(t => t.id !== e)
							})
						}), this.syncPersistedSurfaces)
					}, this.loadSurfaces = async function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
							s = arguments.length > 1 ? arguments[1] : void 0;
						const n = Object.keys(s);
						let r = 0;
						n.length && (r = Math.max(...n.map(e => Number(e))));
						const a = t.getSurfaceLayersFromUrlParams(e, s);
						if (a && a.length) {
							r += 1;
							const e = String(r);
							n.push(e), s[e] = [...a]
						}
						t.setState({
							latestSurfaceId: r,
							currentSurfaceId: e && r ? String(r) : null,
							surfaces: Object.assign({}, n.reduce((e, t) => Object.assign({}, e, {
								[t]: null
							}), {}))
						});
						const o = [...new Set(n.reduce((e, t) => [...e, ...s[t]], []))],
							i = await t.loadSurfaceByLayerIds(o);
						if (!i) return;
						const c = i.filter(Boolean).reduce((e, t) => Object.assign({}, e, {
								[t.id]: t
							}), {}),
							d = n.reduce((e, t) => Object.assign({}, e, {
								[t]: s[t].map(e => c[e]).filter(Boolean)
							}), {});
						Object.keys(d).length && t.setState(e => ({
							surfaces: Object.assign({}, e.surfaces, d)
						}), t.syncPersistedSurfaces)
					}, this.getSurfaceLayersFromUrlParams = (e, t) => {
						const s = new RegExp("^[0-9]+$"),
							n = [...new Set(e.split(",").filter(e => s.test(e)))];
						if (!this.isSurfaceIsDuplicate(n, t)) return n
					}, this.isSurfaceIsDuplicate = (e, t) => !!Object.keys(t).find(s => {
						if (t[s].length !== e.length) return !1;
						for (let n = 0; n < e.length; n++)
							if (e[n] !== t[s][n]) return !1;
						return !0
					}), this.onAddLayerClick = () => this.setState(e => ({
						activeLayer: null,
						isPickerBoxEnabled: !e.isPickerBoxEnabled
					})), this.onBackgroundSelect = (e, t) => {
						const s = new Image;
						s.onload = () => {
							this.props.openEditor({
								background: s,
								box: t
							}), this.props.sendEvent(A.c)
						}, s.src = e, this.setState({
							isPickerBoxEnabled: !1
						})
					}, this.fetchLayersConfigFromGql = async () => {
						const {
							gqlContext: e,
							subredditId: t
						} = this.props;
						this.setState({
							layersConfig: null,
							layersConfigRequestInProgress: !0,
							layersConfigRequestFailed: !1
						});
						const s = await _(e(), t);
						let n = null,
							r = !1;
						if (s.ok) {
							n = T(s.body.data.subreddit)[t] || null
						} else r = !0;
						this.setState({
							layersConfig: n,
							layersConfigRequestFailed: r,
							layersConfigRequestInProgress: !1
						})
					}, this.fetchLayersFromGql = async () => {
						if (this.state.layersRequestInProgress) return;
						const {
							gqlContext: e,
							subredditId: t
						} = this.props;
						this.setState({
							layersRequestInProgress: !0,
							layersRequestFailed: !1
						});
						let s = this.state.layersCursor;
						const n = await P(e(), t, this.layersFetchLimit, s);
						let r = this.state.layers && this.state.layers.slice() || [],
							a = !1;
						if (n.ok) {
							const e = F(n.body.data.subreddit)[t];
							e && (r = e.layers && e.layers.length ? [...r, ...e.layers] : r, s = e.cursor || s)
						} else a = !0;
						this.setState({
							layers: r,
							layersCursor: s,
							layersRequestFailed: a,
							layersRequestInProgress: !1
						})
					}, this.loadSurfaceByLayerIds = async e => {
						if (this.state.surfaceLayersRequestInProgress) return;
						if (!e || 0 === e.length) return [];
						this.setState({
							surfaceLayersRequestInProgress: !0
						});
						const {
							gqlContext: t,
							subredditId: s
						} = this.props, n = await I(t(), s, e);
						if (n.ok) {
							const e = L(n.body.data.subreddit)[s];
							return e && e.length ? this.props.showToast(Object(h.d)(Object(W.c)("Surfaces have been loaded"), H.b.SuccessCommunityGreen)) : this.props.showToast(Object(h.d)(Object(W.c)("Surfaces have not been loaded, something went wrong"), H.b.Error)), this.setState({
								surfaceLayersRequestInProgress: !1
							}), e
						}
					}, this.getNormalizedLayersFromResponse = (e, t) => {
						const s = F(e.body.data.subreddit)[t];
						return s && s.layers || null
					}, this.fetchInspectorLayersFromGql = async e => {
						const {
							gqlContext: t,
							subredditId: s
						} = this.props;
						let n = this.state.layersInspectedCursor;
						o()(e, this.state.layersInspectedBox) ? this.setState({
							layersInspectedRequestInProgress: !0,
							layersInspectedRequestFailed: !1
						}) : (n = "", this.setState({
							layersInspectedBox: e,
							layersInspectedCursor: n,
							layersInspected: null,
							layersInspectedRequestInProgress: !0,
							layersInspectedRequestFailed: !1
						}));
						const r = await P(t(), s, this.layersFetchLimit, n, e);
						let a = this.state.layersInspected && this.state.layersInspected.slice() || [],
							i = !1;
						if (r.ok) {
							const e = F(r.body.data.subreddit)[s];
							e && (a = e.layers && e.layers.length ? [...a, ...e.layers] : a, n = e.cursor || n)
						} else i = !0;
						this.setState({
							layersInspected: a,
							layersInspectedCursor: n,
							layersInspectedRequestFailed: i,
							layersInspectedRequestInProgress: !1
						})
					}, this.fetchSearchLayersFromGql = async () => {
						const {
							gqlContext: e,
							subredditId: t
						} = this.props, {
							layersSearchValue: s
						} = this.state;
						if (!s || s.length < 2) return;
						this.setState({
							layersSearchResult: null,
							layersSearchedRequestInProgress: !0,
							layersSearchedRequestFailed: !1
						});
						const n = await P(e(), t, this.layersFetchLimit, void 0, void 0, s);
						let r = null,
							a = !1;
						n.ok ? r = this.getNormalizedLayersFromResponse(n, t) : a = !0, this.setState({
							layersSearchResult: r,
							layersSearchedRequestFailed: a,
							layersSearchRequestCompleted: !0,
							layersSearchedRequestInProgress: !1
						})
					}, this.debouncedFetchSearchLayersFromGql = r()(this.fetchSearchLayersFromGql, 1e3, {
						leading: !0
					}), this.handleSearchTextChange = e => {
						this.setState(Object.assign({
							layersSearchRequestCompleted: !1,
							layersSearchValue: e.target.value
						}, e.target.value ? {} : {
							layersSearchResult: null
						}), this.debouncedFetchSearchLayersFromGql)
					}, this.state = {
						activeLayer: null,
						componentHeight: "",
						isPickerBoxEnabled: !1,
						isInspectorActiveLayer: !1,
						layersConfig: null,
						layersConfigRequestInProgress: !1,
						layersConfigRequestFailed: !1,
						layers: null,
						layersCursor: "",
						layersRequestInProgress: !1,
						layersRequestFailed: !1,
						layersInspected: null,
						layersInspectedBox: null,
						layersInspectedCursor: "",
						layersInspectedRequestInProgress: !1,
						layersInspectedRequestFailed: !1,
						layersSearchValue: "",
						layersSearchResult: null,
						layersSearchedRequestInProgress: !1,
						layersSearchedRequestFailed: !1,
						layersSearchRequestCompleted: !0,
						layerToDeleteId: null,
						shouldShowDeleteModal: !1,
						surfaces: {},
						currentSurfaceId: null,
						latestSurfaceId: 0,
						surfaceLayersRequestInProgress: !1
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.debouncedUpdateComponentHeight), this.updateComponentHeight(), this.fetchLayersConfigFromGql(), this.fetchLayersFromGql();
					const e = Object(p.a)().get("surfaceLayers"),
						t = Object(D.x)() || {};
					this.loadSurfaces(e, t)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.debouncedUpdateComponentHeight), this.props.deleteLayerDraft()
				}
				render() {
					const {
						activeLayer: e,
						isInspectorActiveLayer: t,
						isPickerBoxEnabled: s,
						layers: n,
						layersConfig: r,
						layersSearchResult: a,
						layersSearchValue: o,
						layersRequestInProgress: i,
						layersSearchedRequestInProgress: c,
						layersSearchRequestCompleted: d,
						shouldShowDeleteModal: m,
						surfaces: u,
						currentSurfaceId: p,
						surfaceLayersRequestInProgress: b
					} = this.state, {
						isCreationEnabled: h,
						isSurfacingEnabled: y,
						isModerator: f,
						subredditName: v,
						showToast: E
					} = this.props;
					let O = null;
					O = r ? l.a.createElement(Ke, {
						activeLayer: e,
						fetchInspectorLayers: this.fetchInspectorLayersFromGql,
						isCreationEnabled: h,
						isSurfacingEnabled: y,
						isInspectorActiveLayer: t,
						isModerator: f,
						isPickerBoxEnabled: s,
						layersConfig: r,
						layersInspected: this.state.layersInspected,
						layersInspectedRequestInProgress: this.state.layersInspectedRequestInProgress,
						layersInspectedRequestFailed: this.state.layersInspectedRequestFailed,
						onBackgroundSelect: this.onBackgroundSelect,
						onLayerSelect: this.onLayerSelect,
						openDeleteModal: this.openDeleteModal,
						surfaces: u,
						currentSurfaceId: p,
						addLayerToSurface: this.addLayerToCurrentSurface,
						removeLayerFromSurface: this.removeLayerFromSurface
					}) : l.a.createElement("div", {
						className: Ct.a.loaderWrapper
					}, l.a.createElement(C.a, {
						sizePx: x
					}));
					const j = !n && i;
					return l.a.createElement("div", {
						className: Ct.a.container
					}, l.a.createElement("div", {
						className: Ct.a.colCanvas
					}, l.a.createElement("div", {
						className: Ct.a.fixedArWrapper
					}, l.a.createElement("div", {
						className: Ct.a.fixedArInner
					}, O))), l.a.createElement("div", {
						style: {
							height: this.state.componentHeight
						},
						className: Ct.a.colPanel
					}, l.a.createElement(vt, {
						activeLayerId: e && e.id || null,
						isLoading: j || c,
						isCreationEnabled: h,
						isSurfacingEnabled: y,
						isPickerBoxEnabled: s,
						isModerator: f,
						hasLayerDraft: !!this.props.layerDraft,
						layersSearchValue: o,
						layers: n,
						layersSearchResult: a,
						layersSearchRequestCompleted: d,
						onAddLayerClick: this.onAddLayerClick,
						onLayerSelect: this.onLayerSelect,
						onLoadMore: this.fetchLayersFromGql,
						onReferenceClick: this.onBackgroundSelect,
						onEditDraft: this.props.openLayerDraft,
						onDeleteDraft: this.props.deleteLayerDraft,
						onLayersSearch: this.handleSearchTextChange,
						openDeleteModal: this.openDeleteModal,
						subredditName: v,
						surfaces: u,
						currentSurfaceId: p,
						addSurface: this.addSurface,
						duplicateSurface: this.duplicateSurface,
						removeSurface: this.removeSurface,
						toggleSurface: this.toggleSurface,
						addLayerToSurface: this.addLayerToCurrentSurface,
						removeLayerFromSurface: this.removeLayerFromSurface,
						isSurfaceLoading: b,
						showToast: E
					})), f && m && this.state.layerToDeleteId && l.a.createElement(g.a, {
						toggleModal: this.hideDeleteModal,
						onConfirm: this.deleteLayer,
						actionText: Object(W.c)("delete post"),
						headerText: Object(W.c)("Delete post?"),
						modalText: Object(W.c)("Are you sure you want to delete this post? You can't undo this."),
						withOverlay: !0
					}))
				}
			}
			t.a = jt(Object(E.b)(Object(v.b)(St)))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.t)(),
				g = Object(o.c)({
					layout: m.M
				}),
				x = Object(a.b)(g);
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(p.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.n + c.r + c.s,
						t = l.a - e,
						s = c.h - t,
						n = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(n, "px) {\n              .").concat(p.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.h + c.r + c.s, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.s, "px) / 2);\n              }\n\n              .").concat(p.a.Component, ".").concat(p.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.h + c.r + c.s, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return r.a.createElement("div", {
						className: p.a.Container
					}, r.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(x(b.a.wrapped(y, "Component", p.a)))
		},
		"./src/reddit/components/LayoutNavigation/Container.m.less": function(e, t, s) {
			e.exports = {
				BodyContainer: "_1levonEFuP4txDjgWG4Akb",
				bodyContainer: "_1levonEFuP4txDjgWG4Akb",
				SidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				sidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				"m-collectionLayout": "_2QBg8k5_IhSEfaeA4P26Ix",
				mCollectionLayout: "_2QBg8k5_IhSEfaeA4P26Ix",
				InnerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				innerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				Component: "_12Ewyh01Y1cMPB3Ri_F1C4",
				component: "_12Ewyh01Y1cMPB3Ri_F1C4"
			}
		},
		"./src/reddit/components/LayoutNavigation/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				d = s("./src/reddit/layout/page/Listing/Content.tsx"),
				l = s("./src/reddit/selectors/structuredStyles.ts"),
				m = s("./src/reddit/selectors/userPrefs.ts"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/Container.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const g = h.a.div("BodyContainer", b.a),
				x = h.a.div("SidebarPlaceholder", b.a),
				y = h.a.div("InnerContainer", b.a),
				f = Object(o.c)({
					bladeOpen: e => !!Object(l.j)(e),
					isSubscriptionsPinned: m.b
				}),
				v = Object(a.b)(f);
			class E extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0
					}
				}
				componentDidMount() {
					const e = () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(c.c)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				render() {
					const {
						bladeOpen: e,
						considerPinnedSubscriptions: t = !0,
						containerClassName: s,
						isSubscriptionsPinned: n,
						considerSidebar: a = !0,
						onFocus: o,
						onBlur: c
					} = this.props;
					let l = 0;
					return n && !e && t && (l += i.v), 0 !== this.state.bodyScrollOffset && (l -= this.state.bodyScrollOffset), r.a.createElement("div", {
						className: this.props.className
					}, r.a.createElement(g, {
						onFocus: o,
						onBlur: c
					}, r.a.createElement(d.a, {
						fitPageToContent: !0
					}, r.a.createElement(y, {
						className: s
					}, r.a.createElement(u.a, {
						bladeOpen: e,
						considerSidebar: a,
						offsetLeft: l,
						render: this.props.render
					}))), a && r.a.createElement(x, null)))
				}
			}
			t.a = h.a.wrapped(v(E), "Component", b.a)
		},
		"./src/reddit/components/LayoutNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				listingSort: "_3E6INjIzonJwM0r4N1QJYK",
				separator: "lMwVtd6llwkRVdjCNiCAl"
			}
		},
		"./src/reddit/components/LayoutNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-redux/es/index.js")),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				h = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/higherOrderComponents/asTooltip.tsx")),
				g = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/app/strings/index.ts");
			const f = {
				[i.Lb.AllStates]: Object(y.e)("stateSorts.allStates"),
				[i.Lb.Alaska]: Object(y.e)("stateSorts.alaska"),
				[i.Lb.Alabama]: Object(y.e)("stateSorts.alabama"),
				[i.Lb.Arkansas]: Object(y.e)("stateSorts.arkansas"),
				[i.Lb.Arizona]: Object(y.e)("stateSorts.arizona"),
				[i.Lb.California]: Object(y.e)("stateSorts.california"),
				[i.Lb.Colorado]: Object(y.e)("stateSorts.colorado"),
				[i.Lb.Connecticut]: Object(y.e)("stateSorts.connecticut"),
				[i.Lb.DistrictOfColumbia]: Object(y.e)("stateSorts.districtOfColumbia"),
				[i.Lb.Delaware]: Object(y.e)("stateSorts.delaware"),
				[i.Lb.Florida]: Object(y.e)("stateSorts.florida"),
				[i.Lb.Georgia]: Object(y.e)("stateSorts.georgia"),
				[i.Lb.Hawaii]: Object(y.e)("stateSorts.hawaii"),
				[i.Lb.Iowa]: Object(y.e)("stateSorts.iowa"),
				[i.Lb.Idaho]: Object(y.e)("stateSorts.idaho"),
				[i.Lb.Illinois]: Object(y.e)("stateSorts.illinois"),
				[i.Lb.Indiana]: Object(y.e)("stateSorts.indiana"),
				[i.Lb.Kansas]: Object(y.e)("stateSorts.kansas"),
				[i.Lb.Kentucky]: Object(y.e)("stateSorts.kentucky"),
				[i.Lb.Louisiana]: Object(y.e)("stateSorts.louisiana"),
				[i.Lb.Massachusetts]: Object(y.e)("stateSorts.massachusetts"),
				[i.Lb.Maryland]: Object(y.e)("stateSorts.maryland"),
				[i.Lb.Maine]: Object(y.e)("stateSorts.maine"),
				[i.Lb.Michigan]: Object(y.e)("stateSorts.michigan"),
				[i.Lb.Minnesota]: Object(y.e)("stateSorts.minnesota"),
				[i.Lb.Missouri]: Object(y.e)("stateSorts.missouri"),
				[i.Lb.Mississippi]: Object(y.e)("stateSorts.mississippi"),
				[i.Lb.Montana]: Object(y.e)("stateSorts.montana"),
				[i.Lb.NorthCarolina]: Object(y.e)("stateSorts.northCarolina"),
				[i.Lb.NorthDakota]: Object(y.e)("stateSorts.northDakota"),
				[i.Lb.Nebraska]: Object(y.e)("stateSorts.nebraska"),
				[i.Lb.NewHampshire]: Object(y.e)("stateSorts.newHampshire"),
				[i.Lb.NewJersey]: Object(y.e)("stateSorts.newJersey"),
				[i.Lb.NewMexico]: Object(y.e)("stateSorts.newMexico"),
				[i.Lb.Nevada]: Object(y.e)("stateSorts.nevada"),
				[i.Lb.NewYork]: Object(y.e)("stateSorts.newYork"),
				[i.Lb.Ohio]: Object(y.e)("stateSorts.ohio"),
				[i.Lb.Oklahoma]: Object(y.e)("stateSorts.oklahoma"),
				[i.Lb.Oregon]: Object(y.e)("stateSorts.oregon"),
				[i.Lb.Pennsylvania]: Object(y.e)("stateSorts.pennsylvania"),
				[i.Lb.RhodeIsland]: Object(y.e)("stateSorts.rhodeIsland"),
				[i.Lb.SouthCarolina]: Object(y.e)("stateSorts.southCarolina"),
				[i.Lb.SouthDakota]: Object(y.e)("stateSorts.southDakota"),
				[i.Lb.Tennessee]: Object(y.e)("stateSorts.tennessee"),
				[i.Lb.Texas]: Object(y.e)("stateSorts.texas"),
				[i.Lb.Utah]: Object(y.e)("stateSorts.utah"),
				[i.Lb.Virginia]: Object(y.e)("stateSorts.virginia"),
				[i.Lb.Vermont]: Object(y.e)("stateSorts.vermont"),
				[i.Lb.Washington]: Object(y.e)("stateSorts.washington"),
				[i.Lb.Wisconsin]: Object(y.e)("stateSorts.wisconsin"),
				[i.Lb.WestVirginia]: Object(y.e)("stateSorts.westVirginia"),
				[i.Lb.Wyoming]: Object(y.e)("stateSorts.wyoming")
			};
			var v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/contexts/Tooltip.ts"),
				C = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/StateSort/index.m.less"),
				N = s.n(w);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = g.a.wrapped(C.a, "_Dropdown", N.a),
				I = Object(h.a)(P),
				k = e => {
					return e.indexOf("_") > 0 && T(e) === i.v.UnitedStates
				},
				L = e => {
					if (k(e)) {
						return e.split("_")[1]
					}
					return i.Lb.AllStates
				},
				T = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				M = e => {
					const t = T(e),
						s = L(e);
					return k(e) ? "".concat(t, "_").concat(s) : t
				},
				B = Object(v.t)(),
				R = Object(o.c)({
					dropdownIsOpen: Object(j.b)("StateSort--StateSortPicker"),
					language: S.S
				}),
				F = Object(a.b)(R, e => ({
					onOpenDropdown: () => e(Object(u.g)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(i.v.UnitedStates + "_" + s))
					}
				}));
			var D = g.a.wrapped(B(F(e => {
					const t = "".concat(e.baseUrl, "?").concat(x.g, "=").concat(i.v.UnitedStates);
					return r.a.createElement("div", {
						className: e.className,
						onClick: e.onOpenDropdown
					}, r.a.createElement(b.c, {
						disabled: e.disabled
					}, r.a.createElement(b.b, {
						displayText: f[e.sort](e.language),
						id: "StateSort--StateSortPicker",
						showDropdownTriangle: !0
					})), r.a.createElement(E.a.Consumer, null, s => r.a.createElement(I, _({
						isOpen: e.dropdownIsOpen,
						tooltipId: "StateSort--StateSortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(i.Lb).map(s => r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === i.Lb.AllStates ? t : "".concat(t, "_").concat(e))(i.Lb[s]), M(i.Lb[s]))
					}, r.a.createElement(O.b, {
						displayText: f[i.Lb[s]](e.language),
						isSelected: e.sort === s
					}))))))
				})), "Component", N.a),
				A = s("./src/reddit/constants/countrySorts.ts"),
				W = s("./src/reddit/components/CountrySort/index.m.less"),
				H = s.n(W);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(v.t)(),
				G = Object(o.c)({
					dropdownIsOpen: Object(j.b)("CountrySort--CountrySortPicker"),
					language: S.S
				});
			var z = V(Object(a.b)(G, e => ({
					onOpenDropdown: t => e(Object(u.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(s))
					}
				}))(e => {
					const t = T(e.sort),
						s = L(e.sort),
						n = "".concat(e.baseUrl, "?").concat(x.g, "=");
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(p.a)(H.a.countrySort, e.className),
						onClick: () => e.onOpenDropdown("CountrySort--CountrySortPicker")
					}, r.a.createElement(b.c, {
						disabled: e.disabled
					}, r.a.createElement(b.b, {
						displayText: (() => t in A.a ? A.a[t] : A.a[i.v.Everywhere])(),
						id: "CountrySort--CountrySortPicker",
						showDropdownTriangle: !0
					})), r.a.createElement(E.a.Consumer, null, s => r.a.createElement(I, U({
						isOpen: e.dropdownIsOpen,
						tooltipId: "CountrySort--CountrySortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(i.v).map(s => r.a.createElement("div", {
						key: s,
						onClick: () => e.onClickLink("".concat(n).concat(M(i.v[s])), i.v[s])
					}, r.a.createElement(O.b, {
						displayText: A.a[i.v[s]],
						isSelected: t === s
					})))))), t === i.v.UnitedStates && r.a.createElement(D, {
						baseUrl: e.baseUrl,
						disabled: e.disabled,
						sort: s
					}))
				})),
				q = s("./src/reddit/components/TimeSort/index.tsx"),
				K = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Z = s("./src/reddit/constants/page.ts"),
				J = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				Q = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Y = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				X = s.n(Y);
			const $ = Object(v.t)({
					isProfilePage: v.H,
					pageLayer: e => e
				}),
				ee = Object(o.c)({
					currentUser: S.i,
					language: S.S,
					isPopularListing: v.D,
					redditStyle: v.B
				}),
				te = Object(a.b)(ee, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const r = Object(c.c)({
									sort: t,
									timeSort: n
								});
								e(Object(l.G)(s, r))
							}
						}
					}
				});
			t.a = $(te(Object(K.b)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: n
				} = e, a = e.sort === i.N.TOP || e.sort === i.N.CONTROVERSIAL, o = s && e.countrySort && e.sort === i.N.HOT, c = e => {
					Q.a.setState({
						isListingFocused: e
					})
				};
				return r.a.createElement(d.a, {
					className: e.className,
					onFocus: () => c(!0),
					onBlur: () => c(!1),
					render: s => r.a.Children.toArray([n ? null : r.a.createElement(J.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), n ? null : r.a.createElement("div", {
						className: X.a.separator
					}), r.a.createElement(b.d, {
						className: X.a.listingSort,
						baseUrl: e.baseUrl,
						disabled: t,
						geopopularSort: e.countrySort,
						onChange: e.updateSortPreference,
						sort: e.sort,
						sortOptions: e.sortOptions
					}), !t && a && [r.a.createElement(q.a, {
						baseUrl: "".concat(e.baseUrl, "/").concat(e.sort),
						listingSort: e.sort,
						onChange: t => e.updateSortPreference(e.sort, t),
						timeSort: e.timeSort || i.Pb
					})], o && r.a.createElement(z, {
						baseUrl: e.isPopularListing ? "/r/".concat(Z.g, "/") : "",
						disabled: t,
						sort: e.countrySort
					})])
				})
			})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				r = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(n.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/svgs/Best/index.m.less"),
				c = s.n(i);
			var d = e => r.a.createElement("svg", {
					className: Object(a.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), r.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				l = s("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = s.n(l);
			var u = e => r.a.createElement("svg", {
					className: Object(a.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				p = s("./src/reddit/icons/svgs/Hot/index.m.less"),
				b = s.n(p);
			var h = e => r.a.createElement("svg", {
					className: Object(a.a)(b.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("title", null, "Hot"), r.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				g = s("./src/reddit/icons/svgs/New/index.m.less"),
				x = s.n(g);
			var y = e => r.a.createElement("svg", {
					className: Object(a.a)(x.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				f = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				v = s.n(f);
			var E = e => r.a.createElement("svg", {
					className: Object(a.a)(v.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				C = s("./src/reddit/icons/svgs/Top/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/index.m.less"),
				j = s.n(O);
			const S = {
				[o.N.BEST]: d,
				[o.N.HOT]: h,
				[o.N.NEW]: y,
				[o.N.CONTROVERSIAL]: u,
				[o.N.TOP]: C.a,
				[o.N.RISING]: E
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const n = S[s];
				return n ? r.a.createElement(n, {
					className: Object(a.a)(t, j.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				ListingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW",
				listingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW"
			}
		},
		"./src/reddit/components/ListingSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return L
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "c", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/listingSorts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/path/index.ts"),
				f = s("./src/reddit/helpers/trackers/navigation.ts"),
				v = s("./src/reddit/i18n/components.tsx"),
				E = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				S = s("./src/reddit/components/ListingSort/index.m.less"),
				w = s.n(S),
				N = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var P = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const I = "ListingSort--SortPicker",
				k = Object(i.a)(N.a.wrapped(g.a, "Dropdown", w.a)),
				L = N.a.wrapped(j.a, "ListingSortIcon", w.a),
				T = (N.a.wrapped(E.b, "DropdownTriangle", w.a), N.a.div("Title", w.a)),
				M = N.a.wrapped(e => r.a.createElement(x.b, _({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", w.a),
				B = e => {
					var {
						disabled: t
					} = e, s = P(e, ["disabled"]);
					return r.a.createElement("div", _({}, s, {
						className: Object(d.a)(w.a.SortWrapper, s.className, {
							[w.a.isDisabled]: t
						})
					}))
				},
				R = N.a.div("DropdownRowDisabled", w.a),
				F = Object(b.t)({
					isFrontpage: b.z,
					isProfilePage: b.H,
					pageLayer: e => e
				}),
				D = Object(o.c)({
					user: O.i,
					dropdownIsOpen: (e, t) => Object(C.b)(t.dropdownId || I)(e),
					language: O.S
				}),
				A = Object(a.b)(D, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(m.g)({
							tooltipId: s || I
						}))
					}
				});
			t.d = N.a.wrapped(F(A(Object(u.b)(e => r.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && r.a.createElement(T, null, r.a.createElement(v.c, null, "Sort")), r.a.createElement(B, {
				disabled: e.disabled
			}, e.children || r.a.createElement(M, {
				className: e.buttonClassName,
				displayText: p.a[e.sort],
				id: e.dropdownId || I,
				showDropdownTriangle: !0
			}, r.a.createElement(L, {
				sort: e.sort
			}))), r.a.createElement(h.a.Consumer, null, t => r.a.createElement(k, _({
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || I
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? r.a.createElement(R, null, r.a.createElement(v.c, null, "Coming soon")) : (e.sortOptions || ((e, t) => {
				const s = [l.N.HOT, l.N.NEW, l.N.TOP, l.N.RISING];
				return e && t && s.unshift(l.N.BEST), s
			})(e.isFrontpage, e.user)).map(t => r.a.createElement(x.b, {
				className: Object(d.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: p.a[t],
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(f.d)(t))
				},
				href: e.isProfilePage ? Object(c.a)(e.baseUrl, {
					sort: t
				}) : Object(y.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, r.a.createElement(L, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", w.a)
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				chain: "vLpzNkGe1yVXuRgtBVQWk",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
		},
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return ee
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/inFeedChaining.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/CallToActionButton/index.tsx"),
				b = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				g = s("./src/reddit/components/FlairWrapper/index.tsx"),
				x = s("./src/reddit/components/Flatlist/index.tsx"),
				y = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				f = s("./src/reddit/components/LargePost/index.tsx"),
				v = s("./src/reddit/components/ModModeReports/index.tsx"),
				E = s("./src/reddit/components/ModModeReports/helpers.ts"),
				C = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.tsx"),
				j = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				S = s("./src/reddit/components/PostTitle/index.tsx"),
				w = s("./src/reddit/components/PostTopLine/index.tsx"),
				N = s("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = s("./src/reddit/components/SourceLink/index.tsx"),
				P = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				I = s("./src/reddit/components/Thumbnail/index.tsx"),
				k = s("./src/reddit/constants/posts.ts"),
				L = s("./src/reddit/contexts/InsideOverlay.tsx"),
				T = s("./src/reddit/contexts/PageLayer/index.tsx"),
				M = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				B = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				R = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				F = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				D = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				A = s("./src/reddit/helpers/trackers/post.ts"),
				W = s("./src/reddit/models/Subreddit/index.ts"),
				H = s("./src/reddit/models/Vote/index.ts"),
				U = s("./src/reddit/selectors/experiments/categories.ts"),
				V = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				G = s("./src/reddit/selectors/inFeedChaining.ts"),
				z = s("./src/reddit/selectors/moderatorPermissions.ts"),
				q = s("./src/reddit/selectors/monthsToMinutes.ts"),
				K = s("./src/reddit/selectors/postFlair.ts"),
				Z = s("./src/reddit/selectors/posts.ts"),
				J = s("./src/reddit/selectors/user.ts"),
				Q = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Y = s.n(Q),
				X = s("./src/reddit/components/MediumPost/index.m.less"),
				$ = s.n(X);
			const ee = e => {
					let {
						crosspost: t,
						post: s,
						forceShowNSFW: n,
						redditStyle: a,
						shouldShowSubscribeButton: o,
						subredditOrProfile: i,
						templatePlaceholderImage: d
					} = e;
					return r.a.createElement("div", {
						className: Object(c.a)($.a.thumbnailContainer, {
							[$.a.mShowingButtonOrOverflow]: o
						})
					}, r.a.createElement("div", {
						className: $.a.thumbnailContainerRow
					}, o && i && r.a.createElement(P.a, {
						className: $.a.subscribeButton,
						getEventFactory: e => Object(A.f)(s.id, e ? "unsubscribe" : "subscribe"),
						identifier: {
							name: i.name,
							type: Object(W.d)(i) ? k.a.PROFILE : k.a.SUBREDDIT
						},
						postId: s.id
					})), r.a.createElement(I.a, {
						crosspost: t,
						post: s,
						redditStyle: a,
						forceShowNSFW: n,
						templatePlaceholderImage: d
					}))
				},
				te = Object(a.b)(() => Object(o.c)({
					crosspost: Z.c,
					currentUser: J.i,
					flairStyleTemplate: T.Q,
					hideNSFWPref: J.z,
					isActive: Z.g,
					isCurrentUserProfilePost: Z.h,
					isFrontpageHome: q.g,
					isM2MHomeRedirectEnabled: V.c,
					isPostChainDismissed: G.c,
					isPostChained: G.d,
					language: J.S,
					moderatorPermissions: z.i,
					modModeEnabled: T.O,
					post: Z.J,
					showEditFlair: K.a,
					showMedia: T.r,
					isInCategoriesExperiment: U.a,
					subredditOrProfile: Z.U
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: r
					} = t;
					return {
						chainPost: () => {
							n && s && e(Object(d.d)({
								listingKey: s,
								listingName: n,
								postId: r
							}))
						},
						handleVote: t => t === H.a.upvoted ? e(Object(l.N)(r)) : e(Object(l.o)(r)),
						onIgnoreReports: () => e(Object(l.L)(r)),
						onOpenReportsDropdown: t => e(Object(m.g)({
							tooltipId: t
						}))
					}
				});
			t.b = te(Object(L.b)(e => {
				const {
					chainPost: t,
					className: s,
					crosspost: n,
					currentUser: a,
					eventFactory: o,
					flairStyleTemplate: d,
					hideNSFWPref: l,
					inSubredditOrProfile: m = !1,
					isCheckboxSelected: P,
					isCommentsPage: I,
					isCurrentUserProfilePost: k,
					isFrontpage: L,
					isFrontpageHome: T,
					isM2MHomeRedirectEnabled: A,
					isOverlay: W,
					isPostChainDismissed: H,
					isPostChained: U,
					language: V,
					listingKey: G,
					listingName: z,
					moderatorPermissions: q,
					modModeEnabled: K,
					onClickPost: Z,
					onIgnoreReports: J,
					onOpenReportsDropdown: Q,
					post: X,
					redditStyle: te,
					showBulkActionCheckbox: se,
					showEditFlair: ne,
					showMedia: re,
					sendEvent: ae,
					subredditOrProfile: oe,
					toggleCheckbox: ie
				} = e, ce = te ? void 0 : d, de = Object(F.a)(q), le = K && de, me = Object(R.a)(q), ue = Object(E.c)(X), pe = Object(B.a)(X), be = m && !re, he = be && !!X.source && !n, ge = !(L && T || k), xe = r.a.createElement(O.a, {
					className: Object(c.a)($.a.container, s, Y.a.largeAndMediumPostStyles, Y.a.largeAndMediumActiveStyles, Object(D.a)(e), {
						[Y.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: W,
					style: Object(D.b)(e.flairStyleTemplate),
					post: X,
					onClick: Z,
					onPostContentClick: t,
					eventFactory: o
				}, Object(f.b)(X, e.handleVote, se, P, ie, ce, te), r.a.createElement(C.a, {
					className: $.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: ce,
					post: X,
					redditStyle: te
				}, r.a.createElement("article", {
					className: $.a.mainBody
				}, r.a.createElement("div", {
					className: $.a.content,
					"data-click-id": "body"
				}, r.a.createElement(w.a, {
					className: $.a.postTopLine,
					hideNSFWPref: l,
					iconClassName: $.a.postTopLineIcon,
					inSubredditOrProfile: m,
					isCommentsPage: I,
					isCurrentUserProfilePost: k,
					isOverlay: !!W,
					language: V,
					post: X,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: he,
					showSubreddit: !m && !X.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: oe
				}), r.a.createElement(S.c, {
					className: $.a.postTitle,
					post: X,
					redditStyle: te,
					size: S.b.Large,
					titleColor: ce && ce.postTitleColor,
					isM2MHomeRedirectEnabled: A,
					isOverlay: W
				}), I && (X.flair && X.flair.length > 0 || e.isInCategoriesExperiment) && r.a.createElement(g.a, {
					className: I ? $.a.leftPadding : null,
					disableFlair: !I,
					post: X,
					sendEvent: ae,
					showCategoryTag: e.isInCategoriesExperiment && I
				}), X.source && !X.isSponsored && !n && r.a.createElement(_.a, {
					className: $.a.sourceLink,
					isCommentsPage: I,
					post: X
				})), !be && pe && r.a.createElement(ee, {
					crosspost: n ? X : void 0,
					hasModPostPerms: de,
					isCommentsPage: I,
					isOverlay: W,
					modModeEnabled: K,
					post: n || X,
					redditStyle: te,
					shouldShowSubscribeButton: ge && !m,
					subredditOrProfile: oe,
					templatePlaceholderImage: ce && ce.postPlaceholderImage
				})), X.source && X.source.url && X.isSponsored && r.a.createElement(u.a, {
					className: $.a.adLinkWrapper
				}, r.a.createElement(M.a, {
					href: X.source.url.replace(i.a.redditUrl, ""),
					isSponsored: X.isSponsored,
					source: X.source
				}, X.source.displayText), X.callToAction && r.a.createElement(p.a, {
					href: X.source.url.replace(i.a.redditUrl, ""),
					isSponsored: X.isSponsored,
					source: X.source,
					isNotCardView: !0
				}, X.callToAction)), K && de && ue && r.a.createElement(v.a, {
					className: $.a.modModeReports,
					language: V,
					onIgnoreReports: J,
					reportable: X
				}), r.a.createElement(y.d, {
					postId: X.id
				}), r.a.createElement("div", {
					className: $.a.flatlistContainer
				}, r.a.createElement(b.a, {
					className: $.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: ce,
					redditStyle: te,
					model: X,
					onVoteClick: e.handleVote
				}), r.a.createElement(x.c, {
					currentUser: a,
					hasModFlairPerms: me,
					hasModPostPerms: de,
					isOverlay: !!W,
					language: V,
					modModeEnabled: K,
					onIgnoreReports: J,
					onOpenReportsDropdown: Q,
					post: X,
					showEditFlair: ne,
					tooltipType: W ? N.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(j.h)({
						editPost: !le,
						save: !le,
						hide: !1,
						report: !1
					})
				}))));
				return r.a.createElement(r.a.Fragment, null, xe, U && !H && r.a.createElement(h.a, {
					className: $.a.chain,
					listingKey: G,
					listingName: z,
					postId: X.id
				}))
			}))
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			const b = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", p.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					language: m,
					post: u,
					subredditOrProfile: h
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, t)
				}, r.a.createElement(d.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, r.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: h
				}), r.a.createElement("span", null, h.displayText)), ((e, t, s) => {
					if (s) return r.a.createElement("div", {
						role: "img",
						"aria-label": Object(a.a)(e, "posts.crosspostedByFrom", {
							by: Object(l.c)(t),
							from: s.displayText
						})
					}, r.a.createElement(b, null))
				})(m, u.author, s), h && h.isQuarantined && r.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "qxO-jkRl1-0EUFMSW12Wx",
				thumbnail: "_10app6y4qukOnb1vd3WjaL",
				content: "Dmp1nT-wBa1YnTs1m5Qh-",
				titleContainer: "_3zDhT2pkq9c_2I1Wc0TC7W",
				title: "_1baTc1hWul6JGRus85W_n9",
				subreddit: "_1QAmOEgKAW-xepM1iAQ1vt",
				subredditIcon: "_2kjKnQFVUV8rujMRQ0FJcM",
				subredditName: "_1gWkHloK0RuxI3PqEBqAlk",
				comments: "_3Se1TreUiuh_QYZKmggj-E",
				share: "_1auh4Ct-kA4za4GqRMTChm",
				ellipsis: "_3KZqW8v85dlRDNmHXcrU5X",
				emptyScore: "_1vYoQQMevPpZ7Szpl9imM",
				emptyVotes: "zNcTz0MkZAJvitPlo_eI7"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, r.a.createElement(o.a, {
					className: Object(a.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(a.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(a.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/MiniCardPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/isUrl/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/Media/index.tsx"),
				h = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				E = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				C = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				O = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Vote/index.ts"),
				S = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				N = s("./src/reddit/selectors/postFlair.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/CommentsLink/index.tsx"),
				k = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = s("./src/reddit/components/Flatlist/index.tsx"),
				T = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				B = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				R = s("./src/reddit/components/ShareMenu/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				D = s("./src/reddit/constants/postLayout.ts"),
				A = s("./src/reddit/helpers/trackers/post.ts"),
				W = s("./src/reddit/i18n/components.tsx"),
				H = s("./src/reddit/icons/fonts/Share/index.tsx"),
				U = s("./src/reddit/models/User/index.ts"),
				V = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				G = s.n(V),
				z = s("./src/lib/lessComponent.tsx");
			const q = "-MiniCardModMenu",
				K = "-MiniCardOverflowMenu",
				Z = "-MiniCardShareMenu",
				J = z.a.wrapped(k.a, "HorizontalVotes", G.a),
				Q = z.a.button("ShareButton", G.a),
				Y = Object(f.t)({
					currentProfileName: f.h,
					isCommentPermalink: f.v,
					isCommentsPage: f.w,
					isProfilePostListing: f.I,
					pageLayer: e => e
				}),
				X = Object(o.c)({
					layout: f.M,
					subreddit: f.q
				});
			var $ = Y(Object(a.b)(X, {})(Object(F.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: a,
						hasModFlairPerms: o,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: u,
						isSticky: p,
						language: b,
						layout: h,
						modModeEnabled: g,
						onCommentsClick: x,
						post: y,
						sendEvent: f,
						showEditFlair: v,
						showEditPost: E,
						subreddit: C
					} = e, O = e => f(Object(A.f)(y.id, e)), j = y.postId, S = Object(L.d)(q, y.id, m, p), w = !!n && Object(U.f)(n) === y.author;
					return r.a.createElement("div", {
						className: Object(i.a)(G.a.flatlistContainer, s)
					}, r.a.createElement(J, {
						compact: !1,
						model: y,
						onVoteClick: a,
						scoreClassName: G.a.score
					}), r.a.createElement(I.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: y.id,
						modModeEnabled: g,
						numComments: y.numComments,
						type: D.g.Compact,
						onClick: x
					}), r.a.createElement(R.a, {
						className: G.a.shareMenu,
						dropdownId: Object(L.d)(Z, y.id, m, p),
						permalink: y.permalink,
						post: y,
						sendEventWithName: O,
						subreddit: C
					}, r.a.createElement(Q, null, r.a.createElement(H.a, {
						className: G.a.shareIcon
					}), r.a.createElement("span", {
						className: G.a.shareText
					}, r.a.createElement(W.c, null, "share")))), c && r.a.createElement(T.a, {
						dropdownId: S,
						onClick: () => O("post_mod_action_menu")
					}, r.a.createElement(L.b, {
						className: G.a.modActionsIcon
					}), r.a.createElement(M.a, {
						canEditFlair: o && !!v,
						hasModPostPerms: c,
						isOverlay: !!m,
						isPostAuthor: w,
						language: b,
						modModeEnabled: g,
						post: y,
						tooltipId: S
					})), r.a.createElement(B.g, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: y.permalink,
						postId: j,
						dropdownId: Object(L.d)(K, y.id, m, p),
						isFixed: p,
						sendEvent: f,
						showEditPost: !!E,
						showEditFlair: !!v,
						useFlatlistBreakpoints: Object(B.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				ee = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				te = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				se = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(se),
				re = s("./src/reddit/components/MiniCardPost/index.m.less"),
				ae = s.n(re);
			s.d(t, "a", (function() {
				return ie
			}));
			const oe = Object(f.t)(),
				ie = Object(a.b)(() => Object(o.c)({
					activeModalId: S.a,
					autoplayPref: P.b,
					crosspostRoot: _.c,
					crosspostSubredditOrProfile: _.d,
					currentUser: P.i,
					flairStyleTemplate: f.Q,
					hideNSFWPref: P.z,
					isActive: _.g,
					language: P.S,
					moderatorPermissions: w.i,
					modModeEnabled: f.O,
					post: _.J,
					showEditFlair: N.a,
					subredditOrProfile: _.U,
					userIsOp: P.jb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: r
							} = t;
							return e(Object(m.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: r
							}))
						},
						handleVote: t => {
							const n = t === j.a.upvoted ? Object(l.N)(s) : Object(l.o)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(l.L)(s)),
						onOpenReportsDropdown: t => e(Object(u.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: n,
							selectedTemplateId: r
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: r
						})
					}
				}));
			t.b = oe(ie(Object(c.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: n,
					crosspostRoot: a,
					crosspostSubredditOrProfile: o,
					currentUser: c,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: u,
					hideNSFWPref: f,
					language: j,
					moderatorPermissions: S,
					modModeEnabled: w,
					onClickPost: N,
					post: _,
					scrollerItemRef: P,
					shouldPause: I,
					showMetaLine: k = !0,
					showEditFlair: L,
					subredditOrProfile: T,
					userIsOp: M
				} = e, {
					media: B
				} = a || _, R = B && B.type, F = Object(x.b)(_.id), D = R === O.n.RTJSON, A = M && D, W = Object(E.a)(S), H = Object(v.a)(S), U = B && R !== O.n.RTJSON && R !== O.n.TEXT, V = !B && !!_.source && Object(d.a)(_.source.url), G = B && r.a.createElement(b.a, {
					autoplayPref: t,
					availableWidth: s,
					className: ae.a.media,
					imageBoxClassName: ae.a.mediaImageBox,
					imageBoxContentImageClassName: ae.a.mediaImageBoxContentImage,
					forceAspectRatio: O.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: a || _,
					scrollerItemRef: P,
					shouldPause: I,
					shouldLoad: u,
					showCentered: !0,
					showFull: !1
				});
				return r.a.createElement(g.a, {
					className: Object(i.a)(ae.a.postContainer, ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, Object(C.a)(e), n),
					style: Object.assign({}, Object(C.b)(e.flairStyleTemplate), Object(C.d)(e)),
					post: _,
					onClick: N,
					eventFactory: l
				}, r.a.createElement(h.a, {
					className: ae.a.backgroundWrapper,
					flairStyleTemplate: m
				}, U && G, r.a.createElement("div", {
					className: ae.a.innerContainer
				}, V && r.a.createElement(te.a, {
					post: _,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), r.a.createElement(y.c, {
					className: ae.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: _,
					size: y.b.Large,
					titleColor: m && m.postTitleColor
				}), k && T && r.a.createElement(ee.a, {
					className: ae.a.metaLine,
					crosspostSubredditOrProfile: o,
					hideNSFWPref: f,
					language: j,
					post: _,
					subredditOrProfile: T
				}), !U && r.a.createElement("div", {
					className: ae.a.mediaWrapper
				}, G), r.a.createElement("div", {
					className: ae.a.flexSpacer
				}), r.a.createElement($, {
					currentUser: c,
					handleVote: e.handleVote,
					hasModFlairPerms: H,
					hasModPostPerms: W,
					language: j,
					modModeEnabled: w,
					post: _,
					showEditFlair: L,
					showEditPost: A
				}))), e.activeModalId === F && r.a.createElement(x.a, {
					flairs: _.flair,
					subredditId: _.belongsTo.id,
					modalId: F,
					onFlairChanged: e.onFlairChanged
				}), r.a.createElement(p.d, {
					postId: _.id
				}))
			})))
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/i18n/components.tsx"),
				d = s("./src/reddit/components/ModModeReports/index.m.less"),
				l = s.n(d);
			const m = o.a.div("Text", l.a),
				u = o.a.div("Placeholder", l.a),
				p = Object(a.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return r.a.createElement(u, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return r.a.createElement(u, {
							className: t
						}, r.a.createElement(m, null, r.a.createElement(c.c, null, "Loading reports…")))
					}
				});
			t.a = e => r.a.createElement(p, e)
		},
		"./src/reddit/components/ModalStyledComponents/Modal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const d = e => e.preventDefault();
			t.a = Object(a.a)(e => {
				const t = !!e.cancelActionText,
					s = !(!e.actionText || !e.onConfirm);
				return r.a.createElement(o.c, {
					style: e.style
				}, r.a.createElement(o.g, null, r.a.createElement(c.a, null, r.a.createElement(o.n, null, e.headerText), !e.hideCancel && r.a.createElement(i.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, r.a.createElement(o.b, null)))), r.a.createElement(o.j, null, e.modalBody()), (t || s) && r.a.createElement(o.e, null, t && r.a.createElement(o.a, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), s && r.a.createElement(o.r, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: t => {
						e.onConfirm && e.onConfirm(), e.toggleModal(), e.trackClick && e.trackClick()
					}
				}, e.actionText)))
			})
		},
		"./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				headerButton: "_3aSsYcE4XPX93_RpWvd-4s"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, s) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, s) {
			e.exports = {
				CommunityCount: "_2FGPtEJLumoHbu-QFFxout",
				communityCount: "_2FGPtEJLumoHbu-QFFxout",
				SubredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				subredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				SidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				sidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				ModalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq",
				modalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/i18n/components.tsx"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const g = h.a.wrapped(m.b, "SubredditIcon", b.a),
				x = h.a.span("Label", b.a),
				y = Object(l.c)({
					subredditOrProfile: u.M
				});
			var f = Object(d.b)(y)(e => {
				let {
					children: t,
					subredditOrProfile: s
				} = e;
				return t(s, a.a.createElement(a.a.Fragment, null, a.a.createElement(g, {
					subredditOrProfile: s
				}), a.a.createElement(x, null, s.displayText)))
			});
			var v = e => {
					let {
						children: t,
						className: s,
						subredditsOrProfilesIds: n
					} = e;
					const r = n.map(e => a.a.createElement(f, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return a.a.createElement("div", {
						className: s
					}, r)
				},
				E = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				C = s.n(E);
			s.d(t, "a", (function() {
				return S
			}));
			const O = h.a.div("CommunityCount", C.a),
				j = h.a.wrapped(v, "SubredditsOrProfiles", C.a),
				S = h.a.wrapped(o.a, "SidebarSubreddit", C.a),
				w = h.a.wrapped(o.a, "ModalSubreddit", C.a);
			var N;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(N || (N = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: s,
					language: r,
					onSeeMoreDetails: o,
					subredditCategory: d
				} = e, l = t ? S : w, m = s.length, u = t && s.length > 4;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(O, null, m > 0 ? Object(i.c)(r, "multireddit.info.communityCount", m, {
					object: Object(i.a)(r, d ? "multireddit.info.category" : "multireddit.info.multi")
				}) : Object(i.a)(r, "multireddit.empty")), m > 0 && a.a.createElement(j, {
					subredditsOrProfilesIds: t ? s.slice(0, 4) : s
				}, (t, s) => a.a.createElement(l, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, s)), m > 0 && u && a.a.createElement(c.n, {
					onClick: o
				}, a.a.createElement(n.c, null, "See more")))
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less": function(e, t, s) {
			e.exports = {
				SidebarTopSpacer: "AHfNtZK4Z7VFG9guitlj7",
				sidebarTopSpacer: "AHfNtZK4Z7VFG9guitlj7",
				ModalTopSpacer: "_2ispBvPlngXQd3xKtLWBQb",
				modalTopSpacer: "_2ispBvPlngXQd3xKtLWBQb",
				SidebarTitleContainer: "WHFQUhYmskfFnYj9Wop5R",
				sidebarTitleContainer: "WHFQUhYmskfFnYj9Wop5R",
				SidebarTitle: "_2K0i3XQzE9WLp3XNx1byXx",
				sidebarTitle: "_2K0i3XQzE9WLp3XNx1byXx",
				SidebarFlair: "L6WVFQA-UjKC-pAtGgJkG",
				sidebarFlair: "L6WVFQA-UjKC-pAtGgJkG",
				Attributon: "htg8GP8UyboUgLmuSYKen",
				attributon: "htg8GP8UyboUgLmuSYKen",
				FadingDescription: "_2Z-Kuo_aE91sy_TOtfCUkO",
				fadingDescription: "_2Z-Kuo_aE91sy_TOtfCUkO",
				shouldFade: "_2ONS322IFK1Sw2jAj3dZqW",
				Component: "_20vfWUdM54Wu07ZOfKYP8o",
				component: "_20vfWUdM54Wu07ZOfKYP8o"
			}
		},
		"./src/reddit/components/MultiredditInfo/index.m.less": function(e, t, s) {
			e.exports = {
				noSubredditsText: "EOCYiZiqAa39tAXUCAqmZ"
			}
		},
		"./src/reddit/components/MultiredditManageWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetContainer: "Md-M9lk_Fnyiovos-cWPZ",
				bubbleSelector: "_32QbfsW2hwOWwyV4hZJqEG",
				error: "s0AzWPiC_eJAnSdDAZPym",
				searchIcon: "_1wfVsnvMUNUkrQpFx5I6O9",
				bubble: "_3NfN8QVLJTyC1hzOZDqDa_",
				selected: "_3Mgq2YpcfG6lx6UTEtbSUX",
				bubbleIcon: "_3kWMG0X0DIgmFR4pMIpuWf",
				text: "_1boSpw2RVthfLh9y4Ln0H2",
				isEmpty: "lsui73aPZobEl_lU01DBf",
				closeIcon: "_1FGYwDvXjw09vL1EUCOelw",
				input: "_2LQWhKcfsIjm5PCEiFbnfv",
				emptyText: "Uqpbu2QyTc_VF5yeJOo0U",
				addButton: "_7aZcaB7RRfblay2Mpw4PJ",
				dropdown: "rUguk2cMQS0qUTWqZTUfE",
				expandButton: "_31vaGAnztsBt2uSP6kVo6D",
				expandButtonContainer: "_2b-PrKZyTcbtQSMmFYdZ3Z"
			}
		},
		"./src/reddit/components/MultiredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				detailsContainer: "_2o2cN1Q1R544f7UCxJHRTH",
				modalContainer: "_2qY6j7wtHkEaoEG4g5F53z",
				closeBtn: "_3NmSyduxNX74yaC9kmkYgh",
				modalMain: "_1hG7UoCi1oRW1UnsvoewhT",
				placeholder: "_1wCkMb-wQyvSVuqZWNjIEZ"
			}
		},
		"./src/reddit/components/MultiredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/actions/subscription/index.ts"),
				b = s("./src/reddit/components/OverflowMenu/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/i18n/utils.ts"),
				x = s("./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less"),
				y = s.n(x);
			var f = Object(i.b)(null, e => ({
					subscribe: t => e(Object(p.d)(t, !0))
				}))(e => {
					const {
						communities: t,
						subscribe: s
					} = e, n = t.filter(e => !e.isSubscribed);
					return n.length ? o.a.createElement(b.b, {
						className: y.a.headerButton,
						dropdownId: "MULTIREDDIT_INFO_DROPDOWN_ID",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(h.b, {
						displayText: Object(g.c)("Join all communities"),
						onClick: () => s(n)
					})) : null
				}),
				v = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				O = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				j = s("./src/reddit/i18n/components.tsx"),
				S = s("./src/reddit/selectors/multireddit.ts"),
				w = s("./src/reddit/components/MultiredditInfo/index.m.less"),
				N = s.n(w);
			const _ = Object(c.c)({
					communities: (e, t) => Object(S.b)(e, t.multireddit)
				}),
				P = Object(i.b)(_),
				I = e => {
					let {
						item: t
					} = e;
					return o.a.createElement(C.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: t.sendEvent,
						type: t.type
					})
				};
			var k = Object(E.b)(P(e => {
					const {
						communities: t,
						titleText: s
					} = e;
					return t.length ? o.a.createElement(v.a, {
						items: t,
						minimizedLength: 5,
						title: s,
						headerButton: o.a.createElement(f, {
							communities: t
						}),
						renderItem: I
					}) : o.a.createElement(O.a, {
						title: s
					}, o.a.createElement("div", {
						className: N.a.noSubredditsText
					}, o.a.createElement(j.c, null, "This custom feed does not yet contain any communities.")))
				})),
				L = s("./src/higherOrderComponents/sizeMe.tsx"),
				T = s("./src/lib/timeAgo/index.ts"),
				M = s("./src/reddit/components/Flair/index.tsx"),
				B = s("./src/reddit/components/RawHTMLDisplay/Listing.tsx"),
				R = s("./src/reddit/constants/posts.ts"),
				F = s("./src/reddit/controls/Button/index.tsx"),
				D = s("./src/reddit/models/Multireddit/index.ts"),
				A = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				W = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less"),
				H = s.n(W),
				U = s("./src/lib/lessComponent.tsx");
			const V = U.a.div("SidebarTopSpacer", H.a),
				G = U.a.div("ModalTopSpacer", H.a),
				z = U.a.div("SidebarTitleContainer", H.a),
				q = U.a.div("SidebarTitle", H.a),
				K = U.a.wrapped(M.a, "SidebarFlair", H.a),
				Z = U.a.div("Attributon", H.a),
				J = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement(B.a, {
						className: s,
						html: t
					})
				},
				Q = Object(L.a)(e => {
					let {
						children: t,
						language: s,
						onSeeMoreDetails: n,
						size: r
					} = e;
					const a = !r || "number" != typeof r.height || r.height > 152;
					return o.a.createElement("div", null, o.a.createElement(J, {
						className: Object(m.a)(H.a.FadingDescription, {
							[H.a.shouldFade]: a
						})
					}, t), a && o.a.createElement(F.n, {
						onClick: n
					}, o.a.createElement(j.c, null, "Read more")))
				});
			var Y;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(Y || (Y = {}));
			var X = U.a.wrapped(e => {
					const {
						mode: t,
						multireddit: s,
						language: n,
						onSeeMoreDetails: r,
						subredditCategory: a
					} = e, i = t === Y.Sidebar, [c, l] = i ? [V, Z] : [G, Z], m = Object(D.f)(s) ? () => o.a.createElement(c, null, i && o.a.createElement(z, null, o.a.createElement(q, null, s.displayText), s.visibility !== D.e.Public && o.a.createElement(K, {
						text: Object(d.a)(n, "multireddit.visibility.".concat(s.visibility))
					})), o.a.createElement(l, null, Object(d.a)(n, "multireddit.info.title", {
						timeAgo: Object(T.d)(n, s.created),
						username: Object(D.i)(s.url)
					}))) : () => null, u = Object(D.f)(s) && s.description ? () => o.a.createElement(c, null, i ? o.a.createElement(Q, {
						language: n,
						onSeeMoreDetails: r
					}, s.description) : o.a.createElement(B.a, {
						html: s.description
					})) : () => null, p = [...s.subredditIds && s.subredditIds.map(e => ({
						id: e,
						type: R.a.SUBREDDIT
					})) || [], ...s.profileIds && s.profileIds.map(e => ({
						id: e,
						type: R.a.PROFILE
					})) || []];
					return o.a.createElement("div", {
						className: e.className
					}, m(), u(), o.a.createElement(A.b, {
						isSidebar: i,
						language: n,
						onSeeMoreDetails: r,
						subredditCategory: a,
						subredditsOrProfilesIds: p
					}))
				}, "Component", H.a),
				$ = s("./node_modules/lodash/debounce.js"),
				ee = s.n($),
				te = s("./node_modules/lodash/noop.js"),
				se = s.n(te),
				ne = s("./src/lib/constants/index.ts"),
				re = s("./src/reddit/actions/multireddit/index.ts"),
				ae = s("./src/reddit/actions/subredditAutocomplete.ts"),
				oe = s("./src/reddit/actions/toaster.ts"),
				ie = s("./src/reddit/constants/keycodes.ts"),
				ce = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				de = s("./src/reddit/helpers/name/index.ts"),
				le = s("./src/reddit/icons/svgs/Close/index.tsx"),
				me = s("./src/reddit/icons/svgs/Search/index.tsx"),
				ue = s("./src/reddit/models/Toast/index.ts"),
				pe = s("./src/reddit/models/Widgets/index.ts"),
				be = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				he = s("./src/reddit/selectors/subredditAutocomplete.ts"),
				ge = s("./src/reddit/selectors/user.ts");
			const xe = Object(c.c)({
				isAutocompletePending: he.c,
				items: he.e,
				language: ge.S
			});
			class ye extends o.a.Component {
				constructor() {
					super(...arguments), this.onDropdownContainerMouseDown = e => {
						e.preventDefault()
					}, this.onEntrySelect = e => {
						this.props.onEntrySelect(this.props.items[e])
					}, this.onEntryFocus = e => {
						this.props.onEntryFocus(this.props.items[e], e)
					}
				}
				render() {
					const {
						className: e,
						focusedIndex: t,
						items: s,
						isAutocompletePending: n,
						language: r
					} = this.props;
					return o.a.createElement(be.a, {
						className: e,
						focusedIndex: t,
						items: s,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						showNoMatchesCaption: !n && 0 === s.length,
						language: r,
						isValid: !0
					})
				}
			}
			var fe = Object(i.b)(xe)(ye),
				ve = s("./src/reddit/components/MultiredditManageWidget/index.m.less"),
				Ee = s.n(ve);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = 12,
				je = 5,
				Se = 500,
				we = Object(c.c)({
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					communityInformations: (e, t) => {
						let {
							multireddit: s
						} = t;
						return Object(S.b)(e, s)
					},
					removePending: e => e.multireddits.api.removeSubreddit.pending
				}),
				Ne = Object(i.b)(we, (e, t) => {
					let {
						multireddit: s
					} = t;
					return {
						addSubredditRequested: (t, n) => {
							const r = n ? Object(pe.g)(n) : void 0;
							e(Object(re.a)({
								communityInfo: r,
								identifier: t,
								multiredditNames: [s.name]
							}))
						},
						errorToast: t => e(Object(oe.e)({
							text: t,
							kind: ue.b.Error
						})),
						removeSubredditRequested: t => {
							let {
								id: n,
								name: r,
								type: a
							} = t;
							return n && e(Object(re.i)({
								id: n,
								multiredditName: s.name,
								name: r,
								type: a
							}))
						},
						subredditAutocompleteRequested: t => e(Object(ae.d)(t, s.isNSFW))
					}
				}),
				_e = {
					choice: null,
					focusedIndex: -1,
					focusedItem: null,
					isAddError: null,
					isChoiceSelected: !1,
					isDropdownOpen: !1,
					isListExpanded: !1,
					memoizedShortList: [],
					query: ""
				};
			class Pe extends o.a.Component {
				constructor(e) {
					super(e), this.onRemoveClickedFnCache = {}, this.closeDropdown = () => {
						this.setState({
							isDropdownOpen: !1,
							focusedIndex: -1
						})
					}, this.onChange = e => {
						this.state.choice || (this.setState({
							isAddError: null,
							isDropdownOpen: e.target.value.trim().length > 0,
							query: e.target.value.trim()
						}), this.onQueryUpdated())
					}, this.onBlur = () => {
						this.closeDropdown()
					}, this.onFocus = () => {
						this.setState(e => e.query && !e.isDropdownOpen ? {
							isDropdownOpen: !0
						} : null)
					}, this.onKeydown = e => {
						this.state.choice ? this.state.choice && (e.which === ie.a.ArrowLeft ? this.onChoiceSelected() : this.state.isChoiceSelected ? e.which === ie.a.Backspace ? this.setState({
							choice: null
						}) : e.which === ie.a.ArrowRight && this.onChoiceDeselected() : e.which !== ie.a.Backspace || this.state.query.length || this.onChoiceSelected(), e.which === ie.a.Enter && this.onSubmit()) : this.state.isDropdownOpen ? e.which === ie.a.ArrowDown ? (this.setState({
							focusedIndex: this.state.focusedIndex + 1
						}), e.stopPropagation()) : e.which === ie.a.ArrowUp ? (this.setState({
							focusedIndex: this.state.focusedIndex - 1
						}), e.stopPropagation()) : e.which === ie.a.Escape ? (this.closeDropdown(), e.stopPropagation()) : e.which === ie.a.Enter && (this.state.focusedItem ? this.onDropdownItemSelect(this.state.focusedItem) : -1 === this.state.focusedIndex && this.onSubmit()) : e.which === ie.a.Enter && this.onSubmit()
					}, this.onQueryUpdated = () => {
						this.props.subredditAutocompleteRequested(this.state.query)
					}, this.onDropdownItemSelect = e => {
						this.setState(Object.assign({}, _e, {
							choice: e,
							isListExpanded: this.state.isListExpanded,
							memoizedShortList: this.state.memoizedShortList
						}))
					}, this.onDropdownItemFocus = (e, t) => {
						this.setState({
							focusedItem: e,
							focusedIndex: t
						})
					}, this.onChoiceSelected = () => this.setState({
						isChoiceSelected: !0
					}), this.onChoiceDeselected = () => this.setState({
						isChoiceSelected: !1
					}), this.onChoiceRemoved = () => this.setState({
						choice: null
					}), this.onSubmit = () => {
						if (!this.props.addSubredditPending)
							if (this.state.choice) this.props.addSubredditRequested({
								name: this.state.choice.name,
								type: "subreddit"
							}, this.state.choice), this.setState({
								isDropdownOpen: !1
							});
							else {
								const {
									query: e
								} = this.state;
								if (e.length) {
									const t = Object(de.g)(e),
										s = t.startsWith(ne.Qb) ? "profile" : "subreddit",
										n = "profile" === s ? t.substring(2) : t;
									this.props.addSubredditRequested({
										name: n,
										type: s
									})
								}
							}
					}, this.getOnRemoveClickedFn = e => {
						const t = "".concat(e.id || "", ".").concat(e.name);
						return this.onRemoveClickedFnCache[t] ? this.onRemoveClickedFnCache[t] : (this.onRemoveClickedFnCache[t] = () => {
							this.props.removeSubredditRequested(e)
						}, this.onRemoveClickedFnCache[t])
					}, this.onToggleExpand = () => this.setState({
						isListExpanded: !this.state.isListExpanded
					}), this.state = Object.assign({}, _e, {
						memoizedShortList: e.communityInformations.slice(0, je)
					}), this.onQueryUpdated = ee()(this.onQueryUpdated, Se)
				}
				componentDidUpdate(e) {
					!this.props.addSubredditPending && e.addSubredditPending && (this.props.addSubredditError ? this.setState({
						isAddError: this.props.addSubredditError
					}) : this.setState(_e)), this.props.communityInformations.length !== e.communityInformations.length && this.setState({
						memoizedShortList: this.props.communityInformations.slice(0, je)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							communityInformations: t,
							multireddit: s,
							removePending: n
						},
						state: {
							choice: r,
							focusedIndex: a,
							isAddError: i,
							isChoiceSelected: c,
							isDropdownOpen: d,
							isListExpanded: l,
							memoizedShortList: u,
							query: p
						}
					} = this;
					return o.a.createElement(O.a, {
						className: Ee.a.widgetContainer,
						headerButton: o.a.createElement(f, {
							communities: t
						}),
						title: Object(g.c)("manage communities")
					}, o.a.createElement("div", {
						className: Object(m.a)(Ee.a.bubbleSelector, {
							[Ee.a.error]: !!i
						}),
						onBlur: this.onBlur,
						onKeyDown: this.onKeydown
					}, r ? o.a.createElement("div", {
						className: Object(m.a)(Ee.a.bubble, {
							[Ee.a.selected]: c
						}),
						tabIndex: 0,
						onClick: this.onChoiceSelected
					}, o.a.createElement("img", {
						src: r.iconUrl,
						className: Ee.a.bubbleIcon
					}), o.a.createElement("span", {
						className: Ee.a.text
					}, "r/".concat(r.name)), o.a.createElement(le.a, {
						className: Ee.a.closeIcon,
						onClick: this.onChoiceRemoved
					})) : o.a.createElement(me.a, {
						className: Ee.a.searchIcon
					}), o.a.createElement("input", {
						className: Object(m.a)(Ee.a.input, {
							[Ee.a.isEmpty]: !!r
						}),
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: p
					}), !i && (r || p.length > 0) && (e ? o.a.createElement(ce.a, {
						sizePx: Oe
					}) : o.a.createElement(F.n, {
						className: Ee.a.addButton,
						onClick: this.onSubmit
					}, Object(g.c)("Add"))), d && o.a.createElement(fe, {
						className: Ee.a.dropdown,
						focusedIndex: a,
						multireddit: s,
						onEntryFocus: this.onDropdownItemFocus,
						onEntrySelect: this.onDropdownItemSelect,
						substring: p
					})), 0 === t.length ? o.a.createElement("p", {
						className: Ee.a.emptyText
					}, Object(g.c)("Try adding some communities to your custom feed!")) : (l ? t : u).map(e => o.a.createElement(C.a, Ce({}, e, {
						buttonDisabled: !!n,
						key: e.id,
						isLoading: n === e.id,
						onTertiaryButtonClick: this.getOnRemoveClickedFn(e),
						sendEvent: se.a,
						showTertiaryButtonOnHover: !0,
						tertiaryButtonText: Object(g.c)("Remove"),
						useTertiaryButton: !0
					}))), t.length > je && o.a.createElement("div", {
						className: Ee.a.expandButtonContainer
					}, o.a.createElement(F.n, {
						className: Ee.a.expandButton,
						onClick: this.onToggleExpand
					}, l ? Object(g.c)("show less") : Object(g.c)("show more"))))
				}
			}
			var Ie = Ne(Pe),
				ke = s("./src/reddit/components/MultiredditSuggestionsWidget/index.m.less"),
				Le = s.n(ke);
			const Te = 5,
				Me = Object(c.c)({
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditFetched: e => e.multireddits.api.addSubreddit.fetched,
					recommendations: S.k,
					recommendationsError: e => e.multireddits.api.recommendations.error,
					recommendationsPending: e => e.multireddits.api.recommendations.pending
				});
			class Be extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						memoizedRecommendations: this.props.recommendations,
						recommendationsToExclude: []
					}, this.onRecommendationsRefreshClicked = () => {
						this.setState(e => ({
							recommendationsToExclude: [...e.recommendationsToExclude, ...e.memoizedRecommendations.slice(0, Te).map(e => e.name)]
						}), () => this.props.recommendationsRefreshed(this.state.recommendationsToExclude))
					}
				}
				componentDidUpdate(e) {
					this.props.recommendations !== e.recommendations && this.setState({
						memoizedRecommendations: this.props.recommendations
					}), !this.props.addSubredditPending && e.addSubredditPending && this.setState(t => ({
						recommendationsToExclude: [...t.recommendationsToExclude, ...e.addSubredditPending ? [e.addSubredditPending] : []],
						memoizedRecommendations: t.memoizedRecommendations.filter(t => t.name !== e.addSubredditPending)
					}), () => {
						this.state.memoizedRecommendations.length < Te && this.props.recommendationsRefreshed(this.state.recommendationsToExclude)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							addSubredditRequested: t,
							recommendations: s,
							recommendationsError: n,
							recommendationsPending: r
						},
						state: {
							memoizedRecommendations: a
						}
					} = this;
					return o.a.createElement(C.b, {
						bottomButtonText: Object(g.c)("refresh"),
						className: Le.a.container,
						communities: a.slice(0, Te),
						errorMsg: Object(g.c)("Couldn't find any recommendations. Try adding more communities first!"),
						isError: !s.length || !!n,
						isLoading: r,
						loadingItemName: e || void 0,
						onBottomButtonClick: this.onRecommendationsRefreshClicked,
						onTertiaryButtonClick: t,
						sendEvent: se.a,
						showTertiaryButtonOnHover: !0,
						itemButtonDisabled: !!e,
						tertiaryButtonText: Object(g.c)("add"),
						title: Object(g.c)("People also added"),
						useTertiaryButton: !0
					})
				}
			}
			var Re = Object(i.b)(Me, (e, t) => ({
					addSubredditRequested: s => {
						Object(D.f)(t.multireddit) && e(Object(re.a)({
							identifier: {
								name: s.name,
								type: s.type
							},
							multiredditNames: [t.multireddit.name],
							communityInfo: s
						}))
					},
					recommendationsRefreshed: s => {
						Object(D.f)(t.multireddit) && e(Object(re.h)({
							multiredditName: t.multireddit.name,
							username: t.multiUsername,
							toExcludeNames: s
						}))
					}
				}))(Be),
				Fe = s("./src/reddit/components/SidebarContainer/index.tsx"),
				De = s("./src/reddit/components/SidebarSectionHeader/index.m.less"),
				Ae = s.n(De),
				We = U.a.div("Component", Ae.a),
				He = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Ue = s("./src/reddit/constants/zIndex.ts"),
				Ve = s("./src/reddit/controls/TextButton/index.tsx"),
				Ge = s("./src/reddit/helpers/trackers/idCard.ts"),
				ze = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				qe = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Ke = s("./src/reddit/components/MultiredditSidebar/index.m.less"),
				Ze = s.n(Ke);

			function Je() {
				return (Je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return Ye
			}));
			const Qe = Object(l.a)(e => o.a.createElement(u.c, {
					className: Ze.a.modalContainer
				}, !e.shouldHideHeader && o.a.createElement(u.g, null, o.a.createElement(ze.a, null, o.a.createElement(u.n, null, e.multireddit.displayText), o.a.createElement(Ve.a, {
					onClick: e.onCloseModal
				}, o.a.createElement(u.b, null)))), o.a.createElement(u.j, null, o.a.createElement(X, {
					language: e.language,
					mode: Y.Modal,
					multireddit: e.multireddit,
					subredditCategory: e.subredditCategory
				})), e.shouldHideHeader && o.a.createElement(Ve.a, {
					className: Ze.a.closeBtn,
					onClick: e.onCloseModal
				}, o.a.createElement(u.b, null)))),
				Ye = e => o.a.createElement(Qe, Je({}, e, {
					overlayCustomStyles: {
						zIndex: Ue.b
					},
					withOverlay: !0
				})),
				Xe = () => o.a.createElement(O.a, null, r()(5, e => o.a.createElement("div", {
					className: Object(m.a)(Ze.a.placeholder, Object(qe.a)({
						isLoading: !0
					})),
					key: e
				}))),
				$e = e => Object(D.f)(e.multireddit) ? Object(D.g)(e.multireddit) ? e.isCurrentUserMultiredditOwner ? o.a.createElement(Ie, {
					multireddit: e.multireddit
				}) : o.a.createElement(k, {
					multireddit: e.multireddit,
					titleText: Object(g.c)("Communities in this custom feed")
				}) : o.a.createElement(Xe, null) : o.a.createElement("div", {
					className: Ze.a.detailsContainer
				}, o.a.createElement(We, null, e.subredditCategory ? e.subredditCategory.name : Object(d.a)(e.language, "multireddit.sidebar.details")), o.a.createElement(X, {
					language: e.language,
					mode: Y.Sidebar,
					multireddit: e.multireddit,
					onSeeMoreDetails: e.onSeeMoreDetails,
					onSubredditClick: e.onSubredditClick,
					subredditCategory: e.subredditCategory
				})),
				et = Object(c.c)({
					isCurrentUserMultiredditOwner: (e, t) => {
						let {
							multireddit: s
						} = t;
						return Object(D.f)(s) && Object(S.c)(e, s.url)
					},
					language: (e, t) => {
						let {
							language: s
						} = t;
						return s || Object(ge.S)(e)
					}
				}),
				tt = Object(i.b)(et, (e, t) => {
					let {
						subredditCategory: s
					} = t;
					return {
						trackSeeMoreClicked: () => e((e, t) => Ge.a(t())),
						trackSubredditClicked: t => {
							if (!s) return;
							const n = Object(pe.i)(t);
							e((e, t) => Ge.b(t(), n, s.name))
						}
					}
				});
			class st extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showModal: !1
					}, this.closeModal = () => this.setState({
						showModal: !1
					}), this.openModal = () => this.setState({
						showModal: !0
					}, this.props.subredditCategory ? this.props.trackSeeMoreClicked : void 0)
				}
				render() {
					const {
						className: e,
						isCurrentUserMultiredditOwner: t,
						language: s,
						multireddit: n,
						multiUsername: r,
						subredditCategory: a
					} = this.props, i = t && n.subredditIds && n.subredditIds.length > 0;
					return o.a.createElement(Fe.a, {
						className: e
					}, o.a.createElement($e, {
						isCurrentUserMultiredditOwner: t,
						language: s,
						multireddit: n,
						subredditCategory: a,
						onSeeMoreDetails: this.openModal,
						onSubredditClick: this.props.trackSubredditClicked
					}), this.state.showModal ? o.a.createElement(Ye, {
						language: s,
						multireddit: n,
						subredditCategory: a,
						onCloseModal: this.closeModal,
						shouldHideHeader: !!a
					}) : null, i && o.a.createElement(Re, {
						multireddit: n,
						multiUsername: r
					}), o.a.createElement(He.a, null))
				}
			}
			t.b = tt(st)
		},
		"./src/reddit/components/MultiredditSuggestionsWidget/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3jG8aJCgqOrmMUbRMiakpX"
			}
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/Poll/ClosedPoll/index.m.less": function(e, t, s) {
			e.exports = {
				metaData: "_3NpICHyFK-vnQ5_1ZcNtNn",
				option: "_1YnhQ_-VBuRiYmNRfa798"
			}
		},
		"./src/reddit/components/Poll/OpenPoll/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_3vyz17dpfnySBJJyBF9IqH",
				loggedOutTooltip: "_3YsZUGQHAWfxmTN8wbFYPd",
				controlRow: "_1YKCRAHpaqTk8N5LBvZ9_A",
				loadingIcon: "_2RQF5_CKHRDPDOJ-TwwXFy",
				metaData: "_28wp7DzoykykevfZW56u3_",
				option: "_3nN8pAR2tWvzxcstONuzMH",
				optionRadio: "_1d_v-dIPu8uuwF0UTaQNmF",
				optionText: "_3grr_S6IK0w2iyC7Ocv5u9"
			}
		},
		"./src/reddit/components/Poll/ResultOption/index.m.less": function(e, t, s) {
			e.exports = {
				bar: "_2mybT6Ih7gVf5B6COa9kd2",
				"m-winning": "_1kOO45KEOZraWGZ-cUgKq-",
				mWinning: "_1kOO45KEOZraWGZ-cUgKq-",
				check: "_3CF-7jBH1KihljB9AqaU04",
				container: "_3uG88YeFdY0J8n4v07jkf9",
				count: "_1VDLlB8Ys3WO8XWSZfhomw",
				percent: "_1Ot3PH7267obvD1i_V2D00",
				hide: "_3G6ZB4S9YZ26E49tE8zLJQ",
				show: "iV9AWdqazd5c9IHXNEQXX",
				text: "_3PfYu2DtunAwYpv53tmvOb"
			}
		},
		"./src/reddit/components/Poll/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3xG1v2CUdyxRoHrB7dgiFw"
			}
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/i18n/utils.ts"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/isRemoved.ts"),
				y = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				v = s("./src/reddit/models/Post/index.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				j = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				S = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				w = s("./src/reddit/icons/fonts/Report/index.tsx"),
				N = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				P = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				I = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				k = s("./src/reddit/components/PostBadges/index.m.less"),
				L = s.n(k);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => r.a.createElement("span", T({
					className: L.a.removalReason
				}, e), e.children),
				B = Object(d.e)("posts.archived"),
				R = Object(d.e)("modTools.commentsLocked"),
				F = Object(d.e)("modTools.moderatorOf"),
				D = Object(d.e)("modTools.stickiedPost"),
				A = Object(d.e)("modTools.pinnedPost"),
				W = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				H = Object(g.t)({
					isProfilePostListing: g.I,
					isSubreddit: g.J,
					pageLayer: e => e
				}),
				U = Object(c.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(E.r)(e, {
							postId: s.id
						})
					},
					modModeEnabled: g.O
				}),
				V = Object(a.b)(U, (e, t) => ({
					onHideTooltip: () => e(Object(u.h)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(u.f)({
						tooltipId: t
					}))
				}));
			t.a = H(V(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: a,
					inSubredditOrProfile: c,
					isCompactPinnedPost: d,
					isPinned: u,
					isProfilePostListing: g,
					language: E,
					modModeEnabled: k,
					onHideTooltip: H,
					onOpenRemovalReasonModal: U,
					onShowTooltip: V,
					post: G,
					tooltipType: z
				} = e;
				const q = {
						caretOnTop: !1
					},
					K = G.isRemoved && !G.modRemovalReason && !G.modNote && G.belongsTo.type === h.a.SUBREDDIT,
					Z = W("Approve", G.id, z),
					J = W("Archived", G.id, z),
					Q = W("Automod", G.id, z),
					Y = W("Lock", G.id, z),
					X = W("Mod", G.id, z),
					$ = W("Remove", G.id, z),
					ee = W("Report", G.id, z),
					te = W("Spam", G.id, z),
					se = W("Sticky", G.id, z),
					ne = W("Pinned", G.id, z);
				return r.a.createElement("div", {
					className: t
				}, c && s && G.distinguishType === m.B.MODERATOR && r.a.createElement(n.Fragment, null, r.a.createElement(I.a, {
					className: L.a.modIcon,
					desc: F(E, {
						displayText: s
					}),
					id: X,
					onMouseEnter: V(X),
					onMouseLeave: H
				}), r.a.createElement(p.c, T({
					tooltipId: X,
					text: F(E, {
						displayText: s
					})
				}, q))), G.isArchived && r.a.createElement(n.Fragment, null, r.a.createElement(O.a, {
					className: L.a.archivedIcon,
					desc: B(E),
					id: J,
					onMouseEnter: V(J),
					onMouseLeave: H
				}), r.a.createElement(p.c, T({
					tooltipId: J,
					text: B(E)
				}, q))), G.isLocked && r.a.createElement(n.Fragment, null, r.a.createElement(j.a, {
					className: L.a.lockIcon,
					desc: R(E),
					id: Y,
					onMouseEnter: V(Y),
					onMouseLeave: H
				}), r.a.createElement(p.c, T({
					tooltipId: Y,
					text: R(E)
				}, q))), a && Object(v.k)(G) && !d && r.a.createElement(n.Fragment, null, r.a.createElement(_.a, {
					className: L.a.stickyIcon,
					desc: D(E),
					id: se,
					onMouseEnter: V(se),
					onMouseLeave: H
				}), r.a.createElement(p.c, T({
					tooltipId: se,
					text: D(E)
				}, q))), g && u && r.a.createElement(n.Fragment, null, r.a.createElement(_.a, {
					className: L.a.stickyIcon,
					desc: A(E),
					id: ne,
					onMouseEnter: V(ne),
					onMouseLeave: H
				}), r.a.createElement(p.c, T({
					tooltipId: ne,
					text: A(E)
				}, q))), (G.isApproved || G.approvedBy) && r.a.createElement(n.Fragment, null, r.a.createElement(C.a, {
					className: L.a.approveIcon,
					desc: Object(y.a)(E, G),
					id: Z,
					onMouseEnter: V(Z),
					onMouseLeave: H
				}), r.a.createElement(p.c, T({
					tooltipId: Z,
					text: Object(y.a)(E, G)
				}, q))), Object(x.a)(G) && r.a.createElement(n.Fragment, null, r.a.createElement(S.a, {
					className: L.a.removeIcon,
					desc: Object(y.c)(E, G),
					id: $,
					onMouseEnter: V($),
					onMouseLeave: H
				}), K && r.a.createElement(b.a, {
					className: L.a.addRemovalReason,
					onClick: U,
					text: Object(i.c)("Add a removal reason")
				}), (G.modRemovalReason || G.modNote) && r.a.createElement(M, {
					onMouseEnter: V($),
					onMouseLeave: H
				}, r.a.createElement(o.c, null, "Removal reason")), r.a.createElement(p.c, T({
					tooltipId: $,
					text: Object(y.c)(E, G)
				}, q))), G.bannedBy && G.isSpam && r.a.createElement(n.Fragment, null, r.a.createElement(N.a, {
					className: L.a.spamIcon,
					desc: Object(y.e)(E, G),
					id: te,
					onMouseEnter: V(te),
					onMouseLeave: H
				}), r.a.createElement(p.c, T({
					tooltipId: te,
					text: Object(y.e)(E, G)
				}, q))), ("AutoModerator" === G.approvedBy || "AutoModerator" === G.bannedBy) && r.a.createElement(n.Fragment, null, r.a.createElement(P.a, {
					className: Object(l.a)(L.a.automoderator, !!G.bannedBy && L.a.isRemoved),
					desc: Object(y.b)(E),
					id: Q,
					onMouseEnter: V(Q),
					onMouseLeave: H
				}), r.a.createElement(p.c, T({
					tooltipId: Q,
					text: Object(y.b)(E)
				}, q))), Object(f.a)(G) && !k && r.a.createElement(n.Fragment, null, r.a.createElement(w.a, {
					className: L.a.reportIcon,
					desc: Object(y.d)(E, G.numReports),
					id: ee,
					onMouseEnter: V(ee),
					onMouseLeave: H
				}), r.a.createElement(p.c, T({
					tooltipId: ee,
					text: Object(y.d)(E, G.numReports)
				}, q))))
			}))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				u = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(u);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: r
						} = this.props, a = !!n;
						r(e ? Object(m.o)({
							postId: s,
							isFollowed: a
						}) : Object(m.g)({
							postId: s,
							isFollowed: a
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, n = this.state.isHovered, a = s.isFollowed;
					let o = a ? "collection.follow.followed" : "collection.follow.follow";
					return a && n && (o = "collection.follow.unfollow"), r.a.createElement("button", {
						className: Object(i.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, r.a.createElement(l.a, {
						msgId: o
					}))
				}
			}
			const h = Object(a.b)(() => Object(o.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.s)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(d.b)(b))
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, s) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "c", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				u = s("./src/reddit/components/PostLeftRail/index.m.less"),
				p = s.n(u);
			const b = 40,
				h = Object(a.b)(() => Object(o.c)({
					isInAdLeftSidebarExperiment: m.a
				})),
				g = e => e.isSponsored && !e.isInAdLeftSidebarExperiment ? Object(l.a)(e).button : e.isRemoved ? d.a.removed : e.isReported ? d.a.reported : "transparent",
				x = Object(c.a)(e => {
					const t = g(e),
						s = {
							width: "".concat(b, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return r.a.createElement("div", {
						className: Object(i.a)(p.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = h(x)
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/PostList/Placeholder.tsx"),
				a = s("./src/reddit/components/PostList/LoadMore.m.less"),
				o = s.n(a);
			t.a = n.a.wrapped(r.a, "Component", o.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/constant.js"),
				r = s.n(n),
				a = s("./node_modules/lodash/times.js"),
				o = s.n(a),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/fastdom/index.ts"),
				u = s("./src/lib/intersectionObserver/index.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				h = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				g = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				x = s("./src/reddit/components/PostLeftRail/index.tsx"),
				y = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				C = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				j = s.n(O),
				S = s("./src/reddit/components/LargePost/placeholder.m.less"),
				w = s.n(S);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const P = Object(v.t)(),
				I = Object(l.c)({
					isFakeSubreddit: v.y
				}),
				k = Object(d.b)(I),
				L = e => {
					const t = {
						interactive: !1,
						voteState: C.a.notVoted
					};
					return c.a.createElement("div", {
						className: w.a.emptyVerticalVotes
					}, c.a.createElement(f.d, N({
						key: "u"
					}, t)), c.a.createElement("div", {
						className: w.a.emptyScore,
						key: "s"
					}), c.a.createElement(f.c, N({
						key: "d"
					}, t)))
				},
				T = e => {
					var {
						isLoading: t
					} = e, s = _(e, ["isLoading"]);
					return c.a.createElement(y.b, N({
						className: Object(E.a)({
							isLoading: t
						})
					}, s))
				};
			var M = P(k(e => {
				var {
					className: t,
					dispatch: s,
					pageLayer: n
				} = e, r = _(e, ["className", "dispatch", "pageLayer"]);
				return c.a.createElement("div", {
					className: Object(g.a)(j.a.baseLargeAndMediumPostStyles, t)
				}, c.a.createElement(x.b, {
					key: "a"
				}, c.a.createElement(L, r)), c.a.createElement("div", {
					className: w.a.content,
					key: "b"
				}, c.a.createElement("div", {
					className: w.a.topLine,
					key: "ba"
				}, r.isFakeSubreddit && c.a.createElement(T, {
					key: "baa",
					isLoading: !1
				}), c.a.createElement("div", {
					key: "bab",
					className: Object(g.a)(w.a.topMetaOne, Object(E.b)(r))
				}), c.a.createElement("div", {
					key: "bac",
					className: Object(g.a)(w.a.topMetaTwo, Object(E.b)(r))
				})), c.a.createElement("div", {
					key: "bb",
					className: Object(g.a)(w.a.title, Object(E.b)(r))
				})), c.a.createElement("div", {
					key: "c",
					className: Object(g.a)(w.a.media, Object(E.a)(r))
				}), c.a.createElement("div", {
					className: w.a.content,
					key: "d"
				}, c.a.createElement("div", {
					className: w.a.flatlist
				}, c.a.createElement("div", {
					className: Object(g.a)(w.a.flatlistItemOne, Object(E.b)(r))
				}), c.a.createElement("div", {
					className: Object(g.a)(w.a.flatListItemTwo, Object(E.b)(r))
				}))))
			}));
			const B = {
				[p.g.Large]: [M, 2],
				[p.g.Classic]: [b.b, 10],
				[p.g.Compact]: [h.a, 30]
			};

			function R(e) {
				return B[e]
			}
			const F = .1,
				D = Object(l.c)({
					loadingPostComponentForLayout: () => R
				}),
				A = Object(d.b)(D);
			class W extends c.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && u.b(this.wrapperRef), e && u.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= F;
						m.a.write(() => {
							this.mounted && this.setState(e => e.visible !== t ? {
								visible: t
							} : null)
						})
					}
				}
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0, this.mounted = !0
				}
				componentWillUnmount() {
					this.mounted = !1, this.wrapperRef && u.b(this.wrapperRef)
				}
				render() {
					const {
						className: e,
						countOverride: t,
						isLoading: s,
						layout: n,
						loadingPostComponentForLayout: a
					} = this.props, {
						visible: i
					} = this.state, [d, l] = a(n), m = t || l, u = r()(c.a.createElement(d, {
						isLoading: s && i
					})), p = o()(m, u);
					return c.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, c.a.Children.toArray(p))
				}
			}
			t.a = A(W)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/reddit/connectors/connectToLanguage.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/describeApiError/index.ts"),
				d = s("./src/reddit/components/PostList/index.m.less"),
				l = s.n(d);
			t.a = Object(o.a)(e => {
				const {
					language: t,
					onTryAgain: s,
					apiError: r
				} = e;
				let o = n.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return r && (o = Object(c.a)({
					apiError: r,
					language: t,
					isLoggedOut: !1
				})), a.a.createElement("div", {
					className: l.a.somethingWrong
				}, a.a.createElement("div", {
					className: l.a.somethingWrongText
				}, o), s && a.a.createElement(i.f, {
					onClick: s
				}, n.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			})
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, s) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return q
			})), s.d(t, "a", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				a = s.n(r),
				o = s("./node_modules/lodash/last.js"),
				i = s.n(o),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/fastdom/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				f = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				v = s("./src/reddit/components/Scroller/Simple.tsx"),
				E = s("./src/reddit/components/Translated/index.tsx"),
				C = s("./src/reddit/constants/adEvents.ts"),
				O = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/getClickInfo.ts"),
				N = s("./src/reddit/helpers/pixels.ts"),
				_ = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/helpers/brandSafety/index.ts"),
				k = s("./src/lib/LRUCache/index.ts"),
				L = s("./src/telemetry/index.ts"),
				T = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				B = s.n(M),
				R = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const F = 500,
				D = new k.a(F),
				A = new k.a(F),
				W = new k.a(F),
				H = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				U = h.a.div("SeeMore", B.a),
				V = h.a.wrapped(_.a, "ArrowRight", B.a),
				G = (e, t, s, n, r, a, o, i) => {
					const c = s ? "last-".concat(n, "-").concat(r) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(a);
					let l = D.get(d);
					return void 0 === l && (l = () => {
						s && o.onBottomViewed(n, r), o.trackOnPostEnteredViewport(e, t, i)
					}, D.set(d, l)), l
				},
				z = (e, t, s, n) => {
					const r = "left-".concat(e, "-").concat(t);
					let a = A.get(r);
					return void 0 === a && (a = r => {
						s.trackOnPostExitedViewport(e, t, r, n)
					}, A.set(r, a)), a
				},
				q = (e, t) => {
					const s = "click-".concat(e);
					let n = W.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && Object(N.a)(s.events, C.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(w.a)(e)
						})
					}, W.set(s, n)), n
				},
				K = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case j.g.Medium:
							return 188;
						case j.g.Classic:
							return 96;
						case j.g.Compact:
							return 32;
						default:
							return 200
					}
				},
				Z = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class J extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new k.a(F), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = a()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: n
						} = this.props, r = t(), a = [];
						r.forEach(e => a.push(e.id));
						const o = a.map(e => s[e]).filter(Boolean),
							i = o.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(I.a)(o, i))
					}, p.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && L.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = L.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = L.c.end(this.timerId);
						setTimeout(() => Object(L.b)(p.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && L.c.cancel(this.timerId), e.postIds.length && (this.timerId = L.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (b.a.read(() => this.checkAndSendScreenview()), this.timerId && L.c.has(this.timerId)) {
						const e = L.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(L.b)(p.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && L.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return L.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = L.c.end(e);
					setTimeout(() => {
						s(t(n, T.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							postsById: s
						} = t,
						n = R(t, ["postsById"]),
						{
							postsById: r
						} = e,
						a = R(e, ["postsById"]),
						o = Object.keys(n),
						i = Object.keys(a);
					if (i.length !== o.length) return !0;
					if (i.some(e => n[e] !== a[e])) return !0;
					if (s === r) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((n, a) => {
							const o = 0 === a;
							return t({
								isFirstPost: o,
								layout: e,
								post: s[n]
							}) !== t({
								isFirstPost: o,
								layout: e,
								post: r[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: r,
						isCommentPermalink: a,
						isCommentsPage: o,
						isFrontpage: i,
						isProfilePostListing: c,
						listingKey: l,
						listingName: m,
						pageLayer: u,
						pageReferrer: b,
						postClickEvent: h,
						redditStyle: g
					} = this.props, y = 0 === t, f = s ? "last-index" : "", v = "post-".concat(n, "-").concat(e, "-").concat(t, "-").concat(f, "-").concat(m, "-").concat(l, "-").concat(b);
					let E;
					if (void 0 === (E = this.scrollChildCache.get(v))) {
						const {
							inSubredditOrProfile: f,
							postsById: C
						} = this.props, O = C[e], S = O.crosspostRootId && C[O.crosspostRootId] ? C[O.crosspostRootId] : O;
						O.crosspostRootId && !C[O.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", p.p.API), e.setExtra("description", "Post ".concat(O.id, " is crosspost of ").concat(O.crosspostRootId, ", but ") + "".concat(O.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const w = this.props.postComponentForLayout({
								isCrosspost: !!O.crosspostRootId,
								isFirstPost: y,
								layout: n,
								post: S
							}),
							N = "post-list-item-[layout: ".concat(n, "]-[postId: ").concat(e, "]"),
							_ = G(e, n, s, l, m, b, this.props, t),
							I = z(e, n, this.props, t),
							k = q(e, this.props),
							L = S.media && S.media.type === P.n.EMBED ? S.media.provider : null;
						E = {
							estHeight: K(O, n),
							id: e,
							isFocusable: !(!S.media || n !== j.g.Large) && (P.d.has(S.media.type) && (!L || !P.q.has(L)) && !S.isSpoiler && !S.isNSFW),
							trackOnEnteredViewport: _,
							trackOnExitedViewport: I,
							render: t => {
								let {
									className: n,
									height: p,
									width: b,
									remeasure: x,
									setScrollerChildRef: v,
									shouldLoadInitially: E
								} = t;
								return d.a.createElement(w, {
									className: n,
									currentProfileName: r,
									key: N,
									availableWidth: b,
									eventFactory: h,
									first: y,
									forceLoadMedia: E,
									inSubredditOrProfile: f,
									isCommentPermalink: a,
									isCommentsPage: o,
									isFrontpage: i,
									isProfilePostListing: c,
									listingKey: l,
									listingName: m,
									pageLayer: u,
									last: s,
									onClickPost: k,
									onSizeChanged: x,
									postId: e,
									redditStyle: g,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: v
								})
							}
						}, this.scrollChildCache.set(v, E)
					}
					return E
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return d.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: r,
						postListPlaceholderComponent: a
					} = this.props;
					if (s) return;
					const o = a;
					return d.a.createElement("div", {
						className: B.a.placeholder
					}, d.a.createElement(o, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: r,
						onLoadMore: a
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: B.a.placeholder
					}, d.a.createElement(y.a, {
						className: r,
						isLoading: !!t,
						layout: n,
						countOverride: H[n]
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: a
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: a,
						layout: o,
						location: i,
						loadMore: l,
						postIds: b,
						onLoadMore: h
					} = this.props;
					let g = b.map((e, t, s) => {
						const n = t === b.length - 1;
						return this.scrollChildForPost(e, t, n, o)
					});
					r && (g = Z(g, r));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(o) : void 0,
						y = i ? Object(n.e)(i) : null,
						f = y || a;
					return d.a.createElement(c.Fragment, null, d.a.createElement(v.b, {
						innerRef: this.updateScrollerRef,
						className: f ? B.a.truncatedPostList : Object(u.a)(B.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: h,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: O.g
					}, g), y && d.a.createElement(U, {
						className: B.a.seeMoreButton
					}, d.a.createElement(S.a, {
						className: B.a.seeMorePostsText,
						to: Object(m.a)(y, {
							type: p.Jb.Posts
						})
					}, d.a.createElement(E.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(V, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			J.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: d.a.Fragment
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/CrosspostBox/index.tsx"),
				o = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(a.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : r.a.createElement(o.a, Object.assign({}, e, {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1x9gNS8wlrugqgwofOEcGq",
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				o = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostMeta/index.m.less"),
				f = s.n(y);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: y,
					isOverlay: v,
					language: E,
					post: C,
					shouldShowSubscribeButton: O,
					subredditOrProfile: j,
					tooltipType: S
				} = e;
				return r.a.createElement("div", {
					className: f.a.metaContainer
				}, !n && !C.isSponsored && j && r.a.createElement(i.a, {
					postId: C.id,
					subredditName: j.name
				}, r.a.createElement(u.a, {
					className: f.a.subredditName,
					"data-click-id": "subreddit",
					to: j.url
				}, j.displayText)), j && j.isQuarantined && r.a.createElement(m.a, null), !n && !C.isSponsored && j && O && !y && r.a.createElement(p.a, {
					getEventFactory: e => Object(g.f)(C.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: j.name,
						type: Object(x.d)(j) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: C.id,
					small: !0
				}), !n && !C.isSponsored && r.a.createElement(h.b, null), !n && !C.isSponsored && r.a.createElement(c.h, {
					type: C.belongsTo.type,
					id: C.belongsTo.id
				}), r.a.createElement(l.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: t,
					language: E,
					post: C,
					tooltipType: S
				}), r.a.createElement(d.a, {
					displayText: j ? j.displayText : null,
					inSubredditOrProfile: !!n,
					language: E,
					post: C,
					tooltipType: S
				}), j && r.a.createElement(o.a, {
					className: f.a.donationAmount,
					contentId: C.id,
					subredditId: j.id
				}), r.a.createElement(a.a, {
					hideCta: s,
					isOverlay: v,
					thing: C,
					tooltipType: S
				}))
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1SRZN02bVXzHIIMqGwlZD7",
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostTopLine/index.m.less"),
				E = s.n(v);
			const C = s("./src/lib/lessComponent.tsx").a.div("Container", E.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideNSFWPref: n,
					iconClassName: v,
					inSubredditOrProfile: O,
					isCurrentUserProfilePost: j,
					isCommentsPage: S,
					isCompactPinnedPost: w,
					isOverlay: N,
					language: _,
					post: P,
					publicAwardersEnabled: I,
					shouldShowSubscribeButton: k,
					showCornerOutboundLink: L,
					showSubreddit: T,
					showSubredditIcon: M,
					subredditOrProfile: B
				} = e, R = S && I;
				return r.a.createElement(C, {
					className: t
				}, T && B && r.a.createElement("div", {
					className: E.a.subredditIconWrapper
				}, r.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: B.url
				}, M && r.a.createElement(m.b, {
					className: Object(a.a)(E.a.subredditIcon, v),
					shouldHideNsfwIcon: n,
					subredditOrProfile: B
				}))), r.a.createElement("div", {
					className: E.a.everythingElseWrapper
				}, T && r.a.createElement(c.h, {
					type: P.belongsTo.type,
					id: P.belongsTo.id
				}), r.a.createElement(l.d, {
					className: E.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: N ? l.c.Lightbox : void 0,
					language: _,
					post: P,
					showSub: T,
					subredditOrProfile: B
				}), r.a.createElement(d.a, {
					className: E.a.postBadges,
					displayText: B ? B.displayText : null,
					inSubredditOrProfile: O,
					language: _,
					isCompactPinnedPost: w,
					post: P,
					tooltipType: N ? l.c.Lightbox : void 0
				}), B && r.a.createElement(i.a, {
					className: E.a.donationAmount,
					contentId: P.id,
					subredditId: B.id
				}), r.a.createElement(o.a, {
					forceShowAllAwards: S,
					isOverlay: N,
					showAwarders: R,
					tooltipType: N ? l.c.Lightbox : void 0,
					thing: P
				})), B && T && k && !j && r.a.createElement(p.a, {
					getEventFactory: e => Object(g.f)(P.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: B.name,
						type: Object(f.d)(B) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: P.id
				}, "Subscribe"), L && r.a.createElement(h.a, {
					className: E.a.OutboundLink,
					isSponsored: P.isSponsored,
					href: Object(y.A)(e.post),
					source: P.source
				}, r.a.createElement(x.a, {
					className: E.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/placeholders.tsx");
			const i = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: s
					} = e;
					return r.a.createElement(o.a, {
						className: t,
						layout: s
					})
				},
				getComponent: () => s.e("RpanListingUnit").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			t.a = e => r.a.createElement(i, e)
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/postLayout.ts");
			const r = e => e === n.g.Classic ? 88 : e === n.g.Compact ? 42 : 340
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				moreContainer: "_3WyMekikYHiwNeWOKndqQp",
				moreCaption: "_2OsGQXO2YdWHs0NVAbBl99",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				thumbnailTitle: "asOYju9PbMblWUua6ZsDl",
				watchingCounter: "_39XcbVabXFJtShzyIs8H1I",
				redditorIcon: "_2hUZYf9a2TRLQxn5jLEohm",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				descriptionPlaceholder: "_1WqW1SYAmWeFcfecGlX5vw",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/placeholders.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				c = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				l = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				u = s.n(m),
				p = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				b = s.n(p);
			const h = e => {
					let {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: Object(a.a)(t, b.a.container, b.a.placeholder, b.a.large, u.a.largeAndMediumPostStyles)
					}, r.a.createElement(d.a, {
						className: b.a.backgroundWrapper
					}, r.a.createElement("div", {
						className: b.a.titleAndDescriptionContainer
					}, r.a.createElement("div", {
						className: b.a.titlePlaceholder
					}), r.a.createElement("div", {
						className: b.a.descriptionPlaceholder
					})), r.a.createElement("div", {
						className: b.a.body
					}, g(o.i))))
				},
				g = e => Array.from({
					length: e
				}).map((e, t) => r.a.createElement("div", {
					className: Object(a.a)(b.a.thumbnailContainer, b.a.placeholder),
					key: "rpan-thumb-placeholder-".concat(t)
				}, r.a.createElement("div", {
					className: Object(a.a)(b.a.thumbnail, b.a.placeholder)
				})));
			t.a = e => {
				let {
					className: t,
					layout: s
				} = e;
				return s === l.g.Classic ? r.a.createElement(i.b, {
					className: Object(a.a)(t, b.a.classicPostPlaceholder),
					isLoading: !0
				}) : s === l.g.Compact ? r.a.createElement(c.a, {
					className: Object(a.a)(t, b.a.compactPostPlaceholder),
					isLoading: !0
				}) : r.a.createElement(h, {
					className: t
				})
			}
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "Pr5bGphZnd_UYC5p4gJCD",
				container: "Pr5bGphZnd_UYC5p4gJCD",
				PopularIcon: "_2uzMzf2xHgtXHeHKoewIn9",
				popularIcon: "_2uzMzf2xHgtXHeHKoewIn9"
			}
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				c = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					children: t,
					className: s,
					showIcon: n
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(d.a.Container, s)
				}, n && r.a.createElement(i.a, {
					className: d.a.PopularIcon
				}), r.a.createElement(o.b, {
					type: o.a.Widget
				}, t))
			}
		},
		"./src/reddit/components/RawHTMLDisplay/Listing.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				i = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(a.a)(e => r.a.createElement(i.a, c({
				style: {
					color: Object(o.a)(e).post
				}
			}, e)))
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				a = s.n(r);
			t.a = n.a.div("header", a.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/index.tsx"),
				p = s("./src/reddit/components/Translated/index.tsx"),
				b = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Theme/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = s("./src/reddit/components/MiniCardPost/index.m.less"),
				j = s.n(O),
				S = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				w = s.n(S);
			const N = e => e.type === v.f.Spoiler,
				_ = Object(h.t)();
			t.a = _(Object(u.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: r,
					onPostClick: c,
					trendingPost: u,
					trendingSearch: h,
					shouldOpenPost: v,
					showSubredditMeta: O = !0,
					showSubredditName: S,
					subredditOrProfile: _
				} = e, P = u && u.preview && u.preview.url || void 0, I = u && u.isSponsored ? "promoted_trend" : "trending", k = u && Object(d.a)(u.permalink) || "", L = v && k || h && Object(o.a)("/search", {
					q: h.rawQuery,
					source: I
				}) || k, T = h ? h.subredditInfo && h.subredditInfo.icon : _ && _.icon.url, M = h ? h.subredditInfo && h.subredditInfo.displayText : _ && (_.displayText || _.name), B = u ? u.flair.filter(N) : [], R = u ? u.score : 0, F = u ? u.numComments : 0, D = u && u.isSponsored, A = Object(C.a)(e).body, W = "linear-gradient(\n      ".concat(Object(n.j)(A, .2), ",\n      ").concat(Object(n.j)(A, .3), ",\n      ").concat(Object(n.j)(A, .4), ",\n      ").concat(Object(n.j)(A, .6), ",\n      ").concat(Object(n.j)(A, .8), ",\n      ").concat(A, "\n    )"), H = a.a.createElement("div", {
					className: Object(i.a)(w.a.trendingPost, {
						[w.a["m-background"]]: !!P
					})
				}, a.a.createElement(g.a, {
					to: L
				}, a.a.createElement("div", {
					className: Object(i.a)(w.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(E.g)(Object(C.a)(e).body, P || Object(C.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, D && a.a.createElement("div", {
					className: w.a.promoted
				}, a.a.createElement(f.c, null, "promoted")), a.a.createElement("div", {
					className: Object(i.a)(w.a.innerContainer, j.a.innerContainer, r),
					onClick: c,
					title: u ? u.title : ""
				}, a.a.createElement("h2", {
					className: u ? w.a.title : w.a.titleNoDescription
				}, e.title), u ? a.a.createElement("div", {
					className: Object(i.a)(w.a.description, s)
				}, B.length > 0 && a.a.createElement(m.a, {
					className: w.a.flair,
					titleFlair: B,
					nowrap: !0,
					post: u,
					showCategoryTag: !1
				}), u.title) : a.a.createElement("div", {
					className: w.a.spacer
				}), O && T && M && a.a.createElement(x.a, {
					className: w.a.relatedSubredditMetaData,
					iconClassName: w.a.subredditIcon,
					iconUrl: T || void 0,
					suffix: a.a.createElement(p.a, {
						msgId: "search.subredditMetaData.andMore",
						replacements: {
							displayText: M
						}
					})
				}), !O && u && a.a.createElement("div", {
					className: w.a.metaLine
				}, S && M && a.a.createElement("span", {
					className: w.a.meta
				}, Object(y.b)(M)), a.a.createElement("span", {
					className: w.a.meta
				}, a.a.createElement(f.c, null, "".concat(Object(l.b)(R), " "), a.a.createElement(f.a, {
					count: R,
					name: "score",
					plural: "points",
					singular: "point"
				}))), a.a.createElement("span", {
					className: w.a.meta
				}, a.a.createElement(f.c, null, "".concat(Object(l.b)(F), " "), a.a.createElement(f.a, {
					count: F,
					name: "numComments",
					plural: "comments",
					singular: "comment"
				}))))))));
				return D ? a.a.createElement(b.a, {
					post: u,
					children: H
				}) : H
			})))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					className: t,
					exploreV2Variant: s,
					layoutBodyClassName: n,
					showCardView: i
				} = e, d = {
					[c.a["m-card"]]: i
				};
				return r.a.createElement("div", {
					className: Object(a.a)(c.a.container, d, t)
				}, r.a.createElement(o.a, {
					className: s ? void 0 : c.a.layout,
					bodyClassName: Object(a.a)(c.a.layoutBody, d, n),
					exploreV2Variant: s,
					header: e.header,
					headerClassName: Object(a.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3_c5cqV3WsdQo95Ql4El73",
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = s("./src/reddit/components/Translated/index.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				m = s.n(l);
			const u = r.a.createElement(o.a, {
					className: m.a.duHeader
				}, r.a.createElement(c.a, {
					msgId: "discoveryUnits.trendingToday"
				})),
				p = Object(d.a)({
					isLoading: !0
				});
			t.a = e => r.a.createElement(i.a, {
				className: e.className,
				exploreV2Variant: e.exploreV2Variant,
				header: u,
				layoutBodyClassName: m.a.layoutBody,
				showCardView: e.showCardView,
				children: Array.from({
					length: e.numberOfItems || 6
				}).map(e => r.a.createElement("div", {
					className: m.a.post,
					key: "placeholder-post-".concat(e)
				}, r.a.createElement("div", {
					className: Object(a.a)(m.a.desc, m.a.one, p)
				}), r.a.createElement("div", {
					className: Object(a.a)(m.a.desc, m.a.two, p)
				}), r.a.createElement("div", {
					className: Object(a.a)(m.a.icon, p)
				}), r.a.createElement("div", {
					className: Object(a.a)(m.a.name, p)
				})))
			})
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/BannerAd/index.tsx"),
				d = s("./src/config.ts"),
				l = s("./node_modules/lodash/random.js"),
				m = s.n(l),
				u = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.div("BannerContainer", p.a),
				g = b.a.wrapped(e => r.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", p.a),
				x = [{
					img: "/img/house-ads/btc.png",
					href: "/r/btc"
				}, {
					img: "/img/house-ads/campfirecooking.png",
					href: "/r/campfirecooking"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/rubberducks.png",
					href: "/r/advertising"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/imaginarycolorscapes.png",
					href: "/r/imaginarycolorscapes"
				}, {
					img: "/img/house-ads/imaginarydragons.png",
					href: "/r/imaginarydragons"
				}, {
					img: "/img/house-ads/oldschoolcelebs.png",
					href: "/r/oldschoolcelebs"
				}];
			var y = () => {
					const e = m()(0, x.length - 1),
						{
							img: t,
							href: s
						} = x[e];
					return r.a.createElement(h, {
						className: "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, r.a.createElement("a", {
						href: d.a.redditUrl + s,
						target: "_blank"
					}, r.a.createElement(g, {
						src: d.a.assetPath + t
					})))
				},
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/components/PostMedia/index.tsx"),
				E = s("./src/reddit/components/PostTitle/index.tsx"),
				C = s("./src/reddit/components/PostTopMeta/index.tsx"),
				O = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				j = s("./src/lib/getShortenedLink.ts"),
				S = s("./src/lib/opener/index.ts"),
				w = s("./src/reddit/actions/ads/index.ts"),
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				P = s("./src/reddit/contexts/InsideOverlay.tsx"),
				I = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				k = s("./src/reddit/helpers/adCount/index.ts"),
				L = s("./src/reddit/helpers/pixels.ts"),
				T = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				M = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				B = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				R = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				F = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				D = s("./src/reddit/models/Theme/index.ts"),
				A = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				W = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				U = s.n(H);
			const V = b.a.wrapped(e => r.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", U.a);
			class G extends r.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = e.media && !Object(W.E)(e.media) ? e.media.content : "",
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case f.eb.IMAGE:
							return r.a.createElement(V, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var z = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				q = s.n(z);
			const K = b.a.wrapped(C.d, "PostTopMeta", q.a),
				Z = b.a.div("BannerAdContainer", q.a),
				J = e => {
					let {
						children: t
					} = e;
					return r.a.createElement("div", null, t)
				},
				Q = b.a.div("PromotedPostContainer", q.a),
				Y = b.a.wrapped(R.a, "OutboundLinkIcon", q.a),
				X = b.a.div("SourceLinkWrapper", q.a),
				$ = b.a.div("TopLine", q.a),
				ee = b.a.wrapped(E.c, "PostTitle", q.a),
				te = b.a.div("PostMediaWrapper", q.a),
				se = b.a.div("BackgroundWrapper", q.a),
				ne = b.a.wrapped(N.a, "PostContainer", q.a),
				re = 640,
				ae = (e, t) => {
					Object(L.a)(t.events, _.a.Click), t.source ? t.source.outboundUrl ? Object(S.d)(t.source.outboundUrl, S.c.BLANK) : Object(S.d)(t.source.url, S.c.BLANK) : Object(S.d)(t.permalink, S.c.BLANK)
				},
				oe = e => Object(B.a)(e.title, 100),
				ie = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(M.a)(Object(T.a)(e), F.a.actionIcon, F.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				ce = e => ({
					background: Object(D.g)(Object(A.a)(e).body, null, null) || ""
				});
			class de extends r.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: s,
						isOverlay: n
					} = this.props;
					let a, o, c = {};
					return e.isBlank ? (a = J, o = null) : e.isMediaOnly ? (a = Z, c = {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, o = r.a.createElement(G, {
						post: e
					})) : (a = Q, o = r.a.createElement(se, {
						style: ce(this.props)
					}, r.a.createElement($, null, r.a.createElement(K, {
						tooltipType: n ? C.c.Lightbox : void 0,
						language: f.y,
						post: e,
						showTimestamp: !1
					})), r.a.createElement(ee, {
						post: e,
						size: E.b.Large,
						format: oe
					}), e.source && r.a.createElement(X, null, r.a.createElement(I.a, {
						href: e.source.url,
						isSponsored: !0,
						source: e.source
					}, Object(j.a)(e), r.a.createElement(Y, null))), r.a.createElement(te, null, e.media && r.a.createElement(v.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: re,
						shouldLoad: !0
					})))), r.a.createElement(a, c, r.a.createElement(ne, {
						className: t,
						isOverlay: n,
						post: e,
						onClick: ae,
						eventFactory: s,
						style: ie(this.props)
					}, o))
				}
			}
			var le = Object(a.b)(null, (e, t) => ({
					refreshSidebarPromotedPost: () => {
						const {
							placement: s,
							placementIndex: n,
							isOverlay: r
						} = t;
						e(Object(w.c)(Object(k.a)(s, !!r, n)))
					}
				}))(Object(P.b)(Object(O.a)(de))),
				me = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				ue = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				pe = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				be = s.n(pe);
			const he = Object(o.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(k.a)(s, r, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				ge = Object(a.b)(he),
				xe = b.a.wrapped(c.a, "BannerAd", be.a),
				ye = b.a.wrapped(ue.a, "ThemedWidget", be.a),
				fe = b.a.div("SidebarAdPlaceholder", be.a),
				ve = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				Ee = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(W.B)(e.media) && e.media.content)),
				Ce = e => !!e && e.isBlank;
			class Oe extends r.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: n,
						placementIndex: a,
						refreshKey: o,
						listingName: c,
						placement: d,
						sizes: l,
						position: m,
						redditStyle: u,
						forcePlaceholder: p,
						forceHouseAd: b,
						waitForProgrammatic: h
					} = this.props;
					return p || t || !Ee(s) && h ? r.a.createElement(me.a, null, r.a.createElement(ye, {
						className: e,
						contentOnly: !0,
						redditStyle: u
					}, r.a.createElement(fe, {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}))) : b ? r.a.createElement(me.a, null, r.a.createElement(y, null)) : Ee(s) ? r.a.createElement(me.a, null, r.a.createElement(le, {
						post: s,
						refreshKey: o,
						listingName: c,
						placement: d,
						placementIndex: a
					})) : r.a.createElement(me.a, null, r.a.createElement(ye, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: u
					}, Ce(s) && r.a.createElement(le, {
						post: s,
						refreshKey: o,
						listingName: c,
						placement: d,
						placementIndex: a
					}), r.a.createElement(xe, {
						id: ve(d, n, a),
						sizes: l,
						placement: d,
						listingName: c,
						refreshKey: o,
						position: m,
						dataBeforeContent: Object(i.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = ge(Oe)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const u = Object(o.t)();
			t.a = u(Object(a.b)((e, t) => {
				let {
					listingName: s,
					pageLayer: n
				} = t;
				const r = Object(i.b)(e, {
						listingName: s,
						pageLayer: n
					}),
					a = Object(c.y)(e),
					o = Object(i.e)(e);
				return {
					canShowAd: r && !a,
					forcePlaceholder: !Object(i.c)(e),
					isAdsDisabled: a,
					viewIsUnsafe: o
				}
			})(e => {
				var {
					canShowAd: t,
					isAdsDisabled: s,
					viewIsUnsafe: n,
					pageLayer: a
				} = e, o = m(e, ["canShowAd", "isAdsDisabled", "viewIsUnsafe", "pageLayer"]);
				return !s && t && a ? r.a.createElement(d.a, l({
					forceHouseAd: n
				}, o)) : null
			}))
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
				a = s.n(r);
			t.a = n.a.div("container", a.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/take.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/SidebarExpandableList/index.m.less"),
				y = s.n(x),
				f = s("./src/lib/lessComponent.tsx");
			const v = 10,
				E = f.a.wrapped(u.n, "TertiaryButton", y.a);
			class C extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && s && s()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							language: s,
							onLoadMore: n,
							pending: r
						} = this.props, a = !e || t && n ? Object(d.a)(s, "sidebar.widgets.expandableList.viewMore") : Object(d.a)(s, "sidebar.widgets.expandableList.viewLess");
						return o.a.createElement(E, {
							onClick: this.onButtonClick
						}, r ? o.a.createElement(p.a, {
							sizePx: v
						}) : a)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: s,
						items: n,
						minimizedLength: a,
						renderItem: i,
						title: c
					} = this.props, {
						expanded: d
					} = this.state, l = n.length > a || t, u = (!l || d ? n : r()(n, a)).map(e => i({
						item: e
					}));
					return o.a.createElement(m.a, {
						className: e,
						headerButton: s,
						title: c
					}, u, o.a.createElement(b.a, null, o.a.createElement(h.a, null, l && this.renderToggleButton())))
				}
			}
			C.defaultProps = {
				minimizedLength: l.Cb
			};
			const O = Object(c.c)({
				language: g.S
			});
			t.a = Object(i.b)(O)(C)
		},
		"./src/reddit/components/SidebarFlairSettings/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_2a172ppKObqWfRHr8eWBKV",
				FlairSettingsContainer: "_39-woRduNuowN7G4JTW4I8",
				flairSettingsContainer: "_39-woRduNuowN7G4JTW4I8",
				FlairPreview: "_3AOoBdXa2QKVKqIEmG7Vkb",
				flairPreview: "_3AOoBdXa2QKVKqIEmG7Vkb",
				EditPencil: "vzEDg-tM8ZDpEfJnbaJuU",
				editPencil: "vzEDg-tM8ZDpEfJnbaJuU",
				PreviewTitle: "r51dfG6q3N-4exmkjHQg_",
				previewTitle: "r51dfG6q3N-4exmkjHQg_",
				FlairComponent: "_2ygXHcy_x6RG74BMk0UKkN",
				flairComponent: "_2ygXHcy_x6RG74BMk0UKkN",
				TertiaryButton: "_2BnLYNBALzjH6p_ollJ-RF",
				tertiaryButton: "_2BnLYNBALzjH6p_ollJ-RF",
				IconButton: "_1-25VxiIsZFVU88qFh-T8p",
				iconButton: "_1-25VxiIsZFVU88qFh-T8p",
				Username: "_3BmRwhm18nr4GmDhkoSgtb",
				username: "_3BmRwhm18nr4GmDhkoSgtb"
			}
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.a("Link", c.a);
			t.a = e => r.a.createElement(o.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: c.a.LinkContainer
			}, r.a.createElement("div", {
				className: c.a.Column
			}, r.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, d._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, d._("Reddit App", null, {
				hk: "1ehrjP"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, d._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, d._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, d._("Reddit gifts", null, {
				hk: "2XziRN"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, d._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, d._("Top Posts", null, {
				hk: "2NOEW2"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, d._("Topics", null, {
				hk: "349RFt"
			}))), r.a.createElement("div", {
				className: c.a.Column
			}, r.a.createElement(l, {
				href: "https://about.reddit.com"
			}, d._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, d._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, d._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, d._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, d._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, d._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, d._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, d._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, d._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: c.a.Copyright
			}, d._("Reddit Inc © {year}. All rights reserved", [d._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, s) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarPostList/ObservedPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r);
			const o = .99;
			class i extends a.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= o && t(s)
					}
				}
				render() {
					return a.a.createElement(n.a, {
						threshold: o,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			t.a = i
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/isFakeSubreddit/index.ts"),
				d = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/name/index.ts"),
				u = s("./src/reddit/helpers/overlay/index.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/components/SidebarPostList/ObservedPost/index.tsx"),
				x = s("./src/lib/isUrl/index.ts"),
				y = s("./src/lib/prettyPrintNumber/index.ts"),
				f = s("./src/reddit/components/FlairWrapper/index.tsx"),
				v = s("./src/reddit/components/Thumbnail/index.tsx"),
				E = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				S = s.n(j);
			const w = e => e.type === E.f.Nsfw || e.type === E.f.Spoiler,
				N = Object(o.c)({
					language: O.S,
					post: h.J,
					subredditOrProfile: h.U
				});
			class _ extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && s(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: s,
						showSubredditName: n,
						subredditOrProfile: a
					} = this.props, o = {
						post: t
					}, c = Object(x.a)(Object(v.b)(o)), d = t.flair.filter(w);
					return r.a.createElement("div", {
						className: Object(i.a)(S.a.container, e, {
							[S.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: S.a.mainLine
					}, c && r.a.createElement("div", {
						className: S.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(v.a, o)), r.a.createElement("div", {
						className: Object(i.a)(S.a.title, !c && S.a.titleSingle),
						title: t.title
					}, d.length > 0 && r.a.createElement(f.a, {
						className: S.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), r.a.createElement("div", {
						className: S.a.metaLine
					}, n && !!a && r.a.createElement("span", {
						className: S.a.meta
					}, Object(C.d)(a) ? Object(m.c)(a.displayText || a.name) : Object(m.b)(a.displayText || a.name)), r.a.createElement("span", {
						className: S.a.meta
					}, "".concat(Object(y.b)(t.score), " "), r.a.createElement(p.a, {
						count: t.score,
						name: "score",
						plural: "points",
						singular: "point"
					})), r.a.createElement("span", {
						className: S.a.meta
					}, "".concat(Object(y.b)(t.numComments), " "), r.a.createElement(p.a, {
						count: t.numComments,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					}))))
				}
			}
			var P = Object(a.b)(N, e => ({
					openLightbox: t => e(Object(u.a)(t.permalink))
				}))(_),
				I = s("./src/reddit/components/SidebarPostList/index.m.less"),
				k = s.n(I);
			s.d(t, "b", (function() {
				return M
			}));
			const L = 10,
				T = 2,
				M = Object(o.a)(h.O, e => e.filter(e => !e.isSponsored)),
				B = Object(o.c)({
					posts: M
				}),
				R = Object(a.b)(B, e => ({
					openPost: t => e(Object(u.a)(t.permalink))
				}));
			class F extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: s
						} = this.props, [n] = s;
						n && (t(n), e && e(n.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || L, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((s, n) => (e = Math.ceil(n.posts.length / t), {
							chunkIdx: s.chunkIdx < e - 1 ? s.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: s,
							onPostVisible: n,
							redditStyle: a,
							smallPostClassName: o
						} = this.props;
						return r.a.createElement(g.a, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, r.a.createElement(P, {
							className: Object(i.a)(k.a.smallPost, o),
							containerOnClick: s,
							postId: e.id,
							redditStyle: a,
							showSubredditName: Object(c.a)(Object(m.f)(t)),
							thumbnailOnClick: s
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: s,
						moreButtonText: n,
						onPostVisible: a,
						posts: o,
						redditStyle: u,
						showMoreButton: h,
						topPostsVariant: x
					} = this.props, {
						chunkIdx: y
					} = this.state;
					if (0 === o.length) return null;
					const f = this.getVisiblePostsCounts(),
						v = Object(b.a)(x),
						E = Object(b.b)(x),
						C = v || E,
						O = o.slice(y * f, (y + 1) * f),
						[j, ...S] = O,
						w = C ? O.slice(0, T) : S.slice(0, T),
						N = C ? O.slice(T) : S.slice(T);
					return r.a.createElement("div", {
						className: Object(i.a)(k.a.container, t, {
							[k.a.redditStyle]: u
						})
					}, !C && r.a.createElement(g.a, {
						onPostVisible: a,
						postId: j.id
					}, r.a.createElement(d.a, {
						backgroundWrapperClassName: k.a.largePostBackgroundWrapper,
						descriptionClassName: k.a.largePostDescription,
						innerContainerClassName: k.a.largePostInnerContainer,
						"data-redditstyle": u,
						onPostClick: this.openLargePost,
						postId: j.id,
						showSubredditMeta: !1,
						showSubredditName: Object(c.a)(Object(m.f)(s)),
						trendingPost: j
					})), w.map(this.renderSmallPost), e, N.map(this.renderSmallPost), h && r.a.createElement(l.n, {
						className: k.a.SeeMore,
						onClick: this.showMorePosts
					}, n || r.a.createElement(p.c, null, "See More")))
				}
			}
			t.a = R(F)
		},
		"./src/reddit/components/SidebarSectionHeader/index.m.less": function(e, t, s) {
			e.exports = {
				headerStyles: "ySyP3_8M4Wb9GDZa0U3rV",
				Component: "_1X2juHHajDXGs8oboBFTY1",
				component: "_1X2juHHajDXGs8oboBFTY1"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				a = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(m),
				p = e => i.a.createElement("div", {
					className: Object(n.a)(e.className, u.a.container),
					style: e.style
				}, i.a.createElement(d.f, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, i.a.createElement(l.c, null, "Back to top"))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				y = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = s.n(y),
				v = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const O = c.e[1] + 24,
				j = h.g + 8 + 152 + 32 + 16,
				S = j + O + 8,
				w = v.a.div("Container", f.a),
				N = v.a.wrapped(e => {
					var {
						className: t
					} = e, s = C(e, ["className"]);
					return i.a.createElement(p, E({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", f.a),
				_ = e => {
					let {
						categoriesPlacementVariant: t,
						children: s,
						className: r,
						isSticky: a
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(r, {
							[f.a.StickyStyles]: a,
							[f.a.LargeOffset]: Object(x.f)(t)
						})
					}, s)
				};
			class P extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > S,
						shouldFooterSticky: this.windowHeight > j
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = a()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.F), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							categoriesPlacementVariant: t,
							hideFooter: s,
							railsWidgetsVariant: n,
							children: r
						}
					} = this, a = this.state.isAdSticky && !(!e && !r);
					return i.a.createElement(w, {
						innerRef: this.setWrapperRef
					}, i.a.createElement(_, {
						categoriesPlacementVariant: t,
						isSticky: a || !!n
					}, e, r, !s && i.a.createElement(b.a, null)), !this.props.hideBackToTop && i.a.createElement(N, null))
				}
			}
			const I = Object(g.t)();
			t.a = I(P)
		},
		"./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				Pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				DropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				dropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				OverflowMenu: "KZF0GvnWopJYsNtVGODBn",
				overflowMenu: "KZF0GvnWopJYsNtVGODBn"
			}
		},
		"./src/reddit/components/SidebarSubredditChannels/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2sEbIFP3ssTnt1Fo23m26r",
				wrapper: "_2sEbIFP3ssTnt1Fo23m26r"
			}
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/getShortenedLink.ts"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(d),
				m = s("./src/lib/lessComponent.tsx");
			const u = m.a.wrapped(c.a, "OutboundLinkIcon", l.a),
				p = m.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, {
					source: c,
					isSponsored: d
				} = s;
				return c ? r.a.createElement(p, {
					className: Object(a.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, r.a.createElement(i.a, {
					href: c.url,
					isSponsored: d,
					source: c
				}, Object(o.a)(s), r.a.createElement(u, null))) : null
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, s) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/loadWithRetries/index.ts"),
				p = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/selectors/moderatorPermissions.ts"),
				y = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/userPrefs.ts"),
				v = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				E = s.n(v),
				C = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const O = m.a.div("BladeContainer", E.a),
				j = m.a.wrapped(g.a, "CloseIcon", E.a),
				S = m.a.div("LoadingTitleContainer", E.a),
				w = m.a.div("LoadingNavContainer", E.a),
				N = m.a.div("ShortLoadingNav", E.a),
				_ = m.a.wrapped(h.a, "ThemedChevron", E.a),
				P = e => {
					var t = C(e, []);
					return o.a.createElement(O, null, o.a.createElement(j, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, o.a.createElement(b.c, null, "Back to mod tools")), o.a.createElement(p.o, null, o.a.createElement(S, null, o.a.createElement("div", {
						className: Object(l.a)(E.a.LoadingTitle, t.isLoading && E.a.loading)
					})), o.a.createElement(w, null, o.a.createElement("div", {
						className: Object(l.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
					}), o.a.createElement(_, null)), o.a.createElement(w, null, o.a.createElement(N, null), o.a.createElement(_, null)), o.a.createElement(w, null, o.a.createElement("div", {
						className: Object(l.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
					}), o.a.createElement(_, null)), o.a.createElement(w, null, o.a.createElement(N, null), o.a.createElement(_, null)), o.a.createElement(w, null, o.a.createElement("div", {
						className: Object(l.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
					}), o.a.createElement(_, null)))))
				},
				I = Object(d.a)({
					getComponent: () => Object(u.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("PostDraft~RichTextEditor~StructuredStyles"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
					ErrorComponent: () => o.a.createElement(P, {
						gradientType: "posts",
						isLoading: !1
					}),
					LoadingComponent: () => o.a.createElement(P, {
						gradientType: "posts",
						isLoading: !0
					})
				}),
				k = Object(c.c)({
					isEditing: y.j,
					isSubscriptionsPinned: f.b,
					moderatorPermissions: x.j
				});
			t.a = Object(i.b)(k)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(E.a.Container, e.isSubscriptionsPinned && E.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(I, {
					subredditId: e.subredditId
				})) : o.a.createElement(a.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return o
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return c
			})), s.d(t, "o", (function() {
				return d
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "j", (function() {
				return E
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = s.n(r);
			const o = n.a.section("FormPage", a.a),
				i = n.a.h1("HomePageTitle", a.a),
				c = n.a.button("HomePageBreadcrumb", a.a),
				d = n.a.div("HomePageGroup", a.a),
				l = n.a.h1("FormPageTitle", a.a),
				m = n.a.div("FormPageSection", a.a),
				u = n.a.div("FormGroup", a.a),
				p = n.a.h2("FormGroupTitle", a.a),
				b = n.a.div("FormElement", a.a),
				h = n.a.div("FormGroupDescription", a.a),
				g = n.a.div("FormItem", a.a),
				x = n.a.h3("FormElementTitle", a.a),
				y = n.a.div("FormElementDescription", a.a),
				f = n.a.div("FormElementError", a.a),
				v = n.a.div("FormElementSubGroup", a.a),
				E = n.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/SubredditChannelList/index.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				primaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				ModalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				modalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				ModalText: "_3HL4gEFxPNzkrPu94hblvT",
				modalText: "_3HL4gEFxPNzkrPu94hblvT",
				ItemLink: "vByM_anguY6xuCJEcusmJ",
				itemLink: "vByM_anguY6xuCJEcusmJ",
				Detail: "_1hkd6aDOGqeroDz5-yntAS",
				detail: "_1hkd6aDOGqeroDz5-yntAS",
				DescText: "_2Kwn1xR6xMSka95C9d72vF",
				descText: "_2Kwn1xR6xMSka95C9d72vF",
				Title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				Header: "tLKlMoU4-CQkARSxZg_yj",
				header: "tLKlMoU4-CQkARSxZg_yj",
				ChatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				chatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				PlanetIcon: "hsKCEb94KysCjbHbmbhzx",
				planetIcon: "hsKCEb94KysCjbHbmbhzx",
				Pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				Group: "dfN8kolCvNCsNzzf9W39l",
				group: "dfN8kolCvNCsNzzf9W39l",
				Key: "_2fgNZYjyiPjn_UlFwxeaVr",
				key: "_2fgNZYjyiPjn_UlFwxeaVr",
				SubredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				subredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				EditButton: "_21mAHvYUh9NgVPMyp45QZJ",
				editButton: "_21mAHvYUh9NgVPMyp45QZJ",
				ShowAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				showAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				ChannelName: "KIQLM-ci4WJOXrwjTsEzx",
				channelName: "KIQLM-ci4WJOXrwjTsEzx",
				HeaderText: "_3n6CTc1D2t_MfB0tNSgiAj",
				headerText: "_3n6CTc1D2t_MfB0tNSgiAj"
			}
		},
		"./src/reddit/components/SubredditChannelList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/orderBy.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/opener/index.ts"),
				m = s("./src/app/strings/index.ts"),
				u = s("./src/chat/helpers/urls/index.ts"),
				p = s("./src/reddit/actions/chat/subredditChannel.ts"),
				b = s("./src/reddit/actions/chat/toggle.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				g = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = s("./src/reddit/components/SubredditIcon/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/modals.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/helpers/trackers/chat.ts"),
				C = s("./src/reddit/i18n/components.tsx"),
				O = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				j = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				S = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				w = s("./src/reddit/models/SubredditChannel/index.ts"),
				N = s("./src/reddit/selectors/chat.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/subredditChannel.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/SubredditChannelList/index.m.less"),
				L = s.n(k);
			s.d(t, "a", (function() {
				return Y
			}));
			const T = d.a.wrapped(g.f, "ModalFormItem", L.a),
				M = d.a.wrapped(v.f, "PrimaryButton", L.a),
				B = d.a.wrapped(g.m, "ModalText", L.a),
				R = d.a.a("ItemLink", L.a),
				F = d.a.p("Detail", L.a),
				D = d.a.p("DescText", L.a),
				A = d.a.div("Title", L.a),
				W = d.a.div("Header", L.a),
				H = d.a.wrapped(j.a, "ChatIcon", L.a),
				U = d.a.wrapped(S.a, "PlanetIcon", L.a),
				V = d.a.wrapped(O.a, "Pencil", L.a),
				G = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return o.a.createElement("svg", {
						className: t,
						viewBox: "0 0 16 16",
						xmlns: "http://www.w3.org/2000/svg"
					}, o.a.createElement("g", {
						transform: "translate(-26.000000, -37.000000)"
					}, o.a.createElement("path", {
						d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
					})))
				}, "Group", L.a),
				z = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return o.a.createElement("svg", {
						className: t,
						viewBox: "0 0 16 16",
						xmlns: "http://www.w3.org/2000/svg"
					}, o.a.createElement("path", {
						d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
					}))
				}, "Key", L.a),
				q = d.a.wrapped(x.b, "SubredditIcon", L.a),
				K = d.a.button("EditButton", L.a),
				Z = d.a.button("ShowAllLink", L.a),
				J = d.a.span("ChannelName", L.a),
				Q = d.a.div("HeaderText", L.a);
			var Y;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(Y || (Y = {}));
			const X = Object(c.c)({
					isCollectionReady: P.e,
					isModerator: N.d,
					language: I.S,
					selectedSubreddit: _.S,
					shouldRequestCollection: P.f,
					subredditChannels: P.a
				}),
				$ = Object(i.b)(X, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						toggleModal: () => e(Object(h.i)(f.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(h.i)(f.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(h.i)(f.a.EDIT_SUBREDDIT_CHAT)),
						fetchSubredditChannels: t => e(Object(p.l)(t)),
						onChatLinkClick: (t, s) => e(Object(b.b)(t, s)),
						onSelectChannel: t => e(Object(p.m)({
							channelId: t
						}))
					}
				});
			class ee extends o.a.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					this.fetchChannelList()
				}
				fetchChannelList() {
					this.props.shouldRequestCollection && this.props.fetchSubredditChannels(this.props.selectedSubreddit.id)
				}
				getDisplayChannelList() {
					return this.props.subredditChannels && this.props.maxChannels ? this.props.subredditChannels.slice(0, this.props.maxChannels) : this.props.subredditChannels || []
				}
				displayShowAllLink() {
					return !!(this.props.maxChannels && this.props.subredditChannels && this.props.maxChannels < this.props.subredditChannels.length)
				}
				displayChannelsList() {
					const {
						props: {
							maxChannels: e,
							subredditChannels: t
						}
					} = this;
					if (t) {
						const s = r()(t, ["name"]);
						return e ? s.slice(0, e) : s
					}
					return []
				}
				onItemClick(e) {
					const {
						channelId: t
					} = e, {
						selectedSubreddit: s,
						onChatLinkClick: n
					} = this.props;
					n(t, s.name), this.trackItemClick(e)
				}
				trackItemClick(e) {
					const {
						Joined: t
					} = w.a, {
						channelId: s,
						channelState: n
					} = e, {
						Widget: r,
						Modal: a
					} = Y, {
						parentContext: o,
						sendEvent: i
					} = this.props;
					return o === r && n === t ? i(Object(E.c)(s)) : o === r ? i(Object(E.e)(s)) : o === a && n === t ? i(Object(E.a)(s)) : o === a ? i(Object(E.b)(s)) : void 0
				}
				onShowAllClick() {
					const {
						sendEvent: e,
						toggleModal: t
					} = this.props;
					t && (t(), e(Object(E.d)()))
				}
				getLinkURL(e) {
					const {
						selectedSubreddit: t
					} = this.props;
					return Object(u.channelUrl)(e.channelId, t.name)
				}
				render() {
					const {
						props: {
							className: e,
							isCollectionReady: t,
							isModerator: s,
							language: n,
							onAddChannel: r,
							toggleEditModal: a,
							selectedSubreddit: i,
							onSelectChannel: c,
							toggleCreateModal: d
						}
					} = this;
					if (!t) return null;
					const u = this.displayChannelsList();
					return o.a.createElement("div", {
						className: e
					}, u.length ? o.a.createElement(T, null, u.map((e, t) => o.a.createElement(R, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: l.c.BLANK,
						rel: l.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, o.a.createElement(A, {
						key: "item-link-title-".concat(t)
					}, o.a.createElement(H, {
						key: "item-link-icon-".concat(t)
					}), i.icon.url ? o.a.createElement(q, {
						key: "subreddit-icon-".concat(t),
						iconUrl: i.icon.url
					}) : o.a.createElement(U, {
						key: "planet-".concat(t),
						isSmall: !0
					}), o.a.createElement(W, {
						key: "item-header-".concat(t)
					}, o.a.createElement(Q, {
						key: "item-header-text-".concat(t)
					}, o.a.createElement(F, {
						key: "item-detail-".concat(t)
					}, i.name, Object(m.c)(n, "listings.channelMembers", e.membersCount)), o.a.createElement(J, {
						key: "channel-name-".concat(t)
					}, e.type === w.c.Public ? o.a.createElement(G, null) : o.a.createElement(z, null), e.name)), s && o.a.createElement(K, {
						key: "button-".concat(t),
						onClick: t => {
							c(e.channelId), a(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(E.l)())
						}
					}, o.a.createElement(V, null)))), e.description && o.a.createElement(D, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && o.a.createElement(Z, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, o.a.createElement(C.c, null, "See more"))) : s ? o.a.createElement(T, null, o.a.createElement(B, null, o.a.createElement(C.c, null, "Create your first room and get your community chatting in real time.")), o.a.createElement(M, {
						onClick: r || d
					}, o.a.createElement(C.c, null, "+ Add room"))) : o.a.createElement(T, null, o.a.createElement(B, null, o.a.createElement(C.c, null, "There are no joined chatrooms yet"))))
				}
			}
			t.b = $(Object(y.b)(ee))
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/ContentTooltip/index.tsx"),
				m = s("./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/tooltips.ts"),
				b = s("./src/reddit/controls/ImageInput/index.tsx"),
				h = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				x = s("./src/reddit/helpers/localStorage/index.ts"),
				y = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				f = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				C = e => r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, r.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				O = s("./src/reddit/models/ApiRequestState/index.ts"),
				j = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				S = s("./src/reddit/components/SubredditIcon/index.m.less"),
				w = s.n(S);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					this.setState({
						tooltipDismissed: Object(x.l)(this.props.subredditId)
					})
				}
				render() {
					const e = this.props,
						{
							subredditId: t,
							className: s,
							inTopBar: n,
							tooltipDisabled: a
						} = e,
						o = _(e, ["subredditId", "className", "inTopBar", "tooltipDisabled"]),
						c = [s, w.a.inTopBar, w.a.iconContainer];
					return n ? c.push(w.a.emptyEditableIconInTopBar) : c.push(w.a.editableIcon, w.a.emptyEditableIcon), r.a.createElement("span", N({}, o, {
						id: this.props.tooltipDisabled ? void 0 : p.a,
						className: Object(i.a)(...c)
					}), n ? r.a.createElement(C, {
						className: w.a.emptyUploadButton
					}) : r.a.createElement(E.a, {
						className: w.a.emptyPlusButton
					}), this.props.children, !this.state.tooltipDismissed && !this.props.tooltipDisabled && r.a.createElement(l.a, {
						className: w.a.tooltip,
						tooltipId: p.a,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, r.a.createElement(m.a, {
						includeIcon: !n,
						subredditId: t
					})))
				}
			}
			const I = e => {
					const {
						iconColor: t,
						className: s,
						alt: n,
						role: a,
						onClick: o,
						inTopBar: c,
						src: d
					} = e;
					return r.a.createElement("span", {
						className: w.a.iconContainer
					}, r.a.createElement("img", {
						onClick: o,
						role: a,
						alt: n,
						src: d,
						className: Object(i.a)(s, {
							[w.a.editableIcon]: !c
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				k = Object(o.c)({
					isLoading: j.b
				});
			class L extends r.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(y.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => r.a.createElement(b.a, {
						className: w.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(O.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				componentDidMount() {
					this.props.inTopBar || this.props.onShowTooltip()
				}
				renderEditButton() {
					const {
						url: e
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? r.a.createElement("span", {
						className: w.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? r.a.createElement(f.c, null, "Update icon") : r.a.createElement(f.c, null, "Add icon")) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = r.a.createElement(r.a.Fragment, null, r.a.createElement(I, N({
						src: e,
						alt: Object(v.c)("Subreddit icon"),
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, r.a.createElement(P, N({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : r.a.createElement(r.a.Fragment, null, r.a.createElement(P, N({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [w.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(w.a.loadingIconInTopBar), t = 32), r.a.createElement(h.a, {
							className: Object(i.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? r.a.createElement("div", {
						className: w.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(a.b)(k, (e, t) => ({
				onFileSelected: (s, n) => {
					e(Object(c.a)(t.subreddit, s, n))
				},
				onShowTooltip: () => {
					e(Object(d.f)({
						tooltipId: p.a
					}))
				}
			}))(Object(u.b)(L))
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, s) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/selectors/widgets.ts"),
				u = s("./src/reddit/actions/subreddit.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				b = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				h = s("./src/lib/classNames/index.ts"),
				g = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = s("./src/reddit/components/SubredditNav/index.m.less"),
				y = s.n(x);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const E = (e, t, s) => Object(h.a)(e, {
					[y.a.mActive]: t
				}, {
					[y.a.topBannerVariant]: s
				}),
				C = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: n
					} = e, a = v(e, ["children", "isActive", "isTopBannerVariant"]);
					return r.a.createElement("div", f({
						className: E(y.a.subNavTitle, s, n)
					}, a), r.a.createElement("span", null, t), r.a.createElement(g.b, {
						className: y.a.navDropdownIcon
					}))
				},
				O = e => {
					var {
						className: t,
						isActive: s,
						to: n,
						isTopBannerVariant: a
					} = e, o = v(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const i = E(y.a.navLink, s, a);
					return n ? r.a.createElement(b.a, f({
						className: i,
						to: n
					}, o)) : r.a.createElement("a", f({
						className: i
					}, o))
				},
				j = e => {
					var {
						className: t,
						isActive: s
					} = e, n = v(e, ["className", "isActive"]);
					return r.a.createElement(b.a, f({
						className: E(y.a.navLink, s)
					}, n))
				},
				S = e => {
					var {
						className: t,
						isActive: s
					} = e, n = v(e, ["className", "isActive"]);
					return r.a.createElement("a", f({
						className: E(y.a.subNavLink, s)
					}, n))
				},
				w = e => {
					var {
						className: t
					} = e, s = v(e, ["className"]);
					return r.a.createElement("div", f({
						className: Object(h.a)(y.a.subNavContainer, t)
					}, s))
				},
				N = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = v(e, ["className", "isOpen"]);
					return r.a.createElement("div", f({
						className: Object(h.a)(y.a.subNavList, t, {
							[y.a.mIsOpen]: s
						})
					}, n))
				};
			const _ = Object(o.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var P = Object(c.t)()(Object(a.b)(_, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: s
					} = e;
					return s ? r.a.createElement(j, {
						className: y.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(c.F)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, r.a.createElement(p.c, null, "Polls")) : null
				}))),
				I = s("./src/lib/linkMatchers/index.ts");
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(w, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, r.a.createElement(C, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), r.a.createElement(N, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var L = k;
			const T = e => {
				const t = e.url && Object(I.g)(I.e, e.url);
				return t ? t.url : e.url
			};
			var M = e => e.menuItem.url ? r.a.createElement(O, {
					href: T(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(L, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(S, {
					key: "".concat(e.text, "-").concat(T(e)),
					role: "listitem",
					href: T(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				B = s("./src/lib/constants/index.ts");
			const R = Object(c.t)(),
				F = [B.xb.SUBREDDIT, B.xb.COMMENTS, B.xb.COLLECTION_COMMENTS],
				D = Object(o.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && F.indexOf(t.pageLayer.meta.name) > -1
				});
			var A = R(Object(a.b)(D, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: n,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: o
					} = e, i = n && !s;
					return r.a.createElement(O, {
						to: t,
						isActive: i,
						isTopBannerVariant: a,
						onClick: e => {
							s && (e.preventDefault(), o())
						}
					}, r.a.createElement(p.c, null, "Posts"))
				}))),
				W = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				H = s("./src/higherOrderComponents/makeAsync.tsx");
			var U = Object(H.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				V = s("./src/reddit/constants/postLayout.ts"),
				G = s("./src/reddit/constants/screenWidths.ts"),
				z = s("./src/reddit/models/Theme/index.ts"),
				q = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				K = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const Z = Object(W.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: n
				} = e, a = K(e, ["className", "children", "isTopBannerVariant"]);
				const o = Object(q.a)(a);
				return r.a.createElement("div", {
					className: Object(h.a)(y.a.outerContainer, t),
					style: {
						position: o.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(z.g)(o.navBar.backgroundColor, o.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var J = e => r.a.createElement(Z, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: y.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === V.g.Large ? "".concat(e.maxWidth || G.a, "px") : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement(U, null))),
				Q = s("./src/reddit/components/Translated/index.tsx"),
				Y = s("./src/reddit/constants/wiki.ts"),
				X = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, a = !!n && !!n.meta && n.meta.name === B.xb.SUBREDDIT_WIKI, o = "wiki/".concat(Y.i), i = t.endsWith("/") ? t + o : "".concat(t, "/").concat(o);
				return r.a.createElement(O, {
					isActive: a,
					isTopBannerVariant: s,
					to: i,
					onClick: () => e.sendEvent(Object(X.g)())
				}, r.a.createElement(Q.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const ee = Object(d.a)("spPolls", P),
				te = Object(c.t)(),
				se = Object(o.c)({
					language: l.S,
					layout: c.M,
					widget: m.f
				}),
				ne = Object(a.b)(se);
			t.a = te(ne(Object(i.b)(e => r.a.createElement(J, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(A, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(ee, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement($, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => r.a.createElement(M, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: s,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Economics/CommunityTipJar/async.tsx"),
				u = s("./src/higherOrderComponents/makeAsync.tsx"),
				p = s("./src/reddit/featureFlags/component.tsx");
			const b = Object(u.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("EconomicsSubredditPremiumSidebarCards")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			var h = Object(p.a)("spPremium", b),
				g = s("./src/reddit/components/Governance/CommunityCard/index.tsx"),
				x = s("./src/reddit/components/Governance/Leaderboard/index.tsx"),
				y = s("./src/reddit/components/IdCard/index.tsx"),
				f = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				v = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				E = s("./src/reddit/components/SidebarContainer/index.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				O = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				j = s("./src/lib/classNames/index.ts"),
				S = s("./src/app/strings/index.ts"),
				w = s("./src/higherOrderComponents/asTooltip.tsx"),
				N = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./src/reddit/i18n/utils.ts"),
				P = s("./src/reddit/actions/modal.ts"),
				I = s("./src/reddit/constants/modals.ts"),
				k = s("./src/reddit/controls/Dropdown/index.tsx"),
				L = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				T = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				M = s("./src/reddit/selectors/moderatorPermissions.ts"),
				B = s("./src/reddit/selectors/tooltip.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less"),
				D = s.n(F);
			const A = l.a.wrapped(k.a, "_Dropdown", D.a),
				W = l.a.wrapped(T.a, "Pencil", D.a),
				H = l.a.a("DropdownRow", D.a),
				U = Object(w.a)(A),
				V = e => "SubredditChannels--Menu--".concat(e),
				G = Object(c.c)({
					isModerator: M.g,
					language: R.S,
					isDropdownOpen: (e, t) => Object(B.b)(V(t.subredditId))(e)
				}),
				z = l.a.wrapped(e => {
					const {
						className: t,
						isModerator: s,
						language: n,
						onOpenDropdown: r,
						isDropdownOpen: a,
						toggleModal: i
					} = e, c = V(e.subredditId);
					return o.a.createElement("button", {
						"aria-expanded": a,
						"aria-haspopup": !0,
						"aria-label": Object(_.c)("Chat menu"),
						className: Object(j.a)(D.a.top, t),
						id: c,
						onClick: () => r(c)
					}, o.a.createElement(L.a, null), o.a.createElement(U, {
						isOpen: a,
						tooltipId: c,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(H, {
						onClick: i
					}, s ? Object(S.a)(n, "subredditModeration.chat.subredditWidget.menu.manageRooms") : Object(S.a)(n, "subredditModeration.chat.subredditWidget.menu.viewRooms"), o.a.createElement(W, null))))
				}, "OverflowMenu", D.a);
			var q = Object(i.b)(G, e => ({
					onOpenDropdown: t => e(Object(N.g)({
						tooltipId: t
					})),
					toggleModal: () => e(Object(P.i)(I.a.MANAGE_SUBREDDIT_CHAT))
				}))(z),
				K = s("./src/reddit/components/SubredditChannelList/index.tsx"),
				Z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				J = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Q = s("./src/reddit/featureFlags/index.ts"),
				Y = s("./src/reddit/helpers/trackers/chat.ts"),
				X = s("./src/reddit/selectors/subreddit.ts"),
				$ = s("./src/reddit/selectors/subredditChannel.ts"),
				ee = s("./src/reddit/components/SidebarSubredditChannels/index.m.less"),
				te = s.n(ee);
			const se = l.a.div("Wrapper", te.a),
				ne = Object(c.c)({
					isCollectionReady: $.e,
					isModerator: M.g,
					isWhitelistedSubreddit: X.e,
					shouldRequestCollection: $.f,
					subredditChannels: $.a,
					userInSubredditChat: e => !!Q.d.userInSubredditChat(e)
				});
			let re;
			class ae extends o.a.Component {
				constructor(e) {
					super(e)
				}
				shouldComponentUpdate(e, t) {
					return this.props.isCollectionReady !== e.isCollectionReady || this.props.isModerator !== e.isModerator || this.props.isWhitelistedSubreddit !== e.isWhitelistedSubreddit || this.props.shouldRequestCollection !== e.shouldRequestCollection || this.props.subredditChannels !== e.subredditChannels
				}
				trackViewEvent() {
					this.props.subredditId !== re && (re = this.props.subredditId, this.props.sendEvent(Object(Y.m)()))
				}
				isEnabled() {
					const {
						isModerator: e,
						isCollectionReady: t,
						isWhitelistedSubreddit: s,
						subredditChannels: n,
						userInSubredditChat: r
					} = this.props, a = n && n.length;
					return !(!t || !s || !a && !e) && r
				}
				render() {
					const {
						subredditId: e,
						shouldRequestCollection: t
					} = this.props, s = o.a.createElement(K.b, {
						maxChannels: 3,
						parentContext: K.a.Widget,
						subredditId: e
					});
					return t ? s : this.isEnabled() ? (this.trackViewEvent(), o.a.createElement(C.a, null, o.a.createElement(J.a, {
						className: this.props.className,
						title: Object(_.c)("Chat rooms"),
						headerButton: o.a.createElement(q, {
							subredditId: e
						})
					}, o.a.createElement(se, null, s)))) : null
				}
			}
			var oe = Object(i.b)(ne)(Object(Z.b)(ae)),
				ie = s("./src/lib/makeListingKey/index.ts"),
				ce = s("./src/reddit/actions/subreddit.ts"),
				de = s("./src/reddit/components/SidebarPostList/index.tsx"),
				le = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				me = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = s("./src/reddit/selectors/discoveryUnit.ts"),
				pe = s("./src/reddit/selectors/posts.ts"),
				be = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				he = s.n(be);
			const ge = 10,
				xe = Object(c.a)((e, t) => t.subredditName, e => Object(ie.a)(e, d.N.TOP, {
					t: d.Ob.WEEK
				})),
				ye = Object(c.c)({
					discoveryUnit: e => Object(ue.f)(e, {
						unitName: me.q
					}),
					listingKey: xe,
					posts: (e, t) => {
						const s = xe(e, t);
						return Object(pe.O)(e, {
							listingKey: s
						})
					},
					subreddit: X.B
				});
			class fe extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(le.g)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(le.w)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(le.B)(t, e, void 0, s))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: s,
						loadMorePosts: n,
						posts: r,
						subredditName: a,
						topPostsVariant: i
					} = this.props;
					if (0 === r.length) return null;
					const c = a,
						d = r.length > ge;
					return o.a.createElement(J.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: Object(_.c)("Top posts this week")
					}, o.a.createElement(de.a, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: n,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: he.a.smallPost,
						showMoreButton: d,
						topPostsVariant: i
					}, o.a.createElement("div", null, e)))
				}
			}
			var ve = Object(i.b)(ye, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						loadMorePosts: () => e(Object(ce.u)({
							sort: d.N.TOP,
							subredditName: s,
							t: d.Ob.WEEK
						}))
					}
				})(Object(Z.b)(fe)),
				Ee = s("./src/config.ts"),
				Ce = s("./src/lib/localStorageAvailable/index.ts"),
				Oe = s("./src/higherOrderComponents/asModal/index.tsx"),
				je = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Se = s("./src/reddit/components/Translated/index.tsx"),
				we = s("./src/reddit/controls/TextButton/index.tsx"),
				Ne = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			class _e extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(je.c, null, o.a.createElement(je.g, null, o.a.createElement(Ne.a, null, o.a.createElement(je.n, null, o.a.createElement(Se.a, {
						msgId: "sidebar.moderatorOnboarding.modal.title"
					})), o.a.createElement(we.a, {
						onClick: e.toggleModal
					}, o.a.createElement(je.b, null)))), o.a.createElement(je.j, null, o.a.createElement(je.m, null, o.a.createElement(Se.a, {
						msgId: "sidebar.moderatorOnboarding.modal.text"
					}))), o.a.createElement(je.e, null, o.a.createElement(je.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, o.a.createElement(Se.a, {
						msgId: "sidebar.moderatorOnboarding.modal.cancel"
					})), o.a.createElement(je.o, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, o.a.createElement(Se.a, {
						msgId: "sidebar.moderatorOnboarding.modal.confirm"
					}))))
				}
			}
			var Pe = Object(Oe.a)(_e),
				Ie = s("./src/reddit/components/IdCard/helpers.ts"),
				ke = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				Le = s("./src/reddit/constants/blade.ts"),
				Te = s("./src/reddit/controls/Button/index.tsx"),
				Me = s("./src/reddit/controls/InternalLink/index.tsx"),
				Be = s("./src/reddit/helpers/localStorage/index.ts"),
				Re = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				Fe = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				De = s("./src/reddit/icons/svgs/Close/index.tsx"),
				Ae = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				We = s("./src/reddit/selectors/activeModalId.ts"),
				He = s("./src/reddit/selectors/structuredStyles.ts"),
				Ue = s("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				Ve = s.n(Ue);
			const Ge = "mod_onboarding_modal",
				ze = "mod_onboarding_widget",
				qe = Object(c.a)(We.a, (e, t) => Object(M.a)(Ae.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(He.l)(e, {
					subredditId: t.subredditId
				}), (e, t, s) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					modHasEditedBanner: !s || !!(s.bannerBackgroundImage || s.bannerHeight || s.bannerPositionedImage || s.bannerBackgroundColor),
					modHasEditedColors: !s || !!(s.primaryColor || s.highlightColor || s.backgroundColor || s.backgroundImage),
					modHasEditedIcon: !s || (!!s.communityIcon || !!s.bannerShowCommunityIcon)
				}));
			class Ke extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(Be.S)(ze, !0, this.props.subredditId), this.props.sendEvent(Object(Re.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(Re.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(Re.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(Re.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(Re.d)("styling_generic_link"))
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						hasModeratorPermissions: e,
						modHasEditedBanner: t,
						modHasEditedColors: s,
						modHasEditedIcon: n,
						subredditId: r
					} = this.props, a = e && !(t && s && n) && (!Object(Ce.a)() || !Object(Be.q)(ze, r));
					a !== this.state.visible && (this.setState({
						visible: a
					}), a && this.props.sendEvent(Object(Re.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						language: t,
						modHasEditedBanner: s,
						modHasEditedColors: n,
						modHasEditedIcon: r,
						subredditName: a,
						toggleCloseMenuModal: i
					} = this.props;
					return this.state.visible ? o.a.createElement(J.a, {
						className: Object(j.a)(Ve.a.container, this.props.className)
					}, o.a.createElement(y.a, {
						bannerBackgroundImage: "".concat(Ee.a.assetPath, "/img/id-cards/mod-onboarding@2x.png")
					}), o.a.createElement(De.a, {
						className: Ve.a.closeIcon,
						onClick: i
					}), Object(y.g)({
						titleText: o.a.createElement(Se.a, {
							msgId: "sidebar.moderatorOnboarding.title"
						}),
						snooBackground: Object(Ie.b)("url('".concat(Ee.a.assetPath, "/img/id-cards/snoo-artist@2x.png')")),
						shouldRenderSuperbOwlIcon: !1
					}), o.a.createElement(y.b, {
						className: Ve.a.description
					}, o.a.createElement(ke.a, {
						className: Ve.a.description,
						html: Object(S.a)(t, "sidebar.moderatorOnboarding.description", {
							className: Ve.a.modHelpLink,
							link: Le.e.exportImport
						})
					})), o.a.createElement(Me.a, {
						to: "/r/".concat(a, "?styling=true&route=").concat(Le.c.NameAndIcon),
						className: Ve.a.link,
						onClick: this.customizeIcon
					}, r ? o.a.createElement(Fe.a, {
						className: Ve.a.checked
					}) : o.a.createElement(Fe.a, {
						className: Ve.a.unchecked
					}), o.a.createElement(Se.a, {
						msgId: "sidebar.moderatorOnboarding.addCommunityIcon"
					})), o.a.createElement(Me.a, {
						to: "/r/".concat(a, "?styling=true&route=").concat(Le.c.Banner),
						className: Ve.a.link,
						onClick: this.customizeBannerImage
					}, s ? o.a.createElement(Fe.a, {
						className: Ve.a.checked
					}) : o.a.createElement(Fe.a, {
						className: Ve.a.unchecked
					}), o.a.createElement(Se.a, {
						msgId: "sidebar.moderatorOnboarding.customizeHeader"
					})), o.a.createElement(Me.a, {
						to: "/r/".concat(a, "?styling=true&route=").concat(Le.c.Global),
						className: Ve.a.link,
						onClick: this.customizeThemeColors
					}, n ? o.a.createElement(Fe.a, {
						className: Ve.a.checked
					}) : o.a.createElement(Fe.a, {
						className: Ve.a.unchecked
					}), o.a.createElement(Se.a, {
						msgId: "sidebar.moderatorOnboarding.customizeColors"
					})), o.a.createElement(Te.k, {
						to: "/r/".concat(a, "?styling=true"),
						className: Ve.a.button,
						onClick: this.customizeAppearance
					}, o.a.createElement(Se.a, {
						msgId: "sidebar.moderatorOnboarding.customizeAppearance"
					})), o.a.createElement("div", {
						className: Ve.a.subtext
					}, o.a.createElement(Se.a, {
						msgId: "sidebar.moderatorOnboarding.onlyModerators"
					})), e === Ge && o.a.createElement(Pe, {
						withOverlay: !0,
						toggleModal: i,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Ze = Object(i.b)(qe, (e, t) => {
					let {
						subredditId: s,
						subredditName: n
					} = t;
					return {
						toggleCloseMenuModal: () => e(Object(P.i)(Ge))
					}
				})(Object(Z.b)(Ke)),
				Je = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				Qe = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				Ye = s("./src/reddit/models/Widgets/index.ts"),
				Xe = s("./src/reddit/selectors/communityFlairs.ts"),
				$e = s("./src/reddit/selectors/experiments/topPosts.ts"),
				et = s("./src/reddit/selectors/listings.ts"),
				tt = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				st = s.n(tt);
			const nt = 250,
				rt = 270,
				at = l.a.wrapped(E.a, "SidebarContainer", st.a),
				ot = Object(c.c)({
					apiError: et.c,
					apiPending: et.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(Xe.b)(e, s)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(Xe.c)(e, s)
					},
					language: R.S,
					showGovernance: Q.d.spPoints,
					showLeaderboard: Q.d.spLeaderboard,
					widgets: X.u
				}),
				it = Object(i.b)(ot);
			class ct extends a.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const s = this.getRelatedCommunitiesWidgetData();
						return s ? {
							id: "related-communities-widget",
							kind: "community-list",
							shortName: Object(_.c)("Related Communities"),
							data: s
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys) return Object.assign({}, this.getPostFlairWidget(), {
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: Ye.d.Cloud,
							shortName: Object(_.c)("Filter by flair"),
							templates: this.props.communityFlairModels
						})
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, s = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets) || s
				}
				render() {
					const {
						className: e,
						language: t,
						listingName: s,
						showGovernance: n,
						showLeaderboard: r,
						subredditId: a,
						subredditName: i,
						topPostsVariant: c
					} = this.props;
					let l = 0;
					const u = Object($e.a)(c),
						p = Object($e.b)(c),
						b = Object($e.c)(c),
						E = u || p,
						j = this.getCommunityWidgets(),
						S = this.makeFlairFilterWidget(),
						w = this.makeRelatedCommunitiesWidget(u, p),
						N = !u,
						_ = p,
						P = o.a.createElement(v.a, {
							placement: d.c.ABOVE_THE_FOLD,
							listingName: s,
							placementIndex: l++,
							position: Qe.a.FIRST,
							sizes: d.h
						});
					return o.a.createElement(at, {
						className: e
					}, Object(y.f)(s) && o.a.createElement(y.e, {
						listingName: s
					}), o.a.createElement(h, {
						cardClassName: st.a.card,
						subredditId: a
					}), E && o.a.createElement(C.a, null, o.a.createElement(ve, {
						subredditName: i,
						topPostsVariant: c
					}, o.a.createElement("div", {
						className: st.a.inFeedAd
					}, P))), E && w && o.a.createElement(C.a, null, o.a.createElement(Je.a, {
						subredditName: i,
						truncateThreshold: rt,
						widget: w
					})), _ && j.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(C.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Je.a, {
							subredditName: i,
							truncateThreshold: nt,
							widget: e
						}))
					}), o.a.createElement(m.a, {
						className: st.a.card,
						subredditId: a
					}), o.a.createElement(Ze, {
						language: t,
						subredditId: a,
						subredditName: i
					}), n && o.a.createElement(g.a, {
						className: st.a.card,
						subredditId: a
					}), S && o.a.createElement(C.a, null, o.a.createElement(Je.a, {
						subredditName: i,
						widget: S
					})), r && o.a.createElement(x.default, {
						className: st.a.card,
						subredditId: a,
						uniqueId: a
					}), o.a.createElement(f.g, {
						subredditId: a
					}), !E && P, N && !_ && j.map((e, t) => {
						const s = "community-list" === e.kind;
						return o.a.createElement(C.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Je.a, {
							subredditName: i,
							truncateThreshold: b && s ? rt : b ? nt : void 0,
							widget: e
						}))
					}), o.a.createElement(oe, {
						subredditId: a
					}), o.a.createElement(O.a, {
						adComponent: o.a.createElement(v.a, {
							placement: d.c.BELOW_THE_FOLD,
							listingName: s,
							placementIndex: l++,
							position: Qe.a.BOTTOM,
							sizes: d.m
						})
					}))
				}
			}
			t.a = it(ct)
		},
		"./src/reddit/components/SubredditUnsavedChangesModal/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const u = "subreddit-unsaved-changes-modal",
				p = Object(a.b)(null, e => ({
					closeModal: () => e(Object(i.g)(u))
				}));
			class b extends r.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.onDiscard(), this.props.closeModal()
					}, this.onCancelClick = () => {
						this.props.onCancel(), this.props.closeModal()
					}, this.onSaveClick = () => {
						this.props.onSave(), this.props.closeModal()
					}
				}
				render() {
					return r.a.createElement(c.c, null, r.a.createElement(c.g, null, r.a.createElement(m.a, null, r.a.createElement(c.n, null, r.a.createElement(l.c, null, "Save changes before leaving?")), r.a.createElement(d.a, {
						onClick: this.onCancelClick
					}, r.a.createElement(c.b, null)))), r.a.createElement(c.j, null, r.a.createElement(c.m, null, r.a.createElement(l.c, null, "You have made some changes to your community, do you wish to leave this menu without saving?"))), r.a.createElement(c.e, null, r.a.createElement(c.a, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, r.a.createElement(l.c, null, "Discard")), r.a.createElement(c.o, {
						onClick: this.onSaveClick,
						"data-redditstyle": !0
					}, r.a.createElement(l.c, null, "Save"))))
				}
			}
			t.b = Object(o.a)(p(b))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return N
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = s.n(u),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const y = h.a.button("IconButton", p.a),
				f = h.a.wrapped(l.a, "SubscribeIcon", p.a),
				v = h.a.wrapped(d.a, "UnsubscribeIcon", p.a),
				E = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return r.a.createElement(y, n, r.a.createElement(f, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", p.a),
				C = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return t ? r.a.createElement(i.f, g({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: s
						})
					})) : r.a.createElement(i.n, g({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", p.a),
				O = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(E, g({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(C, g({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				},
				j = h.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: a
					} = e, i = x(e, ["border", "language", "small", "type"]);
					return r.a.createElement(y, i, r.a.createElement(v, {
						className: Object(b.a)(o.o, i.className, {
							[p.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				S = h.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: a
					} = e, o = x(e, ["border", "language", "small", "type"]);
					const d = r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
							className: p.a.UnsubscribeButtonDefault
						}, "subreddit" === a ? Object(c.c)("Joined") : Object(c.c)("Following")), r.a.createElement("span", {
							className: p.a.UnsubscribeButtonHover
						}, "subreddit" === a ? Object(c.c)("Leave") : Object(c.c)("Unfollow"))),
						l = Object(b.a)(o.className, {
							[p.a.isSmall]: n
						});
					return t ? r.a.createElement(i.i, g({}, o, {
						className: l,
						children: d
					})) : r.a.createElement(i.n, g({}, o, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", p.a),
				w = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(j, g({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(S, g({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				};
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: s = !1,
						id: n,
						language: o,
						small: i = !1
					} = this.props, c = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: i
					};
					return this.props.userIsSubscriber ? r.a.createElement(w, g({}, c, {
						language: o,
						type: this.props.identifier.type
					})) : r.a.createElement(O, g({}, c, {
						id: n
					}), this.props.children, Object(a.a)(o, "subscriptions.".concat(Object(m.a)({
						type: this.props.identifier.type
					}), ".subscribe")))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(u),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const y = h.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = x(e, ["small", "shouldReverseColor"]);
					const a = s ? c.i : c.f;
					return r.a.createElement(a, g({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				f = h.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, a = x(e, ["small", "belongsToType", "shouldReverseColor"]);
					const o = n ? c.f : c.i;
					return r.a.createElement(o, g({}, a, {
						className: Object(b.a)(a.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				v = h.a.wrapped(d.a, "Checkmark", p.a),
				E = h.a.wrapped(l.a, "Plus", p.a),
				C = h.a.div("ButtonSpacer", p.a);
			class O extends r.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: s,
							language: n,
							onSubscribe: o,
							onUnsubscribe: i,
							postId: c,
							sendEvent: d,
							small: l = !1,
							subscribeReminderTooltipId: u,
							subscribeTooltipId: h,
							userIsSubscriber: O,
							doNotHideOtherSubscribeButtons: j,
							getEventFactory: S,
							onSubscriptionsRequested: w
						} = e,
						N = x(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "subscribeReminderTooltipId", "subscribeTooltipId", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						_ = this.state.isHovered;
					let P = O ? Object(a.a)(n, "subscriptions.".concat(Object(m.a)({
						type: s.type
					}), ".subscribed")) : Object(a.a)(n, "subscriptions.".concat(Object(m.a)({
						type: s.type
					}), ".subscribe"));
					return O && _ && (P = Object(a.a)(n, "subscriptions.".concat(Object(m.a)({
						type: s.type
					}), ".unsubscribe"))), O ? this.state.hasJustSubscribed || j ? r.a.createElement(f, g({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !l,
							[p.a.unsubscribeButtonHoverStyles]: !l
						}),
						onClick: this.onClick,
						small: l,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, N), l && r.a.createElement(v, null), !l && !_ && r.a.createElement(v, null), !l && P) : l ? null : r.a.createElement(C, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(y, g({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !l
						}),
						onClick: this.onClick,
						small: l
					}, N, {
						id: "subscribe-button-".concat(c),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), r.a.createElement(E, null), !l && P))
				}
			}
			t.a = Object(i.a)(Object(o.b)(O))
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				r = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(n.b)(a.a))
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TimeSort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/path-browserify/index.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/listingSorts.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Tooltip.ts"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/Row.tsx"),
				C = s("./src/reddit/helpers/trackers/navigation.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/TimeSort/index.m.less"),
				w = s.n(S),
				N = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "TimeSort--SortPicker",
				I = Object(l.a)(v.a),
				k = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(y.H)(e) || (n = r.a.join(n, t)), Object(m.a)(n, {
						[x.t]: s
					})
				},
				L = N.a.div("ListingSortContainer", w.a),
				T = Object(y.t)(),
				M = Object(c.c)({
					dropdownIsOpen: Object(O.b)(P),
					language: j.S
				}),
				B = Object(i.b)(M, e => ({
					onOpenDropdown: () => e(Object(p.g)({
						tooltipId: P
					}))
				}));
			t.a = T(B(Object(h.b)(e => o.a.createElement(L, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, o.a.createElement(b.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, o.a.createElement(b.b, {
				className: e.buttonClassName,
				displayText: g.b[e.timeSort],
				id: P,
				showDropdownTriangle: !0
			})), o.a.createElement(f.a.Consumer, null, t => o.a.createElement(I, _({
				isOpen: e.dropdownIsOpen,
				tooltipId: P
			}, t), [u.Ob.HOUR, u.Ob.DAY, u.Ob.WEEK, u.Ob.MONTH, u.Ob.YEAR, u.Ob.ALL].map(t => o.a.createElement(E.b, {
				className: Object(d.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: g.b[t],
				href: k(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(C.f)(t))
				}
			}))))))))
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const l = a.a.div("WidgetBackground", c.a),
				m = a.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return r.a.createElement("div", s, r.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				b = s("./src/reddit/actions/subscription/index.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const g = Object(i.c)({
				language: h.S
			});
			var x = Object(a.b)(g, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(b.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(b.e()),
						onUnsubscribe: () => e(b.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				y = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = s("./src/reddit/i18n/utils.ts"),
				O = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				j = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				S = s("./src/reddit/models/Flair/index.ts"),
				w = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				N = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = s.n(N);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return I
			})), s.d(t, "a", (function() {
				return L
			}));
			const I = e => r.a.createElement(y.a, {
					className: Object(d.a)(_.a.Container, {
						[_.a.rails]: !!e.railsWidgetsVariant
					}, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.railsWidgetsVariant ? "" : e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, !!e.railsWidgetsVariant && r.a.createElement(u.a, {
					className: _.a.WidgetTitle
				}, e.title), r.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? r.a.createElement(E.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || Object(C.c)("Something went wrong.")) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(L, P({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					railsWidgetsVariant: e.railsWidgetsVariant,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(v.n, {
					className: _.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				k = Object(i.c)({
					hideNSFWPref: h.z,
					language: h.S
				}),
				L = Object(a.b)(k)(e => r.a.createElement("div", {
					className: _.a.communityItemContainer
				}, r.a.createElement(j.a, {
					widthRight: f.u
				}, r.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(O.a, {
					className: _.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, r.a.createElement(o.a, {
					className: _.a.communityName,
					to: Object(w.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(w.b)(e.name, e.type)), r.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: _.a.subscriberCount
				}, Object(c.c)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && r.a.createElement(m.b, {
					flair: {
						type: S.f.Nsfw,
						text: "nsfw"
					}
				}))), !e.railsWidgetsVariant && (e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(E.a, {
					className: Object(d.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(v.n, {
					className: Object(d.a)(_.a.communityCta, {
						[_.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(x, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : r.a.createElement(p.a, {
					disabled: e.buttonDisabled,
					identifier: {
						name: e.name,
						type: e.type
					},
					getEventFactory: e.getSubscribeEventFactory,
					small: !0
				}))), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === n.a.PROFILE ? Object(r.c)(e) : Object(r.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2j6XpwwZyn7dNcfH7Blz0B",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				rails: "_2ucwLgmYT_bEawlfA81Q3L",
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				WidgetTitle: "g-Bp8lR31etQDRRiyWCDU",
				widgetTitle: "g-Bp8lR31etQDRRiyWCDU"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, s) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, s) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, s) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				MessageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				messageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG"
			}
		},
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2e42jHFUxTCKhK9ZV7rkYM",
				unchecked: "KghweVAiFiX0RI_syl89Q",
				checked: "g4y6sLtk5FcL7BGU4ySVF",
				checkedFadeIn: "_3iW8CR-_Svhfa-LJLVcw2F",
				subtext: "_1STduBQ65V-3ECZ3WRoEKV",
				section: "_23svPjrTufAABoINCKRN_7",
				container: "_2YGvHlE11080fRAzC4onab",
				button: "_2F46jVXxeuK0SKM9TO-8pY",
				closeIcon: "_3mATOvmc_Q9pFcfcBXjFol",
				description: "_3js_prVH0h73q85Oa9P7lN"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				y = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/trackers/postFlair.ts"),
				v = s("./src/reddit/models/Widgets/index.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				O = s.n(C);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var S = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const w = 129,
				N = Object(h.t)({
					filterName: e => Object(h.R)(e)[b.f],
					url: e => Object(h.V)(e)
				}),
				_ = Object(i.c)({
					subredditId: (e, t) => Object(E.G)(e, t.subredditName)
				}),
				P = Object(o.b)(_),
				I = l.a.div("WidgetContent", O.a),
				k = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, r = S(e, ["display", "isFlairFilter", "onMouseDown"]);
					return a.a.createElement("li", {
						className: Object(c.a)(O.a.StyledFlair, t === v.d.Cloud && O.a.cloudDisplay, {
							[O.a.flairFilter]: s,
							[O.a["m-selected"]]: r.isSelected
						}),
						onMouseDown: n
					}, a.a.createElement(m.b, j({}, r, {
						className: O.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class L extends a.a.Component {
				constructor(e) {
					super(e), this.flairListRef = a.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(f.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(f.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(f.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(f.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(y.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(y.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > w && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return a.a.createElement(g.n, {
						className: O.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return a.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => a.a.createElement(k, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(y.e)(this.props.url, Object(y.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? w : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return a.a.createElement("div", {
						className: O.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return a.a.createElement("ul", null, a.a.createElement(k, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(y.e)(this.props.url, Object(y.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), o = e && this.getSelectedFlair(r) || void 0, i = t.order.length > n.length || s && !o;
					return a.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, a.a.createElement(I, null, o && this.renderSelectedFlairFilter(o), !o && this.renderFlairFilters(r), i && this.renderButton()))
				}
			}
			t.a = N(P(Object(u.b)(L)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/connectors/connectToLanguage.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				m = s("./src/reddit/components/RichTextJson/index.tsx"),
				u = s("./src/reddit/helpers/dom/index.ts"),
				p = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				b = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				h = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				y = s.n(x);
			const f = d.a.div("RuleShortName", y.a),
				v = d.a.div("RuleIndex", y.a),
				E = d.a.div("RuleTitle", y.a),
				C = d.a.div("RuleDescription", y.a),
				O = d.a.wrapped(l.a, "RawHTMLDisplay", y.a),
				j = {};
			class S extends r.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: s,
						shouldShowFullDisplay: n
					} = this, a = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), o = !n(e) && !!a;
					return r.a.createElement(f, {
						className: Object(c.a)({
							[y.a.pointerCursor]: o
						}),
						onClick: n(e) || !a ? void 0 : s
					}, r.a.createElement(h.a, null, r.a.createElement(v, null, "".concat(e.humanIndex, ".")), r.a.createElement(E, null, "".concat(e.rule.shortName)), r.a.createElement("div", null, !n(e) && a && (t.isVisible ? r.a.createElement(b.a, {
						className: y.a.Chevron
					}) : r.a.createElement(p.a, {
						className: y.a.Chevron
					})))), t.isVisible && r.a.createElement(C, null, e.rule.descriptionRichText ? r.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: j
					}) : e.rule.descriptionHtml ? r.a.createElement(O, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			s.d(t, "a", (function() {
				return w
			}));
			const w = Object(i.a)(e => e.rules.length > 0 ? r.a.createElement(o.a, {
				className: e.className,
				styles: e.styles,
				title: Object(a.a)(e.language, "structuredStyles.widgets.subreddit-rules.subredditRules", {
					subreddit: e.subredditName
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return r.a.createElement(S, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null);
			t.b = e => r.a.createElement(w, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/selectors/telemetry.ts");
			const b = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(p.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, p.defaults);
			var h = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/selectors/experiments/topPosts.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				O = e => {
					const t = E(e);
					return Object(f.f)(t)
				},
				j = e => {
					const t = C(e);
					return Object(f.f)(t)
				};
			var S = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				w = s.n(S);
			const N = Object(m.t)(),
				_ = Object(a.b)(() => Object(o.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(x.m)(e, {
								subredditId: s
							}),
							r = Object(y.U)(e);
						return n || r
					},
					subredditId: m.m,
					topPostVariant: g.d
				}));
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(b(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = O(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = j(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: a,
						onClick: o,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, p = s ? w.a.widgetContentOnly : w.a.widgetContent, b = !n && this.props.styles, g = b ? this.getWidgetBackgroundStyles() : {}, x = b ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, w.a.widgetBackground, {
							[w.a.redditStyle]: n,
							[w.a.clickable]: !!o,
							[w.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: o,
						style: g
					}, c && r.a.createElement("div", {
						className: w.a.widgetHeader,
						style: x
					}, r.a.createElement("div", {
						className: Object(i.a)(w.a.widgetTitle, l)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), a), r.a.createElement("div", {
						className: Object(i.a)(p, {
							[w.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.n, {
						className: w.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, r.a.createElement(h.c, null, "See More")))
				}
			}
			t.a = N(_(Object(c.a)(Object(l.b)(P))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/linkMatchers/index.ts"),
				b = s("./src/reddit/models/Image/index.tsx"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/Widgets/Button/index.m.less"),
				v = s.n(f);
			const E = (e, t, s) => {
					let n = {},
						r = {};
					n = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, s) => {
						let {
							color: n,
							fillColor: r,
							textColor: a
						} = e;
						return t && (n = a = s, r = "transparent"), {
							"--widget-button-background-color": "".concat(r || "transparent"),
							"--widget-button-border": "1px solid ".concat(n),
							"--widget-button-color": "".concat(a || n)
						}
					})(e, t, s);
					const a = e.hoverState || e;
					if (a.kind === g.f.Image) r = {
						"--widget-button-hover-background-image": "url('".concat(a.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: o
						} = a;
						t && (e = o = s, n = "transparent"), r = {
							"--widget-button-hover-background-color": "".concat(n || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(o || e)
						}
					}
					return Object.assign({}, n, r)
				},
				C = e => e.kind === g.f.Image ? v.a.imageButton : v.a.textButton,
				O = e => {
					const t = Object(g.n)(e),
						s = Object(p.g)(p.e, t);
					return s ? s.url : e.url
				},
				j = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(h.a)(e).button;
					return r.a.createElement(d.i, {
						className: C(t),
						style: E(t, s, n)
					}, t.kind === g.f.Text && r.a.createElement("span", {
						className: t.hoverState ? v.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && r.a.createElement("span", {
						className: v.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				S = e => r.a.createElement(l.a, {
					href: O(e.button),
					isSponsored: !1,
					source: null
				}, r.a.createElement(j, e)),
				w = u.a.wrapped(i.a, "RawHTMLDisplay", v.a);
			var N = Object(a.b)(() => Object(o.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: y.U
				}))(e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(w, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== b.c)).map(t => r.a.createElement(S, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				_ = s("./src/lib/humanizeDate/index.ts"),
				P = s("./src/reddit/controls/TextButton/index.tsx"),
				I = s("./src/reddit/i18n/utils.ts"),
				k = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				L = s.n(k);
			const T = 100,
				M = {
					isExpanded: !1
				},
				B = u.a.wrapped(i.a, "RawHTMLDisplay", L.a),
				R = u.a.div("EventContainer", L.a),
				F = u.a.div("EventTitle", L.a),
				D = u.a.div("EventDate", L.a),
				A = u.a.div("EventLocation", L.a),
				W = u.a.div("EventDescription", L.a),
				H = u.a.wrapped(P.a, "ToggleDescription", L.a);
			class U extends r.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > T ? r.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, T), r.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? Object(I.c)("read less") : Object(I.c)("...read more"))) : r.a.createElement(W, null, e.text)
				}
			}
			const V = Object(o.c)({
				language: y.S
			});
			var G = Object(a.b)(V)(e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => r.a.createElement(R, {
					key: "".concat(s, "-").concat(t.title)
				}, r.a.createElement(F, null, t.titleHtml ? r.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(D, null, Object(_.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? "".concat(s, ":0").concat(n) : "".concat(s, ":").concat(n)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(A, null, t.locationHtml ? r.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(U, {
					language: e.language,
					text: t.description
				}))))),
				z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var K = Object(z.b)(e => r.a.createElement(q.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Z = Object(o.c)({
					stylesheet: e => e.stylesheets
				}),
				J = Object(a.b)(Z),
				Q = (e, t, s) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(s, "</body>");
			class Y extends r.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Q(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(c.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, r.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var X = J(Y),
				$ = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = s.n($);
			var te = u.a.div("ImageFrame", ee.a),
				se = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = s.n(se);
			var re = u.a.img("StyledImage", ne.a);
			class ae extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === b.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== b.c) return t
					}
					return t
				}
				componentWillReceiveProps(e) {
					const {
						props: t,
						state: s
					} = this;
					e.subredditName === t.subredditName && e.widget.data[s.imageIndex] && e.widget.data[s.imageIndex] === t.widget.data[s.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const s = e.widget.data[t.imageIndex],
						n = r.a.createElement(te, null, r.a.createElement(re, {
							alt: Object(I.c)("Widget image"),
							src: s.url
						}));
					return s.linkUrl ? r.a.createElement(l.a, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var oe = ae,
				ie = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ce = s("./src/reddit/components/Flair/index.tsx"),
				de = s("./src/reddit/controls/InternalLink/index.tsx"),
				le = s("./src/reddit/icons/fonts/helpers.tsx"),
				me = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				ue = s.n(me);
			var pe = u.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(le.b)("envelope"), " ").concat(e.className)
				}), "Envelope", ue.a),
				be = s("./src/reddit/models/Flair/index.ts"),
				he = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = s.n(he);
			const xe = u.a.div("ModeratorListItem", ge.a),
				ye = u.a.div("Username", ge.a),
				fe = u.a.a("MessageModsLink", ge.a),
				ve = u.a.wrapped(ce.b, "FlairComponent", ge.a),
				Ee = e => e.authorFlairType === be.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				Ce = e => r.a.createElement(ye, null, "u/".concat(e)),
				Oe = u.a.wrapped(de.a, "InternalLink", ge.a),
				je = u.a.div("LinkContainer", ge.a);
			var Se = e => {
					const {
						subredditName: t,
						widget: s
					} = e;
					return r.a.createElement(c.a, {
						styles: s.styles,
						title: Object(I.c)("Moderators"),
						headerButton: r.a.createElement(fe, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, r.a.createElement(pe, null))
					}, s.mods.map(e => r.a.createElement(xe, {
						key: e.name
					}, (e => r.a.createElement(ie.a, {
						to: "/user/".concat(e.name, "/")
					}, Ce(e.name)))(e), r.a.createElement(ve, {
						flair: Ee(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(je, null, r.a.createElement(Oe, {
						to: "/r/".concat(t, "/about/moderators/")
					}, Object(I.c)("View All Moderators"))))
				},
				we = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ne = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				_e = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Pe = s.n(_e);
			const Ie = u.a.div("WidgetContent", Pe.a),
				ke = u.a.wrapped(i.a, "RawHTMLDisplay", Pe.a);
			var Le = e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(Ie, null, r.a.createElement(ke, {
					html: e.widget.textHtml || ""
				}))),
				Te = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Me = e => r.a.createElement(Te.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Se;
						case "textarea":
							return Le;
						case "button":
							return N;
						case "subreddit-rules":
							return Ne.b;
						case "community-list":
							return K;
						case "calendar":
							return G;
						case "image":
							return oe;
						case "custom":
							return X;
						case "post-flair":
							return we.a;
						default:
							return Me
					}
				}(e.widget);
				return r.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/components/PostList/Placeholder.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/monthsToMinutes.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts");

			function v() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.z,
					isProfilePostListing: l.I,
					pageLayer: e => e
				})
			}
			const E = v(),
				C = {
					apiError: h.c,
					apiPending: h.d,
					m2mIsEnabled: g.w,
					measureScrollFPS: b.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.M)(e, t),
					loadMore: h.g,
					postsById: x.T,
					postIds: Object(a.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(x.F)(e, s, n, r)
					}),
					subredditsById: y.Y,
					viewportDataLoaded: f.a,
					pageReferrer: l.P,
					postListPlaceholderComponent: () => p.a
				},
				O = Object(r.c)(C),
				j = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(i.x(t))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(i.A(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(i.B(t, n, r))
					}
				}),
				S = Object(n.b)(O, j, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: u.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.b)(E(S(e)))
		},
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/selectors/user.ts");
			const o = Object(r.c)({
				language: a.S
			});

			function i(e) {
				return Object(n.b)(o)(e)
			}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/i18n/utils.ts");
			const a = {
					[n.N.BEST]: Object(r.c)("best"),
					[n.N.HOT]: Object(r.c)("hot"),
					[n.N.NEW]: Object(r.c)("new"),
					[n.N.CONTROVERSIAL]: Object(r.c)("controversial"),
					[n.N.RISING]: Object(r.c)("rising"),
					[n.N.TOP]: Object(r.c)("top")
				},
				o = {
					[n.Ob.HOUR]: Object(r.c)("Now"),
					[n.Ob.DAY]: Object(r.c)("Today"),
					[n.Ob.WEEK]: Object(r.c)("This week"),
					[n.Ob.MONTH]: Object(r.c)("This month"),
					[n.Ob.YEAR]: Object(r.c)("This year"),
					[n.Ob.ALL]: Object(r.c)("All time")
				}
		},
		"./src/reddit/constants/topic.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/categories.tsx"),
				r = s("./src/reddit/constants/listings.ts");
			const a = e => "".concat(r.c[r.b.Topic]).concat(Object(n.g)(e), "/")
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext({})
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var c = e => r.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), r.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, r.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, r.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const b = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: o,
						"data-redditstyle": i
					} = t, c = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let r = "";
						return r = e ? n ? m.a.mDisabledRedditStyle : m.a.mDisabled : n ? m.a.mActiveRedditStyle : m.a.mActive
					})(n, o, i);
					return r.a.createElement(e, u({
						className: Object(a.a)(m.a.Checkbox, d, s)
					}, c))
				},
				h = b(d.a),
				g = b(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? h : o.a;
				return r.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, r.a.createElement(t, {
					className: Object(a.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/IconTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_3bX7W3J0lU78fp7cayvNxx"
			}
		},
		"./src/reddit/controls/IconTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				i = s("./src/reddit/controls/IconTooltip/index.m.less"),
				c = s.n(i);
			const d = Object(a.a)(o.b),
				l = ["center", "top"],
				m = ["center", "bottom"];
			t.a = class extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					return r.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, r.a.createElement(d, {
						className: c.a.tooltip,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: l,
						text: this.props.text,
						tooltipPosition: m
					}))
				}
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			class a extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || ""
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, a = s || n;
					return r.a.createElement("div", {
						className: e.className
					}, s && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
						tabIndex: e.tabIndex
					}), !a && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				tooltip: "vCHkhDAaK6nnJdqEpMGq-",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				b = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				E = s.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const j = e => Object(c.a)(E.a.iconStyles, e.className, {
					[E.a.mDisabled]: e.disabled,
					[E.a.mRedditStyle]: e.redditStyle
				}),
				S = e => {
					var {
						isActive: t
					} = e, s = O(e, ["isActive"]);
					return r.a.createElement("button", C({
						className: Object(c.a)(E.a.layoutButton, {
							[E.a.mIsActive]: t
						})
					}, s))
				},
				w = Object(i.e)("listings.layoutSwitcher.label"),
				N = Object(i.e)("listings.layoutSwitcher.card"),
				_ = Object(i.e)("listings.layoutSwitcher.classic"),
				P = Object(i.e)("listings.layoutSwitcher.compact"),
				I = [{
					layout: u.d.Card,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, a = O(e, ["className", "disabled", "redditStyle"]);
						return r.a.createElement(h.a, C({
							className: j({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, a))
					},
					tooltipTranslation: N
				}, {
					layout: u.d.Classic,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, a = O(e, ["className", "disabled", "redditStyle"]);
						return r.a.createElement(p.a, C({
							className: j({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, a))
					},
					tooltipTranslation: _
				}, {
					layout: u.d.Compact,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, a = O(e, ["className", "disabled", "redditStyle"]);
						return r.a.createElement(b.a, C({
							className: j({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, a))
					},
					tooltipTranslation: P
				}],
				k = Object(x.t)(),
				L = Object(o.c)({
					language: f.S,
					postLayout: x.M,
					redditStyle: x.B
				}),
				T = Object(a.b)(L, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.g)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = k(T(Object(g.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || u.e[e.postLayout];
				return r.a.createElement("div", {
					className: Object(c.a)(E.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, r.a.createElement("div", {
					className: E.a.title
				}, w(e.language)), r.a.createElement("div", {
					className: E.a.iconContainer
				}, I.map(a => {
					const o = () => (n => {
							e.onChange ? e.onChange(n) : (e.onListingLayoutChange(n, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: n,
								screen: Object(y.screen)(e),
								subreddit: Object(y.subreddit)(e)
							})))
						})(a.layout),
						i = () => e.toggleTooltip(c),
						c = "layoutSwitch--" + a.layout,
						l = a.layout === n;
					return r.a.createElement(S, {
						"aria-label": a.tooltipTranslation(e.language),
						"aria-pressed": l,
						id: c,
						isActive: l,
						key: a.layout,
						onClick: o,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: o
					}, r.a.createElement(a.Icon, {
						disabled: !l,
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), r.a.createElement(d.c, {
						className: E.a.tooltip,
						tooltipId: c,
						text: a.tooltipTranslation(e.language)
					}))
				})))
			})))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				d = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(d),
				m = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const u = o.a.span("metaText", l.a),
				p = e => r.a.createElement(u, e, " · "),
				b = Object(a.d)("comment.point"),
				h = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: n,
						useUpvotes: a
					} = e, o = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(i.b)(n),
						l = Object(c.c)("\n    ".concat(Object(c.b)("score", d), " ").concat(Object(c.a)("upvotes", ["upvote", "upvotes"], n), "\n  ")),
						p = t ? Object(c.c)("Score hidden") : a ? l : b(s, n, {
							count: d
						});
					return r.a.createElement(u, o, p)
				},
				g = (e, t) => {
					const s = Object(a.c)(t, "posts.comments.noun", e, {
						count: Object(i.b)(e)
					});
					return r.a.createElement(u, null, s)
				}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, s) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, s) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts");
			const d = {
				leading: !0,
				trailing: !1
			};
			var l = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d;
					const r = Object.assign({}, d, n),
						a = t > e ? 1 : -1;
					let o = e;
					if (e !== t) {
						for (r.leading || (o += a); o !== t;) s(o), o += a;
						r.trailing && s(o)
					} else(r.leading || r.trailing) && s(e)
				},
				m = s("./src/lib/forEachGroup/index.ts"),
				u = s("./src/reddit/models/SubredditAutocomplete/index.ts"),
				p = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				b = s.n(p);
			class h extends a.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.element = null, this.setRef = e => this.element = e, this.onMouseUp = () => {
						this.mouseDown && (this.props.disabled || this.props.onSelect(this.props.entryIndex), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onOver(this.props.entryIndex)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1, this.element && this.props.onUpdate(this.props.entryIndex, this.element)
				}
				render() {
					return o.a.createElement("div", {
						className: Object(c.a)(b.a.entry, this.props.disabled && b.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			s("./node_modules/core-js/modules/es6.symbol.js");
			var g = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				x = s.n(g);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				},
				v = e => {
					var {
						className: t,
						children: s,
						title: n
					} = e, r = f(e, ["className", "children", "title"]);
					return o.a.createElement("div", y({
						className: Object(c.a)(x.a.dropdownSection, t)
					}, r), n && o.a.createElement("div", {
						className: x.a.title
					}, n), s)
				},
				E = s("./src/reddit/helpers/name/index.ts"),
				C = s("./src/lib/lessComponent.tsx"),
				O = s("./src/reddit/components/SubredditIcon/index.tsx"),
				j = s("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				S = s("./src/reddit/icons/svgs/Link/index.tsx"),
				w = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				N = s("./src/reddit/icons/svgs/Video/index.tsx"),
				_ = s("./src/reddit/layout/row/Inline/index.tsx"),
				P = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				I = s.n(P);
			const k = [{
				type: "text",
				Icon: w.a
			}, {
				type: "images",
				Icon: j.a
			}, {
				type: "videos",
				Icon: N.a
			}, {
				type: "links",
				Icon: S.a
			}];
			var L = e => {
					const {
						allowedPostTypes: t,
						className: s
					} = e;
					return o.a.createElement(_.a, {
						className: Object(c.a)(I.a.rowStyle, s)
					}, k.map(e => {
						let {
							type: s,
							Icon: n
						} = e;
						return o.a.createElement("div", {
							className: Object(c.a)(I.a.iconWrapper, {
								[I.a.mDisabled]: !t[s]
							})
						}, o.a.createElement(n, null))
					}))
				},
				T = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				M = s.n(T);
			const B = C.a.wrapped(O.b, "subredditIcon", M.a);
			var R = e => {
					const {
						highlight: t,
						icon: s,
						title: n,
						secondaryText: r,
						item: a
					} = e, {
						allowedPostTypes: i
					} = a;
					return o.a.createElement("div", {
						className: Object(c.a)(M.a.container, {
							[M.a.mHighlight]: t
						})
					}, s, o.a.createElement("div", {
						className: M.a.main
					}, o.a.createElement("span", {
						className: M.a.title
					}, n), r && o.a.createElement("span", {
						className: M.a.secondary
					}, r)), t && i && o.a.createElement(L, {
						allowedPostTypes: i
					}))
				},
				F = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				D = s.n(F);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(i.d)("listings.subscribers");
			var H = e => {
				const {
					language: t,
					item: {
						name: s,
						iconUrl: n,
						subscribers: r
					}
				} = e, a = Object(E.c)(s), i = void 0 !== r ? W(t, r) : void 0, c = o.a.createElement(B, {
					className: D.a.profileIcon,
					iconUrl: n
				});
				return o.a.createElement(R, A({
					icon: c,
					title: a,
					secondaryText: i
				}, e))
			};

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(i.d)("listings.subscribers");
			var G = e => {
					const {
						language: t,
						item: {
							primaryColor: s,
							iconUrl: n,
							name: r,
							subscribers: a
						}
					} = e, i = Object(E.b)(r), c = void 0 !== a ? V(t, a) : void 0, d = o.a.createElement(B, {
						iconUrl: n,
						primaryColor: s,
						redditStyle: !0
					});
					return o.a.createElement(R, U({
						icon: d,
						title: i,
						secondaryText: c
					}, e))
				},
				z = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				q = s.n(z);
			const K = Object(i.e)("subredditPicker.noCommunitiesFound"),
				Z = {
					[u.a.OWN_PROFILE]: Object(i.e)("subredditPicker.sectionOwnProfile"),
					[u.a.SUBSCRIBED_TO_SUBREDDIT]: Object(i.e)("subredditPicker.sectionSubscriptions"),
					[u.a.OTHER_SUBREDDIT]: Object(i.e)("subredditPicker.sectionOthers"),
					[u.a.MODERATED_SUBREDDIT]: Object(i.e)("subredditPicker.sectionModeratedSubreddits")
				};
			t.a = class extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.selectedEntryElement = null, this.containerElement = null, this.ignoreEntryOverEvents = !1, this.activateEntryOverEvents = r()(() => this.ignoreEntryOverEvents = !1, 100), this.setContainerRef = e => this.containerElement = e, this.onEntryUpdate = (e, t) => {
						e === this.props.focusedIndex && (this.selectedEntryElement = t)
					}, this.onScroll = () => {
						this.ignoreEntryOverEvents && this.activateEntryOverEvents()
					}, this.onEntryOver = e => {
						this.ignoreEntryOverEvents || this.props.items[e].disabled || this.props.onEntryFocus(e), this.ignoreEntryOverEvents = !1
					}
				}
				componentDidUpdate() {
					if (this.props.focusedIndex >= 0 && this.selectedEntryElement && this.containerElement) {
						const e = this.selectedEntryElement.getBoundingClientRect(),
							t = this.containerElement.getBoundingClientRect();
						(e.top < t.top || e.bottom > t.bottom) && (this.ignoreEntryOverEvents = !0, 0 === this.props.focusedIndex ? this.containerElement.scrollTop = 0 : this.selectedEntryElement.scrollIntoView(e.top < t.top)), this.props.onEntryFocus(this.props.focusedIndex)
					}
				}
				getEntryContentComponent(e, t) {
					switch (e) {
						case u.a.OWN_PROFILE:
							return H;
						default:
							return G
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t,
						language: s
					} = this.props, n = [];
					return this.props.showNoMatchesCaption && n.push(o.a.createElement(v, {
						key: "no-matches"
					}, o.a.createElement("div", {
						className: q.a.noMatches
					}, s && K(s)))), Object(m.a)(t, {
						keyFn: e => e.type
					}, (r, a, i, c) => {
						const d = [];
						l(i, c, n => {
							const r = t[n],
								a = n === e,
								i = this.getEntryContentComponent(r.type, r.name);
							i && d.push(o.a.createElement(h, {
								entryIndex: n,
								disabled: r.disabled,
								key: r.id || r.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, o.a.createElement(i, {
								language: s,
								highlight: a,
								item: r
							})))
						});
						const m = Z[a];
						n.push(o.a.createElement(v, {
							key: a,
							title: m && m(s),
							children: d
						}))
					}), o.a.createElement("div", {
						className: Object(c.a)(q.a.container, this.props.className, {
							[q.a.mIsValid]: this.props.isValid,
							[q.a.mIsVisible]: n.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, n)
				}
			}
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r, a = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, s, n) {
				return Object(o.a)(e, {
					endpoint: "".concat(a.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
					method: "patch",
					data: n
				})
			}
			async function c(e, t) {
				const s = await async function(e, t, s) {
					return Object(o.a)(e, {
						endpoint: "".concat(a.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
						method: "get"
					})
				}(e, t, n.UpsellBanners);
				return s.ok && s.body || {}
			}
			async function d(e, t, s, r) {
					const a = await c(e, t),
						o = Object.assign({}, a, {
							[s]: r
						});
					return (await i(e, t, n.UpsellBanners, o)).ok ? o : a
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(n || (n = {})), s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return c
				})), s.d(t, "c", (function() {
					return l
				})), s.d(t, "e", (function() {
					return m
				})), s.d(t, "d", (function() {
					return u
				})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(r || (r = {}));
			const l = async (e, t, s) => d(e, t, s, !0), m = async (e, t, s) => d(e, t, s, !1), u = (e, t) => i(e, t, n.UpsellBanners, Object.keys(r).reduce((e, t) => (e[r[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var n, r = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case n.Ethereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function i(e, t, s) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function c(e, t, s) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: s
				})
			}
			async function d(e, t, s) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(s)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(n || (n = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/lodash/get.js"),
				r = s.n(n),
				a = s("./src/config.ts"),
				o = s("./src/graphql/operations/PollVote.json"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				l = (s("./src/reddit/models/Poll/index.ts"), s("./src/reddit/endpoints/governance/requester.ts"));

			function m(e, t, s, n) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(a.a.metaUrl, "/polls/").concat(t, "/").concat(s, "/votes/me/").concat(n)
				})
			}
			const u = (e, t, s) => Object(i.a)(e, Object.assign({}, o, {
				variables: {
					input: {
						postId: t,
						optionId: s
					}
				}
			}));

			function p(e, t) {
				return Object(l.a)(Object(c.a)(e, [d.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: r()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: r()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};

			function d(e, t, s) {
				const n = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(n)(e => {
					const {
						featureEnabled: n,
						dispatch: a
					} = e, o = c(e, ["featureEnabled", "dispatch"]);
					return n ? r.a.createElement(t, o) : void 0 !== s ? r.a.createElement(s, o) : null
				})
			}
		},
		"./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/Subreddit/index.ts");
			const r = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo"]),
				a = new Set([n.b.Private]),
				o = e => !(!e || !e.name) && (!!r.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !a.has(e.type))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.a.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				r = s("./src/reddit/constants/postLayout.ts");
			const a = Math.floor(100 * Math.random());
			var o;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(o || (o = {}));
			t.b = (e, t, s, o, i) => {
				const c = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: r.b[t.prefs.layout]
				};
				return o && !Object(n.a)(o.name) && (c.subreddit = o.name, c.subreddit_screen = !0), c.wls = 6, c.whitelist_status = "all_ads", c.percentage = c.random_number = a, i && (c.position = i), c
			}
		},
		"./src/reddit/helpers/defaultStyledSVG/index.m.less": function(e, t, s) {
			e.exports = {
				defaultSVG: "_2tsJkJBrXn7yERCuGwPDHh",
				defaultSvg: "_2tsJkJBrXn7yERCuGwPDHh"
			}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/app/strings/index.ts"),
				r = s("./src/lib/constants/index.ts");

			function a(e) {
				let {
					apiError: t,
					isLoggedOut: s,
					language: a
				} = e;
				switch (t.type) {
					case r.D.AUTHORIZATION_ERROR:
						return s ? Object(n.a)(a, "error.type.notLoggedIn") : Object(n.a)(a, "error.type.notAuthorized");
					case r.D.VALIDATION_ERROR:
						return Object(n.a)(a, "error.type.validation");
					case r.D.NOT_FOUND_ERROR:
						return Object(n.a)(a, "error.type.notFound");
					case r.D.SERVER_ERROR:
						return Object(n.a)(a, "error.type.server");
					case r.D.LIKELY_UBLOCK_ERROR:
						return Object(n.a)(a, "error.type.blocked");
					default:
						return Object(n.a)(a, "error.type.generic")
				}
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function r(e, t) {
				return Object(n.a)("/web/special-membership/".concat(e, "?corr=").concat(t))
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				a = s("./src/reddit/constants/categories.tsx"),
				o = s("./src/config.ts");
			const i = Array.from({
					length: 20
				}).map((e, t) => "".concat(o.a.assetPath, "/img/snoovatars/snoovatar_").concat(t + 1, ".png")),
				c = [];
			t.a = r()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				if (!e || !t) return c;
				const s = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: a.a[(s + t) % a.a.length],
					image: i[(s + t) % i.length]
				}))
			}), (function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return "".concat(e, "_").concat(t)
			}))
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "i", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/i18n/utils.ts");

			function r() {
				return window.ethereum
			}

			function a() {
				const e = r();
				return !(!e || !e.isMetaMask)
			}

			function o() {
				const e = r();
				return e && e.selectedAddress || null
			}

			function i() {
				return r().networkVersion || null
			}

			function c() {
				const e = r();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return o() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, n, a) {
				const [o, i] = await Promise.all([s.e("vendors~CryptoLibEthers").then(s.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const d = new o.providers.Web3Provider(r()).getSigner(),
					l = new o.Contract(e, i, d),
					m = await l[n](...a);
				return await m.wait()
			}
			const m = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "to",
						type: "address"
					}, {
						name: "value",
						type: "uint256"
					}, {
						name: "data",
						type: "bytes"
					}],
					name: "send",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			const u = 1;
			async function p(e, t, n, r, a) {
				const o = await s.e("vendors~CryptoLibEthers").then(s.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: c,
						hexZeroPad: d,
						toUtf8Bytes: p
					} = o.utils,
					b = i(n).add(a),
					h = u,
					g = "0x" + [c(1)].concat([h, i(r), i(a)].map(c).map(e => d(e, 32))).concat(c(p(""))).map(e => e.substr(2)).join("");
				return async function(e, t, s, n) {
					return l(e, Promise.resolve(m), "send", [t, s, n])
				}(e, t, b.toString(), g)
			}
			const b = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "_subscriber",
						type: "address"
					}, {
						name: "_units",
						type: "uint16"
					}],
					name: "subscribe",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			async function h(e, t, s) {
				await c();
				const r = o() || "";
				if (t.toLowerCase() !== r.toLowerCase()) throw new Error(Object(n.c)("Please select your registered address in MetaMask: ") + t);
				return l(e, Promise.resolve(b), "subscribe", [t, s])
			}

			function g(e) {
				const t = r();
				return new Promise((s, r) => {
					const a = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, a],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) r(e);
						else {
							const e = t && t.result;
							e ? s(e) : r({
								message: Object(n.c)("No signature returned from ethereum provider.")
							})
						}
					})
				})
			}

			function x(e) {
				return new Promise((t, s) => {
					r().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, n) => {
						e || "error" in n ? s("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				r = s("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const s = new n.BigNumber(e),
					r = new n.BigNumber(t);
				return s.dividedBy(r).decimalPlaces(2).toString()
			}

			function o(e, t) {
				return Object(r.b)(parseInt(a(e, t), 10))
			}

			function i(e, t) {
				const s = new n.BigNumber(e),
					r = new n.BigNumber(t);
				return s.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/helpers/makeAccountManagerUrl/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts");
			t.a = (e, t) => {
				let s = "".concat(n.a.accountManagerOrigin, "/").concat(e, "/");
				return t && (s = "".concat(s, "?dest=").concat(encodeURIComponent(t))), s
			}
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/isUrl/index.ts"),
				o = s("./src/lib/logs/console.ts"),
				i = s("./src/reddit/components/BlankPost/index.tsx"),
				c = s("./src/reddit/components/ClassicPost/index.tsx"),
				d = s("./src/reddit/components/CompactPost/index.tsx"),
				l = s("./src/reddit/components/LargePost/index.tsx"),
				m = s("./src/reddit/components/MediumPost/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/models/Media/index.ts");
			const b = {
					[u.g.Large]: l.a,
					[u.g.Medium]: m.b,
					[u.g.Classic]: c.b,
					[u.g.Compact]: d.a
				},
				h = e => r.a.createElement(i.b, e),
				g = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				x = e => !e.media || e.media.type === p.n.EMBED && !(p.b.has(e.media.provider) || (e => e.source && e.source.url && e.isSponsored && g.some(t => e.source.url.startsWith(t)))(e));

			function y(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: n,
					post: r
				} = e;
				if (r.isBlank) return h;
				const i = !r.media && !!r.source && Object(a.a)(r.source.url),
					c = t && i;
				n === u.g.Large && x(r) && !c && (n = u.g.Medium);
				const d = b[n];
				return void 0 === d ? (Object(o.a)(void 0, "Could not find component for layout ".concat(n, ".")), h) : s && r.isSponsored && n === u.g.Large ? m.b : d
			}
		},
		"./src/reddit/helpers/trackers/idCard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts"),
				a = s("./src/reddit/selectors/widgets.ts"),
				o = s("./src/telemetry/index.ts");
			const i = e => {
					Object(o.a)(Object.assign({}, r.defaults(e), {
						action: n.c.CLICK,
						noun: "multi_detail",
						source: "id_card"
					}))
				},
				c = (e, t, s) => {
					const {
						subreddit: i,
						profile: c
					} = Object(a.b)(e, t);
					Object(o.a)(Object.assign({}, r.defaults(e), {
						action: n.c.CLICK,
						noun: "multi_detail_subreddit",
						profile: c,
						source: "id_card",
						subreddit: Object.assign({}, i, {
							categoryName: s
						})
					}))
				},
				d = e => t => ({
					action: n.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: r.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/layers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/telemetry/models/Timer.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: r.subreddit(e),
					actionInfo: Object.assign({}, r.defaults(e).actionInfo, {
						pageType: "layer_maker"
					})
				}),
				o = e => t => Object.assign({
					source: "layer_maker",
					action: "click",
					noun: "create"
				}, r.defaults(t), {
					subreddit: r.subreddit(t),
					user: Object.assign({}, r.defaults(t).user, {
						app_name: "layer_maker"
					}),
					timer: {
						type: n.TimerType.LayerCreationTime,
						millis: e
					}
				}),
				i = e => ({
					source: "layer_maker",
					action: "click",
					noun: "delete",
					subreddit: r.subreddit(e)
				}),
				c = e => t => ({
					source: "layer_maker",
					action: "click",
					noun: "color_picker",
					subreddit: r.subreddit(t),
					actionInfo: Object.assign({}, r.defaults(t).actionInfo, {
						settingValue: e
					})
				}),
				d = e => ({
					source: "layer_maker",
					action: "click",
					noun: "close",
					subreddit: r.subreddit(e)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				a = e => t => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: e
				}, r(t)),
				o = () => e => Object.assign({
					source: "breadcrumb",
					action: "click",
					noun: "subreddit"
				}, r(e)),
				i = () => e => Object.assign({
					source: "id_card",
					action: "click",
					noun: "mod_hub_nav"
				}, r(e))
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			}));
			const n = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				r = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				a = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				}),
				o = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				i = e => e => ({
					source: "mod_edu",
					action: "view",
					noun: "widget"
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = e => t => Object.assign({}, n.defaults(t), {
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: n.subreddit(t)
				}),
				a = e => t => Object.assign({}, n.defaults(t), {
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: n.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return o
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "r", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "o", (function() {
				return S
			}));
			var n = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => Object.assign({}, r.defaults(e), {
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				o = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, a(e)),
				i = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, a(e)),
				c = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, a(t)),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return c(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = c("compare_wiki_pages"),
				m = c("revert_wiki_page"),
				u = c("view_wiki_page"),
				p = c("view_source"),
				b = c("add_wiki_page_contributor"),
				h = c("remove_wiki_page_contributor"),
				g = c("save_wiki_page_settings"),
				x = c("copy_url"),
				y = c("add_wiki_subreddit_contributor"),
				f = c("remove_wiki_subreddit_contributor"),
				v = c("ban_wiki_contributor"),
				E = c("unban_wiki_contributor"),
				C = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				O = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				j = e => t => Object.assign({}, a(t), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: r.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				S = e => t => Object.assign({}, a(t), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: r.actionInfo(t, {
						settingValue: O[e]
					})
				})
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(a.a)(Object(o.b)("archived"), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, s) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, s) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), r.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), r.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), r.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, s) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function a(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), r.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), r.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), r.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), r.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), r.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/LayerDuplicate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				className: e.className
			}, r.a.createElement("g", null, r.a.createElement("g", {
				transform: "translate(-78 82.5)"
			}, r.a.createElement("path", {
				d: "M-435,387.5h-7a3,3,0,0,1-3-3v-7a3,3,0,0,1,3-3h1v2h-1a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-1h2v1A3,3,0,0,1-435,387.5Zm3-8h-2v-2a1,1,0,0,0-1-1h-2v-2h2a3,3,0,0,1,3,3Z",
				transform: "translate(526 -448.5)"
			}), r.a.createElement("path", {
				d: "M96-66H89a3,3,0,0,1-3-3v-7a3,3,0,0,1,3-3h7a3,3,0,0,1,3,3v7A3,3,0,0,1,96-66ZM89-77a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7a1,1,0,0,0-1-1Z"
			}))))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("title", null, "Planet"), r.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), r.a.createElement("g", null, r.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Share/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/helpers/defaultStyledSVG/index.m.less"),
				c = s.n(i);
			var d = e => o.a.wrapped(e, "defaultSVG", c.a),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(a.a)(d(e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: e.fill || Object(l.a)(e).actionIcon
			}, r.a.createElement("path", {
				fill: "inherit",
				d: "M11.43375,2.195625 C11.031875,1.831875 10.3125,2.116875 10.3125,2.6590625 L10.3125,5.9096875 C10,5.975625 9.2321875,6.0775 8.675625,6.2209375 C3.85875,7.4628125 0.5928125,11.9 0.5928125,16.874375 C0.5928125,17.479375 1.308125,17.7309375 1.6634375,17.24125 C3.67375,14.4715625 6.875,12.561875 10.3125,12.1584375 L10.3125,14.8409375 C10.3125,15.383125 11.031875,15.668125 11.43375,15.304375 L18.673125,8.75 L11.43375,2.195625 Z"
			})))))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Top/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Trash/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("polygon", {
				points: "10,38.8 30,38.8 31.2,10.9 8.7,10.9"
			}), r.a.createElement("path", {
				d: "M27.5,3.8H25c0-1.4-1.1-2.5-2.5-2.5h-5c-1.4,0-2.5,1.1-2.5,2.5h-2.5c-2.8,0-5,2.2-5,5h25C32.5,6,30.3,3.8,27.5,3.8z"
			}))))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				transform: "translate(3, 4)"
			}, r.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				a = s.n(r);
			t.a = n.a.div("rightAligned", a.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(i);
			t.a = Object(a.a)(e => r.a.createElement("div", {
				className: Object(o.a)(c.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, r;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(r || (r = {}))
		},
		"./src/reddit/pages/Subreddit/index.m.less": function(e, t, s) {
			e.exports = {
				duHeader: "otZ2uDhYTr1YmgF32ArRm",
				iframe: "_2c5jkTqwY6PkaTiAs5Ijuu",
				iframeContainer: "_1qwRT12qwOr9otmFG3skug",
				mShowCardView: "_11y6tAK6CZS-RU5Z28vPjw",
				cardChild: "_3HLyjC36ED_cOkMhS77Ts1",
				classicChild: "_2YjutkjJwMliy9kOCltIuA",
				compactChild: "m6QmcOHa4tObaem8JhVz8",
				newbieBanner: "_2yjtWm1t0hFL9JDdG1EXR5",
				sidebar: "_3ZmEUUvrdj4LXpXC9XZdN7",
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx",
				Container: "_3LltgwlOPMqp9SuLSX3Qcs",
				container: "_3LltgwlOPMqp9SuLSX3Qcs",
				SidebarRight: "_33zikAe_JEyi3Ulm5L3p--",
				sidebarRight: "_33zikAe_JEyi3Ulm5L3p--",
				TrendingPosts: "_31DFU9jVTS4FfS8EjhrehO",
				trendingPosts: "_31DFU9jVTS4FfS8EjhrehO",
				large: "MCFasrNCNYTYDIlH3-nqu"
			}
		},
		"./src/reddit/pages/Subreddit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				r = s.n(n),
				a = s("./node_modules/core-js/modules/es6.array.sort.js"),
				o = s.n(a),
				i = s("./node_modules/core-js/modules/es6.regexp.search.js"),
				c = s.n(i),
				d = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/fromPairs.js"),
				m = s.n(l),
				u = s("./node_modules/react/index.js"),
				p = s.n(u),
				b = s("./node_modules/react-redux/es/index.js"),
				h = s("./src/reddit/i18n/components.tsx"),
				g = s("./node_modules/reselect/es/index.js"),
				x = s("./src/lib/classNames/index.ts"),
				y = s("./src/lib/extractQueryParams/index.ts"),
				f = s("./src/lib/isAdHocMultireddit/index.ts"),
				v = s("./src/lib/isFakeSubreddit/index.ts"),
				E = s("./src/lib/listingSort/index.ts"),
				C = s("./src/lib/makeListingKey/index.ts"),
				O = s("./src/lib/objectSelector/index.ts"),
				j = s("./src/lib/constants/index.ts"),
				S = s("./src/lib/fastdom/index.ts"),
				w = s("./src/lib/performanceTimings/index.tsx"),
				N = s("./src/reddit/actions/pages/subreddit.ts"),
				_ = s("./src/reddit/actions/preferences.ts"),
				P = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				I = s("./src/reddit/actions/search.ts"),
				k = s("./src/reddit/actions/subreddit.ts"),
				L = s("./src/reddit/components/AdHocMultiredditSidebar/index.tsx"),
				T = s("./src/reddit/components/CategoriesNavigation/index.tsx"),
				M = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				B = s("./src/reddit/components/ContentGate/index.tsx"),
				R = s("./src/reddit/components/CreatePostBanner/index.tsx"),
				F = s("./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx"),
				D = s("./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx"),
				A = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx"),
				W = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				H = s("./src/reddit/components/EmptySubreddit.tsx"),
				U = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				V = s("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				G = s("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				z = s("./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx"),
				q = s("./src/reddit/components/HeaderImage/index.tsx"),
				K = s("./src/reddit/components/InFeedPostCreation/index.tsx"),
				Z = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				J = s("./src/reddit/components/JumpToContent/index.tsx"),
				Q = s("./src/reddit/components/LayersEmbed/index.tsx"),
				Y = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				X = s("./src/reddit/components/ListingPostList/index.tsx"),
				$ = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/async.tsx"),
				ee = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/constants.ts"),
				te = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				se = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				ne = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				re = s("./src/reddit/components/SubredditSidebar/index.tsx"),
				ae = s("./src/reddit/constants/listings.ts"),
				oe = s("./src/reddit/constants/page.ts"),
				ie = s("./src/reddit/constants/parameters.ts"),
				ce = s("./src/reddit/constants/postLayout.ts"),
				de = s("./src/reddit/contexts/PageLayer/index.tsx"),
				le = s("./src/reddit/featureFlags/index.ts"),
				me = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				ue = s("./src/reddit/helpers/trackers/screenview.ts"),
				pe = s("./src/reddit/layout/page/Listing/index.tsx"),
				be = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				he = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				ge = s("./src/reddit/pages/Topic/SidebarLeft/index.tsx"),
				xe = s("./src/reddit/selectors/discoveryUnit.ts"),
				ye = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				fe = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				ve = s("./src/reddit/selectors/experiments/generalCleanup.ts"),
				Ee = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ce = s("./src/reddit/selectors/experiments/railsWidgets.ts"),
				Oe = s("./src/reddit/selectors/experiments/topPosts.ts"),
				je = s("./src/reddit/selectors/experiments/trending.ts"),
				Se = s("./src/reddit/selectors/listings.ts"),
				we = s("./src/reddit/selectors/meta.ts"),
				Ne = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_e = s("./src/reddit/selectors/posts.ts"),
				Pe = s("./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts"),
				Ie = s("./src/reddit/selectors/subreddit.ts"),
				ke = s("./src/reddit/selectors/user.ts"),
				Le = s("./src/reddit/pages/Subreddit/index.m.less"),
				Te = s.n(Le);

			function Me() {
				return (Me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = 5,
				Re = 3,
				Fe = Object(de.t)(),
				De = Object(O.a)(Object(g.a)((e, t) => {
					let {
						location: s
					} = t;
					return s.search
				}, e => m()([...Object(y.a)(e)]))),
				Ae = Object(g.a)((e, t) => {
					let {
						match: s
					} = t;
					return s.params.subredditName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort
				}, De, ke.X, (e, t, s, n) => {
					let r = t;
					!r && Object(v.a)(e) && (r = j.N.HOT);
					const a = Object(N.f)(s, n);
					return Object(N.g)(e, r, s, a)
				}),
				We = Object(g.c)({
					isTopContentDismissed: ke.P
				}),
				He = Object(g.c)({
					subreddit: (e, t) => Object(Ie.B)(e, {
						subredditName: t.match.params.subredditName
					})
				}),
				Ue = Object(g.c)({
					countryMeta: we.b,
					geopopular: ke.m
				}),
				Ve = Object(g.c)({
					isLoggedIn: ke.J
				}),
				Ge = Object(O.a)((e, t) => {
					const {
						subreddit: s
					} = He(e, t), {
						subredditName: n
					} = t.match.params;
					if (s) {
						const r = Ae(e, t),
							a = Object(Ne.a)(he.c.config)(e, {
								subredditId: s.id
							}),
							o = Object(_e.F)(e, r, n, !0),
							i = !Object(Se.d)(e, {
								listingKey: r
							});
						if (a && i && o.length <= 1) return !0
					}
					return !1
				}),
				ze = Object(g.c)({
					exploreV2Variant: (e, t) => {
						if (Object(de.D)(e, t)) return Object(fe.a)(e)
					},
					generalCleanupVariant: ve.a,
					isPopular: de.D,
					isInTrendingEntrypointExperiment: je.a
				}),
				qe = e => {
					const t = ie.t in e && e[ie.t].toUpperCase();
					if ("string" == typeof t && t in j.Ob) return j.Ob[t]
				},
				Ke = Object(O.a)((e, t) => {
					const {
						sort: s,
						subredditName: n
					} = t.match.params, r = De(e, t);
					if (s) return Object(E.b)({
						sort: s,
						timeSort: qe(r)
					});
					if (Object(v.a)(n)) return Object(E.b)({
						sort: j.N.HOT
					});
					const a = Ae(e, t),
						o = e.listings.postOrder.listingSort[a];
					if (o && !o.hasChanged) return Object(E.d)(o.sort);
					const {
						subreddit: i
					} = He(e, t);
					if (i) {
						const t = Object(Ie.E)(e, {
							subredditId: i.id
						});
						return Object(E.d)(t)
					}
					return Object(E.d)(e.user.prefs.sort)
				}),
				Ze = Object(O.a)((e, t) => {
					const {
						subredditName: s
					} = t.match.params;
					return Object(Ie.W)(e, {
						subredditName: s
					})
				}),
				Je = Object(g.c)({
					subredditPremiumEnabled: le.d.spPremiumUpsells,
					isBlacklistedTopContentPage: xe.j,
					language: ke.S,
					layersEmbedEnabledOnSubreddit: le.d.layersEmbed,
					listingKey: Ae,
					railsWidgetsVariant: Ce.d,
					sortParams: Ke,
					stellarRegistrationBannerEnabled: le.d.spStellarWalletRegistration,
					topContent: Ze,
					topContentDiscoveryUnit: e => Object(xe.f)(e, {
						unitName: be.a
					}),
					topPostsVariant: Oe.d,
					walletRegistrationBannerEnabled: le.d.spWalletRegistrationBanner
				}),
				Qe = Object(g.c)({
					categoriesPlacementVariant: ye.a,
					showCreatePostBanner: Ge,
					contentGateInfo: (e, t) => Object(ke.f)(e, t.match.params.subredditName),
					layout: de.M,
					isRpanDuVisible: Ee.c,
					rpanInjectionIndex: (e, t) => {
						const s = Ae(e, t),
							n = Object(de.D)(e, t);
						return Object(Pe.a)(e, {
							listingKey: s,
							isSubreddit: !0,
							isPopular: n
						})
					}
				}),
				Ye = () => Object(g.a)(ke.X, Ue, De, We, He, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Ie.y)(e, {
						subredditName: s.params.subredditName
					})
				}, Ve, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.subredditName
				}, ze, Je, Qe, (e, t, s, n, r, a, o, i, c, d, l) => {
					let {
						countryMeta: m,
						geopopular: u
					} = t, {
						isTopContentDismissed: p
					} = n, {
						subreddit: b
					} = r, {
						isLoggedIn: h
					} = o, {
						exploreV2Variant: g,
						generalCleanupVariant: x,
						isInTrendingEntrypointExperiment: y,
						isPopular: f
					} = c, {
						subredditPremiumEnabled: v,
						language: E,
						layersEmbedEnabledOnSubreddit: C,
						listingKey: O,
						sortParams: {
							sort: S,
							timeSort: w
						},
						stellarRegistrationBannerEnabled: N,
						topContent: _,
						topContentDiscoveryUnit: P,
						topPostsVariant: I,
						isBlacklistedTopContentPage: k,
						railsWidgetsVariant: L,
						walletRegistrationBannerEnabled: T
					} = d;
					const M = m || j.v.Everywhere,
						B = u || M,
						R = s && ie.g in s ? s[ie.g].toUpperCase() : B,
						F = !!s.hasOwnProperty("f");
					return Object.assign({
						countrySort: R,
						exploreV2Variant: g,
						subredditPremiumEnabled: v,
						generalCleanupVariant: x,
						isLoggedIn: h,
						isInTrendingEntrypointExperiment: y,
						isPopular: f,
						language: E,
						layersEmbedEnabledOnSubreddit: C,
						listingKey: O,
						railsWidgetsVariant: L,
						renderNSFWContentGate: b && b.isNSFW && !e,
						isTopContentDismissed: p,
						sort: S,
						stellarRegistrationBannerEnabled: N,
						subreddit: b,
						subredditAboutInfo: a,
						subredditName: i,
						timeSort: w,
						topContent: _,
						topContentDiscoveryUnit: P,
						topPostsVariant: I,
						isBlacklistedTopContentPage: k,
						isFlairFilter: F,
						walletRegistrationBannerEnabled: T
					}, l)
				}),
				Xe = (e, t) => ({
					onLoadMorePosts: () => e(k.u({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					})),
					onLoadMoreSearchResults: () => e(Object(I.g)([j.Jb.Posts])),
					setTopContentDismissalPref: () => e(Object(_.D)())
				}),
				$e = Object(b.b)(Ye, Xe),
				et = Object(d.a)({
					resolved: {},
					chunkName: () => "Trending",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Trending").then(s.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
					}
				}, {
					ssr: !1
				}),
				tt = e => p.a.createElement(et, Me({}, e, {
					fallback: p.a.createElement(se.a, {
						className: e.className,
						showCardView: !!e.showCardView
					})
				})),
				st = Object(d.a)({
					resolved: {},
					chunkName: () => "FrontpageSidebar",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FrontpageSidebar").then(s.bind(null, "./src/reddit/components/FrontpageSidebar/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FrontpageSidebar/index.tsx"
					}
				});
			class nt extends p.a.Component {
				constructor() {
					super(...arguments), this.onTopContentDismissed = () => {
						this.props.setTopContentDismissalPref()
					}
				}
				componentDidMount() {
					S.a.read(() => {
						Object(w.d)(w.c.Subreddit, this.props.isLoggedIn)
					})
				}
				render() {
					const {
						categoriesPlacementVariant: e,
						contentGateInfo: t,
						countrySort: s,
						exploreV2Variant: n,
						isInTrendingEntrypointExperiment: r,
						isPopular: a,
						isLoggedIn: o,
						language: i,
						layersEmbedEnabledOnSubreddit: c,
						layout: d,
						listingKey: l,
						match: m,
						railsWidgetsVariant: u,
						renderNSFWContentGate: b,
						showCreatePostBanner: g,
						sort: y,
						subredditPremiumEnabled: E,
						isTopContentDismissed: O,
						stellarRegistrationBannerEnabled: S,
						subreddit: w,
						subredditAboutInfo: N,
						subredditName: _,
						timeSort: I,
						topContent: k,
						topContentDiscoveryUnit: se,
						topPostsVariant: ie,
						isBlacklistedTopContentPage: de,
						isRpanDuVisible: le,
						rpanInjectionIndex: be,
						isFlairFilter: he,
						walletRegistrationBannerEnabled: xe
					} = this.props, fe = a && e, ve = !!fe && Object(ye.e)(e), Ee = !(ve || !n && !fe), Ce = _.toLowerCase(), je = "/r/".concat(_, "/"), Se = {
						className: ve ? Object(x.a)(Te.a.SidebarRight, Te.a.categories) : void 0,
						listingKey: l,
						listingName: Ce
					}, we = Object(Oe.a)(ie), Ne = Object(Oe.b)(ie), _e = Object(Oe.c)(ie);
					let Pe;
					Object(v.a)(_) ? Pe = Object(f.a)(_) ? p.a.createElement(L.a, Se) : p.a.createElement(st, Me({}, Se, {
						categoriesPlacementVariant: e,
						railsWidgetsVariant: u
					})) : w && (Pe = p.a.createElement(re.a, Me({}, Se, {
						className: Te.a.sidebar,
						subredditId: w.id,
						subredditName: _,
						topPostsVariant: ie
					})));
					const Ie = Object(me.a)(t, b, _);
					if (Ie) return p.a.createElement(B.b, Ie);
					const ke = d === ce.g.Large,
						Le = a && r,
						Fe = w ? w.id : void 0,
						De = !m.params.sort && k && !k.isSubscribed && k.postIds && k.postIds.length >= Be && !O && !de && !we && !Ne;
					let Ae;
					!w || "sequence" !== w.name && "sequence_playground" !== w.name ? Le && (Ae = p.a.createElement(tt, {
						className: Object(x.a)(Te.a.TrendingPosts, {
							[Te.a.large]: ve
						}),
						showCardView: this.props.layout === ce.g.Large
					})) : Ae = p.a.createElement("div", {
						className: Object(x.a)(Te.a.iframeContainer, {
							[Te.a.mShowCardView]: this.props.layout === ce.g.Large
						})
					}, p.a.createElement("iframe", {
						className: Te.a.iframe,
						src: "https://www.reddit.com/sequence/embed",
						style: {
							overflow: "hidden"
						}
					}));
					const We = {},
						He = d === ce.g.Classic ? Te.a.classicChild : d === ce.g.Compact ? Te.a.compactChild : Te.a.cardChild;
					if (le && (a || _.toLowerCase() === P.L) && (We[be] = {
							estHeight: Object(ee.a)(this.props.layout),
							id: "rpan-".concat(this.props.layout, "-").concat(this.props.listingKey),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement($.a, {
									className: t,
									layout: this.props.layout
								})
							}
						}), E && w && d === ce.g.Large && (We[0] = {
							estHeight: 487,
							id: "newbie-banner-".concat(d, "-").concat(l),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(W.a, {
									className: Object(x.a)(t, Te.a.newbieBanner)
								})
							}
						}, We[3] = {
							estHeight: 256,
							id: "lfg-banner-".concat(d, "-").concat(l),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(A.a, {
									className: Object(x.a)(t, Te.a.childLayoutClass),
									subredditId: w.id
								})
							}
						}), xe && w && (We[1] = {
							estHeight: 384,
							id: "wallet-registration-".concat(d, "-").concat(l),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(G.a, {
									className: Object(x.a)(t, He),
									subredditId: w.id
								})
							}
						}), S && w && (We[2] = {
							estHeight: 200,
							id: "stellar-registration-".concat(d, "-").concat(l),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(z.a, {
									className: Object(x.a)(t, He),
									subredditId: w.id
								})
							}
						}), !a && _e && I !== j.Ob.WEEK && d === ce.g.Large) {
						const e = Object(C.a)(_, j.N.TOP, {
							t: j.Ob.WEEK
						});
						We[Re] = {
							estHeight: 0,
							id: "top-week-posts-".concat(d, "-").concat(l),
							render: t => {
								let {
									className: s
								} = t;
								return p.a.createElement(D.a, {
									className: s,
									listingKey: e,
									subredditName: _
								})
							}
						}
					}
					const Ue = {
							baseUrl: je,
							countrySort: s,
							sort: y,
							subredditId: Fe,
							timeSort: I
						},
						Ve = he ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Ge = Object(v.a)(_),
						ze = w && c && p.a.createElement(Q.a, {
							subredditId: w.id,
							subredditName: _
						});
					return p.a.createElement(ne.a, {
						subredditId: Fe
					}, p.a.createElement(pe.a, {
						subredditId: Fe,
						className: Object(x.a)(Te.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !Ge && p.a.Children.toArray([p.a.createElement(q.a, {
							headerText: w ? w.name : _,
							disableFullscreen: ke,
							isTopBannerVariant: !0,
							subredditOrProfile: w,
							url: je
						}), p.a.createElement(M.a, {
							layout: d,
							subreddit: w || void 0,
							subredditId: Fe,
							subredditName: _,
							subredditUrl: je
						})]),
						trendingUnit: Ae,
						contentNavBar: p.a.createElement(p.a.Fragment, null, Ee && p.a.createElement(T.default, {
							baseUrl: ae.c[oe.d.Explore],
							category: oe.d.Popular
						}), Ge && p.a.createElement(Y.a, Ue)),
						content: p.a.createElement(p.a.Fragment, null, w && w.isQuarantined && p.a.createElement(Z.a, {
							subredditName: _
						}), w && g && p.a.createElement(R.a, {
							subreddit: w,
							language: i,
							listingKey: l,
							listingName: Ce
						}), Le && p.a.createElement(te.a, {
							className: Te.a.duHeader
						}, p.a.createElement(h.c, null, "Popular posts")), De && p.a.createElement(F.a, {
							discoveryUnit: se,
							subredditName: w ? w.name : _,
							topContent: k,
							onCloseClick: this.onTopContentDismissed
						}), !Ge && o && !(N && N.userIsBanned) && p.a.createElement(K.a, {
							subredditName: _
						}), !Ge && p.a.createElement(U.a, Ue), p.a.createElement(J.a, null), p.a.createElement(X.a, {
							injectChildren: We,
							listingKey: l,
							listingName: Ce,
							listingViewed: (e, t) => Object(ue.d)(l, y, t, e, I),
							noPostsComponent: () => p.a.createElement(H.a, {
								listingName: Ce,
								sort: y,
								subreddit: w || void 0
							}),
							onLoadMore: Ve,
							inSubredditOrProfile: !Object(v.a)(_)
						}), p.a.createElement(V.a, null)),
						sidebar: ve ? null : Pe,
						sidebars: ve ? [p.a.createElement(ge.a, {
							categoriesPlacementVariant: e,
							topicName: ae.b.Popular
						}), Pe] : void 0,
						layerEmbed: ze
					}))
				}
			}
			t.default = Fe($e(nt))
		},
		"./src/reddit/pages/Topic/SidebarLeft/index.m.less": function(e, t, s) {
			e.exports = {
				SidebarLeft: "_233_Xjgw5BcQOaMinKdbeV",
				sidebarLeft: "_233_Xjgw5BcQOaMinKdbeV",
				CategoryPickerHeader: "_3wb2K4xdf2R_g-DEUa1oaU",
				categoryPickerHeader: "_3wb2K4xdf2R_g-DEUa1oaU",
				CategoryPickerCategoryListContainer: "cEGRaqN-nFBz75Exs3mFC",
				categoryPickerCategoryListContainer: "cEGRaqN-nFBz75Exs3mFC",
				CategoryPickerCategoryItem: "_3csoHvyEDysZxQBkz5xb-p",
				categoryPickerCategoryItem: "_3csoHvyEDysZxQBkz5xb-p",
				disabled: "_1lYRe_nCk_REorq1b9ojQt",
				CategoryPickerButton: "_1Lxchu4Z-MmoLwTVXgfq0u",
				categoryPickerButton: "_1Lxchu4Z-MmoLwTVXgfq0u",
				CategoryPicker: "F70adPsz7qHMzyu0BHqM7",
				categoryPicker: "F70adPsz7qHMzyu0BHqM7",
				blue: "_34lsySmODH-5wPAap1BXpU",
				HomeDisabledTooltip: "j25WWditX6-LZV2-SWbwS",
				homeDisabledTooltip: "j25WWditX6-LZV2-SWbwS",
				GeopopularItem: "_1NeiB9pl71zZHKKIMMRb8L",
				geopopularItem: "_1NeiB9pl71zZHKKIMMRb8L",
				GeopopularChangeButton: "_3jobcejIYo-V5X3YY05Vjm",
				geopopularChangeButton: "_3jobcejIYo-V5X3YY05Vjm"
			}
		},
		"./src/reddit/pages/Topic/SidebarLeft/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/monthsToMinutes/initHomeFeed.ts"),
				d = s("./src/reddit/components/CategoriesPlacement/EventCategory/index.tsx"),
				l = s("./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.tsx"),
				m = s("./src/reddit/components/CategoryPickerWidget/index.tsx"),
				u = s("./src/reddit/components/HeaderSubredditSelector/Compact/Tooltip.tsx"),
				p = s("./src/reddit/components/SidebarContainer/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/categories.tsx"),
				g = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/constants/listings.ts"),
				y = s("./src/reddit/constants/topic.ts"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				v = s("./src/reddit/helpers/name/index.ts"),
				E = s("./src/reddit/helpers/trackers/navigation.ts"),
				C = s("./src/reddit/i18n/components.tsx"),
				O = s("./src/reddit/selectors/category.ts"),
				j = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				S = s("./src/reddit/selectors/monthsToMinutes.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				_ = s.n(N),
				P = s("./src/reddit/pages/Topic/SidebarLeft/index.m.less"),
				I = s.n(P);
			const k = 44,
				L = "home-left-category-tooltip",
				T = Object(o.a)(e => Object(O.t)(e, {
					categoriesOrder: g.X
				}), e => e.map(e => Object.assign({
					anchorProps: {
						rel: "nofollow"
					}
				}, e, {
					path: Object(y.a)(e.name)
				}))),
				M = Object(o.c)({
					categories: T,
					isEligibleCountry: j.d,
					isHomeLinkEnabled: S.m,
					isM2MEnabled: S.w,
					isNightmode: w.U
				}),
				B = Object(a.b)(M, e => ({
					visitPopulatedHome: () => e(Object(c.b)({}))
				})),
				R = (e, t) => Object(i.a)(I.a.CategoryPickerCategoryItem, _.a.categoryLink, {
					[_.a.active]: e,
					[I.a.disabled]: t
				});
			class F extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isTooltipOpen: !1
					}, this.trackCategoryClick = e => {
						this.props.sendEvent(Object(E.b)(Object(v.f)(e)))
					}, this.trackPopularClick = () => {
						this.props.sendEvent(Object(E.b)(x.b.Popular))
					}, this.trackGeopopularClicked = () => {
						this.props.sendEvent(Object(E.b)(h.c))
					}, this.trackEventClick = () => {
						this.eventCategory && this.props.sendEvent(Object(E.b)(this.eventCategory.name))
					}, this.trackOverflowClick = () => {
						this.props.sendEvent(Object(E.b)("overflow"))
					}, this.onHomeClick = e => {
						e.preventDefault(), this.props.isHomeLinkEnabled && (this.props.visitPopulatedHome(), this.props.sendEvent(Object(E.b)(x.b.Home)))
					}, this.showTooltip = () => {
						this.setState(e => e.isTooltipOpen ? null : {
							isTooltipOpen: !0
						})
					}, this.hideTooltip = () => {
						this.setState(e => e.isTooltipOpen ? {
							isTooltipOpen: !1
						} : null)
					}
				}
				render() {
					const {
						categories: e,
						categoriesPlacementVariant: t,
						isEligibleCountry: s,
						isM2MEnabled: n,
						isHomeLinkEnabled: a,
						isNightmode: o,
						topicName: c
					} = this.props, {
						isTooltipOpen: b
					} = this.state, g = Object(v.f)(c), y = g === x.b.Home, E = g === x.b.Popular, O = g === h.c, S = g === h.b;
					let w = e;
					if (this.eventCategory = Object(j.b)(), this.eventCategory) {
						const e = Object(v.f)(this.eventCategory.name);
						w = w.filter(t => e !== Object(v.f)(t.name))
					}
					let N = k;
					return this.eventCategory && (N += k), n && (N += k), s && (N += k), r.a.createElement("div", {
						className: I.a.SidebarLeft
					}, r.a.createElement(p.a, null, r.a.createElement(m.a, {
						buttonClassName: I.a.CategoryPickerButton,
						buttonText: "See",
						categories: w,
						categoryItemClassName: I.a.CategoryPickerCategoryItem,
						categoryItemHeight: k,
						categoryListContainerClassName: I.a.CategoryPickerCategoryListContainer,
						childrenOffset: N,
						className: Object(i.a)(I.a.CategoryPicker, {
							[I.a.blue]: Object(j.c)(t) && !o
						}),
						currentCategoryName: g,
						header: r.a.createElement(C.c, null, "Explore"),
						headerClassName: I.a.CategoryPickerHeader,
						initialNumberOfCategories: 12,
						onItemClick: this.trackCategoryClick,
						onMoreLessClick: this.trackOverflowClick
					}, n && r.a.createElement("li", {
						id: L,
						onMouseEnter: this.showTooltip,
						onMouseLeave: this.hideTooltip,
						onMouseMove: this.showTooltip
					}, r.a.createElement(f.a, {
						className: R(y, !a),
						"data-active": y,
						disabled: !a,
						onMouseDown: this.onHomeClick,
						rel: "nofollow",
						to: x.c[x.b.Home]
					}, r.a.createElement(C.c, null, "Home"), !a && r.a.createElement(u.a, {
						className: I.a.HomeDisabledTooltip,
						isOpen: b,
						tooltipId: L
					}))), r.a.createElement("li", null, r.a.createElement(f.a, {
						className: R(E),
						"data-active": E,
						onMouseDown: this.trackPopularClick,
						rel: "nofollow",
						to: x.c[x.b.Popular]
					}, r.a.createElement(C.c, null, "Popular"))), this.eventCategory && r.a.createElement("li", null, r.a.createElement(d.a, {
						className: R(S),
						"data-active": S,
						eventCategory: this.eventCategory,
						onMouseDown: this.trackEventClick
					})), s && r.a.createElement("li", {
						className: I.a.GeopopularItem
					}, r.a.createElement(l.a, {
						changeButtonClassName: I.a.GeopopularChangeButton,
						className: R(O),
						"data-active": O,
						onMouseDown: this.trackGeopopularClicked
					})))))
				}
			}
			t.a = B(Object(b.b)(F))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = Object(n.a)((e, t) => {
				let {
					isSubreddit: s
				} = t;
				return s
			}, (e, t) => {
				let {
					isPopular: s
				} = t;
				return s
			}, (e, t) => {
				let {
					listingKey: s
				} = t;
				return s ? Object(a.C)(e, {
					listingKey: s
				}) : []
			}, a.H, o.c, (e, t, s, n, a) => {
				if (!e && !t) return "number" == typeof a.home_feed_discovery_unit_index ? a.home_feed_discovery_unit_index : r.g;
				if (t) return "number" == typeof a.popular_feed_discovery_unit_index ? a.popular_feed_discovery_unit_index : r.g;
				for (let r = 0; r < s.length; r++) {
					const e = n[s[r]];
					if (e && !e.isStickied) return r
				}
				return r.g
			})
		},
		"./src/reddit/selectors/experiments/adSidebar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.a
				});
				return !!t && !Object(n.Rb)(t)
			}
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const i = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing"]),
				d = e => i.has((Object(a.e)(e) || "").toLowerCase()) || c.has((Object(a.e)(e) || "").toLowerCase()) && Object(r.c)(e, {
					experimentEligibilitySelector: o.J,
					experimentName: n.bb
				}) === n.ib.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "j", (function() {
				return x
			})), s.d(t, "o", (function() {
				return y
			})), s.d(t, "p", (function() {
				return f
			})), s.d(t, "n", (function() {
				return v
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "s", (function() {
				return O
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "f", (function() {
				return S
			})), s.d(t, "q", (function() {
				return w
			})), s.d(t, "m", (function() {
				return N
			})), s.d(t, "r", (function() {
				return _
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/endpoints/governance/crypto.ts"),
				a = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/selectors/experiments/pollsGA.ts");
			const i = [],
				c = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				l = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = O(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const s = E(e, t);
					if (s) return s.mainHeader
				},
				u = (e, t) => {
					const s = E(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				p = (e, t) => {
					const s = E(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : c
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					if (Object(o.a)(e)) return !0;
					const s = a.d.spPolls(e) || a.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return s && !e
					}
					return s
				},
				g = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				x = (e, t) => {
					const s = Object(n.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || i
				},
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || d,
				v = (e, t) => {
					const s = w(e, t);
					return s && s.decimals ? "1" + "0".repeat(s.decimals) : "1"
				},
				E = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				C = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				O = (e, t) => {
					const s = C(e, t);
					return s && s.walletProvider
				},
				j = (e, t) => {
					const s = O(e, t),
						n = C(e, t);
					return s && s.provider || n && n.provider
				},
				S = (e, t) => {
					const s = j(e, t);
					return s === r.a.Ethereum || s === r.a.Rinkeby
				},
				w = (e, t) => {
					const s = O(e, t),
						n = j(e, t);
					if (s && !s.inTransition && n === r.a.Stellar) return {
						address: s.extra && s.extra.issuerAddress || "",
						decimals: s.extra && s.extra.decimals || 7,
						symbol: s.extra && s.extra.token || "PHOTON"
					};
					const a = s && s.extra && s.extra.contracts,
						o = a && a.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				N = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = O(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				_ = (e, t) => {
					const s = C(e, t);
					return !!s && !!s.walletProvider && !s.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=Subreddit.c3105fa0638c3bc8224a.js.map