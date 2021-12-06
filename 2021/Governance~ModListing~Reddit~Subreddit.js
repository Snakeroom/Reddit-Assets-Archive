// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.59277e412ffb105b0205.js
// Retrieved at 12/6/2021, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~ModListing~Reddit~Subreddit"], {
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/CSSVariableProvider/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function i(e) {
				const t = t => s.a.createElement(o.b.Consumer, null, r => s.a.createElement(e, c({
					theme: r
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/realtime/GQLSubscription/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/lib/loadWithRetries/index.ts");
			const o = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(s.a)(() => Promise.all([r.e("vendors~RealtimeGQLSubscriptionAsync"), r.e("RealtimeGQLSubscriptionAsync")]).then(r.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
			});
			t.a = o
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				o = "EMBEDS__LOADABLE",
				c = Object(n.a)(s),
				i = Object(n.a)(o)
		},
		"./src/reddit/actions/pages/modListing/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "l", (function() {
				return b
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "j", (function() {
				return p
			}));
			const n = "PAGE__MOD_LISTING_PAGE_PENDING",
				s = "PAGE__MOD_LISTING_PAGE_LOADED",
				o = "PAGE__MOD_LISTING_PAGE_FAILED",
				c = "MOD_LISTING_MORE_POSTS_PENDING",
				i = "MOD_LISTING_MORE_POSTS_LOADED",
				a = "MOD_LISTING_MORE_POSTS_FAILED",
				d = "MOD_LISTING_HIDE_SUBREDDIT_SUCCESS",
				u = "MOD_LISTING_HIDE_SUBREDDIT_PENDING",
				l = "MOD_LISTING_HIDE_SUBREDDIT_FAILED",
				b = "MOD_LISTING_UNHIDE_SUBREDDIT_SUCCESS",
				m = "MOD_LISTING_UNHIDE_SUBREDDIT_PENDING",
				p = "MOD_LISTING_UNHIDE_SUBREDDIT_FAILED"
		},
		"./src/reddit/actions/postList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/models/Media/index.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const o = "POSTLIST__MARKED_END",
				c = "POSTLIST__UNMARKED_END",
				i = Object(n.a)(o),
				a = Object(n.a)(c),
				d = (e, t) => async (r, n) => {
					const o = n();
					e in o.listings.postOrder.fetchedTokens ? e in o.listings.postOrder.ids ? r(a({
						listingKey: e
					})) : s.l(o, e) : r(i({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/react/index.js");
			const n = e => new Promise((t, r) => {
				const n = new Image;
				n.onload = () => t(n), n.onerror = r, n.src = e
			})
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lottie-web/build/player/lottie.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				i = r("./src/reddit/components/LottieAnimation/util.ts");
			const a = c.a.memo(e => {
				const t = c.a.createRef(),
					{
						assetData: r,
						assetUrl: n,
						className: a,
						hidden: d,
						loop: u,
						useCanvasRenderer: l,
						onClick: b,
						prefersReducedAnimation: m
					} = e,
					[p, f] = Object(o.useState)(r);
				Object(o.useEffect)(() => {
					n ? Object(i.a)(n).then(f) : r && f(r)
				}, [n, r]);
				const [O, h] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || O || !p) return;
					const r = s.a.loadAnimation({
						autoplay: !1,
						renderer: l ? "canvas" : "svg",
						loop: u,
						container: e,
						animationData: p
					});
					h(r)
				}, [u, t, O, p]), Object(o.useEffect)(() => {
					if (O)
						if (d) O.stop();
						else if (m) {
						const e = O.getDuration(!0);
						O.goToAndPlay(e, !0)
					} else O.goToAndPlay(0)
				}, [d, m, O]);
				const I = Object(o.useCallback)(() => {
					O && O.goToAndPlay(0)
				}, [O]);
				return c.a.createElement("div", {
					className: a,
					style: {
						display: d ? "none" : "block"
					},
					ref: t,
					onClick: b || I
				})
			});
			t.a = a
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./src/reddit/components/ImageWithFallback/index.tsx");
			const n = {};

			function s(e) {
				let t = n[e];
				return t || (t = n[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
			}
		},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, r) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s, o = r("./node_modules/react/index.js"),
				c = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(n || (n = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(s || (s = {}));
			var d = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/helpers/postCollection.ts");
			const l = [d.Mb.COMMENTS, d.Mb.COLLECTION_COMMENTS],
				b = (e, t) => {
					if (!e) return [];
					const r = l.includes(e),
						s = e === d.Mb.COLLECTION_COMMENTS || t && Object(u.a)(t),
						o = d.V.has(e),
						c = d.Cb.has(e),
						i = e === d.Mb.SUBREDDIT,
						a = e === d.Mb.TOPIC;
					let b, m, p;
					return o && !i || c ? b = n.HeaderSelector : s ? b = n.Collection : r ? b = n.PostComments : a && (b = n.TopicHeader), (o || c || s || r) && (m = n.Widget), (o || r) && (p = n.PostItem), [b, m, p]
				};
			var m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/selectors/platform.ts"),
				f = r("./src/reddit/components/SEOTitle/index.m.less"),
				O = r.n(f);
			const h = ({
					level: e,
					children: t
				}) => {
					const r = `h${e}`;
					return c.a.createElement(r, {
						className: O.a.Title
					}, t)
				},
				I = Object(m.u)(),
				g = Object(i.b)(() => Object(a.a)((e, {
					pageLayer: t
				}) => t && Object(p.n)(e, {
					page: t
				}), (e, {
					pageLayer: t
				}) => t && t.meta && t.meta.name, (e, {
					type: t
				}) => t, (e, t, r) => ({
					level: b(t, e).indexOf(r) + 1 || void 0
				})));
			class v extends c.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? c.a.createElement(h, {
						level: t
					}, e) : c.a.createElement(c.a.Fragment, null, e)
				}
			}
			t.b = I(g(v))
		},
		"./src/reddit/components/SubredditIcon/index.m.less": function(e, t, r) {
			e.exports = {
				Image: "_34CfAAowTqdbNDYXz5tBTW",
				image: "_34CfAAowTqdbNDYXz5tBTW",
				UserIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				userIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				PlanetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				planetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				BackupImage: "RK004G8fbNOkGdNLEzm67",
				backupImage: "RK004G8fbNOkGdNLEzm67",
				iconContainer: "_7nyhK_sDI_8i22XNdcMzb",
				editableIcon: "_1AxWRIyg1lV9-r_CmqYj0o",
				flexContainer: "-Mpi2pdgifDBOdpUYX2vh",
				clickableUploadText: "_3H6u2CWhsluIPVF14GpEaA",
				inTopBar: "_1UpdjN7u66BU606z97t4HS",
				emptyUploadButton: "ndkYE2hc8Y-V3NHpSYvxA",
				transition: "_1iA7YdCRjbU9Rd_2VNGvsw",
				emptyEditableIcon: "_1h9JeZaSDxkh67Ns3QVUP2",
				emptyPlusButton: "Dh1qxsy_tIctL9f4LEzv9",
				imageUploader: "JBITiVY1zX1mMDq-sHkru",
				loadingIcon: "_3Dk8QRKhQImYqds2lSF6G4",
				loadingIconInTopBar: "_1U3KLnHX2TdXL5lNrrv4EW",
				emptyEditableIconInTopBar: "_3-i_fdY8zqHIo3CjuVzTYE",
				defaultCommunityIcon: "_1xvdfUtOPDANqHjxzxKX5b",
				mNightmode: "_1TI6C7sqGL9TRdsq1jRks"
			}
		},
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/components/UserIcon/index.tsx"),
				l = r("./src/reddit/constants/colors.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				p = r("./src/reddit/icons/fonts/index.tsx"),
				f = r("./src/reddit/models/Subreddit/index.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/components/SubredditIcon/index.m.less"),
				I = r.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = d.a.wrapped(u.a, "UserIcon", I.a),
				S = d.a.img("Image", I.a),
				j = ({
					iconColor: e,
					...t
				}) => c.a.createElement(S, g({
					style: {
						backgroundColor: e || ""
					}
				}, t)),
				E = d.a.div("BackupImage", I.a),
				_ = Object(b.u)();
			t.b = _(e => {
				const t = Object(i.e)(O.X);
				let r, o, d;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(m.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(f.h)(e.subredditOrProfile) ? d = c.a.createElement(v, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (r = t, o = n)
				} else r = e.shouldHideNsfwIcon ? `${n.a.assetPath}/img/avatar_over18.png` : e.iconUrl, o = e.primaryColor || l.a.alienblue;
				return r ? d = c.a.createElement(j, {
					alt: s.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: o,
					role: "presentation",
					src: r
				}) : d || (d = c.a.createElement(p.a, {
					name: "community",
					isFilled: !t,
					className: Object(a.a)(e.className, I.a.defaultCommunityIcon, {
						[I.a.mNightmode]: t
					}),
					style: t ? {
						backgroundColor: e.redditStyle ? l.a.alienblue : o
					} : {
						color: e.redditStyle ? l.a.alienblue : o
					}
				})), e.linkTo ? c.a.createElement("a", {
					href: e.linkTo
				}, d) : c.a.createElement(c.a.Fragment, null, d)
			})
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/telemetry/index.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = s.a.createContext(() => {});

			function u({
				children: e
			}) {
				const t = Object(o.f)(),
					r = Object(n.useCallback)(e => {
						{
							const r = t.getState(),
								n = e(r);
							Object(i.a)({
								...c.defaults(r),
								...n
							})
						}
					}, [t]);
				return s.a.createElement(d.Provider, {
					value: r
				}, e ? s.a.Children.only(e) : null)
			}

			function l() {
				return Object(n.useContext)(d)
			}

			function b(e) {
				function t(t) {
					const r = l();
					return s.a.createElement(e, a({}, t, {
						sendEvent: r
					}))
				}
				const r = e.name || e.displayName;
				return t.displayName = `Tracked(${r})`, t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/UserIcon/PresenceDot.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				i = r("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				a = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				d = r.n(a);
			t.default = e => {
				const {
					showPresence: t,
					onceInViewport: r
				} = e, a = Object(n.useRef)(null), u = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && r && r()
					})
				}, [r]);
				return Object(c.a)(a, u), s.a.createElement(i.a, {
					ref: a,
					className: Object(o.a)(d.a.presenceDot, {
						[d.a.isLit]: t
					}),
					isHighlighted: e.isHighlighted,
					outlineClassName: e.outlineClassName
				})
			}
		},
		"./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				a = r.n(i);
			t.a = function({
				backgroundClassName: e,
				className: t,
				headshot: r
			}) {
				return o.a.createElement("div", {
					className: Object(c.a)(a.a.snoovatarWrapper, t)
				}, o.a.createElement("div", {
					className: Object(c.a)(a.a.snoovatarBackground, e)
				}), o.a.createElement("div", {
					className: a.a.snoovatarHeadshotContainer
				}, o.a.createElement("img", {
					alt: n.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: a.a.snoovatarHeadshot,
					src: r
				})))
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.m.less": function(e, t, r) {
			e.exports = {
				currentUserIconWrapper: "efdkOLo3oigH_95whTYCp",
				userIconWrapper: "_2p14AQvJBvTrEEa4csiW9v",
				isProfileIcon: "_1lxVpLf3223Gve3gRhbG-R",
				DefaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				defaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				UserIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				userIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				mNightmode: "_2aVSEFJsIE0M-4uRE-U24H",
				nftAnimation: "_3fhlcUDP9SJN47QMfuzW_j",
				snoovatarWrapper: "_1cyAeeYDGrx7MPL_jRwKZ",
				snoovatarBackground: "_2_QqG5dG916znjlVV8ZCbw",
				snoovatarHeadshotContainer: "_1XJXnCAngvZLEeLpB3oa4L",
				snoovatarHeadshot: "ScrrUjzznpAqm92uwgnvO",
				presenceDot: "_2dn5Ncenn0BSD4tCSmxQhA",
				isLit: "GpWjjkZl5_kV4yZYWBaT2",
				hasHeadShotWrapper: "_1TENjLYSaj4L4uJMZa3DRe"
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "c", (function() {
				return p
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				u = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = r.n(l);
			const m = `${n.a.assetPath}/img/avatar_over18_square.png`,
				p = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: r,
					isCurrentUser: n,
					isNightMode: o,
					isNSFW: l,
					nsfwIconUrl: f,
					shouldHideNSFW: O
				} = e;
				if (Object(i.e)(e => {
						p(r) && Object(u.i)(e)
					}), n && p(r) || !n && !r) return c.a.createElement(d.a, {
					className: Object(a.a)(b.a.DefaultUserIcon, t, {
						[b.a.mNightmode]: o
					})
				});
				const h = !n && l && O ? f || m : r;
				return c.a.createElement("img", {
					alt: s.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(a.a)(b.a.UserIcon, t),
					src: h
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				c = r("./src/config.ts"),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/realtime/GQLSubscription/async.tsx"),
				u = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				b = r("./src/reddit/models/User/index.ts"),
				m = r("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				p = r("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				f = r("./src/reddit/components/UserIcon/UserIcon.tsx"),
				O = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/components/LottieAnimation/index.tsx"),
				I = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				g = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				v = r.n(g);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = () => {},
				E = Object(a.c)({
					currentUser: O.k,
					isNightMode: O.X,
					shouldHideNSFW: O.C,
					user: O.nb,
					isProfileAvatarChangeFixEnabled: I.a
				}),
				_ = Object(i.b)(E);
			t.a = _(e => {
				const {
					authorId: t,
					collapsed: r,
					currentUser: i,
					iconUrl: a,
					isCommentAuthorBlocked: O,
					isHighlighted: I,
					isNft: g,
					isNSFW: E,
					shouldUseOnlineOverride: _,
					isOnlineOverrideValue: x,
					isOnlineStatusLoadTest: y,
					isProfileIcon: N,
					omitResponsivePresenceWrapper: P,
					onPresenceIndicatorInViewport: k,
					shouldShowPresenceIndicator: C,
					user: T,
					userName: D,
					isProfileAvatarChangeFixEnabled: U,
					...w
				} = e, A = !!i && Object(b.e)(i) === D, R = A ? i : T, M = R && R.accountIcon || a, L = T ? T.isNSFW : E, H = Object(u.a)(M) && !O, B = H ? o.a.createElement(p.a, {
					headshot: M,
					className: e.className
				}) : o.a.createElement(f.b, S({}, w, {
					iconUrl: O && r ? "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png" : M,
					isCurrentUser: A,
					isNSFW: L
				})), [F, G] = Object(s.useState)(!1), W = Object(s.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "ONLINE_STATUS_INDICATOR",
							userID: t
						}
					}
				}), [t]), q = Object(s.useCallback)(e => {
					const {
						isOnline: t
					} = e.subscribe.data;
					G(t)
				}, []), K = Object(s.useRef)(null), [z, V] = Object(s.useState)(!1), Y = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: r
						} = e, n = 1 !== r;
						t ? V(!0) : n && V(!1)
					})
				}, []), X = Object(s.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(l.a)(K, Y, X.current), P ? B : o.a.createElement("div", {
					className: Object(n.a)(v.a.userIconWrapper, {
						[v.a.nftUserIcon]: g,
						[v.a.hasHeadShotWrapper]: H,
						[v.a.isProfileIcon]: N && U
					}),
					ref: K
				}, g && o.a.createElement(h.a, {
					className: v.a.nftAnimation,
					assetUrl: `${c.a.assetPath}/img/snoovatars/nft_comment_animation.json`,
					loop: !0
				}), B, C && (F || _ && x) && o.a.createElement(m.default, {
					showPresence: !0,
					isHighlighted: I,
					onceInViewport: k
				}), (C || y) && !_ && z && o.a.createElement(d.a, {
					variables: W,
					onData: C ? q : j,
					queryKey: "isUserOnline"
				}))
			})
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "k", (function() {
				return i
			})), r.d(t, "m", (function() {
				return a
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "n", (function() {
				return u
			})), r.d(t, "j", (function() {
				return l
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "i", (function() {
				return O
			}));
			const n = "DraftEditor-contentwrapper",
				s = "public-DraftStyleDefault-block",
				o = "data-offset-key",
				c = "hovered",
				i = "scrollerItem",
				a = "threadline",
				d = "header-user-dropdown",
				u = "voteButton",
				l = "RichTextJSON-root",
				b = "ImageBox-image",
				m = "content-type-link",
				p = "styled-outbound-link",
				f = "ListingLayout-backgroundContainer",
				O = "ListingLayout-outerContainer"
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = s.a.createContext(!1);

			function i(e) {
				function t(t) {
					return s.a.createElement(c.Consumer, null, r => s.a.createElement(e, o({}, t, {
						isOverlay: r
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return P
			})), r.d(t, "c", (function() {
				return k
			}));
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				o = r("./node_modules/query-string/index.js"),
				c = r.n(o),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				d = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/addQueryParams/index.ts");
			var b = (e, t) => t ? Object(l.a)(e, {
				user_id: t
			}) : e;
			var m = r("./src/lib/opener/index.ts"),
				p = r("./src/lib/redditId/index.ts"),
				f = r("./src/reddit/actions/post.ts"),
				O = r("./src/reddit/constants/adEvents.ts"),
				h = r("./src/reddit/helpers/getVendorMetadata.ts"),
				I = r("./src/reddit/helpers/pixels.ts"),
				g = r("./src/reddit/helpers/trackers/ads.ts"),
				v = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
				S = r("./src/reddit/selectors/posts.ts"),
				j = r("./src/reddit/selectors/telemetry.ts"),
				E = r("./src/reddit/selectors/user.ts");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(u.a)(E.a, E.k, (e, {
					isSponsored: t,
					postId: r
				}) => t && r ? Object(S.b)(e, r) : null, S.H, j.actionInfo, (e, t, r, n, s) => ({
					allowClickTracking: e,
					basePixelMetadata: r,
					userId: t ? Object(p.a)(t.id) : null,
					post: n,
					pageType: s.pageType
				})),
				y = Object(d.b)(x, e => ({
					fireAdPixelsOfType: (t, r) => e(Object(f.z)(t, r)),
					recordClick: (t, r, n) => {
						const s = t.events.filter(({
							type: e,
							url: t
						}) => e === O.a.Click && Object(I.b)(t));
						Object(I.c)(s), e(Object(f.p)(String(r), {
							postId: t.id,
							vendorMetadata: n
						}))
					}
				})),
				N = (e, t, r, n) => {
					const s = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					n && t.outboundUrl && s && (e.href = b(t.outboundUrl, r), e.href = function(e) {
						return Object(l.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				P = (e, t, r) => {
					let n, s = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(r)) {
						s = Object(h.a)(e, t, O.a.Click);
						const {
							url: o,
							query: i
						} = c.a.parseUrl(r);
						n = c.a.stringifyUrl({
							url: o,
							query: {
								...i,
								...s
							}
						})
					} else n = r;
					return {
						url: n,
						metadata: s
					}
				},
				k = (e, t, r) => {
					const n = P(t, r, e.href);
					return e.href = n.url, n.metadata
				},
				C = ({
					isSponsored: e,
					source: t
				}) => !!(e && (null == t ? void 0 : t.outboundUrl)),
				T = y(e => {
					const t = Object(i.useRef)(null),
						r = Object(v.a)(),
						{
							allowClickTracking: n,
							basePixelMetadata: o,
							commentId: c,
							fireAdPixelsOfType: d,
							href: u,
							isSponsored: l,
							pageType: b,
							post: p,
							postId: f,
							recordClick: h,
							source: I,
							sourceElement: S,
							userId: j
						} = e;
					let E = s()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "recordClick", "commentId", "source", "sourceElement", "userId", "pageType"]);
					const x = I && I.outboundUrl && l ? I.outboundUrl : u;
					return E = {
						...E,
						href: x,
						rel: l ? m.b : m.a,
						target: m.d.BLANK
					}, !I || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: r
						} = e;
						return !(!t || !r) && (t > r + 3e5 || t < r - 36e5)
					})(I) ? a.a.createElement("a", _({}, E, {
						onClick: () => r(u, S, c, f)
					})) : a.a.createElement("a", _({}, E, {
						onMouseDown: r => {
							if (!C(e)) return !(1 !== r.button && 2 !== r.button && !r.ctrlKey) || void N(r.currentTarget, I, j, n);
							t.current = k(r.currentTarget, f, o)
						},
						onClick: () => {
							p && (C(e) && (h(p, O.a.Click, t.current), Object(g.a)(p, b)), d(p, O.a.Click), r(u, S, c, f))
						},
						onMouseLeave: e => {
							l || ((e, t) => {
								e.href = t
							})(e.currentTarget, x)
						},
						onTouchStart: e => N(e.currentTarget, I, j, n),
						"data-testid": "outbound-link"
					}))
				});
			t.b = T
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/polished/dist/polished.es.js"),
				s = r("./src/reddit/models/NewStructuredStyles/index.ts");
			const o = e => Object(n.b)(e) < .6;

			function c(e, t = s.a.bodyText, r = s.b.bodyText) {
				return o(e) ? r : t
			}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/helpers/localStorage/index.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, r) => s => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...o.defaults(s),
					subreddit: o.subreddit(s),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${r}` : `DESKTOP ${r}`,
						count: 1,
						type: n.f.SWITCH_HOUSE_AD
					}
				}),
				i = (e, t) => {
					t && (Object(s.Ab)(e.postId), Object(s.Jb)(t)), e.impressionIdStr ? Object(s.Bb)(e.impressionIdStr) : e.impressionId && Object(s.Bb)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return x
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "q", (function() {
				return P
			})), r.d(t, "r", (function() {
				return k
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "s", (function() {
				return T
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "l", (function() {
				return U
			})), r.d(t, "p", (function() {
				return w
			})), r.d(t, "i", (function() {
				return A
			})), r.d(t, "j", (function() {
				return R
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "b", (function() {
				return B
			})), r.d(t, "a", (function() {
				return F
			})), r.d(t, "n", (function() {
				return G
			})), r.d(t, "m", (function() {
				return W
			})), r.d(t, "t", (function() {
				return z
			})), r.d(t, "w", (function() {
				return V
			})), r.d(t, "e", (function() {
				return Y
			})), r.d(t, "d", (function() {
				return Q
			})), r.d(t, "u", (function() {
				return Z
			})), r.d(t, "v", (function() {
				return $
			})), r.d(t, "h", (function() {
				return J
			}));
			var n = r("./node_modules/lodash/pick.js"),
				s = r.n(n),
				o = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makePostDraftPageKey/index.ts"),
				i = r("./src/reddit/constants/parameters.ts"),
				a = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				d = r("./src/reddit/helpers/routeKey/index.ts"),
				u = r("./src/reddit/helpers/trackers/postComposer.ts"),
				l = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				b = r("./src/reddit/models/Comment/index.ts"),
				m = r("./src/reddit/models/Post/index.ts"),
				p = r("./src/reddit/routes/subreddit/index.ts"),
				f = r("./src/reddit/selectors/profile.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/lib/makePostCreationPageKey/index.ts"),
				I = r("./src/lib/makeSearchKey/index.ts"),
				g = r("./src/reddit/helpers/correlationIdTracker.ts"),
				v = r("./src/reddit/helpers/trackers/searchResults.ts"),
				S = r("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				j = r("./src/reddit/selectors/postDraft.ts"),
				E = r("./src/reddit/selectors/telemetry.ts"),
				_ = r("./src/telemetry/index.ts");
			const x = (e, t, r, n, u, f) => {
					const {
						route: O
					} = e, {
						name: g
					} = O.meta;
					if (!g) return;
					const v = t.platform.currentPage;
					switch (g) {
						case o.Mb.COMMENTS: {
							const {
								partialCommentId: s,
								partialPostId: o
							} = e.match.params, c = Object(m.t)(o), i = Object(d.a)(e, t, t.posts.models[c]);
							if (!i) return;
							const u = s && Object(b.h)(s),
								{
									sortToUse: l
								} = Object(a.a)(t, c);
							Object(_.a)(D(i, c, u, r, n, l)(t));
							break
						}
						case o.Mb.INDEX:
						case o.Mb.LISTING:
						case o.Mb.MULTIREDDIT:
						case o.Mb.SUBREDDIT: {
							const s = Object(d.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: c,
								queryParams: i,
								path: a
							} = e.match, {
								sort: u = (s.sort ? s.sort : o.W.HOT)
							} = c, l = i.t, b = a === p.a;
							Object(_.a)(N({
								key: s.listingKey,
								sort: u,
								timerType: r,
								timerMillis: n,
								timeSort: l,
								isPredictionsPage: b
							})(t));
							break
						}
						case o.Mb.TOPIC: {
							const s = Object(d.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: c
							} = e.match, i = s.sort ? s.sort : o.X, {
								sort: a = i
							} = c;
							Object(_.a)(N({
								key: s.listingKey,
								sort: a,
								timerType: r,
								timerMillis: n
							})(t));
							break
						}
						case o.Mb.PROFILE_OVERVIEW: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								params: c,
								queryParams: i
							} = e.match, {
								sort: a = o.Eb
							} = c, u = i.t;
							Object(_.a)(P(s, a, r, n, u)(t));
							break
						}
						case o.Mb.PROFILE_POSTS: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								queryParams: c
							} = e.match, {
								sort: i = o.Eb,
								t: a = o.Fb
							} = c;
							Object(_.a)(k(s, i, r, n, a)(t));
							break
						}
						case o.Mb.PROFILE_COMMENTS: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								queryParams: c
							} = e.match, {
								sort: i = o.Eb,
								t: a = o.Fb
							} = c;
							Object(_.a)(C(s, i, r, n, a)(t));
							break
						}
						case o.Mb.PROFILE_PRIVATE: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							Object(_.a)(T(s)(n, r)(t));
							break
						}
						case o.Mb.FOLLOWERS:
							L(t);
							break;
						case o.Mb.PROFILE_MODERATION:
							f && w(t, !0);
							break;
						case o.Mb.SETTINGS: {
							const s = e;
							Object(_.a)(K(r, n)(t)), s.match.params.page === o.ac.Profile && Object(l.l)(t);
							break
						}
						case o.Mb.POST_CREATION:
							if (f && u) {
								const e = Object(h.a)(u);
								Object(_.a)(U(e, r, n)(t))
							}
							break;
						case o.Mb.POST_DRAFT: {
							const {
								draftId: s
							} = e.match.params, o = Object(c.a)(e.match.params);
							if (!o) return;
							H(t, o, s, r, n);
							break
						}
						case o.Mb.SUBREDDIT_WIKI:
							Object(_.a)(X(r, n)(t));
							break;
						case o.Mb.COINS:
							Object(_.a)(B(r, n)(t)), Object(_.a)(F()(t));
							break;
						case o.Mb.PREMIUM:
							Object(_.a)(G(r, n)(t)), Object(_.a)(W()(t));
							break;
						case o.Mb.APPEAL:
							Object(_.a)(q(r, n)(t));
							break;
						case o.Mb.INBOX_PAGES:
							f && M(t);
							break;
						case o.Mb.MODERATION_PAGES:
							f && A(t, !0, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case o.Mb.COLLECTION_COMMENTS:
							f && $(t, !0);
							break;
						case o.Mb.MODQUEUE_PAGES:
							f && R(t, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case o.Mb.SUBREDDIT_LEADERBOARD:
							f && Object(_.a)(Y()(t));
							break;
						case o.Mb.SEARCH_RESULTS:
							if (f) {
								const o = Object(d.e)(e, t);
								if (!o) return;
								const c = Object(S.c)(t);
								Object(_.a)(Z(o, Object(I.e)(s()(v && v.queryParams || {}, i.t), c), r, n, v)(t))
							}
							break;
						case o.Mb.PUBLIC_ACCESS_NETWORK:
							f && Object(_.a)(z()(t));
							break;
						case o.Mb.GEOTAGGING:
							f && Object(_.a)(Q()(t));
							break;
						case o.Mb.SUBREDDIT_CREATION:
							f && Object(_.a)(V()(t));
							break;
						case o.Mb.MOD_LISTING:
							f && J(t, !0)
					}
				},
				y = e => ({
					...E.defaults(e),
					userPreferences: E.userPreferences(e)
				}),
				N = ({
					key: e,
					sort: t,
					timerType: r,
					timerMillis: n,
					timeSort: s,
					flairTitle: o,
					isPredictionsPage: c
				}) => i => {
					const {
						api: a
					} = i.listings.postOrder, d = !a.error[e] && !a.pending[e], u = c ? {
						paneName: "predictions",
						reason: "predictions_tournament"
					} : {};
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...y(i),
						actionInfo: E.actionInfo(i, {
							success: d,
							...u
						}),
						customFeed: E.customFeed(i),
						listing: E.listing(i, e, {
							sort: t,
							sortTime: s
						}),
						subreddit: E.subreddit(i),
						timer: E.timer(r, n),
						userSubreddit: E.userSubreddit(i),
						adblock: E.adblock(i),
						postFlair: {
							title: o
						},
						predictions: c ? Object(E.predictionsOnPredictionsTab)(i) : void 0
					}
				},
				P = (e, t, r, n, s) => o => {
					const c = E.listing(o, e);
					c && (c.sort = t, s && (c.sortTime = s));
					const {
						api: i
					} = o.listings.postOrder, a = !i.error[e] && !i.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...y(o),
						actionInfo: E.actionInfo(o, {
							success: a
						}),
						profile: E.profile(o),
						snoovatar: E.snoovatar(o),
						subreddit: E.subreddit(o),
						timer: E.timer(r, n),
						userSubreddit: E.userSubreddit(o),
						adblock: E.adblock(o)
					}
				},
				k = (e, t, r, n, s) => o => {
					const c = E.listing(o, e);
					c && (c.sort = t, s && (c.sortTime = s));
					const {
						api: i
					} = o.listings.postOrder, a = !i.error[e] && !i.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...y(o),
						actionInfo: E.actionInfo(o, {
							success: a
						}),
						profile: E.profile(o),
						subreddit: E.subreddit(o),
						timer: E.timer(r, n),
						userSubreddit: E.userSubreddit(o),
						adblock: E.adblock(o)
					}
				},
				C = (e, t, r, n, s) => o => {
					const c = E.profileComments(o, e);
					c && (c.sort = t, s && (c.sortTime = s));
					const {
						api: i
					} = o.profileCommentsPage, a = !i.error[e] && !i.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...y(o),
						actionInfo: E.actionInfo(o, {
							success: a
						}),
						profile: E.profile(o),
						subreddit: E.subreddit(o),
						timer: E.timer(r, n),
						userSubreddit: E.userSubreddit(o),
						adblock: E.adblock(o)
					}
				},
				T = e => (t, r) => n => {
					const s = !n.profilePrivatePage.api.error[e] && !n.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...y(n),
						actionInfo: E.actionInfo(n, {
							success: s
						}),
						profile: E.profile(n),
						subreddit: E.subreddit(n),
						timer: E.timer(r, t),
						userSubreddit: E.userSubreddit(n),
						adblock: E.adblock(n)
					}
				},
				D = (e, t, r, n, s, o) => c => {
					const {
						api: i
					} = c.pages.comments, a = !i.error[e] && !i.pending[e], d = {
						source: "global",
						action: "view",
						noun: "screen",
						...y(c),
						actionInfo: E.actionInfo(c, {
							success: a
						}),
						post: E.post(c, t),
						profile: E.profile(c),
						subreddit: E.subreddit(c),
						timer: E.timer(n, s),
						userSubreddit: E.userSubreddit(c),
						adblock: E.adblock(c),
						postEvent: E.postEventI13nSelector(c, {
							postId: t
						}),
						postCollection: E.postCollectionI13nSelector(c, {
							postId: t
						}),
						listing: E.listing(c, void 0, {
							sort: o
						})
					};
					return r && (d.comment = E.comment(c, r)), d
				},
				U = (e, t, r) => n => {
					const s = n.creations.api.page.fetched[e],
						o = n.platform.currentPage ? n.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...y(n),
						actionInfo: E.actionInfo(n, {
							success: s
						}),
						post: o ? E.post(n, o) : void 0,
						subreddit: E.subreddit(n),
						timer: E.timer(t, r),
						userSubreddit: E.userSubreddit(n),
						adblock: E.adblock(n)
					}
				},
				w = (e, t) => {
					Object(_.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: E.actionInfo(e, {
							success: t
						})
					})
				},
				A = (e, t, r, n) => {
					Object(_.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: E.actionInfo(e, {
							success: t
						}),
						profile: E.profileById(e, Object(f.m)(e, n)),
						subreddit: E.subredditById(e, Object(O.C)(e, r)),
						userSubreddit: E.userSubreddit(e),
						adblock: E.adblock(e)
					})
				},
				R = (e, t, r) => {
					Object(_.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						profile: E.profileById(e, Object(f.m)(e, r)),
						subreddit: E.subredditById(e, Object(O.C)(e, t)),
						userSubreddit: E.userSubreddit(e),
						adblock: E.adblock(e)
					})
				},
				M = e => {
					Object(_.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: E.actionInfo(e)
					})
				},
				L = e => {
					Object(_.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: E.actionInfo(e)
					})
				},
				H = (e, t, r, n, s) => {
					const o = e.creations.api.page.pending[t],
						c = !e.creations.api.page.error[t] && !o && !!r,
						i = Object(j.h)(e, r);
					Object(_.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: E.actionInfo(e, {
							success: c
						}),
						subreddit: E.subreddit(e),
						timer: E.timer(n, s),
						userSubreddit: E.userSubreddit(e),
						adblock: E.adblock(e),
						...i ? Object(u.n)(e, i) : {}
					})
				},
				B = (e, t) => r => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(g.c)(g.a.GoldPayment),
					...y(r),
					timer: E.timer(e, t),
					adblock: E.adblock(r)
				}),
				F = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...y(e)
				}),
				G = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(g.c)(g.a.GoldPayment),
					...y(r),
					timer: E.timer(e, t),
					adblock: E.adblock(r)
				}),
				W = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...y(e)
				}),
				q = (e, t) => r => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...y(r),
					timer: E.timer(e, t)
				}),
				K = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...y(r),
					timer: E.timer(e, t)
				}),
				z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: E.subreddit(e),
					...y(e)
				}),
				V = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...y(e)
				}),
				Y = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...y(e)
				}),
				X = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...y(r),
					customFeed: E.customFeed(r),
					subreddit: E.subreddit(r),
					timer: E.timer(e, t),
					userSubreddit: E.userSubreddit(r),
					adblock: E.adblock(r)
				}),
				Q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...y(e)
				}),
				Z = (e, t, r, n, s, c) => i => {
					let a = !0;
					if (t.type.indexOf(o.Zb.Posts) > -1) {
						const {
							api: t
						} = i.listings.listingOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(o.Zb.Subreddits) > -1 || t.type.indexOf(o.Zb.Users) > -1) {
						const {
							api: t
						} = i.listings.postOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					const d = E.paneName(i, s),
						u = E.structureType(s),
						l = i.platform.currentPage && i.platform.currentPage.urlParams && i.platform.currentPage.urlParams.subredditName ? E.subredditByName(i, i.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						...v.c(i, t),
						source: "global",
						action: "view",
						noun: "screen",
						...E.defaults(i),
						actionInfo: E.actionInfo(i, {
							success: a,
							paneName: d
						}),
						timer: E.timer(r, n),
						search: {
							...E.search(i, t, !0, s || void 0),
							...!!c && {
								originElement: c
							},
							queryId: Object(g.c)(g.a.SearchResults),
							structureType: u,
							subredditId: t.restrict_sr && l && l.id ? l.id : void 0,
							subredditName: t.restrict_sr && l && l.name ? l.name : void 0
						},
						...!!c && {
							correlationId: Object(g.c)(g.a.SearchResults)
						},
						userPreferences: {
							...E.userPreferences(i),
							hideNsfw: !i.user.prefs.over18
						}
					}
				},
				$ = (e, t) => {
					Object(_.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: E.actionInfo(e, {
							success: t
						})
					})
				},
				J = (e, t) => {
					Object(_.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: E.actionInfo(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return l
			})), r.d(t, "s", (function() {
				return b
			})), r.d(t, "r", (function() {
				return m
			})), r.d(t, "t", (function() {
				return p
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "v", (function() {
				return O
			})), r.d(t, "u", (function() {
				return h
			})), r.d(t, "w", (function() {
				return I
			})), r.d(t, "y", (function() {
				return g
			})), r.d(t, "a", (function() {
				return S
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "x", (function() {
				return E
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "m", (function() {
				return x
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "l", (function() {
				return N
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "q", (function() {
				return C
			})), r.d(t, "p", (function() {
				return T
			})), r.d(t, "n", (function() {
				return D
			})), r.d(t, "o", (function() {
				return U
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "i", (function() {
				return R
			})), r.d(t, "k", (function() {
				return M
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/constants/posts.ts"),
				o = r("./src/reddit/constants/tracking.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				d = r("./src/reddit/selectors/telemetry.ts");
			const u = {
					SEARCH: "search",
					SEARCH_RESULTS_BEST: "search_results_best"
				},
				l = (e, t) => {
					const r = d.subreddit(e);
					return {
						screen: d.screen(e),
						subreddit: r && t && t.restrict_sr ? r : null
					}
				},
				b = (e, t) => r => {
					const n = t;
					return n.structureType = "related", {
						action: e,
						correlationId: Object(c.c)(c.a.SearchResults),
						noun: "related_search",
						source: u.SEARCH,
						search: d.search(r, n),
						...l(r)
					}
				},
				m = (e, t, r, n) => s => ({
					...l(s, r),
					source: u.SEARCH,
					action: "click",
					noun: t,
					actionInfo: d.actionInfo(s, n ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: n ? d.discoveryUnit(n) : null,
					search: d.search(s, r),
					post: d.post(s, e),
					media: d.media(s, e)
				}),
				p = (e, t, r, n, s) => o => ({
					...y(o, e, t, s, n, r),
					noun: "ad"
				}),
				f = (e, t, r) => s => {
					let o = !0;
					if (t.type.indexOf(n.Zb.Posts) > -1) {
						const {
							api: t
						} = s.listings.listingOrder;
						o = o && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(n.Zb.Subreddits) > -1 || t.type.indexOf(n.Zb.Users) > -1) {
						const {
							api: t
						} = s.listings.postOrder;
						o = o && !t.error[e] && !t.pending[e]
					}
					return {
						...l(s, t),
						source: u.SEARCH,
						action: "view",
						noun: "search_results_post",
						actionInfo: d.actionInfo(s, {
							success: o,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: d.discoveryUnit(r),
						search: d.search(s, t)
					}
				},
				O = (e, t) => r => ({
					action: "view",
					actionInfo: d.actionInfo(r),
					metaSearch: d.metaSearch(t),
					noun: e,
					screen: d.screen(r),
					search: d.smartSearch(r, t),
					source: u.SEARCH
				}),
				h = (e, t) => r => ({
					action: "click",
					actionInfo: d.actionInfo(r),
					noun: e,
					metaSearch: d.metaSearch(t),
					screen: d.screen(r),
					search: d.smartSearch(r, t),
					source: u.SEARCH
				}),
				I = (e, t, r) => n => ({
					source: u.SEARCH,
					action: "click",
					noun: d.SearchDropdownNouns.Recent,
					actionInfo: d.actionInfo(n, {
						paneName: "subreddit_dropdown",
						position: r + 1
					}),
					search: {
						query: e,
						originPageType: n.platform.currentPage ? d.getPageTypeFromCurrentPage(n.platform.currentPage) : void 0,
						queryId: Object(c.c)(c.a.SearchResults)
					},
					...v(n, t)
				}),
				g = (e, t, r, n) => s => {
					const o = n.filter(e => e.id);
					return {
						source: u.SEARCH,
						action: "click",
						noun: d.SearchDropdownNouns.Typeahead,
						actionInfo: d.actionInfo(s, {
							position: r + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: s.platform.currentPage ? d.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0,
							queryId: Object(c.c)(c.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: o.map(e => e.id),
							numberSubreddits: o.length
						},
						...v(s, t)
					}
				},
				v = (e, t) => {
					const r = t.isSubreddit && t.id ? d.subredditForSearch(e, t.id) : void 0,
						n = t.isProfile && t.id ? d.profileForSearch(e, t.id) : void 0,
						s = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? r || s : void 0,
						profile: t.isProfile ? n || s : void 0
					}
				};
			var S;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities", e.Communities = "tab_communities", e.Authors = "tab_authors"
			}(S || (S = {}));
			const j = (e, t) => r => ({
					...l(r, t),
					source: u.SEARCH,
					action: "click",
					noun: e,
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(r),
					search: d.search(r, t)
				}),
				E = (e, t) => r => ({
					action: "click",
					correlationId: Object(c.c)(c.a.SearchResults),
					noun: e ? n.Yb.ToSubreddit : n.Yb.ToGlobal,
					search: d.search(r, t),
					source: u.SEARCH
				}),
				_ = (e, t, r, n) => s => ({
					...l(s, r),
					source: u.SEARCH,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(s, {
						relativePosition: d.getRelativePostOrder(s, t, e)
					}),
					search: {
						...d.search(s, r),
						...!!n && {
							originElement: n
						}
					},
					post: d.post(s, t)
				}),
				x = (e, t, r, n, s) => o => y(o, e, t, r, n, s),
				y = (e, t, r, n, s, i) => {
					const a = d.paneName(e, n),
						l = P(e, t, s, i),
						b = d.amountOfElementsBeforePost(e, r, s, i, a),
						m = null !== l ? b + l : null,
						p = d.structureType(n),
						f = {
							...d.search(e, r, !0, n || void 0),
							structureType: p,
							queryId: Object(c.c)(c.a.SearchResults)
						};
					return {
						source: u.SEARCH,
						action: o.c.CLICK,
						noun: "post",
						actionInfo: n ? {
							pageType: d.getPageTypeFromCurrentPage(n),
							paneName: a,
							position: m,
							relativePosition: l
						} : d.actionInfo(e, {
							paneName: a,
							position: m,
							relativePosition: l
						}),
						search: f,
						post: d.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: i ? d.discoveryUnit(i) : null
					}
				},
				N = (e, t, r, n, s, o) => c => k(c, e, t, r, n, s, o),
				P = (e, t, r, n) => {
					var s;
					return (null === (s = null == n ? void 0 : n.layout) || void 0 === s ? void 0 : s.viewTypeWeb) === i.b.Hero ? 0 : (null == n ? void 0 : n.postOrder) ? n.postOrder.indexOf(t) >= 0 ? n.postOrder.indexOf(t) : null : r ? d.getRelativePostOrder(e, t, r) : null
				},
				k = (e, t, r, n, i, l, b) => {
					if (!n) {
						n = Object(a.H)(e, {
							postId: l
						}).belongsTo
					}
					const m = d.paneName(e, r);
					let p, f;
					if (l) {
						p = P(e, l, i, b);
						const r = d.amountOfElementsBeforePost(e, t, i, b, m);
						f = null !== p ? r + p : null
					} else {
						p = ((e, t, r, n) => n && n.subredditOrder ? n.subredditOrder.indexOf(t) : r ? d.getRelativeSubredditOrProfileOrder(e, t, r) : null)(e, n.id, i, b);
						const t = d.amountOfElementsBeforeCommunity(e, i, b);
						f = null !== p ? t + p : null
					}
					const O = d.structureType(r),
						h = {
							...d.search(e, t, !0, r || void 0),
							structureType: O,
							queryId: Object(c.c)(c.a.SearchResults)
						};
					return {
						source: u.SEARCH,
						action: o.c.CLICK,
						noun: n.type,
						search: h,
						subreddit: n.type === s.a.SUBREDDIT ? d.subredditForSearch(e, n.id) : void 0,
						profile: n.type === s.a.PROFILE ? d.profileForSearch(e, n.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: b ? d.discoveryUnit(b) : null,
						actionInfo: r ? {
							pageType: d.getPageTypeFromCurrentPage(r),
							paneName: m,
							position: f,
							relativePosition: p
						} : d.actionInfo(e, {
							paneName: m,
							position: f,
							relativePosition: p
						}),
						post: l ? d.post(e, l) : void 0
					}
				},
				C = (e, t) => r => ({
					...l(r, e),
					source: u.SEARCH,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(r),
					search: {
						...d.search(r, e),
						...!!t && {
							originElement: t
						}
					},
					subreddit: d.subreddit(r)
				}),
				T = (e, t, r, n, s) => c => ({
					...y(c, t, r, n, e, s),
					action: o.c.VIEW
				}),
				D = (e, t, r, n) => s => ({
					...l(s, r),
					source: u.SEARCH,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(s, {
						relativePosition: d.getRelativePostOrder(s, t, e),
						position: d.getAbsoluteOrder(s, t, e)
					}),
					search: {
						...d.search(s, r),
						...!!n && {
							originElement: n
						}
					},
					post: d.post(s, t)
				}),
				U = (e, t, r) => n => ({
					...l(n),
					source: u.SEARCH,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(n),
					search: {
						...d.search(n, t),
						...!!r && {
							originElement: r
						}
					},
					[e]: d[e](n)
				}),
				w = (e, t) => r => ({
					...l(r, t),
					source: u.SEARCH,
					action: e,
					noun: "covid_banner",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(r),
					search: d.search(r, t)
				}),
				A = e => ({
					action: o.c.DISABLE,
					noun: "subreddit_search",
					source: "search",
					subreddit: {
						id: null == e ? void 0 : e.id,
						name: null == e ? void 0 : e.name,
						nsfw: null == e ? void 0 : e.isNSFW,
						quarantined: null == e ? void 0 : e.isQuarantined
					}
				});

			function R(e, t) {
				return r => ({
					...l(r, t),
					source: u.SEARCH,
					action: "view",
					noun: `no_${e}_results`,
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(r),
					search: d.search(r, t)
				})
			}

			function M(e, t) {
				return r => ({
					...l(r),
					source: "search",
					action: "click",
					noun: e,
					actionInfo: d.actionInfo(r),
					search: d.search(r, t)
				})
			}
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js");
			t.a = function(e, t, r) {
				Object(n.useEffect)(() => {
					const n = e && e.current;
					if (!n || "undefined" == typeof IntersectionObserver) return;
					const s = new IntersectionObserver(t, r);
					return s.observe(n), () => {
						s.unobserve(n)
					}
				}, [e, t, r])
			}
		},
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var n = r("./src/reddit/components/TrackingHelper/index.tsx");
			const s = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var o = r("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, r, n) => s => {
				const c = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(o.defaults)(s),
					actionInfo: Object(o.actionInfo)(s),
					geo: Object(o.geo)(s),
					screen: Object(o.screen)(s),
					subreddit: Object(o.subreddit)(s),
					outbound: Object(o.outboundLinkData)(s, e, t, n, r)
				};
				return r && (c.comment = Object(o.comment)(s, r)), n && (c.post = Object(o.post)(s, n)), c
			};
			var i = r("./src/lib/serviceWorker/index.ts"),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				u = r("./src/telemetry/helpers/getSignatureHeader.ts"),
				l = r("./src/telemetry/models/Event.ts");
			const b = () => {
				const e = Object(a.f)();
				return t => {
					const r = t(e.getState()),
						n = l.g(r),
						s = Object(d.a)(n),
						o = Object(u.b)(s);
					Object(i.b)("sendV2EventsData", {
						data: s,
						headers: o
					})
				}
			};

			function m() {
				const e = Object(n.b)(),
					t = b();
				return (r, n, o, i) => {
					var a, d;
					if (n && function(e) {
							return !e.startsWith("/") && null == e.match(s)
						}(r)) {
						const s = c(r, n, o, i);
						(null === (d = null === (a = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === a ? void 0 : a.serviceWorker) || void 0 === d ? void 0 : d.controller) ? t(s): e(s)
					}
				}
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/fonts/helpers.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const a = ({
				className: e,
				isFilled: t,
				name: r,
				...n
			}) => s.a.createElement("i", i({
				className: Object(o.a)(e, Object(c.b)(r, t))
			}, n));
			a.displayName = "Icon";
			const d = (e, t) => r => s.a.createElement(a, i({
				name: e
			}, t, r, {
				isFilled: (null == t ? void 0 : t.isFilled) || (null == r ? void 0 : r.isFilled),
				className: Object(o.a)(null == t ? void 0 : t.className, null == r ? void 0 : r.className)
			}));
			t.a = a
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.m.less": function(e, t, r) {
			e.exports = {
				defaultInactiveState: "_1g3Xfh9mljLHWv24M9A3Rw",
				outline: "_3SlBAJb2MbUHwgBZFH8eL7",
				highlighted: "_1-JQy00VxG8hpTxxdxV32y"
			}
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				i = r.n(c);
			t.a = Object(n.forwardRef)(({
				className: e,
				isHighlighted: t,
				outlineClassName: r
			}, n) => s.a.createElement("svg", {
				className: Object(o.a)(i.a.defaultInactiveState, e),
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				width: "12",
				height: "12",
				ref: n
			}, s.a.createElement("circle", {
				cx: "6",
				cy: "6",
				r: "4"
			}), s.a.createElement("path", {
				className: Object(o.a)(i.a.outline, r, {
					[i.a.highlighted]: t
				}),
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooSilhouette/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), s.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), s.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), s.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), s.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), s.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), s.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), s.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), s.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), s.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), s.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), s.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), s.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), s.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), s.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), s.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
		},
		"./src/reddit/selectors/experiments/newCommunityProgressV3.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/experiments/index.ts"),
				i = r("./src/reddit/selectors/experiments/utils.ts");
			const a = e => e.subreddits.progressModule,
				d = Object(n.a)(e => Object(o.c)(e, {
					experimentName: s.ce,
					experimentEligibilitySelector: c.e
				}), i.a)
		},
		"./src/reddit/selectors/experiments/profileAvatarChangeFix.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(s.a)(n.r)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.59277e412ffb105b0205.js.map