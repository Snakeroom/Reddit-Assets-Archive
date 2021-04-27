// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.e9a30d86055ae76411d2.js
// Retrieved at 4/27/2021, 9:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~ModListing~Reddit~Subreddit"], {
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return c
			}));
			var r = i("./node_modules/react/index.js"),
				o = i.n(r),
				n = i("./src/lib/CSSVariableProvider/index.tsx");

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const t = t => o.a.createElement(n.b.Consumer, null, i => o.a.createElement(e, s({
					theme: i
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, i) {
			"use strict";

			function r(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			i.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return o
			})), i.d(t, "a", (function() {
				return n
			})), i.d(t, "d", (function() {
				return s
			})), i.d(t, "c", (function() {
				return c
			}));
			var r = i("./src/lib/makeActionCreator/index.ts");
			const o = "EMBEDS__UNLOADABLE",
				n = "EMBEDS__LOADABLE",
				s = Object(r.a)(o),
				c = Object(r.a)(n)
		},
		"./src/reddit/actions/postList.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return s
			})), i.d(t, "c", (function() {
				return a
			}));
			var r = i("./src/lib/makeActionCreator/index.ts"),
				o = (i("./src/reddit/actions/embedAndImage.ts"), i("./src/reddit/actions/video.ts"), i("./src/reddit/helpers/trackers/postList.ts"));
			i("./src/reddit/constants/postLayout.ts"), i("./src/reddit/models/Media/index.ts"), i("./src/reddit/selectors/platform.ts"), i("./src/reddit/selectors/posts.ts");
			i("./src/reddit/selectors/video.ts");
			const n = "POSTLIST__MARKED_END",
				s = "POSTLIST__UNMARKED_END",
				c = Object(r.a)(n),
				l = Object(r.a)(s),
				a = (e, t) => async (i, r) => {
					const n = r();
					e in n.listings.postOrder.fetchedTokens ? e in n.listings.postOrder.ids ? i(l({
						listingKey: e
					})) : o.j(n, e) : i(c({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, i) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var r, o, n = i("./node_modules/react/index.js"),
				s = i.n(n),
				c = i("./node_modules/react-redux/es/index.js"),
				l = i("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(r || (r = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(o || (o = {}));
			var a = i("./src/lib/constants/index.ts"),
				d = i("./src/reddit/helpers/postCollection.ts");
			const u = [a.Eb.COMMENTS, a.Eb.COLLECTION_COMMENTS],
				f = (e, t) => {
					if (!e) return [];
					const i = u.includes(e),
						o = e === a.Eb.COLLECTION_COMMENTS || t && Object(d.a)(t),
						n = a.O.has(e),
						s = a.ub.has(e),
						c = e === a.Eb.SUBREDDIT,
						l = e === a.Eb.TOPIC;
					let f, _, p;
					return n && !c || s ? f = r.HeaderSelector : o ? f = r.Collection : i ? f = r.PostComments : l && (f = r.TopicHeader), (n || s || o || i) && (_ = r.Widget), (n || i) && (p = r.PostItem), [f, _, p]
				};
			var _ = i("./src/reddit/contexts/PageLayer/index.tsx"),
				p = i("./src/reddit/selectors/platform.ts"),
				m = i("./src/reddit/components/SEOTitle/index.m.less"),
				b = i.n(m);
			const h = ({
					level: e,
					children: t
				}) => {
					const i = `h${e}`;
					return s.a.createElement(i, {
						className: b.a.Title
					}, t)
				},
				g = Object(_.t)(),
				v = Object(c.b)(() => Object(l.a)((e, {
					pageLayer: t
				}) => t && Object(p.l)(e, {
					page: t
				}), (e, {
					pageLayer: t
				}) => t && t.meta && t.meta.name, (e, {
					type: t
				}) => t, (e, t, i) => ({
					level: f(t, e).indexOf(i) + 1 || void 0
				})));
			class O extends s.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? s.a.createElement(h, {
						level: t
					}, e) : s.a.createElement(s.a.Fragment, null, e)
				}
			}
			t.b = g(v(O))
		},
		"./src/reddit/components/SubredditIcon/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return k
			}));
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				n = i.n(o),
				s = i("./node_modules/react-redux/es/index.js"),
				c = i("./src/lib/classNames/index.ts"),
				l = i("./src/lib/lessComponent.tsx"),
				a = i("./src/reddit/components/UserIcon/index.tsx"),
				d = i("./src/reddit/constants/colors.ts"),
				u = i("./src/reddit/contexts/PageLayer/index.tsx"),
				f = i("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				_ = i("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				p = i("./src/reddit/icons/fonts/index.tsx"),
				m = i("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				b = i("./src/reddit/models/Subreddit/index.ts"),
				h = i("./src/reddit/selectors/user.ts"),
				g = i("./src/reddit/components/SubredditIcon/index.m.less"),
				v = i.n(g);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = l.a.wrapped(a.a, "UserIcon", v.a),
				w = l.a.img("Image", v.a),
				I = ({
					iconColor: e,
					...t
				}) => n.a.createElement(w, O({
					style: {
						backgroundColor: e || ""
					}
				}, t)),
				x = l.a.wrapped(({
					className: e,
					color: t,
					...i
				}) => n.a.createElement(m.a, O({
					className: e,
					style: {
						background: t || ""
					}
				}, i)), "PlanetIcon", v.a),
				k = l.a.div("BackupImage", v.a),
				j = Object(u.t)();
			t.b = j(e => {
				const t = Object(_.a)(),
					i = Object(s.e)(h.V);
				let o, l, a;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: i
					} = Object(f.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(b.g)(e.subredditOrProfile) ? a = n.a.createElement(y, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (o = t, l = i)
				} else o = e.iconUrl, l = e.primaryColor || d.b.alienblue;
				return o ? a = n.a.createElement(I, {
					alt: r.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: l,
					role: "presentation",
					src: o
				}) : a || (a = t ? n.a.createElement(p.a, {
					name: "community",
					isFilled: !i,
					className: Object(c.a)(e.className, v.a.defaultCommunityIcon, {
						[v.a.mNightmode]: i
					}),
					style: i ? {
						backgroundColor: e.redditStyle ? d.b.alienblue : l
					} : {
						color: e.redditStyle ? d.b.alienblue : l
					}
				}) : n.a.createElement(x, {
					className: e.className,
					color: e.redditStyle ? d.b.alienblue : l,
					role: "presentation"
				})), e.linkTo ? n.a.createElement("a", {
					href: e.linkTo
				}, a) : n.a.createElement(n.a.Fragment, null, a)
			})
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			})), i.d(t, "b", (function() {
				return u
			})), i.d(t, "c", (function() {
				return f
			}));
			var r = i("./node_modules/react/index.js"),
				o = i.n(r),
				n = i("./node_modules/react-redux/es/index.js"),
				s = i("./src/reddit/selectors/telemetry.ts"),
				c = i("./src/telemetry/index.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			const a = o.a.createContext(() => {});

			function d({
				children: e
			}) {
				const t = Object(n.f)(),
					i = Object(r.useCallback)(e => {
						{
							const i = t.getState(),
								r = e(i);
							Object(c.a)({
								...s.defaults(i),
								...r
							})
						}
					}, [t]);
				return o.a.createElement(a.Provider, {
					value: i
				}, e ? o.a.Children.only(e) : null)
			}

			function u() {
				return Object(r.useContext)(a)
			}

			function f(e) {
				function t(t) {
					const i = u();
					return o.a.createElement(e, l({}, t, {
						sendEvent: i
					}))
				}
				const i = e.name || e.displayName;
				return t.displayName = `Tracked(${i})`, t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/UserIcon/PresenceDot.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				o = i.n(r),
				n = i("./src/lib/classNames/index.ts"),
				s = i("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = i("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				l = i("./src/reddit/components/UserIcon/UserIcon.m.less"),
				a = i.n(l);
			t.a = e => {
				const {
					showPresence: t,
					onceInViewport: i
				} = e, l = Object(r.useRef)(null), d = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && i && i()
					})
				}, [i]);
				return Object(s.a)(l, d), o.a.createElement(c.a, {
					ref: l,
					className: Object(n.a)(a.a.presenceDot, {
						[a.a.isLit]: t
					}),
					isHighlighted: e.isHighlighted
				})
			}
		},
		"./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				n = i.n(o),
				s = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/components/UserIcon/UserIcon.m.less"),
				l = i.n(c);
			t.a = function({
				backgroundClassName: e,
				className: t,
				headshot: i
			}) {
				return n.a.createElement("div", {
					className: Object(s.a)(l.a.snoovatarWrapper, t)
				}, n.a.createElement("div", {
					className: Object(s.a)(l.a.snoovatarBackground, e)
				}), n.a.createElement("div", {
					className: l.a.snoovatarHeadshotContainer
				}, n.a.createElement("img", {
					alt: r.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: l.a.snoovatarHeadshot,
					src: i
				})))
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.m.less": function(e, t, i) {
			e.exports = {
				currentUserIconWrapper: "efdkOLo3oigH_95whTYCp",
				userIconWrapper: "_2p14AQvJBvTrEEa4csiW9v",
				DefaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				defaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				UserIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				userIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				mNightmode: "_2aVSEFJsIE0M-4uRE-U24H",
				snoovatarWrapper: "_1cyAeeYDGrx7MPL_jRwKZ",
				snoovatarBackground: "_2_QqG5dG916znjlVV8ZCbw",
				snoovatarHeadshotContainer: "_1XJXnCAngvZLEeLpB3oa4L",
				snoovatarHeadshot: "ScrrUjzznpAqm92uwgnvO",
				presenceDot: "_2dn5Ncenn0BSD4tCSmxQhA",
				isLit: "GpWjjkZl5_kV4yZYWBaT2",
				hasHeadShotWrapper: "_1TENjLYSaj4L4uJMZa3DRe"
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return f
			}));
			var r = i("./src/config.ts"),
				o = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				s = i.n(n),
				c = i("./src/lib/classNames/index.ts"),
				l = i("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				a = i("./src/reddit/components/UserIcon/UserIcon.m.less"),
				d = i.n(a);
			const u = `${r.a.assetPath}/img/avatar_over18_square.png`,
				f = e => !e || e.includes("avatar_default_");
			t.a = e => {
				const {
					className: t,
					iconUrl: i,
					isCurrentUser: r,
					isNightMode: n,
					isNSFW: a,
					nsfwIconUrl: _,
					shouldHideNSFW: p
				} = e;
				if (r && f(i) || !r && !i) return s.a.createElement(l.a, {
					className: Object(c.a)(d.a.DefaultUserIcon, t, {
						[d.a.mNightmode]: n
					})
				});
				const m = !r && a && p ? _ || u : i;
				return s.a.createElement("img", {
					alt: o.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(c.a)(d.a.UserIcon, t),
					src: m
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./src/lib/classNames/index.ts"),
				o = i("./node_modules/react/index.js"),
				n = i.n(o),
				s = i("./node_modules/react-redux/es/index.js"),
				c = i("./node_modules/reselect/es/index.js"),
				l = i("./src/reddit/helpers/userSnoovatar/index.ts"),
				a = i("./src/reddit/models/User/index.ts"),
				d = i("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = i("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				f = i("./src/reddit/components/UserIcon/UserIcon.tsx"),
				_ = i("./src/reddit/selectors/user.ts"),
				p = i("./src/reddit/components/UserIcon/UserIcon.m.less"),
				m = i.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = Object(c.c)({
					currentUser: _.i,
					isNightMode: _.V,
					shouldHideNSFW: _.B,
					user: _.mb
				}),
				g = Object(s.b)(h);
			t.a = g(e => {
				const {
					currentUser: t,
					iconUrl: i,
					isHighlighted: o,
					isNSFW: s,
					shouldShowPresenceIndicator: c,
					user: _,
					userName: p,
					onPresenceIndicatorInViewport: h,
					omitResponsivePresenceWrapper: g,
					...v
				} = e, O = !!t && Object(a.e)(t) === p, y = O ? t : _, w = y && y.accountIcon || i, I = _ ? _.isNSFW : s, x = Object(l.a)(w), k = x ? n.a.createElement(u.a, {
					headshot: w,
					className: e.className
				}) : n.a.createElement(f.a, b({}, v, {
					iconUrl: w,
					isCurrentUser: O,
					isNSFW: I
				}));
				return g ? k : n.a.createElement("div", {
					className: Object(r.a)(m.a.userIconWrapper, {
						[m.a.hasHeadShotWrapper]: x
					})
				}, k, c && n.a.createElement(d.a, {
					showPresence: !0,
					isHighlighted: o,
					onceInViewport: h
				}))
			})
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return r
			})), i.d(t, "b", (function() {
				return o
			})), i.d(t, "d", (function() {
				return n
			})), i.d(t, "f", (function() {
				return s
			})), i.d(t, "k", (function() {
				return c
			})), i.d(t, "m", (function() {
				return l
			})), i.d(t, "e", (function() {
				return a
			})), i.d(t, "n", (function() {
				return d
			})), i.d(t, "j", (function() {
				return u
			})), i.d(t, "g", (function() {
				return f
			})), i.d(t, "a", (function() {
				return _
			})), i.d(t, "l", (function() {
				return p
			})), i.d(t, "h", (function() {
				return m
			})), i.d(t, "i", (function() {
				return b
			}));
			const r = "DraftEditor-contentwrapper",
				o = "public-DraftStyleDefault-block",
				n = "data-offset-key",
				s = "hovered",
				c = "scrollerItem",
				l = "threadline",
				a = "header-user-dropdown",
				d = "voteButton",
				u = "RichTextJSON-root",
				f = "ImageBox-image",
				_ = "content-type-link",
				p = "styled-outbound-link",
				m = "ListingLayout-backgroundContainer",
				b = "ListingLayout-outerContainer"
		},
		"./src/reddit/constants/elementIds.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "d", (function() {
				return n
			})), i.d(t, "b", (function() {
				return s
			}));
			const r = "bladeContainer",
				o = "header",
				n = "overlayScrollContainer",
				s = "collectionPostListScrollContainer"
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, i) {
			"use strict";
			var r, o;
			i.d(t, "d", (function() {
					return r
				})), i.d(t, "c", (function() {
					return o
				})), i.d(t, "b", (function() {
					return n
				})), i.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(r || (r = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(o || (o = {}));
			const n = "SHORTCUT_FOCUSABLE_DIV",
				s = [9, 13, 32]
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, i) {
			"use strict";
			i.d(t, "g", (function() {
				return r
			})), i.d(t, "e", (function() {
				return o
			})), i.d(t, "c", (function() {
				return n
			})), i.d(t, "d", (function() {
				return s
			})), i.d(t, "a", (function() {
				return c
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "h", (function() {
				return a
			})), i.d(t, "b", (function() {
				return d
			}));
			const r = 4,
				o = 51,
				n = 60,
				s = 70,
				c = 90,
				l = 99,
				a = 100,
				d = 100
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			})), i.d(t, "b", (function() {
				return c
			}));
			var r = i("./node_modules/react/index.js"),
				o = i.n(r);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			const s = o.a.createContext(!1);

			function c(e) {
				function t(t) {
					return o.a.createElement(s.Consumer, null, i => o.a.createElement(e, n({}, t, {
						isOverlay: i
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/Dropdown/index.m.less": function(e, t, i) {
			e.exports = {
				dropdownTriangle: "_1oxgVV3q47KbjEKqP5CHuM",
				iconStyles: "Ls9uHSAO9p2g7EMya2KXp",
				dropdown: "_2uYY-KeuYHKiwl-9aF0UiL"
			}
		},
		"./src/reddit/controls/Dropdown/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			}));
			var r = i("./node_modules/react/index.js"),
				o = i.n(r),
				n = i("./src/lib/classNames/index.ts"),
				s = i("./src/lib/domUtils/index.ts"),
				c = i("./src/reddit/constants/zIndex.ts"),
				l = i("./src/reddit/controls/Dropdown/index.m.less"),
				a = i.n(l);
			class d extends o.a.Component {
				componentDidMount() {
					this.props.onDropdownMounted && this.props.onDropdownMounted(), this.props.noFocus || this.ref && this.ref.focus({
						preventScroll: this.props.isOverlay
					})
				}
				componentWillUnmount() {
					Object(s.a)(this.props.tooltipId)
				}
				render() {
					const e = this.props,
						t = {};
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? c.d + 1 : c.c)), o.a.createElement("div", {
						className: Object(n.a)(a.a.dropdown, e.className),
						id: this.props.id,
						ref: e => this.ref = e,
						role: "menu",
						style: {
							...t,
							...e.style
						},
						tabIndex: -1,
						onScroll: e.onScroll
					}, e.children)
				}
			}
		},
		"./src/reddit/controls/InternalLink/index.m.less": function(e, t, i) {
			e.exports = {
				disabledLink: "_1tQt2CUWT3M7NNSMoh_o_4"
			}
		},
		"./src/reddit/controls/InternalLink/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return u
			}));
			var r = i("./node_modules/react/index.js"),
				o = i.n(r),
				n = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				s = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/helpers/path/index.ts"),
				l = i("./src/reddit/controls/InternalLink/index.m.less"),
				a = i.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}

			function u({
				children: e,
				className: t,
				disabled: i,
				replace: r,
				to: l,
				...u
			}) {
				return i ? o.a.createElement("span", {
					className: Object(s.a)(a.a.disabledLink, t)
				}, e) : ("string" == typeof l && (l = Object(c.b)(l)), o.a.createElement(n.a, d({
					className: t,
					to: l
				}, u), e))
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return k
			})), i.d(t, "c", (function() {
				return j
			}));
			var r = i("./node_modules/lodash/omit.js"),
				o = i.n(r),
				n = i("./node_modules/query-string/index.js"),
				s = i.n(n),
				c = i("./node_modules/react/index.js"),
				l = i.n(c),
				a = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/reselect/es/index.js"),
				u = i("./src/lib/addQueryParams/index.ts");
			var f = (e, t) => t ? Object(u.a)(e, {
					user_id: t
				}) : e,
				_ = i("./src/lib/opener/index.ts"),
				p = i("./src/lib/redditId/index.ts"),
				m = i("./src/reddit/actions/post.ts"),
				b = i("./src/reddit/constants/adEvents.ts"),
				h = i("./src/reddit/helpers/getVendorMetadata.ts"),
				g = i("./src/reddit/helpers/pixels.ts"),
				v = i("./src/reddit/selectors/posts.ts"),
				O = i("./src/reddit/selectors/user.ts");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(d.a)(O.a, O.i, (e, {
					isSponsored: t,
					postId: i
				}) => t && i ? Object(v.b)(e, i) : null, v.F, (e, t, i, r) => ({
					allowClickTracking: e,
					basePixelMetadata: i,
					userId: t ? Object(p.a)(t.id) : null,
					post: r
				})),
				I = Object(a.b)(w, e => ({
					fireAdPixelsOfType: (t, i) => e(Object(m.x)(t, i)),
					recordClick: (t, i, r) => {
						const o = t.events.filter(({
							type: e,
							url: t
						}) => e === b.a.Click && Object(g.b)(t));
						Object(g.c)(o), e(Object(m.o)(String(i), {
							postId: t.id,
							vendorMetadata: r
						}))
					}
				})),
				x = (e, t, i, r) => {
					const o = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					r && t.outboundUrl && o && (e.href = f(t.outboundUrl, i))
				},
				k = (e, t, i) => {
					let r, o = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(i)) {
						o = Object(h.a)(e, t, b.a.Click);
						const {
							url: n,
							query: c
						} = s.a.parseUrl(i);
						r = s.a.stringifyUrl({
							url: n,
							query: {
								...c,
								...o
							}
						})
					} else r = i;
					return {
						url: r,
						metadata: o
					}
				},
				j = (e, t, i) => {
					const r = k(t, i, e.href);
					return e.href = r.url, r.metadata
				},
				E = ({
					isSponsored: e,
					source: t
				}) => !!(e && (null == t ? void 0 : t.outboundUrl)),
				S = I(e => {
					const t = Object(c.useRef)(null),
						{
							allowClickTracking: i,
							basePixelMetadata: r,
							fireAdPixelsOfType: n,
							href: s,
							isSponsored: a,
							post: d,
							postId: u,
							recordClick: f,
							source: p,
							userId: m
						} = e;
					let h = o()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "recordClick", "source", "userId"]);
					const g = p && p.outboundUrl && a ? p.outboundUrl : s;
					return h = {
						...h,
						href: g,
						rel: _.a,
						target: _.c.BLANK
					}, !p || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: i
						} = e;
						return !(!t || !i) && (t > i + 3e5 || t < i - 36e5)
					})(p) ? l.a.createElement("a", h) : l.a.createElement("a", y({}, h, {
						onMouseDown: o => {
							if (!E(e)) return !(1 !== o.button && 2 !== o.button && !o.ctrlKey) || void x(o.currentTarget, p, m, i);
							t.current = j(o.currentTarget, u, r)
						},
						onClick: () => {
							d && (E(e) && f(d, b.a.Click, t.current), n(d, b.a.Click))
						},
						onMouseLeave: e => {
							a || ((e, t) => {
								e.href = t
							})(e.currentTarget, g)
						},
						onTouchStart: e => x(e.currentTarget, p, m, i)
					}))
				});
			t.b = S
		},
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/history/esm/history.js"), i("./src/reddit/actions/platform.ts");
			var r = i("./src/config.ts");
			t.a = (e, t) => {
				const i = t.platform.currentPage && t.platform.currentPage.url;
				let o = `${r.a.accountManagerOrigin}/login/`;
				const n = window.location.origin;
				i && (o += `?dest=${encodeURIComponent(`${n}${i}`)}`), window.location.href = o
			}
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "a", (function() {
				return s
			}));
			var r = i("./node_modules/polished/dist/polished.es.js"),
				o = i("./src/reddit/models/NewStructuredStyles/index.ts");
			const n = e => Object(r.b)(e) < .6;

			function s(e, t = o.a.bodyText, i = o.b.bodyText) {
				return n(e) ? i : t
			}
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return h
			})), i.d(t, "c", (function() {
				return g
			})), i.d(t, "x", (function() {
				return v
			})), i.d(t, "w", (function() {
				return O
			})), i.d(t, "s", (function() {
				return y
			})), i.d(t, "p", (function() {
				return w
			})), i.d(t, "q", (function() {
				return I
			})), i.d(t, "z", (function() {
				return x
			})), i.d(t, "r", (function() {
				return k
			})), i.d(t, "i", (function() {
				return j
			})), i.d(t, "u", (function() {
				return E
			})), i.d(t, "t", (function() {
				return S
			})), i.d(t, "o", (function() {
				return C
			})), i.d(t, "n", (function() {
				return P
			})), i.d(t, "y", (function() {
				return N
			})), i.d(t, "k", (function() {
				return T
			})), i.d(t, "j", (function() {
				return L
			})), i.d(t, "l", (function() {
				return U
			})), i.d(t, "d", (function() {
				return R
			})), i.d(t, "m", (function() {
				return M
			})), i.d(t, "h", (function() {
				return B
			})), i.d(t, "e", (function() {
				return q
			})), i.d(t, "f", (function() {
				return F
			})), i.d(t, "b", (function() {
				return W
			})), i.d(t, "v", (function() {
				return K
			})), i.d(t, "g", (function() {
				return z
			}));
			var r = i("./src/reddit/constants/tracking.ts"),
				o = i("./src/reddit/helpers/correlationIdTracker.ts"),
				n = i("./src/reddit/helpers/media/index.ts"),
				s = i("./src/reddit/models/PostCreationForm/index.ts"),
				c = i("./src/reddit/models/PostDraft/index.ts"),
				l = i("./src/reddit/selectors/postDraft.ts"),
				a = i("./src/reddit/selectors/telemetry.ts"),
				d = i("./src/reddit/selectors/user.ts"),
				u = i("./src/telemetry/index.ts"),
				f = i("./src/telemetry/models/PostComposer.ts"),
				_ = i("./src/telemetry/models/PostDraft.ts");
			const p = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				m = e => ({
					source: "post_composer",
					action: r.c.CLICK,
					...a.defaults(e),
					screen: a.screen(e),
					correlationId: Object(o.c)(o.a.PostComposer)
				}),
				b = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === s.h.MARKDOWN ? "markdown" : "rte"
				},
				h = e => {
					Object(u.a)({
						noun: "cancel",
						...m(e)
					})
				},
				g = e => {
					Object(u.a)({
						noun: "discard",
						...m(e)
					})
				},
				v = e => {
					Object(u.a)({
						noun: "subreddit_choice",
						subreddit: a.subreddit(e),
						...m(e),
						actionInfo: a.chatPostActionInfo(e)
					})
				},
				O = e => {
					Object(u.a)({
						noun: "subreddit_selector",
						...m(e)
					})
				},
				y = (e, t) => {
					Object(u.a)({
						noun: "post_type_selector",
						postComposer: {
							type: p[t]
						},
						...m(e)
					})
				},
				w = () => e => ({
					noun: "add_option",
					...m(e)
				}),
				I = () => e => ({
					noun: "voting_length",
					...m(e)
				}),
				x = (e, t, i) => {
					"image_upload" === t || "video_upload" === t ? Object(u.a)({
						noun: t,
						...m(e)
					}) : Object(u.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: i ? "on" : "off"
						},
						...m(e)
					})
				},
				k = (e, t, i) => {
					Object(u.a)({
						noun: "post",
						subreddit: a.subreddit(e),
						postComposer: {
							type: t,
							...b(e, t)
						},
						post: i ? a.post(e, i) : null,
						...m(e)
					})
				},
				j = (e, t) => {
					const i = t === s.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(u.a)({
						noun: i,
						...m(e)
					})
				},
				E = (e, t) => {
					Object(u.a)({
						noun: "save",
						subreddit: a.subreddit(e),
						postComposer: {
							type: t,
							...b(e, t)
						},
						...m(e)
					})
				},
				S = (e, t) => {
					const i = e.uploads[t];
					i.error && Object(u.a)({
						...m(e),
						noun: "media",
						action: r.c.REJECT,
						actionInfo: {
							...a.actionInfo(e),
							reason: JSON.stringify(i.error)
						}
					})
				},
				C = (e, t) => {
					t.forEach(t => {
						const i = Object(n.f)(t.type);
						i && Object(u.a)({
							...m(e),
							action: r.c.DRAG,
							noun: i
						})
					})
				},
				P = (e, t, i) => {
					Object(u.a)({
						...m(e),
						noun: "input",
						postComposer: {
							inputType: i
						},
						action: t,
						actionInfo: a.chatPostActionInfo(e)
					})
				},
				N = (e, t, i) => {
					Object(u.a)({
						...m(e),
						noun: i,
						action: Object(f.getToggleAction)(t),
						actionInfo: a.chatPostActionInfo(e)
					})
				},
				T = e => D("input", e),
				L = () => D("add"),
				U = () => D("remove"),
				D = (e, t) => i => ({
					...m(i),
					noun: e,
					postComposer: {
						inputType: t,
						type: p.imageOnly
					},
					action: r.c.CLICK
				}),
				R = e => {
					Object(u.a)({
						...m(e),
						noun: "hide_oc_description",
						action: r.c.CLICK
					})
				},
				A = (e, t) => {
					if (t) {
						const i = a.subredditById(e, t);
						if (i) return {
							subreddit: i
						};
						const r = a.profileById(e, t);
						if (r) return {
							profile: r
						}
					}
				},
				M = (e, t) => {
					const {
						draftId: i,
						destSubreddit: r
					} = t, o = Object(d.i)(e), n = Object(l.d)(e, {
						draftId: i
					}), s = {
						authorId: o ? o.id : void 0,
						createdTimestamp: n ? n.created : void 0,
						id: i || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case c.b.Link:
							s.type = _.DraftType.Link, s.urlLength = t.body.length;
							break;
						case c.b.Markdown:
							s.type = _.DraftType.Self, s.bodyTextLength = t.body.length;
							break;
						case c.b.RichText:
							s.type = _.DraftType.RichText, t.documentStats && (s.bodyTextLength = t.documentStats.textLength, s.numberRteImages = t.documentStats.rteImagesCount, s.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case c.b.Image:
							s.type = _.DraftType.Image;
							break;
						case c.b.Video:
							s.type = _.DraftType.Video
					}
					return {
						postDraft: s,
						...A(e, r.id)
					}
				},
				H = (e, t) => {
					const i = Object(d.i)(e),
						r = {
							authorId: i ? i.id : void 0,
							createdTimestamp: t.created,
							id: t.id,
							nsfw: t.isNSFW,
							originalContent: t.isOriginalContent,
							spoiler: t.isSpoiler,
							titleLength: t.title.length
						};
					switch (t.kind) {
						case c.b.Link:
							r.type = _.DraftType.Link, r.urlLength = (t.body || "").length;
							break;
						case c.b.Markdown:
							r.type = _.DraftType.Self, r.bodyTextLength = (t.body || "").length;
							break;
						case c.b.RichText:
							r.type = _.DraftType.RichText
					}
					return {
						postDraft: r,
						...A(e, t.subredditId)
					}
				},
				B = (e, t) => {
					Object(u.a)({
						noun: "draft_load",
						...m(e),
						...M(e, t)
					})
				},
				q = (e, t) => {
					Object(u.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...m(e),
						...M(e, t)
					})
				},
				F = (e, t) => {
					Object(u.a)({
						noun: "draft_delete",
						...m(e),
						...H(e, t)
					})
				},
				W = e => {
					Object(u.a)({
						...m(e),
						noun: "social_connect_link",
						action: r.c.CLICK
					})
				},
				K = (e, t) => {
					Object(u.a)({
						...m(e),
						noun: "twitter_share_checkbox",
						action: Object(f.getToggleAction)(t)
					})
				},
				z = (e, t, i) => {
					Object(u.a)({
						...m(e),
						...M(e, t),
						noun: "draft_share",
						action: i ? r.c.ENABLE : r.c.DISABLE
					})
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, i) {
			"use strict";
			i.d(t, "k", (function() {
				return x
			})), i.d(t, "f", (function() {
				return j
			})), i.d(t, "q", (function() {
				return E
			})), i.d(t, "r", (function() {
				return S
			})), i.d(t, "o", (function() {
				return C
			})), i.d(t, "s", (function() {
				return P
			})), i.d(t, "c", (function() {
				return N
			})), i.d(t, "l", (function() {
				return T
			})), i.d(t, "p", (function() {
				return L
			})), i.d(t, "i", (function() {
				return U
			})), i.d(t, "j", (function() {
				return D
			})), i.d(t, "g", (function() {
				return R
			})), i.d(t, "b", (function() {
				return M
			})), i.d(t, "a", (function() {
				return H
			})), i.d(t, "n", (function() {
				return B
			})), i.d(t, "m", (function() {
				return q
			})), i.d(t, "t", (function() {
				return K
			})), i.d(t, "w", (function() {
				return z
			})), i.d(t, "e", (function() {
				return V
			})), i.d(t, "d", (function() {
				return X
			})), i.d(t, "u", (function() {
				return Y
			})), i.d(t, "v", (function() {
				return Q
			})), i.d(t, "h", (function() {
				return $
			}));
			var r = i("./node_modules/lodash/pick.js"),
				o = i.n(r),
				n = i("./src/lib/constants/index.ts"),
				s = i("./src/lib/makePostDraftPageKey/index.ts"),
				c = i("./src/reddit/constants/parameters.ts"),
				l = i("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = i("./src/reddit/helpers/routeKey/index.ts"),
				d = i("./src/reddit/helpers/trackers/postComposer.ts"),
				u = i("./src/reddit/helpers/trackers/profileSettings.ts"),
				f = i("./src/reddit/models/Comment/index.ts"),
				_ = i("./src/reddit/models/Post/index.ts"),
				p = i("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				m = i("./src/reddit/selectors/profile.ts"),
				b = i("./src/reddit/selectors/subreddit.ts"),
				h = i("./src/lib/makePostCreationPageKey/index.ts"),
				g = i("./src/lib/makeSearchKey/index.ts"),
				v = i("./src/reddit/helpers/correlationIdTracker.ts"),
				O = i("./src/reddit/helpers/trackers/searchResults.ts"),
				y = i("./src/reddit/selectors/postDraft.ts"),
				w = i("./src/reddit/selectors/telemetry.ts"),
				I = i("./src/telemetry/index.ts");
			const x = (e, t, i, r, d, p) => {
					const {
						route: m
					} = e, {
						name: b
					} = m.meta;
					if (!b) return;
					const v = t.platform.currentPage;
					switch (b) {
						case n.Eb.COMMENTS: {
							const {
								partialCommentId: o,
								partialPostId: n
							} = e.match.params, s = Object(_.s)(n), c = Object(a.a)(e, t, t.posts.models[s]);
							if (!c) return;
							const d = o && Object(f.g)(o),
								{
									sortToUse: u
								} = Object(l.a)(t, s),
								p = !0;
							Object(I.a)(N(c, s, d, i, r, u, p)(t));
							break
						}
						case n.Eb.INDEX:
						case n.Eb.LISTING:
						case n.Eb.MULTIREDDIT:
						case n.Eb.SUBREDDIT: {
							const o = Object(a.c)(e, t);
							if (!o.listingKey) return;
							const {
								params: s,
								queryParams: c
							} = e.match, {
								sort: l = (o.sort ? o.sort : n.P.HOT)
							} = s, d = c.t;
							Object(I.a)(j(o.listingKey, l, i, r, d)(t));
							break
						}
						case n.Eb.TOPIC: {
							const o = Object(a.c)(e, t);
							if (!o.listingKey) return;
							const {
								params: s
							} = e.match, c = o.sort ? o.sort : n.Q, {
								sort: l = c
							} = s;
							Object(I.a)(j(o.listingKey, l, i, r)(t));
							break
						}
						case n.Eb.PROFILE_OVERVIEW: {
							const o = Object(a.d)(e, t);
							if (!o) return;
							const {
								params: s,
								queryParams: c
							} = e.match, {
								sort: l = n.wb
							} = s, d = c.t;
							Object(I.a)(E(o, l, i, r, d)(t));
							break
						}
						case n.Eb.PROFILE_POSTS: {
							const o = Object(a.d)(e, t);
							if (!o) return;
							const {
								queryParams: s
							} = e.match, {
								sort: c = n.wb,
								t: l = n.xb
							} = s;
							Object(I.a)(S(o, c, i, r, l)(t));
							break
						}
						case n.Eb.PROFILE_COMMENTS: {
							const o = Object(a.d)(e, t);
							if (!o) return;
							const {
								queryParams: s
							} = e.match, {
								sort: c = n.wb,
								t: l = n.xb
							} = s;
							Object(I.a)(C(o, c, i, r, l)(t));
							break
						}
						case n.Eb.PROFILE_PRIVATE: {
							const o = Object(a.d)(e, t);
							if (!o) return;
							Object(I.a)(P(o)(r, i)(t));
							break
						}
						case n.Eb.PROFILE_MODERATION:
							p && L(t, !0);
							break;
						case n.Eb.SETTINGS: {
							const o = e;
							Object(I.a)(W(i, r)(t)), o.match.params.page === n.Rb.Profile && Object(u.j)(t);
							break
						}
						case n.Eb.POST_CREATION:
							if (p && d) {
								const e = Object(h.a)(d);
								Object(I.a)(T(e, i, r)(t))
							}
							break;
						case n.Eb.POST_DRAFT: {
							const {
								draftId: o
							} = e.match.params, n = Object(s.a)(e.match.params);
							if (!n) return;
							A(t, n, o, i, r);
							break
						}
						case n.Eb.SUBREDDIT_WIKI:
							Object(I.a)(G(i, r)(t));
							break;
						case n.Eb.COINS:
							Object(I.a)(M(i, r)(t)), Object(I.a)(H()(t));
							break;
						case n.Eb.PREMIUM:
							Object(I.a)(B(i, r)(t)), Object(I.a)(q()(t));
							break;
						case n.Eb.APPEAL:
							Object(I.a)(F(i, r)(t));
							break;
						case n.Eb.INBOX_PAGES:
							p && R(t);
							break;
						case n.Eb.MODERATION_PAGES:
							p && U(t, !0, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case n.Eb.COLLECTION_COMMENTS:
							p && Q(t, !0);
							break;
						case n.Eb.MODQUEUE_PAGES:
							p && D(t, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case n.Eb.SUBREDDIT_LEADERBOARD:
							p && Object(I.a)(V()(t));
							break;
						case n.Eb.SEARCH_RESULTS:
							if (p) {
								const n = Object(a.e)(e);
								if (!n) return;
								Object(I.a)(Y(n, Object(g.c)(o()(v && v.queryParams || {}, c.t)), i, r, v)(t))
							}
							break;
						case n.Eb.PUBLIC_ACCESS_NETWORK:
							p && Object(I.a)(K()(t));
							break;
						case n.Eb.GEOTAGGING:
							p && Object(I.a)(X()(t));
							break;
						case n.Eb.SUBREDDIT_CREATION:
							p && Object(I.a)(z()(t));
							break;
						case n.Eb.MOD_LISTING:
							p && $(t, !0)
					}
				},
				k = e => ({
					...w.defaults(e),
					userPreferences: w.userPreferences(e)
				}),
				j = (e, t, i, r, o, n) => s => {
					const {
						api: c
					} = s.listings.postOrder, l = !c.error[e] && !c.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...k(s),
						actionInfo: w.actionInfo(s, {
							success: l
						}),
						customFeed: w.customFeed(s),
						listing: w.listing(s, e, {
							sort: t,
							sortTime: o
						}),
						subreddit: w.subreddit(s),
						timer: w.timer(i, r),
						userSubreddit: w.userSubreddit(s),
						adblock: w.adblock(s),
						postFlair: {
							title: n
						}
					}
				},
				E = (e, t, i, r, o) => n => {
					const s = w.listing(n, e);
					s && (s.sort = t, o && (s.sortTime = o));
					const {
						api: c
					} = n.listings.postOrder, l = !c.error[e] && !c.pending[e];
					return {
						listing: s,
						source: "global",
						action: "view",
						noun: "screen",
						...k(n),
						actionInfo: w.actionInfo(n, {
							success: l
						}),
						profile: w.profile(n),
						snoovatar: w.snoovatar(n),
						subreddit: w.subreddit(n),
						timer: w.timer(i, r),
						userSubreddit: w.userSubreddit(n),
						adblock: w.adblock(n)
					}
				},
				S = (e, t, i, r, o) => n => {
					const s = w.listing(n, e);
					s && (s.sort = t, o && (s.sortTime = o));
					const {
						api: c
					} = n.listings.postOrder, l = !c.error[e] && !c.pending[e];
					return {
						listing: s,
						source: "global",
						action: "view",
						noun: "screen",
						...k(n),
						actionInfo: w.actionInfo(n, {
							success: l
						}),
						profile: w.profile(n),
						subreddit: w.subreddit(n),
						timer: w.timer(i, r),
						userSubreddit: w.userSubreddit(n),
						adblock: w.adblock(n)
					}
				},
				C = (e, t, i, r, o) => n => {
					const s = w.profileComments(n, e);
					s && (s.sort = t, o && (s.sortTime = o));
					const {
						api: c
					} = n.profileCommentsPage, l = !c.error[e] && !c.pending[e];
					return {
						listing: s,
						source: "global",
						action: "view",
						noun: "screen",
						...k(n),
						actionInfo: w.actionInfo(n, {
							success: l
						}),
						profile: w.profile(n),
						subreddit: w.subreddit(n),
						timer: w.timer(i, r),
						userSubreddit: w.userSubreddit(n),
						adblock: w.adblock(n)
					}
				},
				P = e => (t, i) => r => {
					const o = !r.profilePrivatePage.api.error[e] && !r.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...k(r),
						actionInfo: w.actionInfo(r, {
							success: o
						}),
						profile: w.profile(r),
						subreddit: w.subreddit(r),
						timer: w.timer(i, t),
						userSubreddit: w.userSubreddit(r),
						adblock: w.adblock(r)
					}
				},
				N = (e, t, i, r, o, n, s) => c => {
					const {
						api: l
					} = c.pages.comments, a = !l.error[e] && !l.pending[e], d = Object(p.c)(c, {
						postId: t,
						isForceSelected: s
					}), u = {
						source: "global",
						action: "view",
						noun: "screen",
						...k(c),
						actionInfo: w.actionInfo(c, {
							success: a,
							reason: d || void 0
						}),
						post: w.post(c, t),
						profile: w.profile(c),
						subreddit: w.subreddit(c),
						timer: w.timer(r, o),
						userSubreddit: w.userSubreddit(c),
						adblock: w.adblock(c),
						postEvent: w.postEventI13nSelector(c, {
							postId: t
						}),
						postCollection: w.postCollectionI13nSelector(c, {
							postId: t
						}),
						listing: w.listing(c, void 0, {
							sort: n
						})
					};
					return i && (u.comment = w.comment(c, i)), u
				},
				T = (e, t, i) => r => {
					const o = r.creations.api.page.fetched[e],
						n = r.platform.currentPage ? r.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...k(r),
						actionInfo: w.actionInfo(r, {
							success: o
						}),
						post: n ? w.post(r, n) : void 0,
						subreddit: w.subreddit(r),
						timer: w.timer(t, i),
						userSubreddit: w.userSubreddit(r),
						adblock: w.adblock(r)
					}
				},
				L = (e, t) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: w.actionInfo(e, {
							success: t
						})
					})
				},
				U = (e, t, i, r) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: w.actionInfo(e, {
							success: t
						}),
						profile: w.profileById(e, Object(m.m)(e, r)),
						subreddit: w.subredditById(e, Object(b.F)(e, i)),
						userSubreddit: w.userSubreddit(e),
						adblock: w.adblock(e)
					})
				},
				D = (e, t, i) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						profile: w.profileById(e, Object(m.m)(e, i)),
						subreddit: w.subredditById(e, Object(b.F)(e, t)),
						userSubreddit: w.userSubreddit(e),
						adblock: w.adblock(e)
					})
				},
				R = e => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: w.actionInfo(e)
					})
				},
				A = (e, t, i, r, o) => {
					const n = e.creations.api.page.pending[t],
						s = !e.creations.api.page.error[t] && !n && !!i,
						c = Object(y.h)(e, i);
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: w.actionInfo(e, {
							success: s
						}),
						subreddit: w.subreddit(e),
						timer: w.timer(r, o),
						userSubreddit: w.userSubreddit(e),
						adblock: w.adblock(e),
						...c ? Object(d.m)(e, c) : {}
					})
				},
				M = (e, t) => i => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(v.c)(v.a.GoldPayment),
					...k(i),
					timer: w.timer(e, t),
					adblock: w.adblock(i)
				}),
				H = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				B = (e, t) => i => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(v.c)(v.a.GoldPayment),
					...k(i),
					timer: w.timer(e, t),
					adblock: w.adblock(i)
				}),
				q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				F = (e, t) => i => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...k(i),
					timer: w.timer(e, t)
				}),
				W = (e, t) => i => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(i),
					timer: w.timer(e, t)
				}),
				K = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: w.subreddit(e),
					...k(e)
				}),
				z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				V = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...k(e)
				}),
				G = (e, t) => i => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(i),
					customFeed: w.customFeed(i),
					subreddit: w.subreddit(i),
					timer: w.timer(e, t),
					userSubreddit: w.userSubreddit(i),
					adblock: w.adblock(i)
				}),
				X = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				Y = (e, t, i, r, o, s) => c => {
					let l = !0;
					if (t.type.indexOf(n.Qb.Posts) > -1) {
						const {
							api: t
						} = c.listings.listingOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(n.Qb.Subreddits) > -1 || t.type.indexOf(n.Qb.Users) > -1) {
						const {
							api: t
						} = c.listings.postOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					const a = w.paneName(c, o),
						d = w.structureType(c, o),
						u = c.platform.currentPage && c.platform.currentPage.urlParams && c.platform.currentPage.urlParams.subredditName ? w.subredditByName(c, c.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						...O.c(c, t),
						source: "global",
						action: "view",
						noun: "screen",
						...w.defaults(c),
						actionInfo: w.actionInfo(c, {
							success: l,
							paneName: a
						}),
						timer: w.timer(i, r),
						search: {
							...w.search(c, t, !0, o || void 0),
							...!!s && {
								originElement: s
							},
							queryId: Object(v.c)(v.a.SearchResults),
							structureType: d,
							subredditId: t.restrict_sr && u && u.id ? u.id : void 0,
							subredditName: t.restrict_sr && u && u.name ? u.name : void 0
						},
						...!!s && {
							correlationId: Object(v.c)(v.a.SearchResults)
						},
						userPreferences: {
							...w.userPreferences(c),
							hideNsfw: !c.user.prefs.over18
						}
					}
				},
				Q = (e, t) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: w.actionInfo(e, {
							success: t
						})
					})
				},
				$ = (e, t) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: w.actionInfo(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return u
			})), i.d(t, "q", (function() {
				return f
			})), i.d(t, "p", (function() {
				return _
			})), i.d(t, "r", (function() {
				return p
			})), i.d(t, "g", (function() {
				return m
			})), i.d(t, "t", (function() {
				return b
			})), i.d(t, "s", (function() {
				return h
			})), i.d(t, "u", (function() {
				return g
			})), i.d(t, "w", (function() {
				return v
			})), i.d(t, "f", (function() {
				return y
			})), i.d(t, "a", (function() {
				return w
			})), i.d(t, "h", (function() {
				return I
			})), i.d(t, "x", (function() {
				return x
			})), i.d(t, "v", (function() {
				return k
			})), i.d(t, "i", (function() {
				return j
			})), i.d(t, "k", (function() {
				return E
			})), i.d(t, "e", (function() {
				return S
			})), i.d(t, "j", (function() {
				return C
			})), i.d(t, "d", (function() {
				return P
			})), i.d(t, "o", (function() {
				return N
			})), i.d(t, "n", (function() {
				return T
			})), i.d(t, "l", (function() {
				return L
			})), i.d(t, "m", (function() {
				return U
			})), i.d(t, "b", (function() {
				return D
			}));
			var r = i("./src/lib/constants/index.ts"),
				o = i("./src/reddit/constants/posts.ts"),
				n = i("./src/reddit/constants/tracking.ts"),
				s = i("./src/reddit/helpers/correlationIdTracker.ts"),
				c = i("./src/reddit/selectors/posts.ts"),
				l = i("./src/reddit/selectors/telemetry.ts");
			const a = "search",
				d = "search_results_best",
				u = (e, t) => {
					const i = l.subreddit(e);
					return {
						screen: l.screen(e),
						subreddit: i && t && t.restrict_sr ? i : null
					}
				},
				f = (e, t) => i => {
					const r = t;
					return r.structureType = "related", {
						action: e,
						correlationId: Object(s.c)(s.a.SearchResults),
						noun: "related_search",
						source: a,
						search: l.search(i, r),
						...u(i)
					}
				},
				_ = (e, t, i, r) => o => ({
					...u(o, i),
					source: a,
					action: "click",
					noun: t,
					actionInfo: l.actionInfo(o, r ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: r ? l.discoveryUnit(r) : null,
					search: l.search(o, i),
					post: l.post(o, e),
					media: l.media(o, e)
				}),
				p = (e, t, i, r, o) => n => ({
					...S(n, e, t, o, r, i),
					noun: "ad"
				}),
				m = (e, t, i) => o => {
					let n = !0;
					if (t.type.indexOf(r.Qb.Posts) > -1) {
						const {
							api: t
						} = o.listings.listingOrder;
						n = n && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(r.Qb.Subreddits) > -1 || t.type.indexOf(r.Qb.Users) > -1) {
						const {
							api: t
						} = o.listings.postOrder;
						n = n && !t.error[e] && !t.pending[e]
					}
					return {
						...u(o, t),
						source: a,
						action: "view",
						noun: "search_results_post",
						actionInfo: l.actionInfo(o, {
							success: n,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: l.discoveryUnit(i),
						search: l.search(o, t)
					}
				},
				b = (e, t) => i => ({
					action: "view",
					actionInfo: l.actionInfo(i),
					metaSearch: l.metaSearch(t),
					noun: e,
					screen: l.screen(i),
					search: l.smartSearch(i, t),
					source: a
				}),
				h = (e, t) => i => ({
					action: "click",
					actionInfo: l.actionInfo(i),
					noun: e,
					metaSearch: l.metaSearch(t),
					screen: l.screen(i),
					search: l.smartSearch(i, t),
					source: a
				}),
				g = (e, t, i) => r => ({
					source: a,
					action: "click",
					noun: l.SearchDropdownNouns.Recent,
					actionInfo: l.actionInfo(r, {
						paneName: "subreddit_dropdown",
						position: i + 1
					}),
					search: {
						query: e,
						originPageType: r.platform.currentPage ? l.getPageTypeFromCurrentPage(r.platform.currentPage) : void 0,
						queryId: Object(s.c)(s.a.SearchResults)
					},
					...O(r, t)
				}),
				v = (e, t, i, r) => o => {
					const n = r.filter(e => e.id);
					return {
						source: a,
						action: "click",
						noun: l.SearchDropdownNouns.Typeahead,
						actionInfo: l.actionInfo(o, {
							position: i + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: o.platform.currentPage ? l.getPageTypeFromCurrentPage(o.platform.currentPage) : void 0,
							queryId: Object(s.c)(s.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: n.map(e => e.id),
							numberSubreddits: n.length
						},
						...O(o, t)
					}
				},
				O = (e, t) => {
					const i = t.isSubreddit && t.id ? l.subredditForSearch(e, t.id) : void 0,
						r = t.isProfile && t.id ? l.profileForSearch(e, t.id) : void 0,
						o = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? i || o : void 0,
						profile: t.isProfile ? r || o : void 0
					}
				},
				y = (e, t, i) => r => ({
					action: t,
					actionInfo: l.actionInfo(r),
					noun: e,
					screen: l.screen(r),
					search: l.search(r, i),
					source: d
				});
			var w;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(w || (w = {}));
			const I = (e, t) => i => ({
					...u(i, t),
					source: a,
					action: "click",
					noun: e,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(i),
					search: l.search(i, t)
				}),
				x = (e, t) => i => ({
					...u(i, t),
					source: a,
					action: "click",
					noun: e,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(i),
					search: l.search(i, t)
				}),
				k = (e, t) => i => ({
					action: "click",
					correlationId: Object(s.c)(s.a.SearchResults),
					noun: e ? r.Pb.ToSubreddit : r.Pb.ToGlobal,
					search: l.search(i, t),
					source: a
				}),
				j = (e, t, i, r) => o => ({
					...u(o, i),
					source: a,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(o, {
						relativePosition: l.getRelativePostOrder(o, t, e)
					}),
					search: {
						...l.search(o, i),
						...!!r && {
							originElement: r
						}
					},
					post: l.post(o, t)
				}),
				E = (e, t, i, r, o) => n => S(n, e, t, i, r, o),
				S = (e, t, i, r, o, c) => {
					const d = l.paneName(e, r),
						u = l.postRelativePosition(e, t, o, c),
						f = l.amountOfElementsBeforePost(e, i, o, c, d),
						_ = null !== u ? f + u : null,
						p = l.structureType(e, r),
						m = {
							...l.search(e, i, !0, r || void 0),
							structureType: p,
							queryId: Object(s.c)(s.a.SearchResults)
						};
					return {
						source: a,
						action: n.c.CLICK,
						noun: "post",
						actionInfo: r ? {
							pageType: l.getPageTypeFromCurrentPage(r),
							paneName: d,
							position: _,
							relativePosition: u
						} : l.actionInfo(e, {
							paneName: d,
							position: _,
							relativePosition: u
						}),
						search: m,
						post: l.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: c ? l.discoveryUnit(c) : null
					}
				},
				C = (e, t, i, r, o, n) => s => P(s, e, t, i, r, o, n),
				P = (e, t, i, r, d, u, f) => {
					if (!r) {
						r = Object(c.F)(e, {
							postId: u
						}).belongsTo
					}
					const _ = l.paneName(e, i);
					let p, m;
					if (u) {
						p = l.postRelativePosition(e, u, d, f);
						const i = l.amountOfElementsBeforePost(e, t, d, f, _);
						m = null !== p ? i + p : null
					} else {
						p = l.communityRelativePosition(e, r.id, d, f);
						const t = l.amountOfElementsBeforeCommunity(e, d, f);
						m = null !== p ? t + p : null
					}
					const b = l.structureType(e, i),
						h = {
							...l.search(e, t, !0, i || void 0),
							structureType: b,
							queryId: Object(s.c)(s.a.SearchResults)
						};
					return {
						source: a,
						action: n.c.CLICK,
						noun: r.type,
						search: h,
						subreddit: r.type === o.a.SUBREDDIT ? l.subredditForSearch(e, r.id) : void 0,
						profile: r.type === o.a.PROFILE ? l.profileForSearch(e, r.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: f ? l.discoveryUnit(f) : null,
						actionInfo: i ? {
							pageType: l.getPageTypeFromCurrentPage(i),
							paneName: _,
							position: m,
							relativePosition: p
						} : l.actionInfo(e, {
							paneName: _,
							position: m,
							relativePosition: p
						}),
						post: u ? l.post(e, u) : void 0
					}
				},
				N = (e, t) => i => ({
					...u(i, e),
					source: a,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(i),
					search: {
						...l.search(i, e),
						...!!t && {
							originElement: t
						}
					},
					subreddit: l.subreddit(i)
				}),
				T = (e, t, i, r, o) => s => ({
					...S(s, t, i, r, e, o),
					action: n.c.VIEW
				}),
				L = (e, t, i, r) => o => ({
					...u(o, i),
					source: a,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(o, {
						relativePosition: l.getRelativePostOrder(o, t, e),
						position: l.getAbsoluteOrder(o, t, e)
					}),
					search: {
						...l.search(o, i),
						...!!r && {
							originElement: r
						}
					},
					post: l.post(o, t)
				}),
				U = (e, t, i) => r => ({
					...u(r),
					source: a,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(r),
					search: {
						...l.search(r, t),
						...!!i && {
							originElement: i
						}
					},
					[e]: l[e](r)
				}),
				D = (e, t) => i => ({
					...u(i, t),
					source: a,
					action: e,
					noun: "covid_banner",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(i),
					search: l.search(i, t)
				})
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js");
			t.a = function(e, t, i) {
				Object(r.useEffect)(() => {
					const r = e && e.current;
					if (!r || "undefined" == typeof IntersectionObserver) return;
					const o = new IntersectionObserver(t, i);
					return o.observe(r), () => {
						o.unobserve(r)
					}
				}, [e, t, i])
			}
		},
		"./src/reddit/icons/fonts/helpers.m.less": function(e, t, i) {
			e.exports = {
				TooltipDesc: "_37iEJpUpWXN00_fpZKHglg",
				tooltipDesc: "_37iEJpUpWXN00_fpZKHglg"
			}
		},
		"./src/reddit/icons/fonts/helpers.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return a
			})), i.d(t, "a", (function() {
				return d
			}));
			var r = i("./node_modules/react/index.js"),
				o = i.n(r),
				n = i("./src/reddit/icons/fonts/helpers.m.less"),
				s = i.n(n);
			const c = {
				activity: "activity",
				activity_fill: "activity_fill",
				add: "add",
				add_fill: "add_fill",
				add_media: "add_media",
				add_media_fill: "add_media_fill",
				add_to_feed: "add_to_feed",
				add_to_feed_fill: "add_to_feed_fill",
				admin: "admin",
				admin_fill: "admin_fill",
				all: "all",
				all_fill: "all_fill",
				appearance: "appearance",
				appearance_fill: "appearance_fill",
				approve: "approve",
				approve_fill: "approve_fill",
				archived: "archived",
				archived_fill: "archived_fill",
				aspect_ratio: "aspect_ratio",
				aspect_ratio_fill: "aspect_ratio_fill",
				aspect_rectangle: "aspect_rectangle",
				aspect_rectangle_fill: "aspect_rectangle_fill",
				attach: "attach",
				attach_fill: "attach_fill",
				audio: "audio",
				audio_fill: "audio_fill",
				author: "author",
				author_fill: "author_fill",
				avatar_style: "avatar_style",
				avatar_style_fill: "avatar_style_fill",
				award: "award",
				award_fill: "award_fill",
				back: "back",
				back_fill: "back_fill",
				ban: "ban",
				ban_fill: "ban_fill",
				best: "best",
				best_fill: "best_fill",
				bold: "bold",
				bold_fill: "bold_fill",
				bot: "bot",
				bot_fill: "bot_fill",
				bounce: "bounce",
				bounce_fill: "bounce_fill",
				browse: "browse",
				browse_fill: "browse_fill",
				browser: "browser",
				browser_fill: "browser_fill",
				cake: "cake",
				cake_fill: "cake_fill",
				camera: "camera",
				camera_fill: "camera_fill",
				caret_down: "caret_down",
				caret_down_fill: "caret_down_fill",
				caret_left: "caret_left",
				caret_left_fill: "caret_left_fill",
				caret_right: "caret_right",
				caret_right_fill: "caret_right_fill",
				caret_up: "caret_up",
				caret_up_fill: "caret_up_fill",
				chat: "chat",
				chat_fill: "chat_fill",
				chat_group: "chat_group",
				chat_group_fill: "chat_group_fill",
				chat_new: "chat_new",
				chat_new_fill: "chat_new_fill",
				checkbox: "checkbox",
				checkbox_dismiss: "checkbox_dismiss",
				checkbox_dismiss_fill: "checkbox_dismiss_fill",
				checkbox_fill: "checkbox_fill",
				checkmark: "checkmark",
				checkmark_fill: "checkmark_fill",
				chrome: "chrome",
				chrome_fill: "chrome_fill",
				clear: "clear",
				clear_fill: "clear_fill",
				close: "close",
				close_fill: "close_fill",
				closed_captioning: "closed_captioning",
				closed_captioning_fill: "closed_captioning_fill",
				code_block: "code_block",
				code_block_fill: "code_block_fill",
				code_inline: "code_inline",
				code_inline_fill: "code_inline_fill",
				coins: "coins",
				coins_fill: "coins_fill",
				coins_outline_color: "coins_outline_color",
				collapse: "collapse",
				collapse_fill: "collapse_fill",
				collection: "collection",
				collection_fill: "collection_fill",
				comment: "comment",
				comment_fill: "comment_fill",
				comments: "comments",
				comments_fill: "comments_fill",
				community: "community",
				community_fill: "community_fill",
				controversial: "controversial",
				controversial_fill: "controversial_fill",
				crop: "crop",
				crop_fill: "crop_fill",
				crosspost: "crosspost",
				crosspost_fill: "crosspost_fill",
				crowd_control: "crowd_control",
				crowd_control_fill: "crowd_control_fill",
				custom_feed: "custom_feed",
				custom_feed_fill: "custom_feed_fill",
				customize: "customize",
				customize_fill: "customize_fill",
				day: "day",
				day_fill: "day_fill",
				delete: "delete",
				delete_fill: "delete_fill",
				discover: "discover",
				discover_fill: "discover_fill",
				dismiss_all: "dismiss_all",
				dismiss_all_fill: "dismiss_all_fill",
				distinguish: "distinguish",
				distinguish_fill: "distinguish_fill",
				down: "down",
				down_fill: "down_fill",
				download: "download",
				download_fill: "download_fill",
				downvote: "downvote",
				downvote_fill: "downvote_fill",
				downvotes: "downvotes",
				downvotes_fill: "downvotes_fill",
				drag: "drag",
				duplicate: "duplicate",
				duplicate_fill: "duplicate_fill",
				edit: "edit",
				edit_fill: "edit_fill",
				effect: "effect",
				effect_fill: "effect_fill",
				embed: "embed",
				embed_fill: "embed_fill",
				emoji: "emoji",
				emoji_fill: "emoji_fill",
				expand: "expand",
				expand_fill: "expand_fill",
				external_link: "external_link",
				external_link_fill: "external_link_fill",
				feed_posts: "feed_posts",
				feed_posts_fill: "feed_posts_fill",
				feed_video: "feed_video",
				feed_video_fill: "feed_video_fill",
				filter: "filter",
				filter_fill: "filter_fill",
				format: "format",
				format_fill: "format_fill",
				forward: "forward",
				forward_fill: "forward_fill",
				gif_post: "gif_post",
				gif_post_fill: "gif_post_fill",
				heart: "heart",
				heart_fill: "heart_fill",
				help: "help",
				help_fill: "help_fill",
				hide: "hide",
				hide_fill: "hide_fill",
				history: "history",
				history_fill: "history_fill",
				home: "home",
				home_fill: "home_fill",
				hot: "hot",
				hot_fill: "hot_fill",
				icon_vault: "icon_vault",
				icon_vault_fill: "icon_vault_fill",
				ignore_reports: "ignore_reports",
				ignore_reports_fill: "ignore_reports_fill",
				image_post: "image_post",
				image_post_fill: "image_post_fill",
				info: "info",
				info_fill: "info_fill",
				italic: "italic",
				italic_fill: "italic_fill",
				join: "join",
				join_fill: "join_fill",
				joined: "joined",
				joined_fill: "joined_fill",
				jump_down: "jump_down",
				jump_down_fill: "jump_down_fill",
				jump_up: "jump_up",
				jump_up_fill: "jump_up_fill",
				karma: "karma",
				karma_fill: "karma_fill",
				keyboard: "keyboard",
				keyboard_fill: "keyboard_fill",
				kick: "kick",
				kick_fill: "kick_fill",
				leave: "leave",
				leave_fill: "leave_fill",
				left: "left",
				left_fill: "left_fill",
				link_post: "link_post",
				link_post_fill: "link_post_fill",
				list_bulleted: "list_bulleted",
				list_bulleted_fill: "list_bulleted_fill",
				list_numbered: "list_numbered",
				list_numbered_fill: "list_numbered_fill",
				live: "live",
				live_fill: "live_fill",
				load: "load",
				location: "location",
				location_fill: "location_fill",
				lock: "lock",
				lock_fill: "lock_fill",
				logout: "logout",
				logout_fill: "logout_fill",
				loop: "loop",
				loop_fill: "loop_fill",
				mark_read: "mark_read",
				mark_read_fill: "mark_read_fill",
				mask: "mask",
				mask_fill: "mask_fill",
				media_gallery: "media_gallery",
				media_gallery_fill: "media_gallery_fill",
				meme: "meme",
				meme_fill: "meme_fill",
				menu: "menu",
				menu_fill: "menu_fill",
				message: "message",
				message_fill: "message_fill",
				mod: "mod",
				mod_fill: "mod_fill",
				mod_mail: "mod_mail",
				mod_mail_fill: "mod_mail_fill",
				mod_mode: "mod_mode",
				mod_mode_fill: "mod_mode_fill",
				mod_mute: "mod_mute",
				mod_mute_fill: "mod_mute_fill",
				mod_overflow: "mod_overflow",
				mod_overflow_fill: "mod_overflow_fill",
				mod_queue: "mod_queue",
				mod_queue_fill: "mod_queue_fill",
				mod_unmute: "mod_unmute",
				mod_unmute_fill: "mod_unmute_fill",
				new: "new",
				new_fill: "new_fill",
				night: "night",
				night_fill: "night_fill",
				notification: "notification",
				notification_fill: "notification_fill",
				notification_frequent: "notification_frequent",
				notification_frequent_fill: "notification_frequent_fill",
				notification_off: "notification_off",
				notification_off_fill: "notification_off_fill",
				nsfw: "nsfw",
				nsfw_fill: "nsfw_fill",
				nsfw_language: "nsfw_language",
				nsfw_language_fill: "nsfw_language_fill",
				nsfw_violence: "nsfw_violence",
				nsfw_violence_fill: "nsfw_violence_fill",
				original: "original",
				original_fill: "original_fill",
				overflow_carat: "overflow_carat",
				overflow_carat_fill: "overflow_carat_fill",
				overflow_horizontal: "overflow_horizontal",
				overflow_vertical: "overflow_vertical",
				pause: "pause",
				pause_fill: "pause_fill",
				payment: "payment",
				payment_fill: "payment_fill",
				pending_posts: "pending_posts",
				pending_posts_fill: "pending_posts_fill",
				pin: "pin",
				pin_fill: "pin_fill",
				play: "play",
				play_fill: "play_fill",
				poll_post: "poll_post",
				poll_post_fill: "poll_post_fill",
				popular: "popular",
				popular_fill: "popular_fill",
				powerup: "powerup",
				powerup_color_outline: "powerup_color_outline",
				powerup_fill: "powerup_fill",
				powerup_fill_color: "powerup_fill_color",
				premium: "premium",
				premium_fill: "premium_fill",
				privacy: "privacy",
				privacy_fill: "privacy_fill",
				profile: "profile",
				profile_fill: "profile_fill",
				quarantined: "quarantined",
				quarantined_fill: "quarantined_fill",
				quote: "quote",
				quote_fill: "quote_fill",
				r_slash: "r_slash",
				r_slash_fill: "r_slash_fill",
				radio_button: "radio_button",
				radio_button_fill: "radio_button_fill",
				random: "random",
				random_fill: "random_fill",
				rating_drugs: "rating_drugs",
				rating_everyone: "rating_everyone",
				rating_mature: "rating_mature",
				rating_nsfw: "rating_nsfw",
				rating_violence: "rating_violence",
				refresh: "refresh",
				refresh_fill: "refresh_fill",
				remove: "remove",
				remove_fill: "remove_fill",
				report: "report",
				report_fill: "report_fill",
				reverse: "reverse",
				reverse_fill: "reverse_fill",
				right: "right",
				right_fill: "right_fill",
				rising: "rising",
				rising_fill: "rising_fill",
				rotate: "rotate",
				rotate_fill: "rotate_fill",
				rpan: "rpan",
				rpan_fill: "rpan_fill",
				rules: "rules",
				rules_fill: "rules_fill",
				safari: "safari",
				safari_fill: "safari_fill",
				save: "save",
				save_fill: "save_fill",
				saved: "saved",
				saved_fill: "saved_fill",
				scheduled: "scheduled",
				scheduled_fill: "scheduled_fill",
				search: "search",
				search_fill: "search_fill",
				self: "self",
				self_fill: "self_fill",
				send: "send",
				send_fill: "send_fill",
				settings: "settings",
				settings_fill: "settings_fill",
				share: "share",
				share_android: "share_android",
				share_android_fill: "share_android_fill",
				share_fill: "share_fill",
				share_ios: "share_ios",
				share_ios_fill: "share_ios_fill",
				show: "show",
				show_fill: "show_fill",
				side_menu: "side_menu",
				side_menu_fill: "side_menu_fill",
				skipback10: "skipback10",
				skipback10_fill: "skipback10_fill",
				skipforward10: "skipforward10",
				skipforward10_fill: "skipforward10_fill",
				sort: "sort",
				sort_fill: "sort_fill",
				spam: "spam",
				spam_fill: "spam_fill",
				spoiler: "spoiler",
				spoiler_fill: "spoiler_fill",
				sponsored: "sponsored",
				sponsored_fill: "sponsored_fill",
				star: "star",
				star_fill: "star_fill",
				statistics: "statistics",
				statistics_fill: "statistics_fill",
				sticker: "sticker",
				sticker_fill: "sticker_fill",
				strikethrough: "strikethrough",
				strikethrough_fill: "strikethrough_fill",
				subtract: "subtract",
				subtract_fill: "subtract_fill",
				superscript: "superscript",
				superscript_fill: "superscript_fill",
				swipe_back: "swipe_back",
				swipe_back_fill: "swipe_back_fill",
				swipe_down: "swipe_down",
				swipe_down_fill: "swipe_down_fill",
				swipe_forward: "swipe_forward",
				swipe_forward_fill: "swipe_forward_fill",
				swipe_up: "swipe_up",
				swipe_up_fill: "swipe_up_fill",
				table: "table",
				table_fill: "table_fill",
				tag: "tag",
				tag_fill: "tag_fill",
				tap: "tap",
				tap_fill: "tap_fill",
				text_post: "text_post",
				text_post_fill: "text_post_fill",
				text_size: "text_size",
				text_size_fill: "text_size_fill",
				top: "top",
				top_fill: "top_fill",
				topic: "topic",
				topic_activism: "topic_activism",
				topic_addiction_support: "topic_addiction_support",
				topic_advice: "topic_advice",
				topic_animals: "topic_animals",
				topic_anime: "topic_anime",
				topic_art: "topic_art",
				topic_beauty: "topic_beauty",
				topic_business: "topic_business",
				topic_careers: "topic_careers",
				topic_cars: "topic_cars",
				topic_celebrity: "topic_celebrity",
				topic_crafts: "topic_crafts",
				topic_crypto: "topic_crypto",
				topic_culture: "topic_culture",
				topic_diy: "topic_diy",
				topic_entertainment: "topic_entertainment",
				topic_ethics: "topic_ethics",
				topic_family: "topic_family",
				topic_fashion: "topic_fashion",
				topic_fitness: "topic_fitness",
				topic_food: "topic_food",
				topic_funny: "topic_funny",
				topic_gender: "topic_gender",
				topic_health: "topic_health",
				topic_help: "topic_help",
				topic_history: "topic_history",
				topic_internet: "topic_internet",
				topic_law: "topic_law",
				topic_learning: "topic_learning",
				topic_lifestyle: "topic_lifestyle",
				topic_mature: "topic_mature",
				topic_mensfashion: "topic_mensfashion",
				topic_menshealth: "topic_menshealth",
				topic_meta: "topic_meta",
				topic_military: "topic_military",
				topic_movies: "topic_movies",
				topic_music: "topic_music",
				topic_news: "topic_news",
				topic_other: "topic_other",
				topic_outdoors: "topic_outdoors",
				topic_pets: "topic_pets",
				topic_photography: "topic_photography",
				topic_places: "topic_places",
				topic_politics: "topic_politics",
				topic_programming: "topic_programming",
				topic_reading: "topic_reading",
				topic_religion: "topic_religion",
				topic_science: "topic_science",
				topic_sexorientation: "topic_sexorientation",
				topic_sports: "topic_sports",
				topic_style: "topic_style",
				topic_tabletop: "topic_tabletop",
				topic_technology: "topic_technology",
				topic_television: "topic_television",
				topic_traumasupport: "topic_traumasupport",
				topic_travel: "topic_travel",
				topic_videogaming: "topic_videogaming",
				topic_womenshealth: "topic_womenshealth",
				trim: "trim",
				trim_fill: "trim_fill",
				trophy: "trophy",
				trophy_fill: "trophy_fill",
				u_slash: "u_slash",
				u_slash_fill: "u_slash_fill",
				undo: "undo",
				undo_fill: "undo_fill",
				unheart: "unheart",
				unlock: "unlock",
				unlock_fill: "unlock_fill",
				unmod: "unmod",
				unmod_fill: "unmod_fill",
				unverified: "unverified",
				unverified_fill: "unverified_fill",
				up: "up",
				up_fill: "up_fill",
				upload: "upload",
				upload_fill: "upload_fill",
				upvote: "upvote",
				upvote_fill: "upvote_fill",
				upvotes: "upvotes",
				upvotes_fill: "upvotes_fill",
				user: "user",
				user_fill: "user_fill",
				verified: "verified",
				verified_fill: "verified_fill",
				video_camera: "video_camera",
				video_camera_fill: "video_camera_fill",
				video_live: "video_live",
				video_live_fill: "video_live_fill",
				video_post: "video_post",
				video_post_fill: "video_post_fill",
				view_card: "view_card",
				view_card_fill: "view_card_fill",
				view_classic: "view_classic",
				view_classic_fill: "view_classic_fill",
				view_compact: "view_compact",
				view_compact_fill: "view_compact_fill",
				view_grid_fill: "view_grid_fill",
				view_grid_fill_1: "view_grid_fill_1",
				views: "views",
				views_fill: "views_fill",
				volume: "volume",
				volume_fill: "volume_fill",
				volume_mute: "volume_mute",
				volume_mute_fill: "volume_mute_fill",
				wiki: "wiki",
				wiki_fill: "wiki_fill",
				world: "world",
				world_fill: "world_fill",
				addCollection: "addCollection",
				addGild: "addGild",
				addGildDashed: "addGildDashed",
				calendar: "calendar",
				coin: "coin",
				create: "create",
				distinguishShield: "distinguishShield",
				dropdownTriangle: "dropdownTriangle",
				envelope: "envelope",
				expandoArrowCollapse: "expandoArrowCollapse",
				expandoArrowExpand: "expandoArrowExpand",
				expandoMediaGif: "expandoMediaGif",
				expandoMediaImage: "expandoMediaImage",
				expandoMediaLightbox: "expandoMediaLightbox",
				expandoMediaLink: "expandoMediaLink",
				expandoMediaText: "expandoMediaText",
				expandoMediaVideo: "expandoMediaVideo",
				gif: "gif",
				gift: "gift",
				gild: "gild",
				ignoreReport: "ignoreReport",
				link: "link",
				list: "list",
				modActions: "modActions",
				modSettings: "modSettings",
				op: "op",
				outboundLink: "outboundLink",
				pencil: "pencil",
				photos: "photos",
				plus: "plus",
				post: "post",
				sticky: "sticky",
				text: "text",
				unpin: "unpin",
				video: "video"
			};
			var l = i("./src/lib/lessComponent.tsx");
			const a = (e, t) => `icon icon-${e}${t&&!e.includes("fill")&&c[`${e}_fill`]?"_fill":""}`,
				d = l.a.wrapped(e => o.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", s.a)
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				o = i.n(r),
				n = i("./src/lib/classNames/index.ts"),
				s = i("./src/reddit/icons/fonts/helpers.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				isFilled: t,
				name: i,
				...r
			}) => o.a.createElement("i", c({
				className: Object(n.a)(e, Object(s.b)(i, t))
			}, r))
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				o = i.n(r);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", n({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				o = i.n(r);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", n({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("polygon", {
				fill: "inherit",
				points: "11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"
			}))
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.m.less": function(e, t, i) {
			e.exports = {
				defaultInactiveState: "_1g3Xfh9mljLHWv24M9A3Rw",
				outline: "_3SlBAJb2MbUHwgBZFH8eL7",
				highlighted: "_1-JQy00VxG8hpTxxdxV32y"
			}
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				o = i.n(r),
				n = i("./src/lib/classNames/index.ts"),
				s = i("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				c = i.n(s);
			t.a = Object(r.forwardRef)(({
				className: e,
				isHighlighted: t
			}, i) => o.a.createElement("svg", {
				className: Object(n.a)(c.a.defaultInactiveState, e),
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				width: "12",
				height: "12",
				ref: i
			}, o.a.createElement("circle", {
				cx: "6",
				cy: "6",
				r: "4"
			}), o.a.createElement("path", {
				className: Object(n.a)(c.a.outline, {
					[c.a.highlighted]: t
				}),
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooSilhouette/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				o = i.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), o.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), o.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), o.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), o.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), o.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), o.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), o.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), o.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), o.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), o.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), o.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), o.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), o.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), o.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), o.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
		},
		"./src/reddit/selectors/tooltip.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return o
			}));
			const r = e => e.tooltipId,
				o = e => t => t.tooltipId === e
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.e9a30d86055ae76411d2.js.map