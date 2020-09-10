// https://www.redditstatic.com/desktop2x/0.d6b5ee5914916e2e0f3e.js
// Retrieved at 9/10/2020, 1:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[0], {
		"./node_modules/lodash/_baseRange.js": function(e, s) {
			var t = Math.ceil,
				a = Math.max;
			e.exports = function(e, s, n, c) {
				for (var i = -1, r = a(t((s - e) / (n || 1)), 0), l = Array(r); r--;) l[c ? r : ++i] = e, e += n;
				return l
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, s, t) {
			var a = t("./node_modules/lodash/_baseRange.js"),
				n = t("./node_modules/lodash/_isIterateeCall.js"),
				c = t("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(s, t, i) {
					return i && "number" != typeof i && n(s, t, i) && (t = i = void 0), s = c(s), void 0 === t ? (t = s, s = 0) : t = c(t), i = void 0 === i ? s < t ? 1 : -1 : c(i), a(s, t, i, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, s, t) {
			var a = t("./node_modules/lodash/_createRange.js")();
			e.exports = a
		},
		"./src/graphql/operations/SubmitContentRatingSurvey.json": function(e) {
			e.exports = JSON.parse('{"id":"8cd4e428e688"}')
		},
		"./src/reddit/components/ContentSurvey/RatingCard.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return u
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./node_modules/react-redux/es/index.js"),
				i = t("./src/reddit/components/ContentSurvey/index.m.less"),
				r = t.n(i),
				l = t("./src/lib/classNames/index.ts"),
				d = t("./src/reddit/components/SubredditIcon/index.tsx"),
				o = t("./src/lib/CSSVariableProvider/index.tsx");
			var m = t("./src/reddit/icons/svgs/Info/index.tsx"),
				v = t("./src/reddit/models/Theme/index.ts"),
				x = t("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = t("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: C
			} = t("./node_modules/fbt/lib/FbtPublic.js");

			function u(e) {
				var s, t;
				const {
					ratingResponse: i,
					subredditId: u,
					children: h
				} = e, w = null !== (s = Object(c.d)(e => Object(g.S)(e, {
					subredditId: u
				}))) && void 0 !== s ? s : {}, p = Object(a.useContext)(o.b);
				return n.a.createElement("div", {
					className: r.a.ratingCard
				}, "PENDING" === (null == i ? void 0 : i.status) && n.a.createElement("div", {
					className: Object(l.a)(r.a.card, r.a.pending)
				}, n.a.createElement(m.a, {
					className: r.a.infoIcon
				}), C._("Content tag is pending until reviewed", null, {
					hk: "Umha7"
				})), n.a.createElement("div", {
					className: r.a.card
				}, n.a.createElement("div", {
					className: r.a.banner,
					style: {
						background: Object(v.g)(Object(x.a)({
							theme: p
						}).banner.backgroundColor, Object(x.a)({
							theme: p
						}).banner.backgroundImage, Object(x.a)({
							theme: p
						}).banner.backgroundImagePosition)
					}
				}, n.a.createElement(d.b, {
					className: r.a.communityIcon,
					iconUrl: null === (t = w.icon) || void 0 === t ? void 0 : t.url
				})), n.a.createElement("h3", {
					className: r.a.communityName
				}, i ? n.a.createElement("span", null, w.displayText, n.a.createElement("img", {
					className: r.a.ratingImg,
					src: i.rating.icon.png
				})) : w.displayText), h))
			}
		},
		"./src/reddit/components/ContentSurvey/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s), t.d(s, "default", (function() {
				return Q
			}));
			var a = t("./node_modules/icepick/icepick.js"),
				n = t("./node_modules/lodash/flatMap.js"),
				c = t.n(n),
				i = t("./node_modules/lodash/sortBy.js"),
				r = t.n(i),
				l = t("./node_modules/react/index.js"),
				d = t.n(l),
				o = t("./node_modules/react-redux/es/index.js"),
				m = t("./src/reddit/components/ContentSurvey/index.m.less"),
				v = t.n(m),
				x = t("./src/lib/sentry/index.ts"),
				g = t("./src/reddit/actions/subreddit/questions.ts"),
				C = t("./src/reddit/actions/toaster.ts"),
				u = t("./node_modules/fbt/lib/FbtPublic.js"),
				h = t("./node_modules/lodash/range.js"),
				w = t.n(h),
				p = t("./src/reddit/components/ModeratorSurvey/index.m.less"),
				E = t.n(p),
				f = t("./src/lib/classNames/index.ts");
			var L = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				M = t("./src/reddit/controls/Button/index.tsx"),
				N = t("./src/reddit/controls/TextButton/index.tsx"),
				A = t("./src/reddit/icons/svgs/Snoo/index.tsx");
			t("./src/reddit/icons/svgs/AddCollection/index.tsx"), t("./src/reddit/icons/svgs/AddSquare/index.tsx"), t("./src/reddit/icons/svgs/Admin/index.tsx"), t("./src/reddit/icons/svgs/Advance/index.tsx"), t("./src/reddit/icons/svgs/All/index.tsx"), t("./src/reddit/icons/svgs/AppleLogo/index.tsx"), t("./src/reddit/icons/svgs/Approve/index.tsx"), t("./src/reddit/icons/svgs/ArrowHeadsRight/index.tsx"), t("./src/reddit/icons/svgs/ArrowRight/index.tsx"), t("./src/reddit/icons/svgs/ArrowRightThin/index.tsx"), t("./src/reddit/icons/svgs/Automoderator/index.tsx"), t("./src/reddit/icons/svgs/Badge/index.tsx"), t("./src/reddit/icons/svgs/Ban/index.tsx"), t("./src/reddit/icons/svgs/Best/index.tsx"), t("./src/reddit/icons/svgs/Bling/index.tsx"), t("./src/reddit/icons/svgs/Browse/index.tsx"), t("./src/reddit/icons/svgs/Cake/index.tsx"), t("./src/reddit/icons/svgs/Calendar/index.tsx"), t("./src/reddit/icons/svgs/Center/index.tsx"), t("./src/reddit/icons/svgs/Chat/index.tsx"), t("./src/reddit/icons/svgs/ChatBubbles/index.tsx"), t("./src/reddit/icons/svgs/Checkbox/index.tsx"), t("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"), t("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"), t("./src/reddit/icons/svgs/Checkmark/index.tsx"), t("./src/reddit/icons/svgs/CheckmarkFitted/index.tsx"), t("./src/reddit/icons/svgs/Chevron/index.tsx"), t("./src/reddit/icons/svgs/ChevronDown/index.tsx"), t("./src/reddit/icons/svgs/ChevronUp/index.tsx"), t("./src/reddit/icons/svgs/Circle/index.tsx"), t("./src/reddit/icons/svgs/CircleCheck/index.tsx"), t("./src/reddit/icons/svgs/CircledPlanet/index.tsx"), t("./src/reddit/icons/svgs/CirclePost/index.tsx"), t("./src/reddit/icons/svgs/ClassicPosts/index.tsx"), t("./src/reddit/icons/svgs/Clear/index.tsx"), t("./src/reddit/icons/svgs/Clock/index.tsx"), t("./src/reddit/icons/svgs/Close/index.tsx"), t("./src/reddit/icons/svgs/Coin/index.tsx"), t("./src/reddit/icons/svgs/CoinV2/index.tsx"), t("./src/reddit/icons/svgs/Collection/index.tsx"), t("./src/reddit/icons/svgs/Comments/index.tsx"), t("./src/reddit/icons/svgs/CompactPosts/index.tsx"), t("./src/reddit/icons/svgs/Controller/index.tsx"), t("./src/reddit/icons/svgs/Controversial/index.tsx"), t("./src/reddit/icons/svgs/Crosspost/index.tsx"), t("./src/reddit/icons/svgs/Crown/index.tsx");
			t("./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx"), t("./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx"), t("./src/reddit/icons/svgs/DizzySnoo/index.tsx"), t("./src/reddit/icons/svgs/DownToChatAvatar/index.tsx"), t("./src/reddit/icons/svgs/DownvoteCircle/index.tsx"), t("./src/reddit/icons/svgs/Dropdown/index.tsx"), t("./src/reddit/icons/svgs/DynamicThreshold/index.tsx"), t("./src/reddit/icons/svgs/Edit/index.tsx"), t("./src/reddit/icons/svgs/EditPencil/index.tsx"), t("./src/reddit/icons/svgs/Envelope/index.tsx"), t("./src/reddit/icons/svgs/Event/index.tsx");
			t("./src/reddit/icons/svgs/Eye/index.tsx"), t("./src/reddit/icons/svgs/EyeCancel/index.tsx"), t("./src/reddit/icons/svgs/Favorite/index.tsx"), t("./src/reddit/icons/svgs/Fill/index.tsx"), t("./src/reddit/icons/svgs/Flag/index.tsx"), t("./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx"), t("./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx"), t("./src/reddit/icons/svgs/FormattingAlignRight/index.tsx"), t("./src/reddit/icons/svgs/FormattingBlockQuotes/index.tsx"), t("./src/reddit/icons/svgs/FormattingBold/index.tsx"), t("./src/reddit/icons/svgs/FormattingCodeBlock/index.tsx"), t("./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx"), t("./src/reddit/icons/svgs/FormattingHeading/index.tsx"), t("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"), t("./src/reddit/icons/svgs/FormattingInsertRow/index.tsx"), t("./src/reddit/icons/svgs/FormattingItalics/index.tsx"), t("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"), t("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"), t("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"), t("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"), t("./src/reddit/icons/svgs/FormattingSubscript/index.m.less");
			t("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"), t("./src/reddit/icons/svgs/FormattingTable/index.tsx"), t("./src/reddit/icons/svgs/FormattingUnderline/index.m.less");
			t("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"), t("./src/reddit/icons/svgs/Gallery/index.tsx"), t("./src/reddit/icons/svgs/Gif/index.tsx"), t("./src/reddit/icons/svgs/Gild/index.tsx"), t("./src/reddit/icons/svgs/GoogleLogo/index.tsx"), t("./src/reddit/icons/svgs/GovSmall/index.tsx"), t("./src/reddit/icons/svgs/Grapple/index.tsx"), t("./src/reddit/icons/svgs/GroupChat/index.tsx");
			t("./src/reddit/icons/svgs/HamburgerClose/index.tsx"), t("./src/reddit/icons/svgs/Hamster1/index.tsx"), t("./src/reddit/icons/svgs/Hamster2/index.tsx");
			t("./src/reddit/icons/svgs/Help/index.tsx"), t("./src/reddit/icons/svgs/Hide/index.tsx"), t("./src/reddit/icons/svgs/Home/index.tsx"), t("./src/reddit/icons/svgs/Hot/index.tsx"), t("./src/reddit/icons/svgs/ImagePost/index.tsx"), t("./src/reddit/icons/svgs/ImageUpload/index.tsx"), t("./src/reddit/icons/svgs/Info/index.tsx"), t("./src/reddit/icons/svgs/Karma/index.tsx"), t("./src/reddit/icons/svgs/KarmaGray/index.tsx"), t("./src/reddit/icons/svgs/Key/index.tsx"), t("./src/reddit/icons/svgs/LargePosts/index.tsx"), t("./src/reddit/icons/svgs/Link/index.tsx"), t("./src/reddit/icons/svgs/List/index.tsx"), t("./src/reddit/icons/svgs/Location/index.tsx"), t("./src/reddit/icons/svgs/Lock/index.tsx"), t("./src/reddit/icons/svgs/Logout/index.tsx"), t("./src/reddit/icons/svgs/MarkdownMode/index.tsx"), t("./src/reddit/icons/svgs/Media/index.tsx"), t("./src/reddit/icons/svgs/Menu/index.tsx"), t("./src/reddit/icons/svgs/Moderate/index.tsx"), t("./src/reddit/icons/svgs/ModLogPosts/index.tsx"), t("./src/reddit/icons/svgs/Modmail/index.tsx"), t("./src/reddit/icons/svgs/ModMode/index.tsx"), t("./src/reddit/icons/svgs/ModQueue/index.tsx"), t("./src/reddit/icons/svgs/ModQueues/index.tsx"), t("./src/reddit/icons/svgs/ModRemove/index.tsx");
			t("./src/reddit/icons/svgs/Multireddit/index.tsx"), t("./src/reddit/icons/svgs/Mute/index.tsx"), t("./src/reddit/icons/svgs/MyProfile/index.tsx"), t("./src/reddit/icons/svgs/Negative/index.tsx"), t("./src/reddit/icons/svgs/New/index.tsx"), t("./src/reddit/icons/svgs/NewPost/index.tsx"), t("./src/reddit/icons/svgs/Night/index.tsx"), t("./src/reddit/icons/svgs/Notify/index.tsx"), t("./src/reddit/icons/svgs/Nsfw/index.tsx"), t("./src/reddit/icons/svgs/OutboundLink/index.tsx");
			var j = t("./src/reddit/icons/svgs/Pagination/back.tsx");
			t("./src/reddit/icons/svgs/Pencil/index.tsx"), t("./src/reddit/icons/svgs/Person/index.tsx"), t("./src/reddit/icons/svgs/Pin/index.tsx"), t("./src/reddit/icons/svgs/Pinmenu/index.tsx"), t("./src/reddit/icons/svgs/Planet/index.tsx"), t("./src/reddit/icons/svgs/Plus/index.tsx"), t("./src/reddit/icons/svgs/PlusCircle/index.tsx"), t("./src/reddit/icons/svgs/Poll/index.tsx"), t("./src/reddit/icons/svgs/Popular/index.tsx"), t("./src/reddit/icons/svgs/PositionCenter/index.tsx"), t("./src/reddit/icons/svgs/PositionLeft/index.tsx"), t("./src/reddit/icons/svgs/PositionRight/index.tsx"), t("./src/reddit/icons/svgs/Positive/index.tsx"), t("./src/reddit/icons/svgs/Post/index.tsx"), t("./src/reddit/icons/svgs/Powerup/index.tsx"), t("./src/reddit/icons/svgs/Premium/index.tsx"), t("./src/reddit/icons/svgs/PremiumLogo/index.tsx"), t("./src/reddit/icons/svgs/ProfileSlashed/index.tsx"), t("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"), t("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"), t("./src/reddit/icons/svgs/Question/index.tsx"), t("./src/reddit/icons/svgs/RadioOff/index.tsx"), t("./src/reddit/icons/svgs/RadioOn/index.tsx"), t("./src/reddit/icons/svgs/RedditCoinsLogo/index.tsx"), t("./src/reddit/icons/svgs/Redditor/index.tsx"), t("./src/reddit/icons/svgs/Remove/index.tsx"), t("./src/reddit/icons/svgs/Replay/index.tsx"), t("./src/reddit/icons/svgs/ReplyArrow/index.tsx"), t("./src/reddit/icons/svgs/Report/index.tsx"), t("./src/reddit/icons/svgs/Rising/index.tsx"), t("./src/reddit/icons/svgs/Rules/index.tsx"), t("./src/reddit/icons/svgs/Save/index.tsx"), t("./src/reddit/icons/svgs/Saved/index.tsx"), t("./src/reddit/icons/svgs/Search/index.tsx"), t("./src/reddit/icons/svgs/Send/index.tsx"), t("./src/reddit/icons/svgs/Settings/index.tsx"), t("./src/reddit/icons/svgs/SettingsWithShield/index.tsx"), t("./src/reddit/icons/svgs/Show/index.tsx"), t("./src/reddit/icons/svgs/ShowHide/index.tsx"), t("./src/reddit/icons/svgs/Smile/index.tsx"), t("./src/reddit/icons/svgs/SnooCrying/index.tsx"), t("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"), t("./src/reddit/icons/svgs/SnooHappy/index.tsx"), t("./src/reddit/icons/svgs/SnooNoEyes/index.tsx"), t("./src/reddit/icons/svgs/SnooPosting/index.tsx"), t("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"), t("./src/reddit/icons/svgs/SnooSuperhero/index.tsx"), t("./src/reddit/icons/svgs/Spam/index.tsx"), t("./src/reddit/icons/svgs/Sparkle/index.tsx"), t("./src/reddit/icons/svgs/SquareLock/index.tsx"), t("./src/reddit/icons/svgs/Stamp/index.tsx"), t("./src/reddit/icons/svgs/Star/index.tsx"), t("./src/reddit/icons/svgs/Star2/index.tsx"), t("./src/reddit/icons/svgs/Statistics/index.tsx"), t("./src/reddit/icons/svgs/Sticky/index.tsx"), t("./src/reddit/icons/svgs/Sunburst/index.tsx"), t("./src/reddit/icons/svgs/Tag/index.tsx"), t("./src/reddit/icons/svgs/Text/index.tsx"), t("./src/reddit/icons/svgs/TextPost/index.tsx"), t("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"), t("./src/reddit/icons/svgs/TickCircled/index.tsx"), t("./src/reddit/icons/svgs/Tile/index.tsx"), t("./src/reddit/icons/svgs/Top/index.tsx"), t("./src/reddit/icons/svgs/Trash/index.tsx"), t("./src/reddit/icons/svgs/Trash2/index.tsx"), t("./src/reddit/icons/svgs/Triangle/index.tsx"), t("./src/reddit/icons/svgs/Trophy/index.tsx"), t("./src/reddit/icons/svgs/Twinkle/index.tsx"), t("./src/reddit/icons/svgs/Twitter/index.tsx"), t("./src/reddit/icons/svgs/Unban/index.tsx"), t("./src/reddit/icons/svgs/Unlock/index.tsx"), t("./src/reddit/icons/svgs/Upload/index.tsx"), t("./src/reddit/icons/svgs/User/index.tsx"), t("./src/reddit/icons/svgs/Video/index.tsx"), t("./src/reddit/icons/svgs/VideoApplyNow/index.tsx"), t("./src/reddit/icons/svgs/VideoCheckmark/index.tsx"), t("./src/reddit/icons/svgs/VideoCollapse/index.tsx"), t("./src/reddit/icons/svgs/VideoContactUs/index.tsx"), t("./src/reddit/icons/svgs/VideoExpand/index.tsx"), t("./src/reddit/icons/svgs/VideoGetAQuote/index.tsx"), t("./src/reddit/icons/svgs/VideoGetShowtimes/index.tsx"), t("./src/reddit/icons/svgs/VideoInstall/index.tsx"), t("./src/reddit/icons/svgs/VideoLearnMore/index.tsx"), t("./src/reddit/icons/svgs/VideoMute/index.tsx"), t("./src/reddit/icons/svgs/VideoNewPlayButton/index.tsx"), t("./src/reddit/icons/svgs/VideoPause/index.tsx"), t("./src/reddit/icons/svgs/VideoPlay/index.tsx"), t("./src/reddit/icons/svgs/VideoPlayNow/index.tsx"), t("./src/reddit/icons/svgs/VideoReplay/index.tsx"), t("./src/reddit/icons/svgs/VideoSeeMenu/index.tsx"), t("./src/reddit/icons/svgs/VideoSetting/index.tsx"), t("./src/reddit/icons/svgs/VideoShare/index.tsx"), t("./src/reddit/icons/svgs/VideoShopNow/index.tsx"), t("./src/reddit/icons/svgs/VideoSignUp/index.tsx"), t("./src/reddit/icons/svgs/VideoSnoo/index.tsx"), t("./src/reddit/icons/svgs/VideoViewMore/index.tsx"), t("./src/reddit/icons/svgs/VideoVolume/index.tsx"), t("./src/reddit/icons/svgs/VideoWatchNow/index.tsx"), t("./src/reddit/icons/svgs/Warning/index.tsx"), t("./src/reddit/icons/svgs/Wiki/index.tsx"), t("./src/reddit/icons/svgs/Wordmark/index.tsx");

			function y(e) {
				const {
					children: s,
					activeSlide: t,
					progressCurrent: a,
					progressTotal: n,
					disableNext: c,
					buttonText: i,
					advance: r,
					goBack: o,
					onClose: m = (() => {})
				} = e, v = function e(s) {
					return l.Children.toArray(s).reduce((s, t) => t ? t.type === d.a.Fragment ? [...s, ...e(t.props.children)] : [...s, t] : s, [])
				}(s), x = v.length, g = x > 1 && t > 0, C = null != a ? a : t + 1, h = null != n ? n : x;
				return d.a.createElement("div", {
					className: E.a.container
				}, d.a.createElement("div", {
					className: E.a.header
				}, g ? d.a.createElement(N.a, {
					className: E.a.headerButton,
					onClick: o
				}, d.a.createElement(j.a, {
					className: E.a.backIcon
				}), d.a.createElement("div", null, u.fbt._("Back", null, {
					hk: "39TCGR"
				}))) : d.a.createElement(N.a, {
					className: E.a.headerButton,
					onClick: m
				}, d.a.createElement(L.b, null), d.a.createElement("div", null, u.fbt._("Close", null, {
					hk: "4gbyAA"
				}))), d.a.createElement(A.a, {
					className: E.a.snoo
				})), d.a.createElement("div", {
					className: E.a.slides,
					style: {
						transform: "translateX(".concat(-600 * t, "px)")
					}
				}, v.map((e, s) => d.a.createElement("div", {
					key: s,
					className: E.a.slide,
					"aria-hidden": t !== s,
					"aria-current": t === s
				}, e))), d.a.createElement("div", {
					className: E.a.footer
				}, d.a.createElement("div", {
					className: E.a.progressBar
				}, h > 1 && w()(h).map((e, s) => d.a.createElement("div", {
					key: s,
					className: Object(f.a)(E.a.progressSegment, {
						[E.a.active]: s < C
					})
				}))), d.a.createElement("div", {
					className: E.a.progress
				}, h > 1 ? u.fbt._("{current} of {total}", [u.fbt._param("current", C), u.fbt._param("total", h)], {
					hk: "pZU46"
				}) : ""), d.a.createElement(M.f, {
					redditStyle: !0,
					className: E.a.footerButton,
					onClick: r,
					disabled: c
				}, null != i ? i : t === x - 1 ? u.fbt._("Submit", null, {
					hk: "194VZ0"
				}) : u.fbt._("Next", null, {
					hk: "3WmYcd"
				}))))
			}
			var b = t("./src/graphql/operations/SubmitContentRatingSurvey.json"),
				k = t("./src/lib/makeGqlRequest/index.ts");
			var Z = (e, s) => Object(k.a)(e, Object.assign(Object.assign({}, b), {
					variables: s
				})),
				B = t("./src/reddit/helpers/trackers/contentTag.ts"),
				V = t("./src/reddit/hooks/useGqlContext.ts");
			var _, F = t("./src/reddit/hooks/useTracking.ts");
			! function(e) {
				e.Accepted = "ACCEPTED", e.Pending = "PENDING"
			}(_ || (_ = {}));
			var H = t("./src/reddit/models/Toast/index.ts"),
				S = (t("./node_modules/core-js/modules/es6.symbol.js"), t("./node_modules/lodash/mapValues.js")),
				O = t.n(S),
				z = t("./src/reddit/controls/CheckboxInput/index.tsx");
			t("./node_modules/core-js/modules/es6.regexp.split.js");

			function R(e) {
				let {
					children: s
				} = e;
				return d.a.createElement(d.a.Fragment, null, (t = s, t.split(/\*+/)).map((e, s) => s % 2 == 1 ? d.a.createElement("em", {
					key: s
				}, e) : e));
				var t
			}
			var P = function(e, s) {
				var t = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && s.indexOf(a) < 0 && (t[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) s.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (t[a[n]] = e[a[n]])
				}
				return t
			};

			function T(e) {
				let {
					question: s,
					selectedAnswers: t,
					onChange: a
				} = e;
				return d.a.createElement("div", null, d.a.createElement("h3", {
					className: v.a.header
				}, d.a.createElement(R, null, s.questionTextMarkdown)), s.answerOptions.map(e => d.a.createElement(z.a, {
					key: e.id,
					name: e.id,
					className: v.a.checkbox,
					value: t[e.id],
					onChange: n => (function(e, n) {
						const c = e.id;
						if (e.isMutuallyExclusive) return a(s.id, {
							[c]: n
						});
						if (n) {
							const e = s.answerOptions.filter(e => e.isMutuallyExclusive).map(e => e.id),
								n = O()(t, (s, t) => !e.includes(t) && s);
							return n[c] = !0, a(s.id, n)
						}
						const i = t,
							r = c,
							l = (i[r], P(i, ["symbol" == typeof r ? r : r + ""]));
						a(s.id, l)
					})(e, n)
				}, d.a.createElement("span", {
					id: e.id
				}, e.answerText))))
			}
			var D = t("./src/reddit/components/ContentSurvey/RatingCard.tsx");
			const {
				fbt: I
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var U;

			function Q(e) {
				var s, t;
				const {
					subredditId: n,
					survey: c,
					onClose: i = (() => {})
				} = e, [m, u] = Object(l.useState)({}), h = Object(o.c)(), w = q(null == c ? void 0 : c.questions, m), [{
					surveyState: p,
					activeSlide: E
				}, f] = Object(l.useReducer)((e, s) => {
					let {
						activeSlide: t
					} = e;
					const a = "forward" === s ? Math.min(t + 1, w.length + 1) : Math.max(t - 1, 0);
					return {
						surveyState: 0 === a ? U.Intro : a === w.length + 1 ? U.Tag : U.Survey,
						activeSlide: a
					}
				}, {
					surveyState: U.Intro,
					activeSlide: 0
				}), L = w[E - 1], M = Object(F.a)();
				Object(l.useEffect)(() => {
					switch (E) {
						case 0:
							return M(Object(B.c)());
						case 1:
							return M(Object(B.e)());
						case w.length + 1:
							return M(Object(B.n)())
					}
					if (L) return M(Object(B.j)(L.pageType))
				}, [E, M]);
				const [N, {
					pending: A,
					error: j
				}] = function(e) {
					const s = Object(V.a)(),
						[t, a] = Object(l.useState)(!1),
						[n, c] = Object(l.useState)(!1),
						[i, r] = Object(l.useState)(null),
						[d, o] = Object(l.useState)(null);
					return [Object(l.useCallback)(async t => {
						let n, l;
						a(!0), c(!0);
						try {
							if ((l = (n = await e(s(), t)).body).error) throw new Error(l.error.message);
							o(l.data)
						} catch (i) {
							r(i)
						} finally {
							a(!1)
						}
					}, [s, e]), {
						data: d,
						error: i,
						pending: t,
						called: n
					}]
				}(Z);
				Object(l.useEffect)(() => {
					j && (x.c.captureException(j), h(Object(C.e)(Object(C.d)(I._("An error occurred", null, {
						hk: "1VDETi"
					}), H.b.Error))))
				}, [j, h]);
				const [b, k] = Object(l.useState)(null);
				if (!c) return null;
				if (!c.isEligible) return null;

				function S(e, s) {
					u(Object(a.setIn)(m, [e], s)), M(Object(B.a)(L.pageType))
				}
				const O = null !== (s = m[null == L ? void 0 : L.id]) && void 0 !== s ? s : {},
					z = (null !== (t = null == L ? void 0 : L.answerOptions) && void 0 !== t ? t : []).map(e => e.id).some(e => O[e]),
					R = p === U.Survey && E > 1;
				return d.a.createElement(y, {
					activeSlide: E,
					advance: async function() {
						if (p === U.Survey && E === w.length && k(function(e, s) {
								var t;
								let a = null,
									n = [];
								const c = q(e.questions, s);
								for (const i of c)
									for (const e of i.answerOptions) {
										if (!(null === (t = s[i.id]) || void 0 === t ? void 0 : t[e.id])) continue;
										if (!Y(e)) continue;
										const c = e.contentRatingTag;
										(!a || a.weight < c.weight) && (a = c), c.weight > 0 && n.push(e)
									}
								if (n = r()(n, e => -e.contentRatingTag.weight), !a) throw new Error("no question was selected!");
								return {
									id: "",
									version: e.version,
									createdAt: Date.now(),
									isFromMod: !0,
									status: _.Pending,
									rating: a,
									ratingReasons: n
								}
							}(c, m)), p === U.Tag) {
							if (A) return;
							return M(Object(B.m)()), await N({
								input: {
									subredditId: n,
									version: c.version,
									answers: q(c.questions, m).map(e => ({
										questionId: e.id,
										answerIds: J(e, m).map(e => e.id)
									}))
								}
							}), h(Object(C.e)(Object(C.d)(I._("Thanks for setting up your Content Tag!", null, {
								hk: "3HW5GV"
							}), H.b.SuccessCommunityGreen))), h({
								type: g.b,
								payload: {
									id: n,
									response: b
								}
							}), void(j || i())
						}
						f("forward"), L ? M(Object(B.i)(L.pageType, J(L, m).map(e => e.id))) : 0 === E && M(Object(B.l)())
					},
					goBack: function() {
						f("back"), L && M(Object(B.b)(L.pageType))
					},
					onClose: i,
					progressCurrent: R ? E - 1 : 0,
					progressTotal: R ? w.length - 1 : 0,
					disableNext: A || p === U.Survey && !z,
					buttonText: K(p)
				}, d.a.createElement("div", {
					className: v.a.result
				}, d.a.createElement("p", {
					className: v.a.heading
				}, I._("Before taking this survey, check in with your mod team", null, {
					hk: "1HOxnM"
				})), I._("{=This survey will ask you about how different mature themes are posted about and discussed in your community.}{=Only one moderator can take and submit the survey, so you may want to consult on your answers before submitting.}{=If things in your community change, you can take the survey again every three months.}{=Thanks for all your help!}", [I._param("=This survey will ask you about how different mature themes are posted about and discussed in your community.", d.a.createElement("p", {
					className: v.a.introCopy
				}, I._("This survey will ask you about how different mature themes are posted about and discussed in your community.", null, {
					hk: "1b3ry"
				}))), I._param("=Only one moderator can take and submit the survey, so you may want to consult on your answers before submitting.", d.a.createElement("p", {
					className: v.a.introCopy
				}, I._("Only one moderator can take and submit the survey, so you may want to consult on your answers before submitting.", null, {
					hk: "345rj6"
				}))), I._param("=If things in your community change, you can take the survey again every three months.", d.a.createElement("p", {
					className: v.a.introCopy
				}, I._("If things in your community change, you can take the survey again every three months.", null, {
					hk: "lGQgp"
				}))), I._param("=Thanks for all your help!", d.a.createElement("p", {
					className: v.a.introCopy
				}, I._("Thanks for all your help!", null, {
					hk: "2RKafV"
				})))], {
					hk: "L7NNc"
				})), w.map(e => {
					var s;
					return d.a.createElement(T, {
						key: e.id,
						question: e,
						selectedAnswers: null !== (s = m[e.id]) && void 0 !== s ? s : {},
						onChange: S
					})
				}), b && d.a.createElement("div", {
					key: "result",
					className: v.a.result
				}, d.a.createElement("p", {
					className: v.a.heading
				}, I._("Your Content Tag:", null, {
					hk: "2OUAzB"
				})), d.a.createElement(D.a, {
					ratingResponse: b,
					subredditId: n
				}, d.a.createElement("p", {
					className: v.a.ratingAudience
				}, b.rating.name), d.a.createElement("p", {
					className: v.a.ratingDescription
				}, b.rating.description, " ", d.a.createElement("br", null), I._("(Note: Only moderators can see this tag.)", null, {
					hk: "2PN50Z"
				}))), d.a.createElement("p", {
					className: v.a.reasonsHeader
				}, I._("Posts and discussions include:", null, {
					hk: "12MdUE"
				})), d.a.createElement("ul", null, b.ratingReasons.map(e => d.a.createElement("li", {
					key: e.id,
					className: v.a.reason
				}, e.contentRatingReasonText)))))
			}

			function K(e) {
				switch (e) {
					case U.Intro:
						return I._("Start Survey", null, {
							hk: "41dYsT"
						});
					case U.Survey:
						return I._("Next", null, {
							hk: "3WmYcd"
						});
					case U.Tag:
						return I._("Submit", null, {
							hk: "2tgWd9"
						})
				}
			}

			function J(e, s) {
				return e.answerOptions.filter(t => {
					var a;
					return null === (a = s[e.id]) || void 0 === a ? void 0 : a[t.id]
				})
			}

			function q(e, s) {
				let t = [];
				for (const a of null != e ? e : []) {
					const e = J(a, s),
						n = c()(e, e => {
							var s;
							return null !== (s = e.subQuestions) && void 0 !== s ? s : []
						});
					t = [...t, a, ...q(n, s)]
				}
				return t
			}

			function Y(e) {
				return "ContentRatingSurveyLeafAnswer" === e.__typename
			}! function(e) {
				e[e.Intro = 0] = "Intro", e[e.Survey = 1] = "Survey", e[e.Tag = 2] = "Tag"
			}(U || (U = {}))
		},
		"./src/reddit/components/ModeratorSurvey/index.m.less": function(e, s, t) {
			e.exports = {
				container: "_3sMj_ZIduvHMzSm-BL86UO",
				header: "_1oy1EwAZphinH5qnfIi5kd",
				snoo: "_3Z_9vPAxX8pX76D-6WRkXu",
				headerButton: "_12uc9RaZmJVpq_L2Oi0R6V",
				backIcon: "_3eFjfw4KmYgXgmfwTCX5uR",
				slides: "twjwApPQNL8y1qJzBKyLu",
				slide: "M87FoStc5XtYmbm8OyWNX",
				footer: "_3k0hmC84HiTPTLSpPUFy_g",
				progressBar: "_2I9TvMWn0KwlS5A9kUWwsx",
				progressSegment: "_3H5UQOUiCZV0_ZGWrs90HA",
				active: "_2iTY5RCWu5pDFEeVR0Uksn",
				progress: "_1Kr_0NCLL1vZvfScmW6IEn",
				footerButton: "_2sDqJ0jCELyq3Ut2qAXe08"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, s, t) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, s, t) {
			"use strict";
			t("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				r = t("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = t("./src/reddit/layout/row/Inline/index.tsx"),
				d = t("./src/reddit/controls/CheckboxInput/index.m.less"),
				o = t.n(d);
			s.a = e => n.a.createElement(l.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(c.a)(e.className, o.a.checkboxInput, e.disabled ? o.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, n.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? n.a.createElement(r.a, {
				className: o.a.checkboxSelected
			}) : n.a.createElement(i.a, null), e.children)
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, n.a.createElement("defs", null, n.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), n.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#".concat("svg-add-collection"),
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return c
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), n.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, s, t) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Admin/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(e.className, r.a.admin, {
					[r.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Advance/index.m.less": function(e, s, t) {
			e.exports = {
				default: "_8j1c5tda8wyYwjTEGlw7C"
			}
		},
		"./src/reddit/icons/svgs/Advance/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Advance/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.default, e.className),
				viewBox: "0 0 13 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M6.707 6.707a.997.997 0 000-1.414l-5-5A.999.999 0 10.293 1.707L4.586 6 .293 10.293a.999.999 0 101.414 1.414l5-5zm6 0a.997.997 0 000-1.414l-5-5a.999.999 0 10-1.414 1.414L10.586 6l-4.293 4.293a.999.999 0 101.414 1.414l5-5z"
			}))
		},
		"./src/reddit/icons/svgs/AppleLogo/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				height: "18",
				viewBox: "0 0 18 18",
				width: "18",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M8.8162 4.15385C9.60444 4.15385 10.5925 3.60458 11.1809 2.87222C11.7138 2.20852 12.1024 1.28163 12.1024 0.354736C12.1024 0.228861 12.0913 0.102988 12.0691 0C11.192 0.0343293 10.1373 0.606484 9.50452 1.37317C9.00493 1.95677 8.54975 2.87222 8.54975 3.81055C8.54975 3.94787 8.57196 4.08519 8.58306 4.13096C8.63857 4.1424 8.72739 4.15385 8.8162 4.15385ZM6.04071 18C7.1176 18 7.59498 17.2562 8.93832 17.2562C10.3039 17.2562 10.6036 17.9771 11.8026 17.9771C12.9794 17.9771 13.7677 16.8557 14.5115 15.7572C15.3442 14.4984 15.6883 13.2626 15.7105 13.2053C15.6328 13.1825 13.3791 12.2327 13.3791 9.56643C13.3791 7.25493 15.1554 6.2136 15.2553 6.1335C14.0785 4.39415 12.2911 4.34838 11.8026 4.34838C10.4815 4.34838 9.40461 5.17228 8.72739 5.17228C7.99465 5.17228 7.02878 4.39415 5.88528 4.39415C3.70929 4.39415 1.5 6.24793 1.5 9.74952C1.5 11.9237 2.32155 14.2238 3.33183 15.7114C4.19778 16.9701 4.95271 18 6.04071 18Z"
			}))
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ArrowHeadsRight/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				width: "7",
				height: "12",
				viewBox: "0 0 7 12",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M0.21967 11.7803C-0.0732233 11.4874 -0.0732233 11.0126 0.21967 10.7197L4.68934 6.25L0.21967 1.78033C-0.0732233 1.48744 -0.0732233 1.01256 0.21967 0.71967C0.512563 0.426777 0.987437 0.426777 1.28033 0.71967L6.28033 5.71967C6.57322 6.01256 6.57322 6.48744 6.28033 6.78033L1.28033 11.7803C0.987437 12.0732 0.512563 12.0732 0.21967 11.7803Z",
				fill: "#D3D6DA"
			}))
		},
		"./src/reddit/icons/svgs/ArrowRightThin/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M8.56569 0.234315C8.25327 -0.0781049 7.74673 -0.0781049 7.43431 0.234315C7.12189 0.546734 7.12189 1.05327 7.43431 1.36569L13.2686 7.2H0.8C0.358172 7.2 0 7.55817 0 8C0 8.44183 0.358172 8.8 0.8 8.8H13.2686L7.43431 14.6343C7.12189 14.9467 7.12189 15.4533 7.43431 15.7657C7.74673 16.0781 8.25327 16.0781 8.56569 15.7657L15.7657 8.56569C16.0781 8.25327 16.0781 7.74673 15.7657 7.43431L8.56569 0.234315Z"
			}))
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		},
		"./src/reddit/icons/svgs/Badge/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 32 32"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M30 14C23.382 14 18 8.618 18 2C18 0.894 17.104 0 16 0C14.896 0 14 0.894 14 2C14 8.618 8.618 14 2 14C0.896 14 0 14.894 0 16C0 17.106 0.896 18 2 18C8.618 18 14 23.382 14 30C14 31.106 14.896 32 16 32C17.104 32 18 31.106 18 30C18 23.382 23.382 18 30 18C31.104 18 32 17.106 32 16C32 14.894 31.104 14 30 14"
			})))
		},
		"./src/reddit/icons/svgs/Ban/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, s, t) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Best/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.best, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), n.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return c
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, n.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), n.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), n.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), n.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/Calendar/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M17,4 C17.552,4 18,4.448 18,5 L18,8 L18,17 C18,17.552 17.552,18 17,18 L3,18 C2.448,18 2,17.552 2,17 L2,8 L2,5 C2,4.448 2.448,4 3,4 L5,4 L5,3 C5,2.448 5.448,2 6,2 C6.552,2 7,2.448 7,3 L7,4 L13,4 L13,3 C13,2.448 13.448,2 14,2 C14.552,2 15,2.448 15,3 L15,4 L17,4 Z M4,16 L16,16 L16,9 L4,9 L4,16 Z"
			})))
		},
		"./src/reddit/icons/svgs/Center/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "6",
				y: "4",
				width: "8",
				height: "8"
			})))
		},
		"./src/reddit/icons/svgs/ChatBubbles/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12.504 1.40581C10.8548 0.436577 8.91582 0.0822804 7.03046 0.405669C5.1451 0.729058 3.43503 1.70926 2.20312 3.17267C0.971219 4.63608 0.296983 6.48826 0.299833 8.40115H0.299805L0.299872 8.40828C0.313102 9.81313 0.695242 11.187 1.40423 12.3936L0.35366 15.2932C0.235566 15.6192 0.315178 15.984 0.558332 16.2311C0.801486 16.4782 1.16495 16.5636 1.49275 16.4508L4.41155 15.4461C4.8205 15.6752 5.24681 15.8723 5.68667 16.0356C6.15267 16.2085 6.67064 15.971 6.84359 15.505C7.01655 15.039 6.77899 14.521 6.31299 14.348C5.85073 14.1765 5.40714 13.9583 4.98911 13.6968C4.75881 13.5527 4.47577 13.5204 4.21892 13.6088L2.68747 14.1359L3.246 12.5944C3.34354 12.3252 3.30716 12.0256 3.14802 11.7876C2.47615 10.7827 2.1119 9.60363 2.09983 8.3949C2.09845 6.90836 2.62279 5.46917 3.58017 4.33187C4.53832 3.19367 5.86837 2.43129 7.33476 2.17976C8.80115 1.92824 10.3092 2.2038 11.5919 2.95764C12.8746 3.71149 13.8491 4.89497 14.3428 6.29846C14.5078 6.76735 15.0216 7.01375 15.4905 6.84881C15.9594 6.68386 16.2058 6.17004 16.0408 5.70115C15.4061 3.89665 14.1531 2.37504 12.504 1.40581ZM18.8305 8.17201C17.1805 7.45435 15.3385 7.30651 13.5952 7.75182C11.8518 8.19714 10.3064 9.21026 9.20265 10.6313C8.09895 12.0524 7.49983 13.8005 7.49983 15.5998H7.49979L7.49987 15.6083C7.5131 17.0132 7.89524 18.387 8.60423 19.5937L7.55365 22.4932C7.43556 22.8192 7.51517 23.184 7.75833 23.4311C8.00148 23.6782 8.36494 23.7637 8.69274 23.6508L11.6074 22.6476C13.0373 23.4576 14.6834 23.8153 16.3272 23.6671C18.1192 23.5055 19.8065 22.7519 21.1227 21.525C22.4389 20.2982 23.3092 18.668 23.5961 16.8917C23.8831 15.1154 23.5705 13.2941 22.7075 11.7152C21.8446 10.1363 20.4805 8.88968 18.8305 8.17201ZM14.0406 9.49583C15.3966 9.14947 16.8292 9.26445 18.1126 9.82264C19.3959 10.3808 20.4569 11.3504 21.1281 12.5785C21.7992 13.8065 22.0424 15.2231 21.8192 16.6046C21.596 17.9862 20.9191 19.2541 19.8954 20.2083C18.8717 21.1625 17.5594 21.7487 16.1655 21.8744C14.7717 22.0001 13.3757 21.658 12.1978 20.9023C11.9661 20.7537 11.6792 20.7192 11.4189 20.8088L9.88747 21.336L10.446 19.7944C10.5435 19.5252 10.5072 19.2256 10.348 18.9876C9.67627 17.9829 9.31203 16.8041 9.29983 15.5956C9.30077 14.1976 9.76668 12.8396 10.6242 11.7354C11.4827 10.6302 12.6847 9.84218 14.0406 9.49583Z",
				fill: "#1A1A1B"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
					}
					return e
				}).apply(this, arguments)
			}
			s.a = e => n.a.createElement("svg", c({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, n.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, n.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/CheckmarkFitted/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "3 4 14 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, s, t) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Circle/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, n.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, n.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/CirclePost/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				viewBox: "0 0 56 56",
				xmlns: "http://www.w3.org/2000/svg",
				className: e.className
			}, n.a.createElement("g", {
				transform: "translate(1 1)",
				fill: "inherit",
				stroke: "inherit",
				fillRule: "evenodd"
			}, n.a.createElement("rect", {
				x: "16",
				y: "35",
				width: "22.4",
				height: "2.8",
				rx: "1.4",
				stroke: "none"
			}), n.a.createElement("path", {
				d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
			}), n.a.createElement("circle", {
				strokeWidth: "2",
				fill: "none",
				cx: "27",
				cy: "27",
				r: "27"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
					}
					return e
				}).apply(this, arguments)
			}
			s.a = e => n.a.createElement("svg", c({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, s, t) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				className: Object(c.a)(r.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), n.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), n.a.createElement("path", {
				className: Object(c.a)(r.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), n.a.createElement("path", {
				className: Object(c.a)(r.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), n.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), n.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), n.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/Collection/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, n.a.createElement("path", {
				d: "M14 0H2a2 2 0 0 0-2 2v.78A2.979 2.979 0 0 1 2 2h12c.77 0 1.468.301 2 .78V2a2 2 0 0 0-2-2zm0 3H2a2 2 0 0 0-2 2v.78A2.979 2.979 0 0 1 2 5h12c.77 0 1.468.301 2 .78V5a2 2 0 0 0-2-2zM2 6h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => {
				let {
					className: s
				} = e;
				return n.a.createElement("svg", {
					className: s,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), n.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
					}
					return e
				}).apply(this, arguments)
			}
			s.a = e => n.a.createElement("svg", c({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controller/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M15.7658 8.30457C15.5196 6.40434 14.6685 3.93402 13.992 2.18306C13.4831 0.865888 12.2136 0 10.8015 0H5.01677C3.60472 0 2.33517 0.865888 1.82628 2.18306C1.1498 3.93402 0.298684 6.40434 0.0525311 8.30457C-0.374308 11.5997 1.94027 12 1.94027 12L5.31936 7.9067H10.4989L13.878 12C13.878 12 16.1926 11.5997 15.7658 8.30457ZM4.36141 3.50639C4.94606 3.50639 5.42001 3.03243 5.42001 2.44778C5.42001 1.86313 4.94606 1.38918 4.36141 1.38918C3.77676 1.38918 3.3028 1.86313 3.3028 2.44778C3.3028 3.03243 3.77676 3.50639 4.36141 3.50639ZM7.02295 5.43958C7.02295 6.02423 6.549 6.49818 5.96435 6.49818C5.3797 6.49818 4.90574 6.02423 4.90574 5.43958C4.90574 4.85493 5.3797 4.38097 5.96435 4.38097C6.549 4.38097 7.02295 4.85493 7.02295 5.43958ZM11.4569 3.50639C12.0416 3.50639 12.5155 3.03244 12.5155 2.44779C12.5155 1.86314 12.0416 1.38919 11.4569 1.38919C10.8723 1.38919 10.3983 1.86314 10.3983 2.44779C10.3983 3.03244 10.8723 3.50639 11.4569 3.50639ZM10.9126 5.43958C10.9126 6.02423 10.4386 6.49818 9.85398 6.49818C9.26933 6.49818 8.79538 6.02423 8.79538 5.43958C8.79538 4.85493 9.26933 4.38097 9.85398 4.38097C10.4386 4.38097 10.9126 4.85493 10.9126 5.43958Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, s, t) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Controversial/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.controversial, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
					}
					return e
				}).apply(this, arguments)
			}
			s.a = e => n.a.createElement("svg", c({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), n.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return c
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, n.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/reddit/constants/colors.ts");
			const i = function(e) {
				let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(s, "-du-left-").concat(e)
			};
			s.a = e => {
				const {
					seed: s = ""
				} = e, t = i("a", s), a = i("b", s), r = i("c", s), l = i("d", s);
				return n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("defs", null, n.a.createElement("circle", {
					id: a,
					cx: "18",
					cy: "18",
					r: "18"
				}), n.a.createElement("filter", {
					id: t,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, n.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), n.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), n.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), n.a.createElement("path", {
					id: r,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), n.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, n.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, n.a.createElement("use", {
					fill: c.a.black,
					filter: "url(#".concat(t, ")"),
					xlinkHref: "#".concat(a)
				}), n.a.createElement("use", {
					fill: c.a.white,
					xlinkHref: "#".concat(a)
				})), n.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, n.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), n.a.createElement("mask", {
					id: l,
					fill: c.a.white
				}, n.a.createElement("use", {
					xlinkHref: "#".concat(r)
				})), n.a.createElement("use", {
					fill: c.a.black,
					xlinkHref: "#".concat(r)
				}), n.a.createElement("g", {
					fill: c.a.alienblue,
					mask: "url(#".concat(l, ")")
				}, n.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/reddit/constants/colors.ts");
			const i = function(e) {
				let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(s, "-du-right-").concat(e)
			};
			s.a = e => {
				const {
					seed: s = ""
				} = e, t = i("a", s), a = i("b", s), r = i("c", s), l = i("d", s);
				return n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("defs", null, n.a.createElement("circle", {
					id: a,
					cx: "18",
					cy: "18",
					r: "18"
				}), n.a.createElement("filter", {
					id: t,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, n.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), n.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), n.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), n.a.createElement("path", {
					id: r,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), n.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, n.a.createElement("g", {
					fillRule: "nonzero",
					transform: "translate(7 4)"
				}, n.a.createElement("use", {
					fill: c.a.black,
					filter: "url(#".concat(t, ")"),
					xlinkHref: "#".concat(a)
				}), n.a.createElement("use", {
					fill: c.a.white,
					xlinkHref: "#".concat(a)
				})), n.a.createElement("g", {
					transform: "rotate(90 9.326 23.5)"
				}, n.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), n.a.createElement("mask", {
					id: l,
					fill: c.a.white
				}, n.a.createElement("use", {
					xlinkHref: "#".concat(r)
				})), n.a.createElement("use", {
					fill: c.a.black,
					xlinkHref: "#".concat(r)
				}), n.a.createElement("g", {
					fill: c.a.alienblue,
					mask: "url(#".concat(l, ")")
				}, n.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/DownToChatAvatar/index.m.less": function(e, s, t) {
			e.exports = {
				cls1: "_27ZvSsL0zi1nAja8nD5wM8",
				cls3: "qXtY7I_GoiY3yZuQSiIxk",
				cls4: "_2CRPf4Bo0p7KCRDFYv6WzO",
				cls5: "_2dYeHLcTCSuVCgU8GN_pWV",
				cls7: "_3vSXIQsi-G_3bo41eaYRjh",
				cls6: "_1mQOm7u0X9LlZoCnM5HHkJ",
				cls8: "_3fxIhlHWNlaXwlNMXtCZ-x",
				cls9: "_1L0T9MQ7u60GxCoL3DFJ4Z",
				cls10: "_1xlX8IJ47jyoodC4L9co14"
			}
		},
		"./src/reddit/icons/svgs/DownToChatAvatar/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/reddit/icons/svgs/DownToChatAvatar/index.m.less"),
				i = t.n(c);

			function r() {
				return (r = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
					}
					return e
				}).apply(this, arguments)
			}
			s.a = e => n.a.createElement("svg", r({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 60 60"
			}, e), n.a.createElement("g", null, n.a.createElement("g", {
				className: i.a.cls2
			}, n.a.createElement("path", {
				className: i.a.cls3,
				d: "M54.44-5.35A67.31,67.31,0,0,0,4,.77C-.47,3.27-4.7,6.36-7.69,10.5a20.47,20.47,0,0,0-3.52,7.88c-.5,2.47.23,5.13-.42,7.5-1.35,4.89-4.93,7.56-2.79,13.24,1.48,3.91,4.7,6.91,8.14,9.3,8.24,5.74,16.53,2.11,25.37-.67,2.62-.83,5.23-1.64,7.79-2.6C29.14,44.3,31,42.79,33.27,42a62.83,62.83,0,0,0,8.3-3.39c2.54-1.31,5-2.73,7.69-3.79,2.38-1,5.11-1.82,6.28-4.1a7.74,7.74,0,0,0,.55-4.13c-.39-4.63-2.17-9-4-13.32a40.17,40.17,0,0,0-2-4.36c-.7-1.23-1.82-2.26-2.42-3.52-1.1-2.3-1.37-5.4-2-7.87"
			}), n.a.createElement("path", {
				className: i.a.cls4,
				d: "M48.81.61C39.94,7.54,37.18,9.26,25.05,16.13,29.21,19,45.38,26.28,53.92,29.28,42.46,33.81,12.15,41-1.85,44.74c3,1.76,8.22,7.79,10.8,10.14,4,3.65,8.39,9.47,14.32,9.42a60.26,60.26,0,0,0,18-2.54c8.83-2.84,17.6-7.09,23.31-14.39a29.94,29.94,0,0,0,1.2-35.32C64.61,10.32,63,7.79,61.09,6.94,59,6,55.46,6.22,53.16,6.16"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M20,30.71A9.26,9.26,0,0,0,24.77,36a4,4,0,0,1,1.48.85,2,2,0,0,1-.12,2.48,3.39,3.39,0,0,1-2.4,1.05C20.55,40.62,18,37.7,17,35"
			}), n.a.createElement("path", {
				d: "M17,35c.11.06.44.91,1,1.78A8.17,8.17,0,0,0,20,38.84a5.9,5.9,0,0,0,3.24,1.21A3,3,0,0,0,26,38.73a1.63,1.63,0,0,0,.09-1.2,1.46,1.46,0,0,0-.87-.79,12.78,12.78,0,0,1-1.4-.68,7.84,7.84,0,0,1-1.26-.92,9.52,9.52,0,0,1-2.69-4.38c.4.52.94,1.26,1.49,1.9s1.1,1.18,1.37,1.48a6.64,6.64,0,0,0,1.86,1.5c.64.37,1.57.59,2,1.41a2.25,2.25,0,0,1-.23,2.3,3.27,3.27,0,0,1-1.83,1.14,5.52,5.52,0,0,1-2,.08A6.16,6.16,0,0,1,20.74,40a7.49,7.49,0,0,1-2.5-2.24A8.31,8.31,0,0,1,17,35Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M5.87,46.65c3.07,2.59,7.08,2.88,9,.65s.91-6.13-2.16-8.72-7.08-2.88-9-.65"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M5.41,46.45a3.56,3.56,0,0,1-2-2.69,10.5,10.5,0,0,1,.08-3.49A49.24,49.24,0,0,1,4.83,34,17.67,17.67,0,0,1,7.46,28.7a7.51,7.51,0,0,1,1.11-1.4c2.33-2.22,6.24-2.2,9.1-1.16,1.81.66,1.81,2.12,1.85,4a22.8,22.8,0,0,1-3.69,13.5"
			}), n.a.createElement("path", {
				d: "M15.82,43.62c0-.23,1.08-1.83,1.86-3.9a21.21,21.21,0,0,0,1.37-5.9,31.42,31.42,0,0,0,.05-3.77C19,28.76,19,27.39,18,26.87a6.76,6.76,0,0,0-1.73-.59A11.13,11.13,0,0,0,14.41,26a8.46,8.46,0,0,0-3.61.55,5.48,5.48,0,0,0-2.38,1.8,30.74,30.74,0,0,0-1.72,2.7,13.79,13.79,0,0,0-1.23,2.83c-.29,1-.57,2-.82,3a34.3,34.3,0,0,0-1,5.53A5,5,0,0,0,4,44.75a3,3,0,0,0,1.44,1.54A2.91,2.91,0,0,1,3.61,45a5.42,5.42,0,0,1-.78-2.73,17.89,17.89,0,0,1,.47-4.49c.23-.89.48-1.75.74-2.6a25.31,25.31,0,0,1,.84-2.5A23.26,23.26,0,0,1,7.4,28.29a6.69,6.69,0,0,1,3.86-2.73,10.58,10.58,0,0,1,4.43-.19,12.31,12.31,0,0,1,2,.52,2.7,2.7,0,0,1,1.66,1.39,5.41,5.41,0,0,1,.4,2c0,.64,0,1.27,0,1.89a22.8,22.8,0,0,1-1,6.9,17.41,17.41,0,0,1-1.51,3.35A20.12,20.12,0,0,1,15.82,43.62Z"
			}), n.a.createElement("path", {
				className: i.a.cls6,
				d: "M10.91,28.22a24.4,24.4,0,0,1,.94,2.63l-.25,0,0-3.11.35,0a10.52,10.52,0,0,0,1.83,4.62l-.44.21-.06-.16a15.52,15.52,0,0,1-.74-4.24l.7-.07A12.81,12.81,0,0,0,15.88,33l-.75.44a14,14,0,0,1-1.36-4.9l.89-.28.94,1.55,1.61,2.67L16.3,33a36.05,36.05,0,0,1-1.14-4.52l1-.28a21,21,0,0,0,2,4l-.82.42a18.77,18.77,0,0,1-.9-3.54l.77-.26a10.37,10.37,0,0,0,2,2.81l-.5.4a11.41,11.41,0,0,1-1.05-2.72L18,29a21,21,0,0,0,1.7,2.24,13.32,13.32,0,0,1-2-1.95l.29-.17a13.85,13.85,0,0,0,1.26,2.49l-.59.46a9.8,9.8,0,0,1-2.29-2.9l1-.32.14.81a16.84,16.84,0,0,0,.66,2.59l-.71.36a22.75,22.75,0,0,1-2-4.15l.53-.16A35.93,35.93,0,0,0,17,32.74l-.38.18-2.54-4.28.37-.12a13.27,13.27,0,0,0,1.27,4.68l-.36.22a13,13,0,0,1-2.67-5.2l.52,0a15.76,15.76,0,0,0,.69,4.26l-.51.24a10.5,10.5,0,0,1-1.68-4.08c0-.25-.1-.53-.13-.78l.49,0c-.06,1.18-.15,2.57-.23,3.11l-.21,0C11.18,29.33,11,28.52,10.91,28.22Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M3.23,34.05a4.89,4.89,0,0,1-.36-3.11,3.82,3.82,0,0,1,1.51-2.23A9.28,9.28,0,0,1,7,27.61c1.08-.33,4.74.59,5.06,1.91"
			}), n.a.createElement("path", {
				d: "M12,29.52a2.66,2.66,0,0,0-.88-.81,5.79,5.79,0,0,0-1.62-.61,8.19,8.19,0,0,0-2.14-.18,7.18,7.18,0,0,0-1,.31c-.35.13-.69.27-1,.42a3.82,3.82,0,0,0-2.12,2.47A5.56,5.56,0,0,0,3.33,34a2.38,2.38,0,0,1-.84-1.29,2.92,2.92,0,0,1-.13-1.37,4.44,4.44,0,0,1,1.71-2.64,8.54,8.54,0,0,1,2.44-1.12,2.85,2.85,0,0,1,1.22-.23,6.87,6.87,0,0,1,1.14.12,6.47,6.47,0,0,1,2,.66,3,3,0,0,1,.86.68A1.2,1.2,0,0,1,12,29.52Z"
			}), n.a.createElement("path", {
				d: "M33.11,8.69a1.12,1.12,0,0,1-.62.29,2.35,2.35,0,0,1-1.41-.18,10.13,10.13,0,0,1-2.31-1.75,15.24,15.24,0,0,0-1.32-1,3,3,0,0,0-.67-.33A3.76,3.76,0,0,0,26,5.53a2.73,2.73,0,0,0-2.45,1.25,7.65,7.65,0,0,0-1.28,5A4.77,4.77,0,0,0,23,14a3.39,3.39,0,0,0,1.54,1.23,2.65,2.65,0,0,1-2.41-.6,3.4,3.4,0,0,1-1.18-2,9.6,9.6,0,0,1,.81-4.89,5.25,5.25,0,0,1,3-3,3.88,3.88,0,0,1,3.69.94c.88.78,1.53,1.6,2.22,2.19A4,4,0,0,0,32,8.6,2.65,2.65,0,0,0,33.11,8.69Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M31,23.45c2.42-1.82,3.32-5.73,1.55-8.22-1.05-1.42-2.65-3-4.56-1.87"
			}), n.a.createElement("path", {
				d: "M28,13.36a1.62,1.62,0,0,1,1.2-.55,3.21,3.21,0,0,1,1.86.48,6.08,6.08,0,0,1,1.83,1.57,5.44,5.44,0,0,1,1.07,2.33,6.28,6.28,0,0,1-.59,4,5.42,5.42,0,0,1-2.26,2.37c.38-.87.87-2.13,1.13-2.53a5.16,5.16,0,0,0,1-2.64,4.64,4.64,0,0,0-.5-2.46,6.89,6.89,0,0,0-1.42-1.71,4.24,4.24,0,0,0-1.59-.93,3.43,3.43,0,0,0-1-.11A4.12,4.12,0,0,0,28,13.36Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M10.38,7.68c7.31-2.53,18.18,1.32,20.67,9,1.08,4.27.9,10.19-2.53,12.84C19.77,36.32-1.84,26.59,5,13.93"
			}), n.a.createElement("path", {
				d: "M5,13.94a4.44,4.44,0,0,1-.23.64l-.25.58-.24.77A9.27,9.27,0,0,0,4,20.23a9.85,9.85,0,0,0,2.09,4.48,15.11,15.11,0,0,0,3,2.79,21.66,21.66,0,0,0,10.81,3.74,14.5,14.5,0,0,0,5.76-.73,10.08,10.08,0,0,0,2.48-1.35,6.26,6.26,0,0,0,1.7-2.06A11.24,11.24,0,0,0,31,22.48a19.33,19.33,0,0,0-.34-4.81,9.91,9.91,0,0,0-2-4.11,13.61,13.61,0,0,0-3.28-3.06,16.91,16.91,0,0,0-3.84-2,19.08,19.08,0,0,0-4-1.06,16.86,16.86,0,0,0-7.2.39A14.78,14.78,0,0,1,18,6.69a17.43,17.43,0,0,1,6.54,2,15.24,15.24,0,0,1,5.83,5.65l.47.87.36.93a4.33,4.33,0,0,1,.28.93c.08.32.13.63.18.95a20.43,20.43,0,0,1,.26,3.72,11.81,11.81,0,0,1-2,6.79,7.54,7.54,0,0,1-2.67,2.14,11.17,11.17,0,0,1-3.11,1.08,19.94,19.94,0,0,1-11.83-1.65,15.78,15.78,0,0,1-7.82-6.94,9.27,9.27,0,0,1-.85-2.56,8.88,8.88,0,0,1,0-2.91A10.92,10.92,0,0,1,5,13.94Z"
			}), n.a.createElement("path", {
				className: i.a.cls6,
				d: "M5.47,18.27a2.52,2.52,0,0,1-.57.46v-.18a2.68,2.68,0,0,1,.69.6l.09.11s-.07.07-.11.11l-.21.2-.22.2c-.09.09,0,.2.11.22l.28.11.7.27.79.31-.84.14a.69.69,0,0,0-.18,0,.72.72,0,0,0-.25.17l-.07.09.17,0,.13,0h.07l.09,0,.77.26,1,.33-1,.44c-.33.14-.27.19-.31.21l.06,0h0l.11,0,.93.36.86.33-.8.51-.14.09s0,0,0,0l1.19.35.71.2L9.15,25c-.1.15-.06.1-.08.11l0,0s0,0,0,0h0l.24.06c.35.08.68.14,1,.19l.52.08-.19.45c0,.07-.1.19-.12.21a.07.07,0,0,1,0,0l-.09.08a.43.43,0,0,0-.09.1l0,.06h.63a6,6,0,0,1,1,.08c-.31.07-.62.19-1,.3a15.8,15.8,0,0,1-1.72.39c0-.06,0-.07,0-.16l0-.22a2.22,2.22,0,0,1,.1-.41,2.38,2.38,0,0,1,.34-.51,1.42,1.42,0,0,0,.14-.22l0-.08.41.67a2.73,2.73,0,0,1-.49-.07l-1-.25L8,25.79c-.22-.05-.51-.08-.56-.15.24-.2.53-.46.73-.66a4,4,0,0,1,.32-.46l.18.45-.89-.29-1.06-.33-.51-.19c-.08,0,0,0,0-.08L6.38,24l.2-.19a5.93,5.93,0,0,1,.87-.62l0,.34-1-.38a10,10,0,0,1-1.17-.5c.59-.35.94-.87,1.36-1v.42l-.86-.3a6.78,6.78,0,0,1-1.11-.46l-.22-.12c0-.06.12-.13.17-.19a3.19,3.19,0,0,1,.4-.33,2.44,2.44,0,0,1,.51-.26,2.16,2.16,0,0,1,.53-.12l-.06.54-.72-.32c-.11-.06-.33-.14-.47-.23A.6.6,0,0,1,4.59,20c-.13-.38.79-.81.61-.78A1.28,1.28,0,0,0,5,18.94l-.22-.25-.06-.07.06,0A6.68,6.68,0,0,1,5.47,18.27Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M14.41,9.83C15,6.68,10.85,5.27,7.89,6.28c-4.72,1.16-5.22,10.26.6,9.54"
			}), n.a.createElement("path", {
				d: "M8.49,15.83a3.38,3.38,0,0,1-2,0,7.27,7.27,0,0,1-.75-.35c-.21-.17-.43-.34-.63-.52l-.46-.58c-.12-.19-.2-.38-.29-.53A6.29,6.29,0,0,1,5.87,6.7a4.64,4.64,0,0,1,1.49-.86,6.7,6.7,0,0,1,1.57-.4A6.78,6.78,0,0,1,12,5.76,4.29,4.29,0,0,1,14.3,7.48a2.85,2.85,0,0,1,.27,2.38,3.2,3.2,0,0,0-1-2A6.68,6.68,0,0,0,12.12,7a5.48,5.48,0,0,0-4.26-.4A4.32,4.32,0,0,0,5.06,9.1c-1,2.27-.52,4.79.89,5.88a4.64,4.64,0,0,0,.61.38,4.6,4.6,0,0,0,.76.29C7.84,15.78,8.33,15.79,8.49,15.83Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M33.24,5.42c-4-.29-4.62,6.08-.28,6.25C36.81,11.83,37,5.5,33.24,5.42Z"
			}), n.a.createElement("path", {
				d: "M33.24,5.42a2.17,2.17,0,0,1,1.67.41A3.4,3.4,0,0,1,36.18,8a3.79,3.79,0,0,1-.79,3.15,3,3,0,0,1-1.55.91,4.4,4.4,0,0,1-.88.1L32.11,12a3.24,3.24,0,0,1-2.3-1.81,3.81,3.81,0,0,1-.12-2.75,3.34,3.34,0,0,1,1.55-1.9,3.21,3.21,0,0,1,2-.3,4.63,4.63,0,0,0-1.7.89,5.56,5.56,0,0,0-.85,1.21,2.77,2.77,0,0,0,.35,3.33,2.51,2.51,0,0,0,1.5.71l.42.06.4,0a2.65,2.65,0,0,0,.75-.17A2.79,2.79,0,0,0,35.65,9a3.62,3.62,0,0,0-.5-2.38,2.81,2.81,0,0,0-1-.87l-.3-.16-.28-.08Z"
			}), n.a.createElement("path", {
				className: i.a.cls4,
				d: "M16.13,19.35A2.7,2.7,0,0,1,14,16a3.25,3.25,0,0,1,3.21-2.54C21.33,13.66,19.73,20.06,16.13,19.35Z"
			}), n.a.createElement("path", {
				d: "M16.13,19.34a4.16,4.16,0,0,0,1.53-.27,3,3,0,0,0,1.43-1.56,3.28,3.28,0,0,0,0-2.59A2.19,2.19,0,0,0,17,13.76a3.09,3.09,0,0,0-2.77,2.78,2.49,2.49,0,0,0,.51,1.78,2.73,2.73,0,0,0,1.39.92,2.28,2.28,0,0,1-1.8-.64A2.35,2.35,0,0,1,13.57,17a3.82,3.82,0,0,1,2-3.33,3.11,3.11,0,0,1,3.32.23,2.45,2.45,0,0,1,.56.6,3.55,3.55,0,0,1,.29.74,3.37,3.37,0,0,1,0,1.48A3.57,3.57,0,0,1,18.43,19a2.37,2.37,0,0,1-1.31.49l-.34,0-.29,0Z"
			}), n.a.createElement("path", {
				className: i.a.cls4,
				d: "M27,21.4c-.36-1,.07-4.84,2-3.82,1.28.7.19,4-.82,4.55C27.59,22.45,27.22,22,27,21.4Z"
			}), n.a.createElement("path", {
				d: "M27,21.4c.08,0,.22.54.64.7s.83-.5,1-.76a6.26,6.26,0,0,0,.54-1.7A2.21,2.21,0,0,0,29,18.07c0-.08-.13-.11-.19-.16l-.28-.11a.59.59,0,0,0-.45.09A2.21,2.21,0,0,0,27.41,19a6.12,6.12,0,0,0-.31,2.4,2.86,2.86,0,0,1-.43-2.3,4.87,4.87,0,0,1,.61-1.23,1.28,1.28,0,0,1,1.2-.58,1.31,1.31,0,0,1,1,.69,2.24,2.24,0,0,1,.2,1.09A5.3,5.3,0,0,1,29.25,21a2.62,2.62,0,0,1-1.1,1.37.72.72,0,0,1-.53,0,.7.7,0,0,1-.4-.35A1.49,1.49,0,0,1,27,21.4Z"
			}), n.a.createElement("path", {
				d: "M26.34,24.19a12.22,12.22,0,0,1-5.91-.48,7.19,7.19,0,0,1-2.56-1.88s-.17,2-.17,2.13c0,2.74,2.73,4.42,5,2.55.55-.46,1.67-1.5,2.19-2"
			}), n.a.createElement("path", {
				d: "M24.85,24.51a9,9,0,0,1-1.28,1.37,13.06,13.06,0,0,1-1.09,1,3.48,3.48,0,0,1-1.12.57A3,3,0,0,1,18,26.31a4,4,0,0,1-.74-1.77l0-.48c0-.17,0-.33,0-.47l.06-.91a5.79,5.79,0,0,1,.07-.76l.05-.15c0-.05.06,0,.09-.05l.16,0,.07,0h0l-.09-.25h0c0-.06,0-.17.07-.18a.44.44,0,0,1,.2.07l.26.25a7,7,0,0,0,2.2,1.69,8.15,8.15,0,0,0,2.08.62,21.63,21.63,0,0,0,3.79.22,7.62,7.62,0,0,1-2.15.62,5.55,5.55,0,0,1-2,0,8.76,8.76,0,0,1-2.31-.87,9.56,9.56,0,0,1-1-.66l-.43-.36c-.14-.13-.15-.16-.24-.25l-.16-.17a.27.27,0,0,0-.07-.08s0,.06,0,.1l0,.43a8.66,8.66,0,0,0-.07,1.35,3.18,3.18,0,0,0,1,2.21,2.58,2.58,0,0,0,2,.65,3.46,3.46,0,0,0,1.77-.88C23.35,25.56,24.6,24.68,24.85,24.51Z"
			}), n.a.createElement("path", {
				className: i.a.cls4,
				d: "M19,39.36C12.27,41.12,3.41,42.68-3.4,44.22a48.19,48.19,0,0,0,10.83,9,5.38,5.38,0,0,0,1.68.65,5.09,5.09,0,0,0,3.5-1.07A27.16,27.16,0,0,0,18,47.76Q20.38,45,22.6,42.1"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M26.84,53.17a5.89,5.89,0,0,1-1.51-.63A2.4,2.4,0,0,1,24,50.1a2.1,2.1,0,0,1,1.21-1.28,6.69,6.69,0,0,1,1.77-.4,42.66,42.66,0,0,0,6.51-1.5c1-.3,1.48.1,1.87,1.06a3,3,0,0,1-.08,2.38c-1,2.21-3.9,2.87-6.12,3A7.19,7.19,0,0,1,26.84,53.17Z"
			}), n.a.createElement("path", {
				d: "M26.85,53.16a12.24,12.24,0,0,0,2.52.05,9.91,9.91,0,0,0,3.42-.88A5.13,5.13,0,0,0,34.45,51a3,3,0,0,0,.71-1.92,2.41,2.41,0,0,0-.21-1,1.67,1.67,0,0,0-.52-.76.92.92,0,0,0-.76,0l-1.09.34a37.62,37.62,0,0,1-3.84.93c-.63.12-1.27.21-1.89.29a5.35,5.35,0,0,0-1.62.39,1.39,1.39,0,0,0-.57,2.26A4.51,4.51,0,0,0,26.88,53a3.79,3.79,0,0,1-2.79-1.19,2.13,2.13,0,0,1-.58-1.68A1.88,1.88,0,0,1,24.16,49a3.44,3.44,0,0,1,1.63-.72c.55-.1,1.05-.12,1.55-.18,1-.12,1.94-.28,2.86-.47s1.8-.42,2.64-.67a4,4,0,0,1,1.34-.27,1.42,1.42,0,0,1,1.13.8,3.33,3.33,0,0,1,.36,2.48,4.14,4.14,0,0,1-1.28,2,7.48,7.48,0,0,1-3.85,1.55,9.11,9.11,0,0,1-2.17,0A5.72,5.72,0,0,1,26.85,53.16Z"
			}), n.a.createElement("path", {
				className: i.a.cls7,
				d: "M29.83,58c-.66,2.08.89,5,5.59,6.51,4.37,1.41,7.12-1.27,7.78-3.36s-1.64-3-5.4-4.18S30.48,55.9,29.83,58Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M42.73,62.91c.38-.17.38-.7.35-1.12-.16-2.17.54-4.3,1.05-6.42a35.6,35.6,0,0,0,.75-4.1A5.9,5.9,0,0,0,38,44.81a8.09,8.09,0,0,0-4.88,2.93A13.74,13.74,0,0,0,30.56,53c-.5,1.84-1.62,6-1,8"
			}), n.a.createElement("path", {
				d: "M29.56,61a2.86,2.86,0,0,1-.29-1.19,12.94,12.94,0,0,1,.13-2.54,51.74,51.74,0,0,1,1.12-5.18A11.88,11.88,0,0,1,34,46.19a8.46,8.46,0,0,1,3.19-1.76,6.94,6.94,0,0,1,3.62,0,6.25,6.25,0,0,1,4.62,7.1l-.52,2.65c-.29,1.74-.9,3.29-1.22,4.76a13.73,13.73,0,0,0-.33,2.11c0,.35,0,.66,0,1a1.78,1.78,0,0,1-.1.55.74.74,0,0,1-.41.44.91.91,0,0,0,.27-1c-.06-.33-.15-.69-.19-1.07a11.15,11.15,0,0,1,0-2.38,32.73,32.73,0,0,1,.72-3.75l.52-2.2a13.22,13.22,0,0,0,.4-2.13,5.22,5.22,0,0,0-1.31-3.69A5.58,5.58,0,0,0,40,45.07a6.12,6.12,0,0,0-3.53.45,9.37,9.37,0,0,0-4.48,4.66,30.36,30.36,0,0,0-1.75,5.56c-.2.85-.48,2-.62,3A6.91,6.91,0,0,0,29.56,61Z"
			}), n.a.createElement("path", {
				className: i.a.cls6,
				d: "M37.27,49a1.25,1.25,0,0,1-.07.34l-.06-.06.64-.33.49-.25.07,0s0,0,0,.06l0,.15.07.31.07.4s0,.12,0,.13l.12-.1a.94.94,0,0,0,.25-.3,5.09,5.09,0,0,0,.29-.7s.09.15.14.25l.5,1.35-.34-.05.1-.18,0-.09a1.54,1.54,0,0,0,.08-.19A9.75,9.75,0,0,0,40,48.48c.14.26.34.85.54,1.21l.08.15,0,.08.1.15.21.29-.45.11,0-.17,0-.26a6.58,6.58,0,0,0,0-.78,1.2,1.2,0,0,0,.25-.14l.28,0,.61,1.1.28.51-.55.11a3.38,3.38,0,0,0-.32-1.7l.53-.28a12.64,12.64,0,0,0,1.25,1.89l-.46.25a8.24,8.24,0,0,0-.31-.92c0-.09-.15-.39-.26-.62l-.33-.66,1.31.51.66.28-.18.2a1.76,1.76,0,0,0-.69-.75,1.58,1.58,0,0,1,.91.63l.16.23-.29-.07-.79-.19c-.13,0-.12,0-.12,0l.06.05s0,.08.07.15l.07.2a7.91,7.91,0,0,1,.22.78l-.42.23a13.67,13.67,0,0,1-1.26-2l.28-.14a3.85,3.85,0,0,1,.32,1.94l0,.39-.18-.34-.53-1c-.06-.09-.12-.22-.16-.28V50a3.51,3.51,0,0,1-.05.55l0,.29-.18-.23c-.15-.19-.32-.46-.41-.6l-.09-.17,0-.09,0,0v0a1.3,1.3,0,0,1-.29.63l-.18.25-.1-.3-.23-.68-.06-.15s0-.16,0-.06l-.07.14-.06.07a1.35,1.35,0,0,1-.17.17,2.07,2.07,0,0,1-.4.28l-.1.06,0-.11,0-.22c0-.28-.09-.56-.1-.67a1.38,1.38,0,0,0,0-.2L38,49c-.35.13-.72.27-.86.31h0v0Z"
			}), n.a.createElement("path", {
				d: "M44,28.63c0-.21,1.82-1.47,2.41-2.09s1.17-1.11,1.64-1.63c.25-.33.15-.3.14-.34a.06.06,0,0,0-.06,0l-.59,0-.54,0a2,2,0,0,1-.93-.08.89.89,0,0,1-.48-.6,1.08,1.08,0,0,1,.16-.8,8.24,8.24,0,0,1,.81-1c.22-.24.45-.47.68-.69a12.6,12.6,0,0,1,2.67-2A7.94,7.94,0,0,1,48.24,22,12.13,12.13,0,0,0,47,23l-.41.4c-.08.08-.17.27,0,.35a1.26,1.26,0,0,0,.4,0l.7,0H48a1.7,1.7,0,0,1,.45,0,.64.64,0,0,1,.49.64,1.28,1.28,0,0,1-.26.78,2.75,2.75,0,0,1-.45.5l-.87.79a17.69,17.69,0,0,1-1.69,1.29A9.78,9.78,0,0,1,44,28.63Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M39,27.34a5,5,0,0,0-2-2.39,3.14,3.14,0,0,0-1.32-.26,4.73,4.73,0,0,0-3.19,1.2A4.45,4.45,0,0,0,31,29.06c0,.18.05,1.71.15.5"
			}), n.a.createElement("path", {
				d: "M31.12,29.56c.05,0,.08.17.08.39a.87.87,0,0,0,0,.1v0s0,0-.09.07a.14.14,0,0,1-.15,0l0,0s0-.06,0-.08a1.62,1.62,0,0,1,0-.19c0-.14,0-.28,0-.43a5.21,5.21,0,0,1,.11-1.69,4.16,4.16,0,0,1,1-2,5,5,0,0,1,3.85-1.63,3.32,3.32,0,0,1,1.87.62,4.8,4.8,0,0,1,1.51,2.58,6.84,6.84,0,0,1-1.2-.81,5,5,0,0,1-.78-.65A2.31,2.31,0,0,0,35,25a3.78,3.78,0,0,0-2.07.78,4.64,4.64,0,0,0-1.67,3.09l-.12.92,0,.11v0h0a.13.13,0,0,0-.08,0c-.05,0,0,0-.09,0s0-.11,0-.16Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M43.74,49.05a2.43,2.43,0,0,1,2.42.74,5,5,0,0,1,1.39,2,3.31,3.31,0,0,1-.06,2.44,4,4,0,0,1-1.33,1.44,3.07,3.07,0,0,1-1.77.73A2.59,2.59,0,0,1,43.11,56a4,4,0,0,1-1.69-2.2c-.28-.93-1.57-1.62-1-2.38"
			}), n.a.createElement("path", {
				d: "M40.39,51.4c0,.06-.08.24,0,.47a2.55,2.55,0,0,0,.59.82,3.34,3.34,0,0,1,.71,1.12,2.9,2.9,0,0,0,.48.82,3.47,3.47,0,0,0,2.12,1.25A3.48,3.48,0,0,0,46.4,54.7a2.86,2.86,0,0,0,.15-3.64c-.71-1.13-1.78-2.06-2.74-1.84a1.18,1.18,0,0,1,.8-.44,2.49,2.49,0,0,1,1.14.15A3.2,3.2,0,0,1,47.22,50a4.59,4.59,0,0,1,.65,4,3.53,3.53,0,0,1-1.11,1.49,6.88,6.88,0,0,1-1.41.93,2.26,2.26,0,0,1-1.67.12,3.92,3.92,0,0,1-1.34-.77,4.18,4.18,0,0,1-.91-1.11A10.05,10.05,0,0,1,41,53.55c-.15-.29-.46-.71-.67-1.16a1.07,1.07,0,0,1-.11-.66A.74.74,0,0,1,40.39,51.4Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M56.48,39.84c.38-4-2.18-6.9-5.12-9.28a18.11,18.11,0,0,0-9.42-4.16,12.74,12.74,0,0,0-5.16.5,14.25,14.25,0,0,0-4.75,3,12.39,12.39,0,0,0-1.86,1.76,8,8,0,0,0-1.43,6.52c1.18,6,7.6,9.65,13,10.63,3.43.62,7.43.64,10.55-1.44C54.39,46,56.09,43.85,56.48,39.84Z"
			}), n.a.createElement("path", {
				d: "M56.49,39.84a8.51,8.51,0,0,1-.28,2.25A9,9,0,0,1,54,46.23a10.28,10.28,0,0,1-4.71,2.71,16,16,0,0,1-4.44.49,20.28,20.28,0,0,1-11.86-4,13,13,0,0,1-4.15-5.13,9.89,9.89,0,0,1-.53-1.59A7.59,7.59,0,0,1,28,37.07a9.05,9.05,0,0,1,.35-3.28,8,8,0,0,1,1.33-2.57,13.92,13.92,0,0,1,2-1.92,15.09,15.09,0,0,1,4.61-2.9A14.24,14.24,0,0,1,46.57,27a21.82,21.82,0,0,1,7.49,5.49,11.09,11.09,0,0,1,2.19,3.58,8.23,8.23,0,0,1,.41,3.76,9,9,0,0,0-.86-3.6,11.66,11.66,0,0,0-2.53-3.34,29.35,29.35,0,0,0-5.55-4.05A14.75,14.75,0,0,0,40,26.74a11.51,11.51,0,0,0-3.8.74,12.83,12.83,0,0,0-3.22,2A14.5,14.5,0,0,0,30.23,32a7.09,7.09,0,0,0-1.32,3.24,8.15,8.15,0,0,0,.2,3.41,9.67,9.67,0,0,0,1.36,3A11.91,11.91,0,0,0,32.6,44.1,15.11,15.11,0,0,0,35.14,46a19.85,19.85,0,0,0,5.54,2.24c3.75.85,7.56.89,10.55-.6a9.05,9.05,0,0,0,4-3.8A12.41,12.41,0,0,0,56.49,39.84Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M51.92,33a4.71,4.71,0,0,1,5-1.22c1.86.62,3,2.87,2.75,4.89a5.69,5.69,0,0,1-1.46,3.19c-.69.75-2.1,1.93-3.1,1.56"
			}), n.a.createElement("path", {
				d: "M55.1,41.44c.06,0,.24,0,.51,0a2.81,2.81,0,0,0,.94-.4,5.57,5.57,0,0,0,1.59-1.53,6,6,0,0,0,1-2.51,4.81,4.81,0,0,0-.41-2.58,4,4,0,0,0-1.33-1.63,3.75,3.75,0,0,0-1.9-.61,4.51,4.51,0,0,0-3.4,1,2.56,2.56,0,0,1,1.19-1.63A3.14,3.14,0,0,1,55,31a6.16,6.16,0,0,1,2.12.5,4.39,4.39,0,0,1,1.58,1.25A5.89,5.89,0,0,1,59.93,36a5.71,5.71,0,0,1-2.49,5,3.25,3.25,0,0,1-1.32.57A1.4,1.4,0,0,1,55.1,41.44Z"
			}), n.a.createElement("path", {
				className: i.a.cls6,
				d: "M43.86,47.39a.36.36,0,0,0,.35.23c.08,0,.18,0,.21-.33,0,0,0-.07.07-.06l.17.13.18.12.13-.21c.09-.13.21-.4.26-.3.16.56.38.59.61.63l-.12.09a2.27,2.27,0,0,0,0-.64.81.81,0,0,0,.06-.44c.06,0,.2.14.28.17l.24.34.26.38a.26.26,0,0,0,.12.12s0,0,.06-.12.08-.28-.1-1.12c.17.1.2.08.22.07a.09.09,0,0,0,0-.05l.14.12.18.21a.74.74,0,0,1,.14.2c.06.1.1.26.16.35s.18,0,.3-.05a.3.3,0,0,0,.08-.19.64.64,0,0,0,0-.25,2.59,2.59,0,0,0-.1-.4.65.65,0,0,0,.2-.21.71.71,0,0,0,.27-.09,3.23,3.23,0,0,0,.45.4l.15.11.08,0,0,0v0l-.15-.79-.18-1,1.3,1,.27.21h0v-.1l0-.18a3.26,3.26,0,0,0-.06-.38l-.21-.81,1.18.58c.15.08.07,0,.1.06l0,0v0h0V45a3.49,3.49,0,0,0,0-.57v-.18l.13-.07a.42.42,0,0,1,.48,0c.12.09.05,0,.08.07l.05.08c0,.07.15.07.12,0v-.07s0-.06.06.14L52,44.08c-.16-.48-.25-.64-.2-.74.25.17.49.33.64.41a1.26,1.26,0,0,0,.33.09.75.75,0,0,0,.26,0,1.63,1.63,0,0,0-.27-.67,1.58,1.58,0,0,1,.5.82,1.32,1.32,0,0,1-.56.13h-.28l0,.06,0,.06c.06.14-.1-.29,0-.12l.07.14,0,.07.13.33a.72.72,0,0,1,0,.36.41.41,0,0,1-.28.31.58.58,0,0,1-.38,0,.84.84,0,0,1-.35-.33,1.06,1.06,0,0,0-.18-.22s0,0,0-.06,0-.15,0-.11l.21-.16a5.44,5.44,0,0,1,0,.7,7.94,7.94,0,0,0,.06,1.07l-.56-.36L51,45.62l-.15-.09c-.06,0-.17-.11-.21-.12a4,4,0,0,1,0,.55c0,.19,0,.41,0,.6l0,.29a1,1,0,0,1-.23-.15l-1.16-.9.22,1.26,0,.23s0,0,0,.05l0,0-.11,0a3.89,3.89,0,0,1-.42-.19l-.35-.21-.16-.12a1.23,1.23,0,0,1-.2-.19c0,.1.06.2.08.29a.59.59,0,0,1,0,.26.74.74,0,0,1-.18.39.77.77,0,0,1-.38.22.52.52,0,0,1-.43-.12c-.08-.08-.09-.2-.15-.29s0-.05,0-.05l0,.08a.43.43,0,0,1,0,.16.46.46,0,0,1-.06.23.44.44,0,0,1-.24.22.37.37,0,0,1-.35-.09,1.22,1.22,0,0,1-.16-.18l-.05-.09-.1-.16c0-.06-.12-.19-.14-.19a1.24,1.24,0,0,1,0,.27c0,.07,0,.12,0,.22l0,.15-.14,0h0a.87.87,0,0,1-.46-.2.53.53,0,0,1-.16-.23l0-.07h0v0l-.07.09a1.93,1.93,0,0,1-.19.26l-.22-.19-.12-.11s0,.1,0,.07a.35.35,0,0,1-.2.18c-.07,0-.11,0-.09,0a.33.33,0,0,1-.31-.17A.21.21,0,0,1,43.86,47.39Z"
			}), n.a.createElement("path", {
				className: i.a.cls6,
				d: "M54.8,39.38a5,5,0,0,0,.16.71L54.83,40a.44.44,0,0,0,.18-.51l.25,0a1.05,1.05,0,0,0,.09.34,1.37,1.37,0,0,0,.26.4l-.32,0a1.27,1.27,0,0,0,.13-.19,1.18,1.18,0,0,0,.15-.55c.2-.07.25-.12.27-.15a1.57,1.57,0,0,0,.29,0,4.36,4.36,0,0,0,.28.64c.07.11.12.17.18.25l0,.05-.53.08a2.37,2.37,0,0,0,.09-.36,1.93,1.93,0,0,0,0-.32,2.2,2.2,0,0,0,0-.45l.3-.07.31,0a1,1,0,0,0,.39.49l-.42.29c0-.32-.06-.6-.07-.85l.4-.16a.25.25,0,0,0,.24.15c.08,0,.06-.13.1-.31a2.17,2.17,0,0,1,.12.26,1.29,1.29,0,0,1,0,.19.18.18,0,0,1,0,.1l-.08,0a.57.57,0,0,1-.42.08.7.7,0,0,1-.42-.24l.5-.2a2.09,2.09,0,0,1,.12.53v.31l0,.57-.41-.3c-.17-.12-.11-.1-.15-.15a1.38,1.38,0,0,1-.11-.24s0,.1,0,.15a3.14,3.14,0,0,1-.18.65l-.08.22-.13-.18a3,3,0,0,1-.21-.33L56,40c0-.08-.1-.26-.11-.22a.94.94,0,0,1,0,.3.4.4,0,0,1-.07.15,1.08,1.08,0,0,1-.18.24l-.13.14-.12-.15a1.7,1.7,0,0,1-.36-1l.34-.06a.66.66,0,0,1,0,.48.59.59,0,0,1-.34.32l-.14,0,0-.11A1.48,1.48,0,0,1,54.8,39.38Z"
			}), n.a.createElement("path", {
				className: i.a.cls4,
				d: "M45.58,36.55a1.63,1.63,0,0,1-.08-.37,2.88,2.88,0,0,1,.12-.92A3.38,3.38,0,0,1,46.89,33a2.43,2.43,0,0,1,3.2.53c1.39,1.59-.16,4.18-2.07,4.29a2.88,2.88,0,0,1-1.61-.33A1.85,1.85,0,0,1,45.58,36.55Z"
			}), n.a.createElement("path", {
				d: "M45.58,36.54a2.4,2.4,0,0,0,1,.94,2.8,2.8,0,0,0,1.88.14,3,3,0,0,0,1.69-1.57A2.08,2.08,0,0,0,50,33.88a2.41,2.41,0,0,0-1.61-.94,2.16,2.16,0,0,0-1.66.57A3.48,3.48,0,0,0,45.88,35a2.64,2.64,0,0,0-.22,1.49,2.27,2.27,0,0,1-.16-1.64A3,3,0,0,1,46,33.44a2.63,2.63,0,0,1,3.27-.66,2.8,2.8,0,0,1,1.13,1.08,2.31,2.31,0,0,1,.28,1.44,3.22,3.22,0,0,1-1.38,2.23,2.76,2.76,0,0,1-2.27.39A2.16,2.16,0,0,1,46,37.31,1.84,1.84,0,0,1,45.58,36.54Z"
			}), n.a.createElement("path", {
				className: i.a.cls4,
				d: "M35.34,29.49a1.81,1.81,0,0,1,1.9-.24,1.52,1.52,0,0,1,.65,1.33,2.77,2.77,0,0,1-1.82,2.71,1.51,1.51,0,0,1-2-1.76A2.63,2.63,0,0,1,35.34,29.49Z"
			}), n.a.createElement("path", {
				d: "M35.34,29.5a6.72,6.72,0,0,0-.73.81,2.6,2.6,0,0,0-.4,1.43,1.36,1.36,0,0,0,.93,1.33,1.78,1.78,0,0,0,1.62-.49,2.65,2.65,0,0,0,.71-2.71,1,1,0,0,0-1-.61,2.5,2.5,0,0,0-1.13.3,1.88,1.88,0,0,1,1.16-.7,1.29,1.29,0,0,1,1.23.47,2.16,2.16,0,0,1,.3,1.47,3.57,3.57,0,0,1-.4,1.27,2.62,2.62,0,0,1-1.88,1.4,1.58,1.58,0,0,1-1.77-1,2.45,2.45,0,0,1,.14-1.84,2.18,2.18,0,0,1,.6-.77A2.66,2.66,0,0,1,35.34,29.5Z"
			}), n.a.createElement("path", {
				d: "M36,34.9a19,19,0,0,0,8.08,2.8,20.79,20.79,0,0,1-.92,2.17A8.13,8.13,0,0,1,41.6,42a4,4,0,0,1-4.33.91c-1.18-.59-1.06-2.08-1.06-3.2a29.23,29.23,0,0,1,.4-4.38"
			}), n.a.createElement("path", {
				d: "M36.61,35.37c0,.12-.12,1.12-.2,2.29a25.35,25.35,0,0,0,0,3.23,2.29,2.29,0,0,0,.7,1.67A2.65,2.65,0,0,0,38.9,43a4.66,4.66,0,0,0,3.26-2,9.77,9.77,0,0,0,1-1.75l.4-.91.1-.22,0-.11h0l-.43-.06-.6-.11q-.6-.12-1.17-.27a18.06,18.06,0,0,1-2.15-.71A15.64,15.64,0,0,1,36,35c.66.27,1.59.66,2.49,1s1.76.56,2.2.71a15.88,15.88,0,0,0,1.67.51l.82.18.39.08.5.07.15.08h0s.06,0,0,0v0l0,.07c0,.1,0,.24-.08.37l-.24.53-.46,1a10,10,0,0,1-1.12,1.79,5.09,5.09,0,0,1-3.3,2,3.27,3.27,0,0,1-1.81-.27,2,2,0,0,1-1.07-1.37A6.46,6.46,0,0,1,36,40.14c0-.5,0-1,.06-1.48A20.63,20.63,0,0,1,36.61,35.37Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M54.28,16.26a2.92,2.92,0,0,1,.28,2.67,3.34,3.34,0,0,1-2.1,1.88,2.72,2.72,0,0,1-.86.14A3.19,3.19,0,0,1,50,20.49a2.71,2.71,0,0,1-1.62-3.15A3.16,3.16,0,0,1,52.33,15a3.38,3.38,0,0,1,2.54,2.22"
			}), n.a.createElement("path", {
				d: "M54.86,17.18a4.77,4.77,0,0,0-1.11-1.33,3.42,3.42,0,0,0-2.26-.69,2.77,2.77,0,0,0-2.27,1.48A3,3,0,0,0,48.83,18a1.87,1.87,0,0,0,.43,1.16,3.77,3.77,0,0,0,2,1.19,2.69,2.69,0,0,0,2-.53,2.62,2.62,0,0,0,1.11-1.64,2.91,2.91,0,0,0-.23-1.81,2.39,2.39,0,0,1,1,2,2.66,2.66,0,0,1-.81,2,4.28,4.28,0,0,1-2.26,1,3.51,3.51,0,0,1-2.18-.55,4,4,0,0,1-1.49-1.41,2.61,2.61,0,0,1-.3-1.92,3.65,3.65,0,0,1,2.17-2.67,3.73,3.73,0,0,1,3,.26,3.07,3.07,0,0,1,1.16,1.11A2.56,2.56,0,0,1,54.86,17.18Z"
			}), n.a.createElement("path", {
				className: i.a.cls8,
				d: "M28.91,55c0,1.3-1.84.76-2.86.65l-1.77-.19a4.85,4.85,0,0,1-1.42-.23c-.74-.34-2.58-7.68-2.95-9.25a2.41,2.41,0,0,1,.32-1.41c.27-.44.76-.34,1.2-.27l1.44.26,1.72.35c.55.13,1.08.2,1.27.8.13.37.25.74.37,1.11l.94,2.93.36,1.1c.39,1.22,1,2.39,1.3,3.62A1.89,1.89,0,0,1,28.91,55Z"
			}), n.a.createElement("path", {
				d: "M28.91,55c-.06-.07-.08-.41-.28-.91S28.2,53,27.91,52.3c-.59-1.4-1.07-3-1.41-3.93l-.88-2.44c-.11-.39-.33-.49-.76-.59l-1.33-.25c-.86-.16-1.82-.34-2.61-.44a.4.4,0,0,0-.32.1,1.67,1.67,0,0,0-.21.46,1.82,1.82,0,0,0-.1.54.78.78,0,0,0,0,.22l.08.32c.37,1.46.75,2.92,1.15,4.33a32.94,32.94,0,0,0,1.3,4c.19.32.12.35.48.43s.61.08.95.12l1.87.26a14.7,14.7,0,0,0,1.69.27,1.4,1.4,0,0,0,.69-.12.64.64,0,0,0,.27-.54.7.7,0,0,1-.16.66,1.33,1.33,0,0,1-.8.31A11.5,11.5,0,0,1,26,56l-1.74-.08a4.86,4.86,0,0,1-1.33-.18.89.89,0,0,1-.29-.15,1.06,1.06,0,0,1-.26-.29,3.15,3.15,0,0,1-.22-.46c-.13-.3-.22-.59-.32-.88-.18-.57-.35-1.14-.5-1.7C21,51.12,20.73,50,20.46,49s-.52-2-.73-3.1a2.41,2.41,0,0,1,.13-.81,1.77,1.77,0,0,1,.37-.72,1,1,0,0,1,.81-.23c.27,0,.49.07.73.11.95.16,1.85.34,2.73.51a2.29,2.29,0,0,1,1.32.52,1.57,1.57,0,0,1,.32.65l.2.6c.53,1.58,1,3.06,1.44,4.45A18.72,18.72,0,0,1,28.91,55Z"
			}), n.a.createElement("path", {
				className: i.a.cls9,
				d: "M26.58,49.75c.23.7.46,1.41.71,2.11.12.35.26.71.39,1.06,0,.12.28.67.19.75h0a5.32,5.32,0,0,1-1.18-.16l-1.26-.22-1.05-.2a1.37,1.37,0,0,1-.49-.13c-.17-.12-1.87-5.31-2.38-7a.29.29,0,0,1,.35-.36c.64.17,2.83.49,3.12.58a1.63,1.63,0,0,1,.48.13c.14.09.14.22.18.36s.16.53.24.79C26.08,48.21,26.33,49,26.58,49.75Z"
			}), n.a.createElement("path", {
				d: "M26.58,49.75c0-.09-.34-1-.67-2L25.66,47l-.12-.39c0-.13-.05-.25-.15-.3a8.59,8.59,0,0,0-1.26-.26l-1.79-.3-.46-.08c-.16-.05-.23,0-.29.07a.23.23,0,0,0,0,.14l.07.23.15.45L23,50.17l.51,1.49.27.74.14.35c0,.08,0,.09,0,.11l.14,0,2.94.56a4.14,4.14,0,0,0,.68.1c.08,0,.06,0,.07,0a1.86,1.86,0,0,0-.1-.31L27.23,52l-.69-2.22c.26.57.59,1.42.9,2.22l.46,1.12a1.34,1.34,0,0,1,.09.26.47.47,0,0,1,0,.14.37.37,0,0,1,0,.21c-.05.12-.25.12-.31.12h-.19l-2.47-.49c-.41-.1-.77-.14-1.18-.26a.26.26,0,0,1-.13-.14l-.06-.14-.11-.27L23.38,52,22,47.91l-.58-1.85a.4.4,0,0,1,.1-.5c.17-.13.37,0,.5,0l.88.16,1.67.31a8,8,0,0,1,.79.17.42.42,0,0,1,.27.35c0,.12.07.25.1.37Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M43.91,52.83c-1.93.15-3-2-4.47-2.85A3.66,3.66,0,0,0,38,49.45c-1.76-.14-2.19,1.76-2,3.17a5.54,5.54,0,0,0,2.93,4,7.69,7.69,0,0,0,5.59.51,3.27,3.27,0,0,0,2.54-3"
			}), n.a.createElement("path", {
				d: "M47,54.12a1.4,1.4,0,0,1,0,.78,2.85,2.85,0,0,1-.78,1.42,5.56,5.56,0,0,1-3.07,1.4,7.62,7.62,0,0,1-4.3-.51A6.19,6.19,0,0,1,35.72,54,4.65,4.65,0,0,1,35.78,50a2.29,2.29,0,0,1,.78-.83,2.32,2.32,0,0,1,1.09-.32,3.53,3.53,0,0,1,1.85.53,11.2,11.2,0,0,1,2.33,2.15,3.09,3.09,0,0,0,2.07,1.1,2,2,0,0,1-1.27.1,4.18,4.18,0,0,1-1.4-.66c-.83-.59-1.48-1.17-1.8-1.43a2.53,2.53,0,0,0-2.15-.76c-.69.19-1,1.06-1.1,1.84a4.84,4.84,0,0,0,1.83,4,6.46,6.46,0,0,0,3.74,1.36,6.79,6.79,0,0,0,3.41-.6,3.87,3.87,0,0,0,1.39-1.14A2.79,2.79,0,0,0,47,54.12Z"
			}), n.a.createElement("path", {
				d: "M24.54,49.69c-.13,0-.35-.76-.5-1-.07-.12-.13-.25-.19-.38a1.26,1.26,0,0,1-.16-.5.53.53,0,0,1,.23-.48.51.51,0,0,1,.62.06,1.11,1.11,0,0,1,.28.58,7.21,7.21,0,0,1,.24,2v.23l-.13,0a.5.5,0,0,1-.67-.29c.23.08.48-.07.44-.17l-.15.3a.85.85,0,0,1-.2-.47,6,6,0,0,0,0-1.12c0-.31-.11-.79-.17-.73s0,0,0,0,0,0,0,0a.69.69,0,0,0,0,.13l.14.38a4.64,4.64,0,0,1,.2.72A2.3,2.3,0,0,1,24.54,49.69Z"
			}), n.a.createElement("path", {
				d: "M25.26,50.93c-.09.07-.13.11-.1.19s.09.05.07.05,0,0,0,0,0,.09,0,0-.18-.09-.14-.08a.25.25,0,0,0,.17-.18c.32-.21.68.1.58.22a.76.76,0,0,1-.51.4.46.46,0,0,1-.41-.21.42.42,0,0,1,.13-.66.19.19,0,0,1,.21,0A.16.16,0,0,1,25.26,50.93Z"
			}), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M16.21,48.3c0-.11.63-.32,1.11-.79a1.62,1.62,0,0,0,.46-.86.93.93,0,0,0-.15-.7,1.25,1.25,0,0,0-.23-.23,2.49,2.49,0,0,0-.55-.33l-1.77-.74c.49-.06,1.25-.14,1.84-.24l.4-.1a1.68,1.68,0,0,0,.31-.11L18,44a2.56,2.56,0,0,0,1.08-.92l.05-.12s0-.11,0-.24a3.24,3.24,0,0,0-.13-.41,2.67,2.67,0,0,0-.37-.65l.72-.67a13.4,13.4,0,0,0,.86,1.18,1.37,1.37,0,0,0,.35.32,3.48,3.48,0,0,0,.61.08,5.5,5.5,0,0,0,1.21,0l1.12-.14a4.45,4.45,0,0,1-1.52.84,3.3,3.3,0,0,1-1.55.1,1.27,1.27,0,0,1-.44-.21,2.28,2.28,0,0,1-.27-.27,5.77,5.77,0,0,1-.39-.51c-.23-.33-.42-.66-.61-1l.39-.37a2.74,2.74,0,0,1,.58,1,1.86,1.86,0,0,1,.12,1.11,3,3,0,0,1-1.47,1.37l-.42.2-.26.09a2.59,2.59,0,0,1-.4.1,3.34,3.34,0,0,1,.38.17,1.36,1.36,0,0,1,.17.12,1.85,1.85,0,0,1,.29.33,1.52,1.52,0,0,1,0,1.64,2,2,0,0,1-1,.81A3.79,3.79,0,0,1,16.21,48.3Z"
			}), n.a.createElement("path", {
				className: i.a.cls8,
				d: "M8.62,33.78l.76-1,1.72-2.21A4.92,4.92,0,0,1,12,29.51a1.37,1.37,0,0,1,.5-.28,2.43,2.43,0,0,1,1.58.39c.51.21,2.57,1.48,3.06,1.76s1.08.56,1.06,1.25a1.86,1.86,0,0,1-.33.87c-.61,1-1.31,2-2,3s-3.14,4.35-3.8,5a1.1,1.1,0,0,1-.38.3c-.63.26-1.24-.24-1.77-.53L8.59,40.6l-1.52-.86c-.37-.21-1.12-.49-1.21-.94s.57-1.15.84-1.51L7.63,36"
			}), n.a.createElement("path", {
				d: "M7.63,36a4.56,4.56,0,0,1-.5.85c-.15.22-.32.49-.54.77A3.55,3.55,0,0,0,6,38.5c-.13.32.13.55.47.75l1,.53,1.69.9,1.17.6a1.77,1.77,0,0,0,1.06.35.59.59,0,0,0,.38-.25c.14-.15.28-.32.42-.5l.83-1.1c1.08-1.5,2.19-3,3.11-4.49l1.24-1.94a1.51,1.51,0,0,0,.32-.79c0-.2-.12-.35-.41-.53-1.28-.73-2.52-1.61-3.73-2.18a2.09,2.09,0,0,0-.8-.27.6.6,0,0,0-.32.07,1.36,1.36,0,0,0-.34.23,17.67,17.67,0,0,0-1.21,1.41c-.79.94-1.53,1.81-2.21,2.57a33.53,33.53,0,0,1,1.77-3.05l.5-.76a3.72,3.72,0,0,1,.57-.75,2.12,2.12,0,0,1,.76-.51,1.56,1.56,0,0,1,.79,0,16.69,16.69,0,0,1,3.32,1.85c.5.35,1,.59,1.49,1a1.3,1.3,0,0,1,.51.87,1.59,1.59,0,0,1-.23.93C17,35.24,15.86,37,14.69,38.57c-.57.8-1.13,1.56-1.69,2.29a9.73,9.73,0,0,1-.9,1.06,1.32,1.32,0,0,1-1.48.1c-1.53-.82-2.9-1.62-4.19-2.35a2.25,2.25,0,0,1-.51-.37.78.78,0,0,1-.25-.77,2.94,2.94,0,0,1,.79-1.14Z"
			}), n.a.createElement("g", {
				className: "cls10"
			}, n.a.createElement("path", {
				d: "M11.3,40.88a24.23,24.23,0,0,1-2.84-1.27l-.6-.29-.31-.17-.16-.09a.6.6,0,0,1-.21-.21.76.76,0,0,1,.09-.58l.19-.36.41-.73.84-1.41a47.55,47.55,0,0,1,4-5.69,11.25,11.25,0,0,1-1.28,2.51,37.38,37.38,0,0,0-2.37,3.3c-.34.52-.64,1-.93,1.51l-.41.72c-.12.23-.3.5-.25.58a.11.11,0,0,0,.07.06l.14.09L8,39l.59.32,1.09.59C10.23,40.21,11.11,40.78,11.3,40.88Z"
			})), n.a.createElement("path", {
				className: i.a.cls5,
				d: "M5.43,28.78a3.44,3.44,0,0,0-2.11,5.71c1.24,1.58,4.57,3.39,6.28,2.21a2.11,2.11,0,0,0,.94-1.29c.17-.94-.69-2-1.35-2.55a5.75,5.75,0,0,0-3.54-1.34c-.09,0-.22.06-.18.13"
			}), n.a.createElement("path", {
				d: "M5.47,31.66c-.06,0,0-.17.12-.19a2.36,2.36,0,0,1,.47,0,5.2,5.2,0,0,1,1.37.24,6.14,6.14,0,0,1,2.49,1.57A3.23,3.23,0,0,1,10.86,35,2.12,2.12,0,0,1,10,36.87a2.82,2.82,0,0,1-2,.6A5.89,5.89,0,0,1,6.05,37a8.39,8.39,0,0,1-2.72-1.82,4.34,4.34,0,0,1-1.26-2.93,3.4,3.4,0,0,1,1.15-2.64,4.22,4.22,0,0,1,2.18-.95,5.58,5.58,0,0,0-1.8,1.43,3.61,3.61,0,0,0-.68,1.66,3.29,3.29,0,0,0,.35,2.17,5.24,5.24,0,0,0,1.49,1.62,5.86,5.86,0,0,0,3.78,1.34c1.21-.12,2.18-1.37,1.66-2.32A4.93,4.93,0,0,0,8.1,32.4a7.54,7.54,0,0,0-1.51-.66,7.49,7.49,0,0,0-.74-.17C5.65,31.53,5.43,31.53,5.47,31.66Z"
			}), n.a.createElement("path", {
				d: "M14.69,31.63c0,.09-.34.56-.37.79s.14.17.12.12l0,0,.13-.22.26-.41s0-.09.05-.15,0-.07.09-.07l0,0c0-.05-.1-.08-.22,0a.33.33,0,0,1,.45-.34.4.4,0,0,1,.2.17.79.79,0,0,1,.07.2.42.42,0,0,1,0,.2.79.79,0,0,1-.1.21c-.21.24-.37.46-.53.67a.86.86,0,0,1-.73.46.29.29,0,0,1-.2-.29.73.73,0,0,1,0-.38,1.77,1.77,0,0,1,.3-.59A1.31,1.31,0,0,1,14.69,31.63Z"
			}), n.a.createElement("path", {
				d: "M13.77,33.64s.09,0,.14,0h0v.11a.59.59,0,0,1,0,.14c0,.2-.35.34-.56.15a.38.38,0,0,1,0-.63.25.25,0,0,1,.39.19.24.24,0,0,0-.14.1s0,0,0,0v0c.05,0,0,0,0,0s0-.07,0-.05h0l.07.17A.41.41,0,0,1,13.77,33.64Z"
			}))))
		},
		"./src/reddit/icons/svgs/DownvoteCircle/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M10.5554 7.77144L7.88871 10.4381C7.81404 10.5128 7.71652 10.5493 7.619 10.5493C7.52224 10.5493 7.42471 10.5128 7.35004 10.4381L4.68338 7.77144C4.57443 7.66249 4.54166 7.49868 4.60109 7.3562C4.65976 7.21449 4.79843 7.12077 4.95233 7.12077H6.44338V5.06896C6.44338 4.85868 6.61404 4.68801 6.82433 4.68801H8.41443C8.62471 4.68801 8.79538 4.85868 8.79538 5.06896V7.12077H10.2857C10.4403 7.12077 10.579 7.21449 10.6377 7.3562C10.6971 7.49868 10.6643 7.66249 10.5554 7.77144M7.61926 1.14285C4.04821 1.14285 1.14307 4.048 1.14307 7.61904C1.14307 11.1893 4.04821 14.0952 7.61926 14.0952C11.1903 14.0952 14.0954 11.1893 14.0954 7.61904C14.0954 4.048 11.1903 1.14285 7.61926 1.14285"
			}))
		},
		"./src/reddit/icons/svgs/DynamicThreshold/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M10.7771 0.961401C10.3769 0.466643 9.62244 0.466642 9.22221 0.961401L8.71391 1.58973C8.42377 1.9484 7.92591 2.06204 7.50887 1.86478L6.77829 1.51921C6.20302 1.2471 5.52329 1.57445 5.37735 2.19386L5.19202 2.98051C5.08623 3.42955 4.68698 3.74795 4.22565 3.75117L3.41748 3.75681C2.78112 3.76125 2.31073 4.3511 2.44801 4.97249L2.62234 5.76165C2.72186 6.21213 2.50029 6.67222 2.08605 6.87528L1.36036 7.23101C0.788947 7.51112 0.621066 8.24665 1.01436 8.74695L1.51383 9.38231C1.79895 9.745 1.79895 10.2557 1.51383 10.6184L1.01436 11.2537C0.621067 11.754 0.788947 12.4895 1.36036 12.7697L2.08605 13.1254C2.50029 13.3284 2.72186 13.7885 2.62234 14.239L2.44801 15.0282C2.31073 15.6496 2.78112 16.2394 3.41748 16.2439L4.22565 16.2495C4.68698 16.2527 5.08623 16.5711 5.19202 17.0202L5.37735 17.8068C5.52329 18.4262 6.20302 18.7536 6.77829 18.4815L7.50887 18.1359C7.92591 17.9386 8.42376 18.0523 8.71391 18.4109L9.22221 19.0393C9.62244 19.534 10.3769 19.534 10.7771 19.0393L11.2854 18.4109C11.5756 18.0523 12.0734 17.9386 12.4905 18.1359L13.221 18.4815C13.7963 18.7536 14.476 18.4262 14.622 17.8068L14.8073 17.0202C14.9131 16.5711 15.3124 16.2527 15.7737 16.2495L16.5819 16.2439C17.2182 16.2394 17.6886 15.6496 17.5513 15.0282L17.377 14.239C17.2775 13.7885 17.499 13.3284 17.9133 13.1254L18.639 12.7697C19.2104 12.4895 19.3783 11.754 18.985 11.2537L18.4855 10.6184C18.2004 10.2557 18.2004 9.745 18.4855 9.38231L18.985 8.74695C19.3783 8.24665 19.2104 7.51112 18.639 7.23101L17.9133 6.87528C17.499 6.67222 17.2775 6.21213 17.377 5.76165L17.5513 4.97249C17.6886 4.3511 17.2182 3.76125 16.5819 3.75681L15.7737 3.75117C15.3124 3.74795 14.9131 3.42956 14.8073 2.98051L14.622 2.19386C14.476 1.57445 13.7963 1.2471 13.221 1.51921L12.4905 1.86478C12.0734 2.06204 11.5756 1.94841 11.2854 1.58973L10.7771 0.961401ZM12.5231 7.71779L13.0827 8.27779C13.2391 8.43419 13.2391 8.68699 13.0827 8.84339L9.44271 12.4834C9.36471 12.5614 9.26231 12.6006 9.1599 12.6006C9.0575 12.6006 8.95551 12.5614 8.8771 12.4834L6.9171 10.5234C6.7607 10.3674 6.7607 10.1142 6.9171 9.95779L7.4771 9.39779C7.6335 9.24139 7.8867 9.24139 8.0427 9.39779L9.1599 10.515L11.9575 7.71779C12.0323 7.64259 12.1339 7.60059 12.2403 7.60059C12.3463 7.60059 12.4479 7.64259 12.5231 7.71779Z"
			})))
		},
		"./src/reddit/icons/svgs/Edit/index.m.less": function(e, s, t) {
			e.exports = {
				edit: "_3TGaJCWUjkbNuBqTHvrC05"
			}
		},
		"./src/reddit/icons/svgs/Edit/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Edit/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.edit, e.className),
				viewBox: "4 4 12 12"
			}, n.a.createElement("g", {
				transform: "translate(-68.000000, -207.000000)"
			}, n.a.createElement("path", {
				d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
			})))
		},
		"./src/reddit/icons/svgs/EditPencil/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 14 14",
				xmlns: "http://www.w3.org/2000/svg",
				version: "1.1"
			}, n.a.createElement("title", {
				id: "".concat(e.title, "-title")
			}, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M8.1168,3.0832 L10.9168,5.8832 C11.0728,6.0392 11.0728,6.2928 10.9168,6.4488 L4.0824,13.2832 C4.0072,13.3584 3.9056,13.4 3.8,13.4 L1,13.4 C0.7784,13.4 0.6,13.2216 0.6,13 L0.6,10.2 C0.6,10.0944 0.6416,9.9928 0.7168,9.9176 L7.5512,3.0832 C7.7072,2.9272 7.9608,2.9272 8.1168,3.0832 Z M13.5168,2.152 C13.9848,2.62 13.9848,3.3808 13.5168,3.8488 L12.048,5.3176 C11.9696,5.396 11.8672,5.4352 11.7656,5.4352 C11.6632,5.4352 11.5608,5.396 11.4824,5.3176 L8.6824,2.5176 C8.5264,2.3616 8.5264,2.108 8.6824,1.952 L10.1512,0.4832 C10.6192,0.0152 11.38,0.0152 11.848,0.4832 L13.5168,2.152 Z"
			})))
		},
		"./src/reddit/icons/svgs/Event/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, n.a.createElement("path", {
				d: "M4 16h12V9H4v7zM17 4h-2V3a1 1 0 0 0-2 0v1H7V3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return c
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/EyeCancel/index.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return c
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M13.6926 12.277L17.7076 16.293C18.0986 16.684 18.0986 17.316 17.7076 17.707C17.5126 17.902 17.2566 18 17.0006 18C16.7446 18 16.4886 17.902 16.2936 17.707L2.29361 3.70701C1.90261 3.31601 1.90261 2.68401 2.29361 2.29301C2.68461 1.90201 3.31661 1.90201 3.70761 2.29301L7.24661 5.83201C9.79961 4.73701 12.8686 5.21001 14.9496 7.29101L17.7076 10.049C18.0976 10.439 18.0976 11.072 17.7076 11.463C17.5116 11.658 17.2556 11.756 16.9996 11.756C16.7446 11.756 16.4886 11.658 16.2926 11.463L13.5356 8.70501C13.4987 8.66806 13.4583 8.63769 13.4178 8.60724C13.3859 8.58329 13.354 8.5593 13.3236 8.53201C13.7496 9.16801 13.9996 9.93301 13.9996 10.756C13.9996 11.296 13.8886 11.809 13.6926 12.277ZM2.29301 10.0488C1.90201 10.4398 1.90201 11.0718 2.29301 11.4628C2.68401 11.8538 3.31601 11.8538 3.70701 11.4628L5.87801 9.29081L4.46401 7.87681L2.29301 10.0488ZM6.00011 10.7559C6.00011 12.9649 7.79111 14.7559 10.0001 14.7559C10.4041 14.7559 10.7861 14.6779 11.1531 14.5669L6.17511 9.58791C6.06211 9.95791 6.00011 10.3499 6.00011 10.7559Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Fill/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "12",
				height: "12"
			})))
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_1ZVHRoTDdo57082D2GcC80"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, n.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM7.42 16h5.08c.55 0 1-.45 1-1s-.45-1-1-1H7.42c-.56 0-1 .45-1 1s.44 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_33vXt91MK_ualpifvvw_3v"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, n.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 16h5.4c.54 0 1-.45 1-1s-.46-1-1-1H3.5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_34rYEsgbWk8eOQx_bs7fTV"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingAlignRight/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, n.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM11.5 16h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_32TQMV98QwoweVXtMHpwr2"
			}
		},
		"./src/reddit/icons/svgs/FormattingBlockQuotes/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("polygon", {
				points: "8.63 4 5.36 4 2 9.8 2 16 9.2 16 9.2 9.24 6.75 9.24 8.63 4"
			}), n.a.createElement("polygon", {
				points: "15.56 9.24 17.39 4 14.16 4 10.8 9.8 10.8 16 18 16 18 9.24 15.56 9.24"
			}))
		},
		"./src/reddit/icons/svgs/FormattingBold/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_1329vPT9OSGZyEvo6Fqss"
			}
		},
		"./src/reddit/icons/svgs/FormattingBold/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingBold/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M12.44,9.72v0a3.07,3.07,0,0,0,2.67-3.22c0-2.84-2.42-3.46-5-3.46H4.51V17H10.4c2.61,0,5.09-1,5.09-3.86C15.49,10.91,14.14,10,12.44,9.72ZM7.54,5.38H9.85c1.65,0,2.31.61,2.31,1.7s-.74,1.68-2.35,1.68H7.54ZM10,14.65H7.54V10.95H9.89c1.7,0,2.59.61,2.59,1.83S11.72,14.65,10,14.65Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingCodeBlock/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "F0bObcodUF6At5SPF9bIr"
			}
		},
		"./src/reddit/icons/svgs/FormattingCodeBlock/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingCodeBlock/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M15,2H13a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1V15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V5A3,3,0,0,0,15,2Z"
			}), n.a.createElement("path", {
				d: "M2.79,5a.71.71,0,0,0,.53-.2.74.74,0,0,0,.19-.54V4.08l0-.48H5.07V8.4H4.9a1,1,0,0,0-.69.18A.79.79,0,0,0,4,9.2a.79.79,0,0,0,.21.61A1,1,0,0,0,4.9,10H7.1a1,1,0,0,0,.69-.19A.79.79,0,0,0,8,9.2a.78.78,0,0,0-.21-.61A1,1,0,0,0,7.1,8.4H6.93V3.6H8.44l0,.48a1.19,1.19,0,0,0,.18.72.7.7,0,0,0,.56.2.75.75,0,0,0,.59-.2A1,1,0,0,0,10,4.14V4.08L9.93,2.9q0-.64-.18-.77A1.06,1.06,0,0,0,9.11,2H2.89a1.06,1.06,0,0,0-.63.13q-.16.13-.18.77L2,4.08v.06a.94.94,0,0,0,.19.65A.78.78,0,0,0,2.79,5Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_8Y1-XP7A1OOfoU_mUqKcg"
			}
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: "vertical" === e.orientation ? "rotate(90, 10, 10)" : ""
			}, n.a.createElement("path", {
				d: "M3 3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3zM2 3v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"
			}), n.a.createElement("path", {
				d: "M2 15h16v1H2M2 4h16v1H2M7.17 11.4l4.24-4.23c.4-.4 1.04-.4 1.43 0 .4.4.4 1.03 0 1.42L8.6 12.82c-.4.4-1.04.4-1.43 0-.4-.4-.4-1.03 0-1.42z"
			}), n.a.createElement("path", {
				d: "M8.6 7.17l4.23 4.24c.4.4.4 1.04 0 1.43-.4.4-1.03.4-1.42 0L7.18 8.6c-.4-.4-.4-1.04 0-1.43.4-.4 1.03-.4 1.42 0z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingHeading/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_2C-VR7luDjfFqzNiJQEpk0"
			}
		},
		"./src/reddit/icons/svgs/FormattingHeading/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingHeading/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("polygon", {
				points: "6.57 3 6.57 5.57 10.73 5.57 10.73 17 13.82 17 13.82 5.57 18 5.57 18 3 6.57 3"
			}), n.a.createElement("polygon", {
				points: "2 9.65 4.68 9.65 4.68 17 6.66 17 6.66 9.65 9.35 9.65 9.35 8 2 8 2 9.65"
			}))
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), n.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_1PNKgIKbpvIWTVU3LO0PJQ"
			}
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingInsertRow/index.m.less"),
				r = t.n(i);
			const l = {
				up: "rotate(180 10 10)",
				down: "",
				left: "rotate(90 10 10)",
				right: "rotate(-90 10 10)"
			};
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: l[e.orientation || "down"]
			}, n.a.createElement("path", {
				d: "M17 17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14zm1 0V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
			}), n.a.createElement("path", {
				d: "M18 6H2V5h16M13 13H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
			}), n.a.createElement("path", {
				d: "M9 15V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_32WqBD1jOzjyQPJdFZ8Rrt"
			}
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingItalics/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("polygon", {
				points: "7.24 17 10.3 17 12.1 6.85 9.05 6.85 7.24 17"
			}), n.a.createElement("polygon", {
				points: "9.7 3 9.28 5.46 12.34 5.46 12.76 3 9.7 3"
			}))
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_1cI-FoGkiT7RNcT2BsWaRU"
			}
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingMonospace/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M18.8,9.4l-3-4a1,1,0,1,0-1.6,1.2L16.75,10,14.2,13.4a1,1,0,1,0,1.6,1.2l3-4A1,1,0,0,0,18.8,9.4Z"
			}), n.a.createElement("path", {
				d: "M5.6,5.2a1,1,0,0,0-1.4.2l-3,4a1,1,0,0,0,0,1.2l3,4a1,1,0,0,0,1.6-1.2L3.25,10,5.8,6.6A1,1,0,0,0,5.6,5.2Z"
			}), n.a.createElement("path", {
				d: "M12.24,1A1,1,0,0,0,11,1.76l-4,16A1,1,0,1,0,9,18.24l4-16A1,1,0,0,0,12.24,1Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_1KIFUYxvtUxuRVhS-FGTns"
			}
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingSpoiler/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M10,1.5A8.5,8.5,0,1,0,18.5,10,8.51,8.51,0,0,0,10,1.5Zm.71,13-.15.12-.18.1-.18.05a.73.73,0,0,1-.2,0,1,1,0,0,1-.71-.29,1,1,0,0,1-.21-.32A1,1,0,0,1,9,13.83a1,1,0,0,1,.08-.38,1,1,0,0,1,.21-.32,1,1,0,0,1,.91-.28l.18.06.18.09.15.13a1,1,0,0,1,.29.7A1,1,0,0,1,10.71,14.54Zm-.22-3.6a.5.5,0,0,1-1,0l-1-4.67A.5.5,0,0,1,9,5.67h2a.5.5,0,0,1,.49.6Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_3C1w798INaJPgFxfklr4an"
			}
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M11.86,12a1.36,1.36,0,0,1,.7,1.19c0,1.07-1,1.59-2.42,1.59a4.12,4.12,0,0,1-3.75-2.36L4.08,13.79A6.21,6.21,0,0,0,10,17.2c3.86,0,5.55-2,5.55-4.22a4,4,0,0,0-.12-1Z"
			}), n.a.createElement("path", {
				d: "M17,9H11.61l-1.09-.31c-1.82-.51-2.85-.9-2.85-2,0-.82.71-1.39,2-1.39a4.13,4.13,0,0,1,3.41,2L15.2,5.65A6.23,6.23,0,0,0,9.69,2.8c-3,0-5,1.56-5,4.14A3.31,3.31,0,0,0,5.31,9H3a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSubscript/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_1-9XTFabkhOZ_fzqaoy2SX"
			}
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_1DvEfZosXHE4A0gHsGOjEU"
			}
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingSuperscript/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M6.94,3,2,17H4.83L5.9,13.89h4.75l1,3.11h3.11L9.86,3Zm-.28,8.67L8.29,6.92h0l1.6,4.75Z"
			}), n.a.createElement("path", {
				d: "M16.06,3H14.92L13,8.49h1.11l.42-1.22h1.86l.41,1.22H18ZM14.81,6.4l.64-1.86h0l.63,1.86Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingTable/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_12fGjUaA4qUfdUrX7rnmTK"
			}
		},
		"./src/reddit/icons/svgs/FormattingTable/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingTable/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17,2H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V3A1,1,0,0,0,17,2ZM4,6H9V9.8H4Zm7,0h5V9.8H11ZM4,11.8H9V16H4ZM11,16V11.8h5V16Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingUnderline/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_2w7u00gFR4JH7UzVmD5lDJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "LfxAZX1Sm9aiJZiizUSZO"
			}
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), n.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), n.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}), n.a.createElement("path", {
				d: "M4.88,9.43a1.29,1.29,0,0,0-.13-.26,2.17,2.17,0,0,0-.19-.23,1.55,1.55,0,0,0-2.12,0,2.16,2.16,0,0,0-.19.23,2.2,2.2,0,0,0-.14.26A2.3,2.3,0,0,0,2,9.71,1.32,1.32,0,0,0,2,10a1.5,1.5,0,0,0,1.5,1.5,1.55,1.55,0,0,0,.57-.11A1.52,1.52,0,0,0,5,10a1.32,1.32,0,0,0,0-.29A1.27,1.27,0,0,0,4.88,9.43Z"
			}), n.a.createElement("path", {
				d: "M4.33,14.75l-.26-.14-.28-.08a1.42,1.42,0,0,0-.58,0l-.28.08-.26.14a2.16,2.16,0,0,0-.23.19A1.52,1.52,0,0,0,2,16a1.47,1.47,0,0,0,.44,1.06,1.52,1.52,0,0,0,.49.33,1.53,1.53,0,0,0,1.14,0,1.61,1.61,0,0,0,.49-.33A1.52,1.52,0,0,0,5,16a1.5,1.5,0,0,0-.44-1.06A2.06,2.06,0,0,0,4.33,14.75Z"
			}), n.a.createElement("path", {
				d: "M2.44,2.94A1.52,1.52,0,0,0,2,4a1.47,1.47,0,0,0,.44,1.06,1.59,1.59,0,0,0,.48.33,1.65,1.65,0,0,0,.58.11,1.55,1.55,0,0,0,.57-.11,1.5,1.5,0,0,0,.49-.33,1.5,1.5,0,0,0,0-2.12A1.55,1.55,0,0,0,2.44,2.94Z"
			}))
		},
		"./src/reddit/icons/svgs/Gif/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.78413 14.5651C4.76663 14.6972 6.07763 14.7 8 14.7C9.92237 14.7 11.2334 14.6972 12.2159 14.5651C13.161 14.4381 13.6052 14.2132 13.9092 13.9092C14.2132 13.6052 14.4381 13.161 14.5651 12.2159C14.6972 11.2334 14.7 9.92237 14.7 8C14.7 6.07763 14.6972 4.76663 14.5651 3.78413C14.4381 2.83903 14.2132 2.3948 13.9092 2.09081C13.6052 1.78682 13.161 1.56192 12.2159 1.43485C11.2334 1.30276 9.92237 1.3 8 1.3C6.07763 1.3 4.76663 1.30276 3.78413 1.43485C2.83903 1.56192 2.3948 1.78682 2.09081 2.09081C1.78682 2.3948 1.56192 2.83903 1.43485 3.78413C1.30276 4.76663 1.3 6.07763 1.3 8C1.3 9.92237 1.30276 11.2334 1.43485 12.2159C1.56192 13.161 1.78682 13.6052 2.09081 13.9092C2.3948 14.2132 2.83903 14.4381 3.78413 14.5651ZM1.17157 1.17157C0 2.34315 0 4.22876 0 8C0 11.7712 0 13.6569 1.17157 14.8284C2.34315 16 4.22876 16 8 16C11.7712 16 13.6569 16 14.8284 14.8284C16 13.6569 16 11.7712 16 8C16 4.22876 16 2.34315 14.8284 1.17157C13.6569 0 11.7712 0 8 0C4.22876 0 2.34315 0 1.17157 1.17157Z"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M6.76197 6.36433L6.03894 7.11365C5.7183 6.79814 5.32849 6.7127 5.03299 6.7127C4.31625 6.7127 3.851 7.15966 3.851 8.06015C3.851 8.65172 4.1465 9.38132 5.03299 9.38132C5.26562 9.38132 5.63028 9.33531 5.88177 9.1447V8.55313H4.76893V7.53432H6.91915V9.57851C6.64252 10.1635 5.87548 10.479 5.02671 10.479C3.28515 10.479 2.625 9.26301 2.625 8.06015C2.625 6.8573 3.37946 5.62158 5.03299 5.62158C5.64285 5.62158 6.18355 5.75304 6.76197 6.36433ZM9.02735 10.3541H7.78877V5.75304H9.02735V10.3541ZM11.3179 10.3541H10.0856V5.75304H13.4618V6.84415H11.3179V7.70521H13.3298V8.77004H11.3179V10.3541Z"
			}))
		},
		"./src/reddit/icons/svgs/Gild/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", {
				stroke: "none",
				strokeWidth: "1",
				fillRule: "evenodd"
			}, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "m15.1275768 8.9935-2.059 2.204.371 2.992c.022.181-.055.359-.203.466-.087.064-.19.096-.294.096-.072 0-.144-.016-.211-.047l-2.73200003-1.277-2.731 1.277c-.164.076-.359.059-.506-.049-.148-.107-.225-.285-.202-.466l.37-2.992-2.059-2.204c-.124-.133-.166-.323-.11-.496s.202-.302.381-.336l2.96-.573 1.46-2.639c.175-.318.69900003-.318.87500003 0l1.46 2.639 2.959.573c.179.034.325.163.381.336s.014.363-.11.496m2.911-2.985-6.586-4.786c-.869-.63-2.03700003-.63-2.90600003 0v.001l-6.586 4.785c-.869.631-1.23 1.742-.898 2.764l2.515 7.743c.332 1.021 1.278 1.708 2.352 1.708h8.14000003c1.075 0 2.02-.687 2.352-1.708l2.516-7.743c.332-1.022-.03-2.133-.899-2.764"
			}))))
		},
		"./src/reddit/icons/svgs/GoogleLogo/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456V9.20456Z",
				fill: "#4285F4"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 18C11.43 18 13.4673 17.1941 14.9564 15.8196L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18V18Z",
				fill: "#34A853"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71V10.71Z",
				fill: "#FBBC05"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955V3.57955Z",
				fill: "#EA4335"
			}))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), n.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), n.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), n.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), n.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, s, t) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Grapple/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(e.className, r.a.grapple, {
					[r.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("title", {
				id: "".concat(e.title, "-title")
			}, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		},
		"./src/reddit/icons/svgs/GroupChat/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => {
				let {
					className: s
				} = e;
				return n.a.createElement("svg", {
					className: s,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", {
					transform: "translate(-26.000000, -37.000000)"
				}, n.a.createElement("path", {
					d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
				})))
			}
		},
		"./src/reddit/icons/svgs/HamburgerClose/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => {
				let {
					className: s
				} = e;
				return n.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					height: "20",
					width: "20",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M11.41 10l4.29-4.29a1 1 0 0 0-1.41-1.41L10 8.59l-4.29-4.3a1 1 0 0 0-1.42 1.42L8.59 10l-4.3 4.29A1 1 0 1 0 5.7 15.7l4.3-4.29 4.29 4.29a1 1 0 0 0 1.41-1.41z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Hamster1/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 53 67"
			}, n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("path", {
				fill: "#000",
				d: "M36.17 15.7877c-2.1457-.6233-4.6272.5142-5.0853 2.419-.174.7268-.5168 1.0273-1.2283 1.124-1.5643.2126-2.9247.8707-4.0924 1.901-.807.7112-1.2403 1.523-1.2154 2.6702.0477 2.1067 1.0792 3.8318 2.0054 5.608.2256.432 2.0283-.631 1.111-.082-.616-1.9145-1.1994-3.6348-1.7152-5.3744-.2127-.72.0527-1.406.7364-1.754 1.2204-.6195 2.4954-1.1375 3.7456-1.702.5923-.2676.93-.057 1.27.465.821 1.2544 1.9995 2.04 3.5757 1.8642 1.6357-.1817 2.555-1.264 3.054-2.7215.6707-1.956-.2665-3.8677-2.1616-4.4176"
			}), n.a.createElement("path", {
				fill: "#FF8717",
				d: "M32.575 18.997c-.1866-1.1486.5913-2.0766 1.949-2.3235 1.4877-.2722 2.729.4466 2.9796 1.7235.2642 1.345-.7003 2.9457-1.9175 3.1832-1.341.2627-2.7447-.9416-3.011-2.5832"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M17.0857 23.965c-2.5846-.806-4.1367.6-4.4678 3.2556-.3653 2.9378.675 6.234 3.5116 7.1787 2.9598.9843 5.8344-1.5318 6.3822-4.5023.4535-2.4616-3.5227-5.3826-5.426-5.932-3.1034-.9685 1.507.4345 0 0M39.321 24.512c-2.184-2.2814-6.028.2842-7.4777 2.256-.521.7074-.9206 1.5057-1.1896 2.3475-.35 1.0897.269.94.3743 1.8643.1922 1.6742 2.1314 3.3578 3.7206 3.5912 4.7354.694 7.7125-6.7713 4.3803-10.2603.1294.1364.259.2717.3894.408-.0658-.0692-.1315-.1384-.1973-.2066-1.9745-2.0624.696.7283 0 0M18.9308 59.6326c-.1867-.0458-.3346.0093-.443.1056-.001 0-.001-.001-.002-.001-1.5598.099-3.8566.7662-4.6848 2.1695-.8887 1.507.7358 2.5096 2.148 2.674 1.553.1813 3.8715-.3148 4.4405-1.8975.439-1.2193-.0328-2.7012-1.4587-3.0506M34.37 60.348c-.242-.0358-.5174.043-.6267.2957-1.5118 3.4664 6.185 5.586 7.6074 2.4245 1.3572-3.016-4.6648-4.4187-6.9808-2.7203"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M39.9895 37.3797c-3.8707-9.353-16.7772-11.6802-23.5762-4.7352-3.177 3.245-4.373 8.2466-4.83 9.7576-1.4357 4.748-1.561 10.198.7932 14.6874 3.987 7.605 16.61 9.4605 23.792 5.505 9.1842-5.058 6.6638-18.3606 3.437-26.1424.2377.5734.4746 1.1468.7124 1.7202-.1096-.2645-.219-.528-.3285-.7925-2.1562-5.211 1.182 2.856 0 0"
			}), n.a.createElement("path", {
				fill: "#FF8717",
				d: "M26.4406 29.6162c3.5285 0 8.4696 2.1882 10.6613 4.9576 2.5828 3.2633 3.7284 8.3103 4.3175 12.3626.4945 3.4113-.4807 8.203-2.2755 11.186-2.1327 3.5455-6.732 4.5153-10.5422 4.4935-4.6918-.026-10.162-.5288-13.2412-4.577-2.77-3.643-3.234-8.4117-2.506-12.8188.401-2.4216 1.0284-5.207 1.9967-7.4706 2.105-4.9197 5.7597-8.1334 11.5893-8.1334"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M41.5915 49.6162c.03-.6952.008-1.3605-.044-2l.044 2zM37.4186 60.1975c-1.3365-.7743-2.342-2.1664-2.536-3.716-.0665-.533-.0396-1.074-.0128-1.61.0477-.9814.1004-1.9818.458-2.8933.4095-1.0428 1.1846-1.8868 1.9427-2.7034.46-.4967.9212-.9934 1.3823-1.49.7273-.7844 1.6783-1.6223 2.688-1.475-.4125-2.465-1.0336-5.1514-2.0422-7.567-1.0493 2.024-3.0208 3.9137-5.4086 2.871-.5147-.2242-.8774-.3756-1.3395-.7027-.8615-.7398-1.9138-.9498-3.157-.6288-.2702.3008-.5265.6128-.769.9368-.5157.521-1.1567.9812-1.9347.7632-1.7777-.5007-2.97-2.9346-5.1046-1.4002-.8675.624-1.9396 1.5637-3.0953 1.5082-2.0044-.096-3.3925-1.0983-4.2153-2.752-.776 2.0393-1.2024 4.4066-1.5432 6.479-.0407.2524-.0636.5098-.0974.7652.6232-.0353 1.2462-.013 1.8206.219.6776.2727 1.2182.8037 1.74 1.3225.8435.8388 1.708 1.706 2.187 2.8033.4382 1.0014.5227 2.123.5366 3.2183.015 1.0882-.0338 2.1754-.145 3.2566-.1313 1.284-.475 2.7296-1.571 3.3606 3.1707 2.359 7.553 2.7054 11.4153 2.7266 3.2216.0182 6.9976-.6774 9.4033-3.0224-.2027-.0868-.4104-.1585-.6022-.2695"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M19.3634 62.297c-.4735.8925-1.877 1.0785-2.832 1.1074-.5274.0154-1.058-.045-1.5395-.25-.894-.3822-.2403-1.1526.2322-1.5266.884-.7018 2.083-1.0513 3.2383-1.1217.114-.0072.2012-.0478.2752-.0993.846.2655.982 1.2193.6257 1.8904M39.1353 63.7074c-.7183.2857-1.607.0788-2.318-.0972-1.225-.3028-2.4647-1.2617-2.3147-2.656.0894-.0388.1756-.0948.2438-.1942 1.16-1.6788 4.4677-.7897 5.5096.6697.7194 1.008-.38 1.984-1.1207 2.2777"
			}), n.a.createElement("path", {
				fill: "#C18D42",
				d: "M17.2218 28.842c-.2698-1.599-.862-3.239-2.209-4.0722-1.519-.9397-1.5314 2.7022-1.4284 3.646.1773 1.6212.7036 4.1546 2.031 4.9962 1.0735.6814 1.7476-.4387 1.9068-1.9332.105-.9777-.1392-1.678-.3004-2.6368-.3327-1.9776.2232 1.3268 0 0"
			}), n.a.createElement("path", {
				fill: "#FF8717",
				d: "M15.5475 24.681c1.747.664 2.8352 2.0178 3.3196 3.9672.3962 1.5937.7234 3.6126-.1366 4.959 1.6953.081 3.8534-.3464 3.6123-2.602 1.339-1.9475-4.229-7.018-6.7952-6.3243M33.6698 32.7516c-.407-.451.364.404 0 0"
			}), n.a.createElement("path", {
				fill: "#C18D42",
				d: "M35.796 29.1142c-.1635.7146-.323 1.4594-.211 2.192.178 1.1545.9577 1.6425 1.872 1.0695 1.2238-.7655 1.577-2.3845 1.9186-3.693.1864-.7164.529-3.6248-.9526-2.9716-1.4423.6354-2.308 2.0174-2.627 3.4032-.238 1.0394.3698-1.6104 0 0"
			}), n.a.createElement("path", {
				fill: "#FF8717",
				d: "M35.3533 32.5596c-1.0047-1.2304-.5965-3.2887-.0174-4.64.6404-1.496 1.6748-2.6295 3.2115-3.037-.0695-.041-.136-.083-.2138-.114-1.9296-.775-4.9295 1.584-5.8667 3.0262-.6885 1.0606-2.0135 2.6206.8063 4.2594.7018.4085 1.3024.687 2.08.5054"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M32.8514 39.097c-.577.676-1.6076.6748-2.4273.0963-1.264-.8917-1.1062-3.3024.122-4.234.7017-.532 1.6705-.4205 2.1302.1645 1.53 1.946.6833 3.3772.1752 3.973"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M30.755 38.0938c-.2703-.432-.2692-1.2056-.039-1.8203.3575-.9478 1.322-.8296 1.6942.092.213.5263.1684 1.252-.0664 1.597-.7778 1.1484-1.3505.512-1.5888.1313"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M24.71 39.009c-.6662.8048-2.161.7863-3.1096.0826-1.5367-1.1425-1.2565-2.9377-.0257-3.8424.9816-.721 1.9472-.897 2.8605-.1542 1.636 1.3315 1.2372 2.751.2748 3.914"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M21.79 38.1136c-.322-.4-.3135-1.296-.0326-1.8656.4566-.922 1.1752-.7538 1.537-.016.2884.589.359 1.1686.0612 1.7166-.5324.982-1.0995.7425-1.5656.165"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M24.5598 40.2202c.8506 1.8878 3.3605 1.9104 3.9825-.235.0587-.206-.3954-.314-.471-.3215-1.1-.0954-2.188-.0502-3.278.1646-.637.1256.158.5627.459.5024.9212-.182 1.8433-.2474 2.7733-.167-.157-.1068-.314-.2136-.471-.3216-.14.4862-.3785.834-.7293 1.098-.5525.4157-1.0443-.1445-1.3017-.716-.147-.3266-1.094-.2915-.9638-.0038"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M22.5907 41.495c1.505 1.488 4.0743 1.4078 5.0584-.571-.3263-.06-.6527-.121-.98-.182-.2436 2.3982 3.9335 2.359 4.8708.653.1018-.186-.8275-.4596-.9802-.1822-.556 1.1467-1.526 1.0504-2.9105-.2888.029-.284-.8573-.428-.98-.182-.497 1.0008-1.7188 2.179-3.194.7215-.1837-.182-1.14-.221-.8843.0315M19.5653 46.516c-.473 6.7128 8.6924 4.2055 5.1774-.548-.6672-.903-.7844.151-.5202.7218.5274 1.1447.4853 2.1653-.5644 2.844-1.2192.7874-2.6945.0107-2.9834-1.216-.112-.5384-.144-1.082-.0936-1.6312.0237-.3453-.993-.4877-1.0157-.1705M29.6923 44.8475c-1.689 1.2247-1.5924 4.6386.8496 4.7633 1.13.0575 2.2874-.3435 3.0557-1.1673.3415-.3653 1.5518-2.4732.5793-2.709-1.2043-.293-1.2043 3.92-3.9756 3.001-.9725-.3227-.5812-1.1573-.5253-1.9048.0163-.218 1.4523-3.0258.0163-1.9832"
			})))
		},
		"./src/reddit/icons/svgs/Hamster2/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 53 67"
			}, n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("path", {
				fill: "#FFF",
				d: "M9.5927 33.2517c.829 1.0475-1.9245 5.7044-2.2983 5.6247-7.91-1.6942-2.065-11.142 2.2983-5.6247z"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M7.2853 38.8738c-7.8952-1.69-2.0557-11.1393 2.297-5.625.8272 1.047-.4264.8297-.9997.3446-1.1508-.97-2.3416-1.2604-3.462-.3077-1.3005 1.107-.879 3.0184.443 3.748.585.3038 1.202.5194 1.8517.6446.4058.0876.243 1.275-.13 1.1955"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M50.0333 34.034c-.1167 1.5037-.772 2.978-1.8564 3.877-.4812.3997-3.1335 1.7-3.25.3792-.1457-1.6356-1.7525-4.3107-.3047-6.062 1.7012-2.06 5.6625-1.444 5.411 1.8057z"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M38.8415 2.2205c-2.7586-.8015-5.949.661-6.538 3.11-.2237.9345-.6645 1.321-1.5794 1.4452-2.011.2734-3.7602 1.1195-5.2615 2.444-1.0375.9146-1.5946 1.9584-1.5627 3.4333.0614 2.7088 1.3876 4.9268 2.5785 7.2106.29.5554 2.6078-.8114 1.4285-.1056-.7922-2.4615-1.5422-4.6733-2.2054-6.91-.2734-.9256.0677-1.8078.9468-2.2552 1.569-.7964 3.2084-1.4625 4.8157-2.188.7615-.3443 1.196-.0734 1.633.5976 1.0553 1.6128 2.5707 2.623 4.597 2.397 2.1033-.2337 3.2852-1.6254 3.9266-3.4992.8624-2.515-.3425-4.9727-2.779-5.6797"
			}), n.a.createElement("path", {
				fill: "#FF8717",
				d: "M33.9315 6.857c-.224-1.3784.7095-2.492 2.3388-2.7883 1.7852-.3266 3.275.536 3.5755 2.0682.317 1.614-.8404 3.5347-2.301 3.8197-1.6092.3153-3.2938-1.13-3.6133-3.0997"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M14.7982 12.4437c-3.36-1.0258-5.3778.7637-5.8082 4.1436-.4748 3.739.8778 7.9344 4.5652 9.1366 3.8478 1.2526 7.5847-1.9496 8.297-5.7303.5894-3.133-4.5797-6.8506-7.054-7.55-4.0343-1.2325 1.959.5532 0 0M43.3042 13.0588c-2.8393-2.6964-7.8367.3357-9.7212 2.666-.6773.836-1.1967 1.7795-1.5465 2.7743-.455 1.288.3498 1.111.4866 2.2034.25 1.9786 2.771 3.9682 4.837 4.244 6.156.8204 10.0262-8.0023 5.6943-12.1256.1683.161.3367.321.5063.482-.0855-.0817-.171-.1634-.2564-.244-2.567-2.4376.9047.8605 0 0M16.2644 58.021c-.2208-.059-.3958.012-.5237.136-.0012 0-.0012-.0012-.0024-.0012-1.8447.1275-4.5607.9865-5.54 2.7936-1.051 1.9405.87 3.2314 2.5398 3.4432 1.8366.2334 4.5785-.4055 5.2513-2.4435.519-1.57-.0387-3.478-1.725-3.928M35.8236 58.9218c-.272-.045-.582.0543-.705.3726-1.7005 4.3674 6.9575 7.0378 8.5576 3.0546 1.5267-3.7998-5.2473-5.567-7.8526-3.4272"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M43.621 29.1977c-4.9592-11.951-21.4957-14.9246-30.207-6.0505-4.0707 4.1463-5.603 10.5374-6.1882 12.468-1.8397 6.067-2.0003 13.0306 1.016 18.767 5.1085 9.718 21.2816 12.0886 30.4837 7.0343 11.767-6.463 8.538-23.4607 4.4034-33.4042.3046.7327.608 1.4654.9127 2.198-.1402-.338-.2804-.6746-.4207-1.0126-2.7626-6.6584 1.5146 3.6495 0 0"
			}), n.a.createElement("path", {
				fill: "#FF8717",
				d: "M25.8506 19.7317c4.5594 0 10.944 2.8204 13.7762 6.3902 3.3375 4.2063 4.8178 10.7118 5.579 15.935.639 4.3973-.6212 10.5736-2.9403 14.4188-2.7558 4.57-8.6988 5.8202-13.6222 5.792-6.0627-.0332-13.131-.6814-17.1098-5.8996-3.5793-4.6956-4.179-10.8425-3.2382-16.523.518-3.1216 1.329-6.7118 2.58-9.6297 2.7202-6.3415 7.4425-10.4838 14.9753-10.4838"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M45.9425 45c.03-.6952.008-1.3605-.044-2l.044 2zM39.8434 58.144c-1.7227-.9698-3.0188-2.7136-3.2686-4.6547-.0858-.6677-.0512-1.3455-.0166-2.017.0615-1.2292.1293-2.4824.5904-3.6243.5277-1.3063 1.5267-2.3634 2.504-3.3865.593-.622 1.1872-1.2443 1.7815-1.8665.9376-.9825 2.1633-2.032 3.4645-1.8475-.5315-3.088-1.332-6.453-2.632-9.4792-1.3524 2.5355-3.8935 4.9027-6.971 3.5964-.6636-.2807-1.131-.4704-1.7266-.88-1.1105-.927-2.467-1.19-4.069-.788-.3485.377-.679.7677-.9914 1.1736-.6647.6525-1.4908 1.2292-2.4937.956-2.2913-.6272-3.8283-3.676-6.5793-1.754-1.1182.7816-2.5 1.959-3.9896 1.8893-2.5832-.12-4.3725-1.3758-5.433-3.4472-1.0002 2.5544-1.5497 5.5198-1.989 8.116-.0525.316-.082.6386-.1255.9585.803-.0443 1.606-.0165 2.3464.2743.8734.3415 1.57 1.0066 2.2425 1.6566 1.0874 1.0508 2.2016 2.137 2.819 3.5116.5648 1.2545.6737 2.6594.6916 4.0315.0193 1.3633-.0435 2.7252-.187 4.0796-.169 1.6085-.612 3.4193-2.0248 4.2097 4.087 2.9553 9.735 3.389 14.7134 3.4156 4.1523.0226 9.0192-.8486 12.12-3.7862-.2614-.1088-.529-.1986-.7762-.3377"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M16.6775 61.5205c-.5682 1.19-2.2523 1.438-3.3982 1.4765-.633.0205-1.2697-.0602-1.8475-.3336-1.0727-.5094-.2883-1.5367.2787-2.0352 1.0607-.9357 2.4997-1.4018 3.886-1.4957.137-.0097.2414-.064.3303-.1325 1.015.354 1.1784 1.6258.7507 2.5205M41.3178 62.8585c-.838.2857-1.875.079-2.7043-.097-1.429-.303-2.8756-1.2618-2.7005-2.656.1043-.039.2048-.095.2843-.1944 1.3534-1.6787 5.2124-.7896 6.428.6698.8393 1.008-.4433 1.984-1.3075 2.2777"
			}), n.a.createElement("path", {
				fill: "#C18D42",
				d: "M14.4914 18.1648c-.3373-1.9542-1.0774-3.9587-2.7615-4.977-1.8987-1.1487-1.9142 3.3025-1.7855 4.4562.2217 1.9814.8796 5.0777 2.5387 6.1064 1.342.8328 2.1846-.5362 2.3836-2.363.131-1.1948-.174-2.0508-.3754-3.2226-.416-2.417.279 1.6217 0 0"
			}), n.a.createElement("path", {
				fill: "#FF8717",
				d: "M11.8985 13.079c1.9966.812 3.2402 2.4664 3.7938 4.849.4527 1.9478.8267 4.4154-.1562 6.061 1.9376.099 4.404-.4234 4.1285-3.1804 1.5303-2.38-4.8333-8.5774-7.766-7.7295M35.0207 23.1353c-.407-.451.364.404 0 0"
			}), n.a.createElement("path", {
				fill: "#C18D42",
				d: "M38.2093 19.4974c-.2045.9188-.4038 1.8764-.264 2.8182.2225 1.4844 1.197 2.112 2.34 1.3752 1.5298-.9843 1.9712-3.066 2.3983-4.748.233-.9213.6613-4.6607-1.1908-3.8208-1.803.8168-2.885 2.5937-3.2835 4.3754-.2977 1.3363.462-2.0706 0 0"
			}), n.a.createElement("path", {
				fill: "#FF8717",
				d: "M37.7916 23.9292c-1.2917-1.538-.767-4.111-.0223-5.8.8235-1.87 2.1534-3.287 4.1292-3.7963-.0894-.0513-.175-.1037-.275-.1424-2.481-.9687-6.3378 1.98-7.5428 3.7826-.8853 1.3257-2.5888 3.2757 1.0366 5.3243.9024.5106 1.6746.859 2.6743.6317"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M34.0283 31.3767c-.721.8113-2.0094.81-3.034.1158-1.58-1.07-1.383-3.963.1523-5.081.877-.6384 2.088-.5045 2.6627.1976 1.9127 2.3352.854 4.0527.219 4.7677"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M31.106 29.4776c-.2703-.432-.2692-1.2056-.039-1.8204.3574-.9477 1.322-.8296 1.6942.092.213.5264.1684 1.252-.0664 1.597-.7778 1.1484-1.3506.5122-1.5888.1314"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M23.8934 30.2714c-.7994.9656-2.5933.9435-3.7315.099-1.844-1.371-1.508-3.5252-.031-4.6108 1.178-.8653 2.3368-1.0765 3.4327-.185 1.9633 1.5977 1.4846 3.301.3297 4.6968"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M20.141 29.4974c-.322-.4-.3135-1.2962-.0326-1.8657.4566-.922 1.1752-.7537 1.537-.0158.2884.5886.359 1.1683.061 1.7164-.5322.982-1.0993.7424-1.5654.165"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M23.9138 33.604c1.0632 1.8878 4.2007 1.9104 4.9782-.235.0733-.206-.4943-.314-.5887-.3215-1.375-.0955-2.735-.0502-4.0976.1646-.796.1257.1975.5628.574.5025 1.1512-.1822 2.304-.2475 3.4664-.167-.196-.1068-.3923-.2136-.5886-.3216-.175.486-.4732.834-.9117 1.0977-.6905.4157-1.3054-.1445-1.627-.716-.184-.3266-1.3676-.2914-1.205-.0038"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M20.9512 35.318c1.8397 2.232 4.9797 2.112 6.1826-.8564-.399-.09-.798-.1816-1.198-.273-.2976 3.5973 4.8077 3.5387 5.9532.9794.1245-.279-1.0113-.6892-1.198-.273-.6794 1.72-1.8652 1.5755-3.5572-.4334.0354-.426-1.048-.642-1.198-.273-.6075 1.5012-2.1007 3.2685-3.9037 1.0823-.2244-.2732-1.393-.3318-1.0808.047M44.4978 32.213c1.7332-2.056 5.7836-1.429 5.5353 1.821-.115 1.5038-.7808 2.977-1.8867 3.8733-.4907.3984-3.198 1.692-3.3206.3704-.1534-1.6365 4.8643-1.0204 4.2203-4.8223-.2264-1.3343-1.284-.9385-2.1835-.974-.262-.0102-3.8398 1.4795-2.3647-.2684"
			})))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Hot/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("title", null, "Hot"), n.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
			}))
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), n.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/Key/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => {
				let {
					className: s
				} = e;
				return n.a.createElement("svg", {
					className: s,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				}))
			}
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
					}
					return e
				}).apply(this, arguments)
			}
			s.a = e => n.a.createElement("svg", c({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/List/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fillRule: "evenodd",
				d: "M17,9.4802 C17.553,9.4802 18,9.9272 18,10.4802 C18,11.0332 17.553,11.4802 17,11.4802 L8,11.4802 C7.447,11.4802 7,11.0332 7,10.4802 C7,9.9272 7.447,9.4802 8,9.4802 L17,9.4802 Z M17,15.4802 C17.553,15.4802 18,15.9272 18,16.4802 C18,17.0332 17.553,17.4802 17,17.4802 L8,17.4802 C7.447,17.4802 7,17.0332 7,16.4802 C7,15.9272 7.447,15.4802 8,15.4802 L17,15.4802 Z M8,5.4802 C7.447,5.4802 7,5.0332 7,4.4802 C7,3.9272 7.447,3.4802 8,3.4802 L13.161,3.4802 L17,3.4802 C17.553,3.4802 18,3.9272 18,4.4802 C18,5.0332 17.553,5.4802 17,5.4802 L13.161,5.4802 L8,5.4802 Z M4.8799,9.9099 C4.9199,9.9999 4.9499,10.0899 4.9699,10.1899 C4.9899,10.2799 4.9999,10.3799 4.9999,10.4799 C4.9999,10.8799 4.8399,11.2609 4.5599,11.5399 C4.4199,11.6809 4.2599,11.7899 4.0689,11.8699 C3.8899,11.9399 3.6999,11.9799 3.4999,11.9799 C3.0999,11.9799 2.7199,11.8199 2.4399,11.5399 C2.1599,11.2609 1.9999,10.8799 1.9999,10.4799 C1.9999,10.3799 2.0099,10.2799 2.0299,10.1899 C2.0499,10.0899 2.0799,9.9999 2.1089,9.9099 C2.1499,9.8199 2.1999,9.7299 2.2499,9.6499 C2.3099,9.5699 2.3699,9.4899 2.4399,9.4199 C2.9999,8.8599 4.0099,8.8599 4.5599,9.4199 C4.6299,9.4899 4.6899,9.5699 4.7499,9.6499 C4.7999,9.7299 4.8499,9.8199 4.8799,9.9099 Z M4.3301,15.2302 C4.4101,15.2902 4.4901,15.3502 4.5591,15.4192 C4.8401,15.7002 5.0001,16.0802 5.0001,16.4802 C5.0001,16.8792 4.8401,17.2502 4.5591,17.5402 C4.4201,17.6802 4.2501,17.7902 4.0691,17.8702 C3.8901,17.9402 3.7001,17.9802 3.5001,17.9802 C3.3001,17.9802 3.1091,17.9402 2.9301,17.8702 C2.7401,17.7902 2.5801,17.6802 2.4391,17.5402 C2.1491,17.2502 2.0001,16.8792 2.0001,16.4802 C2.0001,16.0892 2.1601,15.7002 2.4391,15.4192 C2.5101,15.3502 2.5901,15.2902 2.6701,15.2302 C2.7501,15.1802 2.8401,15.1292 2.9301,15.0892 C3.0191,15.0602 3.1091,15.0302 3.2101,15.0102 C3.3991,14.9702 3.6001,14.9702 3.7901,15.0102 C3.8901,15.0302 3.9791,15.0602 4.0691,15.0892 C4.1601,15.1292 4.2501,15.1802 4.3301,15.2302 Z M2.4395,3.4197 C2.9905,2.8597 4.0095,2.8597 4.5595,3.4197 C4.8395,3.6997 5.0005,4.0897 5.0005,4.4807 C5.0005,4.8797 4.8395,5.2497 4.5595,5.5397 C4.4195,5.6807 4.2595,5.7897 4.0695,5.8697 C3.8895,5.9407 3.7005,5.9807 3.5005,5.9807 C3.2995,5.9807 3.1095,5.9407 2.9195,5.8697 C2.7405,5.7897 2.5805,5.6807 2.4395,5.5397 C2.1495,5.2497 2.0005,4.8797 2.0005,4.4807 C2.0005,4.0897 2.1605,3.6997 2.4395,3.4197 Z"
			})))
		},
		"./src/reddit/icons/svgs/Location/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 13 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-4 -2)"
			}))
		},
		"./src/reddit/icons/svgs/MarkdownMode/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 208 128"
			}, n.a.createElement("rect", {
				width: "198",
				height: "118",
				x: "5",
				y: "5",
				ry: "10",
				stroke: "currentColor",
				strokeWidth: "10",
				fill: "none"
			}), n.a.createElement("path", {
				d: "M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
			}))
		},
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		},
		"./src/reddit/icons/svgs/ModLogPosts/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, n.a.createElement("path", {
				d: "M15.5,7.75 L12.5,7.75 C12.224,7.75 12,7.526 12,7.25 C12,6.974 12.224,6.75 12.5,6.75 L15.5,6.75 C15.776,6.75 16,6.974 16,7.25 C16,7.526 15.776,7.75 15.5,7.75 Z M15.5,10.5 L12.5,10.5 C12.224,10.5 12,10.276 12,10 C12,9.724 12.224,9.5 12.5,9.5 L15.5,9.5 C15.776,9.5 16,9.724 16,10 C16,10.276 15.776,10.5 15.5,10.5 Z M15.5,13.25 L4.5,13.25 C4.224,13.25 4,13.026 4,12.75 C4,12.474 4.224,12.25 4.5,12.25 L15.5,12.25 C15.776,12.25 16,12.474 16,12.75 C16,13.026 15.776,13.25 15.5,13.25 Z M4.5,16 C4.224,16 4,15.776 4,15.5 C4,15.224 4.224,15 4.5,15 L15.5,15 C15.776,15 16,15.224 16,15.5 C16,15.776 15.776,16 15.5,16 L4.5,16 Z M4,4.5 C4,4.224 4.224,4 4.5,4 L9.813,4 C10.089,4 10.313,4.224 10.313,4.5 L10.313,10 C10.313,10.276 10.089,10.5 9.813,10.5 L4.5,10.5 C4.224,10.5 4,10.276 4,10 L4,4.5 Z M3,2 C2.447,2 2,2.447 2,3 L2,17 C2,17.553 2.447,18 3,18 L17,18 C17.553,18 18,17.553 18,17 L18,3 C18,2.447 17.553,2 17,2 L3,2 Z"
			})))
		},
		"./src/reddit/icons/svgs/ModQueue/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M14.5,11.1924 C14.5,13.6544 10.644,15.4524 10.204,15.6484 C10.14,15.6774 10.069,15.6924 10,15.6924 C9.931,15.6924 9.86,15.6774 9.796,15.6484 C9.356,15.4524 5.5,13.6544 5.5,11.1924 L5.5,6.8844 C5.5,6.6714 5.635,6.4824 5.837,6.4124 L9.837,5.0274 C9.942,4.9904 10.058,4.9904 10.163,5.0274 L14.163,6.4124 C14.365,6.4824 14.5,6.6714 14.5,6.8844 L14.5,11.1924 Z M16,2.0004 L4,2.0004 C2.897,2.0004 2,2.8974 2,4.0004 L2,16.0004 C2,17.1024 2.897,18.0004 4,18.0004 L16,18.0004 C17.103,18.0004 18,17.1024 18,16.0004 L18,4.0004 C18,2.8974 17.103,2.0004 16,2.0004 Z"
			}))
		},
		"./src/reddit/icons/svgs/ModQueues/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M6.0156,4.0156 L15.4926,4.0156 C15.6686,4.0156 15.8366,4.0456 15.9996,4.0886 L15.9996,2.9996 C15.9996,2.4476 15.5526,1.9996 14.9996,1.9996 L2.9996,1.9996 C2.4476,1.9996 1.9996,2.4476 1.9996,2.9996 L1.9996,14.9996 C1.9996,15.5526 2.4476,15.9996 2.9996,15.9996 L4.0886,15.9996 C4.0456,15.8366 4.0156,15.6686 4.0156,15.4926 L4.0156,6.0156 C4.0156,4.9116 4.9116,4.0156 6.0156,4.0156 M17,5 C17.553,5 18,5.447 18,6 L18,17 C18,17.553 17.553,18 17,18 L6,18 C5.447,18 5,17.553 5,17 L5,6 C5,5.447 5.447,5 6,5 L17,5 Z M15.5,12 L15.5,8.5 C15.5,8.276 15.352,8.081 15.138,8.02 L11.638,7.02 C11.548,6.994 11.452,6.994 11.362,7.02 L7.862,8.02 C7.648,8.081 7.5,8.276 7.5,8.5 L7.5,12 C7.5,14.845 11.205,15.936 11.362,15.98 C11.407,15.993 11.454,16 11.5,16 C11.546,16 11.593,15.993 11.638,15.98 C11.795,15.936 15.5,14.845 15.5,12 Z"
			}))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Modmail/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => {
				let {
					className: s
				} = e;
				return n.a.createElement("svg", {
					className: s,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M15,12 C15,13.103 14.103,14 13,14 L7,14 C5.897,14 5,13.103 5,12 L5,8 C5,7.886 5.016,7.776 5.033,7.668 L9.063,10.891 C9.339,11.111 9.669,11.222 10,11.222 C10.331,11.222 10.661,11.111 10.938,10.891 L14.967,7.668 C14.984,7.776 15,7.886 15,8 L15,12 Z M7,6 L13,6 C13.619,6 14.167,6.289 14.534,6.732 L10.313,10.109 C10.131,10.254 9.869,10.254 9.688,10.109 L5.466,6.732 C5.833,6.289 6.381,6 7,6 Z M17.274,3.038 L10.274,1.038 C10.095,0.987 9.905,0.987 9.726,1.038 L2.726,3.038 C2.296,3.161 2,3.554 2,4 L2,11 C2,16.688 9.41,18.871 9.726,18.962 C9.815,18.987 9.907,19 10,19 C10.093,19 10.185,18.987 10.274,18.962 C10.59,18.871 18,16.688 18,11 L18,4 C18,3.554 17.704,3.161 17.274,3.038 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Mute/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M9.97968,8.20936 C10.13568,8.36536 10.13568,8.61896 9.97968,8.77496 C9.90128,8.85336 9.79888,8.89256 9.69648,8.89256 C9.59488,8.89256 9.49248,8.85336 9.41408,8.77496 L7.99968,7.36056 L6.58608,8.77496 C6.50768,8.85336 6.40528,8.89256 6.30288,8.89256 C6.20048,8.89256 6.09808,8.85336 6.02048,8.77496 C5.86368,8.61896 5.86368,8.36536 6.02048,8.20936 L7.43408,6.79496 L6.02048,5.38136 C5.86368,5.22536 5.86368,4.97176 6.02048,4.81576 C6.17648,4.65976 6.43008,4.65976 6.58608,4.81576 L7.99968,6.22936 L9.41408,4.81576 C9.57008,4.65976 9.82368,4.65976 9.97968,4.81576 C10.13568,4.97176 10.13568,5.22536 9.97968,5.38136 L8.56528,6.79496 L9.97968,8.20936 Z M12.79968,1.59976 L3.19968,1.59976 C2.31808,1.59976 1.59968,2.31816 1.59968,3.19976 L1.59968,10.59496 C1.59968,11.47736 2.31808,12.19496 3.19968,12.19496 L6.10528,12.19496 L7.33408,14.03896 C7.48288,14.26136 7.73248,14.39496 7.99968,14.39496 C8.26688,14.39496 8.51728,14.26136 8.66528,14.03896 L9.89488,12.19496 L12.79968,12.19496 C13.68208,12.19496 14.39968,11.47736 14.39968,10.59496 L14.39968,3.19976 C14.39968,2.31816 13.68208,1.59976 12.79968,1.59976 L12.79968,1.59976 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Negative/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 10 10"
			}, n.a.createElement("path", {
				d: "M2,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 L10,8 C10,9.1045695 9.1045695,10 8,10 L2,10 C0.8954305,10 1.3527075e-16,9.1045695 0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M6.2103,5.78636 C6.3275,5.90356 6.3275,6.09356 6.2103,6.21076 C6.1519,6.26916 6.0751,6.29836 5.9983,6.29836 C5.9211,6.29836 5.8447,6.26916 5.7859,6.21076 L4.9983,5.42276 L4.2103,6.21076 C4.1519,6.26916 4.0751,6.29836 3.9983,6.29836 C3.9211,6.29836 3.8447,6.26916 3.7859,6.21076 C3.6687,6.09356 3.6687,5.90356 3.7859,5.78636 L4.5739,4.99836 L3.7859,4.21076 C3.6687,4.09356 3.6687,3.90356 3.7859,3.78636 C3.9031,3.66916 4.0931,3.66916 4.2103,3.78636 L4.9983,4.57436 L5.7859,3.78636 C5.9031,3.66916 6.0931,3.66916 6.2103,3.78636 C6.3275,3.90356 6.3275,4.09356 6.2103,4.21076 L5.4223,4.99836 L6.2103,5.78636 Z M7.4023,2.59436 C6.0767,1.26836 3.9195,1.26916 2.5939,2.59436 C1.2687,3.91996 1.2687,6.07716 2.5939,7.40276 C3.2567,8.06556 4.1275,8.39676 4.9983,8.39676 C5.8687,8.39676 6.7395,8.06556 7.4023,7.40276 C8.7279,6.07716 8.7279,3.91996 7.4023,2.59436 Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/New/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/NewPost/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 19 19"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.55 2.58716L16.413 4.45018C16.9354 4.97264 16.9354 5.82198 16.413 6.34445L14.7732 7.98419C14.6857 8.07171 14.5714 8.11547 14.458 8.11547C14.3436 8.11547 14.2293 8.07171 14.1418 7.98419L11.0159 4.85832C10.8418 4.68417 10.8418 4.40105 11.0159 4.2269L12.6557 2.58716C13.1781 2.0647 14.0275 2.0647 14.55 2.58716ZM9.7531 5.48975C9.92725 5.31559 10.2104 5.31559 10.3845 5.48975L13.5104 8.61561C13.6845 8.78977 13.6845 9.07288 13.5104 9.24703L5.8806 16.8768C5.79665 16.9608 5.68322 17.0072 5.56533 17.0072H2.43947C2.19208 17.0072 1.99292 16.808 1.99292 16.5607V13.4348C1.99292 13.3169 2.03936 13.2035 2.12331 13.1195L9.7531 5.48975Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Notify/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_7fz7O_5kpe94rgtJU-zES"
			}
		},
		"./src/reddit/icons/svgs/Notify/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/constants/colors.ts"),
				r = t("./src/reddit/icons/svgs/Notify/index.m.less"),
				l = t.n(r);
			s.a = e => n.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 -1 23 20",
				className: Object(c.a)(l.a.icon, e.className)
			}, n.a.createElement("g", {
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 .001 0 .001"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M17.0066821,15.4208756 C17.3661858,15.7881442 17.1117467,16.4167476 16.6028685,16.4167476 L3.3720345,16.4167476 C2.86361308,16.4167476 2.60871716,15.7881442 2.9682209,15.4208756 L2.99106104,15.3975421 C3.81467634,14.5561376 4.27741749,13.4146649 4.27741749,12.2246585 L4.27741749,8.19170369 C4.27741749,5.37768868 6.24806442,3.03500952 8.85595115,2.52214012 C8.85275353,2.48713993 8.84544468,2.45307308 8.84544468,2.41667289 C8.84544468,1.77266945 9.35660693,1.25 9.98745148,1.25 C10.618296,1.25 11.1294583,1.77266945 11.1294583,2.41667289 C11.1294583,2.45307308 11.1221494,2.48713993 11.1189518,2.52214012 C13.7268385,3.03500952 15.6974855,5.37768868 15.6974855,8.19170369 L15.6974855,12.2246585 C15.6974855,13.4146649 16.1602266,14.5561376 16.9838419,15.3975421 L17.0066821,15.4208756 Z M9.98754284,18.75 C9.05109727,18.75 8.24758128,18.1736636 7.89492959,17.3499925 L12.0801561,17.3499925 C11.7275044,18.1736636 10.9239884,18.75 9.98754284,18.75 Z"
			}), n.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), n.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? i.a.orangered : "none"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Pagination/back.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Person/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				width: "22",
				height: "24",
				viewBox: "0 0 22 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M10.6816 0C9.46749 0 8.3031 0.482306 7.44459 1.34082C6.58608 2.19932 6.10377 3.36371 6.10377 4.57783V7.08038C6.10377 8.29449 6.58608 9.45888 7.44459 10.3174C8.3031 11.1759 9.46749 11.6582 10.6816 11.6582C11.8957 11.6582 13.0601 11.1759 13.9186 10.3174C14.7771 9.45888 15.2594 8.29449 15.2594 7.08038V4.57783C15.2594 3.36371 14.7771 2.19933 13.9186 1.34082C13.0601 0.482306 11.8957 0 10.6816 0ZM8.73939 2.63562C9.2545 2.12052 9.95313 1.83113 10.6816 1.83113C11.4101 1.83113 12.1087 2.12052 12.6238 2.63562C13.1389 3.15073 13.4283 3.84936 13.4283 4.57783V7.08038C13.4283 7.80885 13.1389 8.50748 12.6238 9.02258C12.1087 9.53769 11.4101 9.82707 10.6816 9.82707C9.95313 9.82707 9.2545 9.53769 8.73939 9.02258C8.22429 8.50748 7.9349 7.80885 7.9349 7.08038V4.57783C7.9349 3.84936 8.22429 3.15073 8.73939 2.63562Z",
				fill: "#1A1A1B"
			}), n.a.createElement("path", {
				d: "M5.79858 13.6236C4.2607 13.6236 2.78581 14.2345 1.69837 15.322C0.610921 16.4094 0 17.8843 0 19.4222V23.0844C0 23.5901 0.409913 24 0.915566 24C1.42122 24 1.83113 23.5901 1.83113 23.0844V19.4222C1.83113 18.3699 2.24913 17.3608 2.99317 16.6168C3.73721 15.8727 4.74635 15.4547 5.79858 15.4547H15.5646C16.6169 15.4547 17.626 15.8727 18.37 16.6168C19.1141 17.3608 19.5321 18.3699 19.5321 19.4222V23.0844C19.5321 23.5901 19.942 24 20.4476 24C20.9533 24 21.3632 23.5901 21.3632 23.0844V19.4222C21.3632 17.8843 20.7523 16.4094 19.6648 15.322C18.5774 14.2345 17.1025 13.6236 15.5646 13.6236H5.79858Z",
				fill: "#1A1A1B"
			}))
		},
		"./src/reddit/icons/svgs/Pin/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M18.71,7.75,17.24,6.29,13.71,2.76,12.25,1.29a1,1,0,0,0-1.41,0L10,2.15a1,1,0,0,0-.26,1l.46,1.78L6.89,8.17,5.11,7.71a1,1,0,0,0-1,.26l-.86.86a1,1,0,0,0,0,1.41l1.47,1.47.62.62L.6,18.7a.5.5,0,0,0,.7.7l6.37-4.78.62.62,1.47,1.47a1,1,0,0,0,1.41,0l.86-.86a1,1,0,0,0,.26-1l-.46-1.78,3.28-3.28,1.78.46a1,1,0,0,0,.25,0,1,1,0,0,0,.71-.29l.86-.86A1,1,0,0,0,18.71,7.75Z"
			})))
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
					}
					return e
				}).apply(this, arguments)
			}
			s.a = e => n.a.createElement("svg", c({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), n.a.createElement("title", null, "Planet"), n.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/PlusCircle/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 36 36",
				version: "1.1"
			}, n.a.createElement("circle", {
				cx: "18",
				cy: "18",
				fill: "#fff",
				r: "17.5",
				stroke: "inherit"
			}), n.a.createElement("path", {
				clipRule: "evenodd",
				d: "m25.2 16.8001h-6v-6c0-.6624-.5364-1.2-1.2-1.2s-1.2.5376-1.2 1.2v6h-6c-.6636 0-1.20002.5376-1.20002 1.2s.53642 1.2 1.20002 1.2h6v6c0 .6624.5364 1.2 1.2 1.2s1.2-.5376 1.2-1.2v-6h6c.6636 0 1.2-.5376 1.2-1.2s-.5364-1.2-1.2-1.2z",
				fill: "inherit",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/PositionCenter/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "7",
				y: "7",
				width: "6",
				height: "6"
			})))
		},
		"./src/reddit/icons/svgs/PositionLeft/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "7",
				width: "6",
				height: "6"
			})))
		},
		"./src/reddit/icons/svgs/PositionRight/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_1dCUcobmYK3gyzqbl9T8UR"
			}
		},
		"./src/reddit/icons/svgs/PositionRight/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/PositionRight/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(e.className, r.a.icon),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10",
				y: "7",
				width: "6",
				height: "6"
			})))
		},
		"./src/reddit/icons/svgs/Positive/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 10 10"
			}, n.a.createElement("path", {
				d: "M2,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 L10,8 C10,9.1045695 9.1045695,10 8,10 L2,10 C0.8954305,10 1.3527075e-16,9.1045695 0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M8.0828,3.27736 L7.5232,2.71736 C7.448,2.64216 7.3464,2.60016 7.2404,2.60016 C7.134,2.60016 7.0324,2.64216 6.9576,2.71736 L4.16,5.51456 L3.0428,4.39736 C2.8868,4.24096 2.6336,4.24096 2.4772,4.39736 L1.9172,4.95736 C1.7608,5.11376 1.7608,5.36696 1.9172,5.52296 L3.8772,7.48296 C3.9556,7.56096 4.0576,7.60016 4.16,7.60016 C4.2624,7.60016 4.3648,7.56096 4.4428,7.48296 L8.0828,3.84296 C8.2392,3.68656 8.2392,3.43376 8.0828,3.27736 Z"
			}))
		},
		"./src/reddit/icons/svgs/PremiumLogo/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 558 98",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M355.8812 43.427c0 1.075-.265 2.029-.791 2.863-.527.833-1.34.25-2.437.25-1.181 0-1.083.694-1.705.082-.623-.611-.933-1.287-.933-2.025 0-.463-.964-.886-.89-1.266.074-.379.143-.759.206-1.138-.992 0-2.151.4-3.48 1.202-1.329.802-2.458 1.94-3.386 3.417v18.162c0 .738.143 1.34.428 1.803.284.464.732.812 1.344 1.045.527.21 1.207.369 2.04.474.833.106 1.556.18 2.168.221v2.089h-16.453v-2.089c.485-.041.986-.084 1.503-.126.517-.042.965-.126 1.345-.253.59-.19 1.028-.522 1.312-.995.286-.474.428-1.091.428-1.849V46.048c0-.653-.153-1.297-.459-1.928-.305-.632-.733-1.137-1.281-1.517-.401-.252-.876-.438-1.424-.553-.549-.115-1.139-.195-1.772-.237v-2.089l10.379-.695.442.443v4.397h.158c1.308-1.708 2.764-3.005 4.366-3.891 1.604-.887 3.07-1.329 4.399-1.329 1.329 0 2.409.432 3.243 1.298.833.865 1.25 2.024 1.25 3.48M380.264 51.3684c0-1.178-.101-2.439-.301-3.785-.201-1.346-.522-2.471-.965-3.375-.485-.968-1.15-1.756-1.993-2.366-.845-.611-1.93-.915-3.26-.915-2.214 0-4.054.92-5.52 2.759-1.467 1.84-2.263 4.401-2.39 7.682h14.429zm6.992 11.896c-1.307 2.49-3.058 4.473-5.252 5.95-2.194 1.475-4.715 2.215-7.562 2.215-2.511 0-4.709-.444-6.597-1.331-1.889-.884-3.444-2.087-4.667-3.606-1.224-1.519-2.136-3.29-2.737-5.315-.601-2.026-.902-4.166-.902-6.424 0-2.025.322-4.012.965-5.964.644-1.95 1.587-3.706 2.832-5.269 1.202-1.497 2.695-2.705 4.477-3.622 1.782-.918 3.781-1.376 5.996-1.376 2.278 0 4.229.359 5.853 1.075 1.624.718 2.943 1.699 3.956 2.943.969 1.182 1.693 2.574 2.167 4.177.475 1.603.712 3.343.712 5.22v2.089h-20.662c0 2.051.196 3.911.586 5.581.39 1.67 1.007 3.14 1.851 4.407.823 1.227 1.898 2.195 3.227 2.903 1.329.709 2.911 1.062 4.746 1.062 1.877 0 3.497-.44 4.857-1.32 1.361-.88 2.674-2.465 3.939-4.755l2.215 1.36zM444.2415 70.6057h-15.188v-2.089c.485-.041.975-.084 1.471-.126.495-.042.934-.126 1.314-.253.59-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.502-3.887-1.503-5.078-1.002-1.191-2.252-1.787-3.75-1.787-1.033 0-2.004.158-2.91.474-.907.317-1.74.759-2.5 1.329-.612.464-1.123.964-1.534 1.503-.412.538-.724.986-.934 1.344v18.004c0 .738.126 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.923.333 1.313.428.39.095.902.164 1.534.205v2.089h-14.871v-2.089c.486-.041.954-.084 1.409-.126.453-.042.87-.126 1.25-.253.589-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.503-3.887-1.507-5.078-1.005-1.191-2.258-1.787-3.759-1.787-1.036 0-2.009.163-2.918.49-.909.326-1.744.775-2.506 1.344-.612.465-1.131.986-1.553 1.566-.423.58-.741 1.019-.952 1.314v17.877c0 .717.148 1.318.443 1.803.296.486.738.854 1.329 1.108.443.211.896.369 1.36.474.464.106.982.18 1.551.221v2.089h-15.156v-2.089c.485-.041.986-.084 1.503-.126.516-.042.966-.126 1.344-.253.591-.189 1.029-.521 1.314-.995.285-.474.427-1.091.427-1.849v-19.373c0-.673-.154-1.279-.458-1.816-.307-.538-.734-.996-1.283-1.375-.4-.253-.896-.458-1.486-.616a9.5368 9.5368 0 0 0-1.836-.301v-2.089l10.442-.695.443.443v4.461h.222c.526-.527 1.171-1.149 1.929-1.867.76-.717 1.466-1.297 2.12-1.74.739-.506 1.662-.928 2.769-1.266 1.107-.337 2.305-.506 3.591-.506 2.025 0 3.765.543 5.221 1.629 1.456 1.087 2.5 2.401 3.132 3.94.758-.739 1.427-1.387 2.006-1.946.579-.558 1.342-1.155 2.29-1.788.8-.548 1.742-.991 2.827-1.329 1.085-.337 2.29-.506 3.618-.506 2.631 0 4.716.865 6.254 2.594 1.538 1.73 2.306 4.389 2.306 7.975v15.851c0 .738.127 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.965.333 1.439.428.475.095 1.008.164 1.599.205v2.089zM461.5892 68.2805c-.439-.116-.89-.27-1.351-.459-.607-.232-1.052-.59-1.336-1.076-.282-.485-.423-1.096-.423-1.835v-23.439l-.444-.443-11.01.695v2.089c.632.042 1.329.154 2.088.332.759.179 1.339.396 1.741.648.547.379.974.847 1.281 1.406.306.559.459 1.175.459 1.85v17.246c0 .757-.143 1.375-.428 1.848-.284.474-.723.806-1.312.995-.38.127-.828.211-1.345.253-.518.042-1.019.085-1.503.126v2.089h15.061v-2.089c-.545-.041-1.038-.121-1.478-.236M500.3714 70.0364l-10.188.695-.475-.442v-3.955h-.19c-.505.527-1.074 1.092-1.706 1.692-.631.602-1.358 1.145-2.179 1.63-.949.569-1.865 1.001-2.748 1.298-.885.295-2.138.442-3.759.442-2.759 0-4.859-.901-6.303-2.702-1.442-1.802-2.163-4.42-2.163-7.854v-14.919c0-.758-.143-1.395-.43-1.911-.287-.517-.706-.964-1.257-1.344-.383-.253-.861-.437-1.434-.553-.573-.116-1.178-.194-1.814-.237v-2.088l10.409-.76.474.444v21.673c0 2.257.507 3.955 1.519 5.094 1.013 1.139 2.225 1.709 3.639 1.709 1.16 0 2.194-.18 3.101-.537.906-.358 1.666-.779 2.277-1.266.571-.441 1.071-.91 1.503-1.405.433-.495.765-.953.997-1.375v-17.665c0-.695-.147-1.312-.443-1.85-.295-.537-.707-.995-1.233-1.374-.38-.252-.945-.405-1.694-.458-.749-.052-1.587-.099-2.514-.142v-2.088l11.357-.76.476.443v24.747c0 .716.147 1.328.443 1.834.295.505.706.937 1.233 1.295.38.232.833.384 1.362.459.526.074 1.107.121 1.74.142v2.088zM557.5775 70.6057h-15.188v-2.089c.485-.041.975-.084 1.471-.126.495-.042.934-.126 1.314-.253.59-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.502-3.887-1.503-5.078-1.002-1.191-2.252-1.787-3.75-1.787-1.033 0-2.004.158-2.91.474-.907.317-1.74.759-2.5 1.329-.612.464-1.123.964-1.534 1.503-.412.538-.724.986-.934 1.344v18.004c0 .738.126 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.923.333 1.313.428.39.095.902.164 1.534.205v2.089h-14.871v-2.089c.486-.041.954-.084 1.409-.126.453-.042.87-.126 1.25-.253.589-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.503-3.887-1.507-5.078-1.005-1.191-2.258-1.787-3.759-1.787-1.036 0-2.009.163-2.918.49-.909.326-1.744.775-2.506 1.344-.612.465-1.131.986-1.553 1.566-.423.58-.741 1.019-.952 1.314v17.877c0 .717.148 1.318.443 1.803.296.486.738.854 1.329 1.108.443.211.896.369 1.36.474.464.106.982.18 1.551.221v2.089h-15.156v-2.089c.485-.041.986-.084 1.503-.126.516-.042.966-.126 1.345-.253.59-.189 1.028-.521 1.313-.995.285-.474.427-1.091.427-1.849v-19.373c0-.673-.154-1.279-.458-1.816-.307-.538-.734-.996-1.282-1.375-.401-.253-.897-.458-1.487-.616a9.5368 9.5368 0 0 0-1.836-.301v-2.089l10.442-.695.443.443v4.461h.222c.526-.527 1.171-1.149 1.929-1.867.76-.717 1.466-1.297 2.12-1.74.739-.506 1.662-.928 2.769-1.266 1.107-.337 2.305-.506 3.591-.506 2.025 0 3.765.543 5.221 1.629 1.456 1.087 2.5 2.401 3.132 3.94.758-.739 1.427-1.387 2.006-1.946.579-.558 1.342-1.155 2.29-1.788.8-.548 1.742-.991 2.827-1.329 1.085-.337 2.29-.506 3.618-.506 2.631 0 4.716.865 6.254 2.594 1.538 1.73 2.306 4.389 2.306 7.975v15.851c0 .738.127 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.965.333 1.439.428.475.095 1.008.164 1.599.205v2.089zM260.3783 29.8567c0 3.366-2.729 6.096-6.096 6.096-3.366 0-6.095-2.73-6.095-6.096 0-3.367 2.729-6.096 6.095-6.096 3.367 0 6.096 2.729 6.096 6.096",
				fill: "#FF4500"
			}), n.a.createElement("path", {
				className: e.redditLogoClassName,
				d: "M275.1322 67.5725v-25.525h3.048c1.623 0 3.041-1.225 3.145-2.845.116-1.775-1.291-3.25-3.041-3.25h-3.152v-4.836c0-1.826-1.378-3.421-3.2-3.538-1.997-.13-3.657 1.452-3.657 3.421v4.953h-2.839c-1.624 0-3.041 1.224-3.146 2.845-.115 1.774 1.29 3.25 3.041 3.25h2.944v25.525c0 1.895 1.535 3.43 3.428 3.43 1.894 0 3.429-1.535 3.429-3.43M155.9915 42.0471c4.146 0 7.672 3.182 8.979 7.62h-17.959c1.307-4.438 4.833-7.62 8.98-7.62zm11.604 13.716c2.968 0 4.696-2.219 4.567-4.403-.068-1.154-.171-1.871-.306-2.457-1.819-7.886-8.232-13.713-15.865-13.713-9.048 0-16.382 8.187-16.382 18.287 0 10.099 7.334 18.287 16.382 18.287 5.667 0 9.715-2.064 12.661-5.299 1.436-1.577 1.171-4.054-.58-5.271-1.422-.988-3.223-.655-4.547.462-1.263 1.067-3.677 3.25-7.534 3.25-4.608 0-8.451-3.926-9.334-9.143h20.938zM139.9906 38.7346c0-1.701-1.24-3.109-2.865-3.379-4.993-.753-9.66 1.111-12.374 4.486v-.461c0-2.095-1.715-3.428-3.429-3.428-1.894 0-3.429 1.535-3.429 3.428v28.058c0 1.836 1.385 3.446 3.217 3.557 1.989.119 3.641-1.459 3.641-3.423v-14.474c0-6.405 4.817-11.664 11.426-10.95.239.025.463.024.677 0 1.756-.149 3.136-1.62 3.136-3.414M257.7113 42.429c0-1.895-1.534-3.429-3.429-3.429-1.893 0-3.428 1.534-3.428 3.429v25.144c0 1.894 1.535 3.429 3.428 3.429 1.895 0 3.429-1.535 3.429-3.429V42.429zM191.0413 64.9065c-5.261 0-9.524-5.117-9.524-11.43 0-6.312 4.263-11.429 9.524-11.429 5.26 0 9.524 5.117 9.524 11.429 0 6.313-4.264 11.43-9.524 11.43zm15.62-41.526c0-1.894-1.535-3.429-3.43-3.429-1.893 0-3.428 1.535-3.428 3.429v15.311c-2.323-2.322-5.283-3.502-8.762-3.502-9.048 0-16.383 8.188-16.383 18.287 0 10.1 7.335 18.287 16.383 18.287 3.51 0 6.452-1.208 8.825-3.545.302 1.584 1.693 2.784 3.365 2.784 1.895 0 3.43-1.535 3.43-3.43v-44.192zM226.8529 64.9065c-5.261 0-9.524-5.117-9.524-11.43 0-6.312 4.263-11.429 9.524-11.429 5.26 0 9.524 5.117 9.524 11.429 0 6.313-4.264 11.43-9.524 11.43zm15.62-41.526c0-1.894-1.535-3.429-3.429-3.429-1.893 0-3.428 1.535-3.428 3.429v15.311c-2.323-2.322-5.284-3.502-8.763-3.502-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.287 16.382 18.287 3.51 0 6.452-1.208 8.825-3.545.302 1.584 1.694 2.784 3.366 2.784 1.894 0 3.429-1.535 3.429-3.43v-44.192z",
				fill: "#FFF"
			}), n.a.createElement("path", {
				d: "M460.3783 29.8567c0 3.366-2.729 6.096-6.096 6.096-3.366 0-6.095-2.73-6.095-6.096 0-3.367 2.729-6.096 6.095-6.096 3.367 0 6.096 2.729 6.096 6.096M358.0775 43.3284c0 2.584-2.095 4.679-4.68 4.679-2.584 0-4.679-2.095-4.679-4.679 0-2.585 1.095-4.68 3.679-4.68 3.404 0 5.68 2.095 5.68 4.68M319.3236 65.5432c.844-1.308 1.466-2.826 1.867-4.556.401-1.729.601-3.66.601-5.791 0-1.56-.169-3.152-.506-4.777-.338-1.624-.865-3.037-1.582-4.24-.718-1.223-1.656-2.215-2.817-2.974-1.16-.76-2.552-1.14-4.176-1.14-1.561 0-2.89.344-3.987 1.029-1.096.686-2.046 1.503-2.847 2.452v18.447c.189.57.501 1.16.933 1.772.432.612.912 1.138 1.44 1.582.653.527 1.36.955 2.12 1.281.759.327 1.687.49 2.784.49 1.181 0 2.32-.31 3.417-.932 1.097-.622 2.015-1.503 2.753-2.643m5.157-22.433c1.244 1.477 2.21 3.191 2.896 5.142.684 1.951 1.028 4.182 1.028 6.691 0 2.468-.411 4.72-1.234 6.756-.823 2.035-1.91 3.771-3.259 5.204-1.413 1.456-2.985 2.575-4.715 3.355-1.729.78-3.564 1.171-5.505 1.171-1.878 0-3.417-.212-4.62-.633-1.202-.422-2.183-.918-2.942-1.487h-.253v12.387c0 2.504 1.06 3.37 1.787 3.599.911.288.458.153 1.51.27v2.089h-14.435v-2.089c.653-.042 1.286-.094 1.898-.158.612-.062 1.161-.169 1.646-.316.633-.211 1.076-.58 1.329-1.108.253-.527.38-1.149.38-1.866v-36.191c0-.633-.158-1.244-.475-1.835-.316-.59-.728-1.065-1.234-1.424-.38-.253-.907-.448-1.582-.585-.676-.138-1.329-.226-1.962-.269v-2.088l10.632-.697.442.38v3.512l.253.063c1.097-1.265 2.457-2.32 4.082-3.164 1.624-.843 3.238-1.265 4.841-1.265 1.94 0 3.718.411 5.332 1.234 1.613.822 3 1.93 4.16 3.322M94.9525 13.8157l-12.222-12.219a5.4455 5.4455 0 0 0-3.853-1.596h-61.204c-1.449 0-2.832.574-3.854 1.596l-12.222 12.219c-1.975 1.973-2.14 5.118-.377 7.287.047.062 5.045 6.539 5.045 17.667 0 7.109-.788 12.208-1.485 16.706-.58 3.727-1.123 7.248-1.123 11.179 0 10.568 8.171 22.452 23.783 24.717 11.37 1.653 17.741 5.784 17.779 5.804.916.62 1.98.927 3.045.927a5.55 5.55 0 0 0 3.04-.907c.063-.04 6.435-4.171 17.804-5.824 15.613-2.265 23.783-14.149 23.783-24.717 0-3.931-.543-7.452-1.123-11.179-.697-4.498-1.485-9.597-1.485-16.706 0-11.08 4.871-17.437 5.047-17.667 1.762-2.169 1.597-5.314-.378-7.287",
				fill: "#FF4500"
			}), n.a.createElement("path", {
				d: "M59.4115 56.5569c-2.757 0-5-2.243-5-5 0-2.758 2.243-5.001 5-5.001s5 2.243 5 5.001c0 2.757-2.243 5-5 5m.88 8.212c-3.412 3.407-9.951 3.672-11.874 3.672-1.924 0-8.464-.265-11.872-3.673-.506-.506-.506-1.326.001-1.833.505-.505 1.326-.506 1.832.001 2.15 2.15 6.752 2.914 10.039 2.914 3.286 0 7.889-.764 10.043-2.915.507-.506 1.327-.505 1.832.001.506.507.506 1.327-.001 1.833m-27.88-13.212c0-2.758 2.244-5.001 5.002-5.001 2.756 0 4.998 2.243 4.998 5.001 0 2.756-2.242 4.999-4.998 4.999-2.758 0-5.002-2.243-5.002-4.999m47.992-5.001c0-3.866-3.135-7-7-7-1.887 0-3.596.75-4.855 1.964-4.784-3.452-11.377-5.683-18.72-5.939l3.188-15.003 10.418 2.215c.127 2.649 2.296 4.763 4.977 4.763 2.761 0 5-2.238 5-5s-2.239-5-5-5c-1.965 0-3.646 1.143-4.465 2.791l-11.633-2.474c-.323-.07-.662-.006-.94.175-.278.181-.473.464-.542.788l-3.561 16.741c-7.451.207-14.149 2.439-18.995 5.93-1.258-1.206-2.961-1.951-4.841-1.951-3.866 0-7 3.134-7 7 0 2.845 1.7 5.287 4.136 6.383-.108.695-.167 1.401-.167 2.117 0 10.77 12.536 19.5 28 19.5s28-8.73 28-19.5c0-.711-.058-1.412-.165-2.103 2.452-1.089 4.165-3.542 4.165-6.397",
				fill: "#FFF"
			}))
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_1d7BoD7egpRq9JmZVmVXkB"
			}
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/ProfileSlashed/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M20.6762828,21.9082828 C24.2595318,21.3438035 27,18.2418134 27,14.5 L27,9.5 C27,5.357 23.642,2 19.5,2 C15.358,2 12,5.357 12,9.5 L12,13.232 L1.768,3 L0,4.768 L35.5,40.268 L37.268,38.5 L33.0284278,34.2604278 C33.3748442,33.9267307 33.7091584,33.5805628 34.03,33.222 C31.8688147,29.7169957 28.5050392,27.036225 24.5146241,25.7466241 L20.6762828,21.9082828 Z M18.227,25 C12.632,25.534 7.804,28.694 5,33.242 C8.662,37.334 13.982,39.911 19.906,39.911 C23.693,39.911 27.232,38.853 30.25,37.023 L18.227,25 Z"
			})))
		},
		"./src/reddit/icons/svgs/Question/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				fill: "none",
				viewBox: "0 0 22 33",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M11.5892 0.108026C8.08052 0.108026 4.66647 1.24605 1.8595 3.35127C1.52801 3.58772 1.25301 3.89466 1.05426 4.25005C0.855522 4.60543 0.737974 5.00043 0.710066 5.40665C0.682158 5.81287 0.744583 6.22023 0.892855 6.59946C1.04113 6.97868 1.27157 7.32035 1.56761 7.59992L1.7622 7.79451C2.24701 8.21875 2.86933 8.4526 3.51355 8.4526C4.15778 8.4526 4.7801 8.21875 5.26491 7.79451C6.88036 6.49442 8.86893 5.74445 10.9406 5.65397C13.5352 5.65397 14.9946 6.85397 14.9946 8.57289C14.9946 10.2918 13.9244 11.6215 11.5568 12.9837C9.57432 13.9788 8.03569 15.6794 7.24328 17.7513C6.98395 18.2114 6.81859 18.7186 6.7568 19.2432C6.74223 19.8498 6.91502 20.4462 7.25162 20.9511C7.58823 21.456 8.07229 21.8449 8.63788 22.0648C9.00788 22.218 9.40496 22.2953 9.80544 22.2918C10.6092 22.2897 11.3836 21.9892 11.9784 21.4486C12.3266 21.049 12.5716 20.5702 12.6919 20.054L12.919 19.2432C13.2108 17.6864 14.0865 16.8432 16.6163 15.5459C18.1368 14.9535 19.4381 13.9073 20.3434 12.5495C21.2486 11.1917 21.7138 9.58811 21.6757 7.95667C21.6757 3.41613 18.1081 0.108026 11.5892 0.108026Z",
				fill: "#FF585B"
			}), n.a.createElement("path", {
				d: "M9.99999 32.2163C9.57316 32.2187 9.15004 32.1369 8.75489 31.9755C8.35974 31.8141 8.00034 31.5763 7.69729 31.2757C7.41081 30.9605 7.18045 30.5985 7.01621 30.2055C6.85002 29.8155 6.76188 29.3968 6.75675 28.973C6.7687 28.1143 7.10464 27.2918 7.69729 26.6703C8.00573 26.375 8.36945 26.1436 8.76756 25.9892C9.35819 25.7409 10.0092 25.673 10.6383 25.7942C11.2675 25.9154 11.8466 26.2203 12.3027 26.6703C12.8953 27.2918 13.2313 28.1143 13.2432 28.973C13.2381 29.3968 13.15 29.8155 12.9838 30.2055C12.8195 30.5985 12.5892 30.9605 12.3027 31.2757C11.9996 31.5763 11.6402 31.8141 11.2451 31.9755C10.8499 32.1369 10.4268 32.2187 9.99999 32.2163Z",
				fill: "#FF585B"
			}))
		},
		"./src/reddit/icons/svgs/RedditCoinsLogo/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 446 96",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M257.65 32.844a6.096 6.096 0 1 1-12.19.22 6.096 6.096 0 0 1 12.19-.22",
				fill: "#DDBD37"
			}), n.a.createElement("path", {
				d: "M153.263 45.035c4.146 0 7.673 3.181 8.98 7.62h-17.96c1.307-4.439 4.834-7.62 8.98-7.62zm11.604 13.715c2.968 0 4.697-2.219 4.567-4.402-.068-1.154-.17-1.872-.306-2.458-1.819-7.885-8.232-13.712-15.865-13.712-9.048 0-16.382 8.187-16.382 18.287s7.334 18.286 16.382 18.286c5.667 0 9.715-2.064 12.661-5.299 1.436-1.576 1.172-4.053-.58-5.27-1.422-.989-3.223-.655-4.547.462-1.263 1.067-3.677 3.25-7.534 3.25-4.607 0-8.451-3.927-9.334-9.144h20.938zm-27.605-17.028a3.427 3.427 0 0 0-2.864-3.378c-4.993-.753-9.66 1.11-12.375 4.485v-.461c0-2.094-1.714-3.428-3.429-3.428a3.429 3.429 0 0 0-3.429 3.428v28.059c0 1.836 1.385 3.446 3.217 3.557a3.43 3.43 0 0 0 3.641-3.423V56.087c0-6.405 4.817-11.665 11.426-10.95.239.025.463.023.677-.001a3.427 3.427 0 0 0 3.136-3.414zm117.722 3.694a3.429 3.429 0 1 0-6.857 0v25.145a3.429 3.429 0 0 0 6.857 0V45.416zm-66.671 22.478c-5.261 0-9.524-5.117-9.524-11.43 0-6.311 4.263-11.428 9.524-11.428 5.26 0 9.524 5.117 9.524 11.429s-4.264 11.429-9.524 11.429zm15.62-41.526a3.429 3.429 0 1 0-6.857 0v15.31c-2.323-2.321-5.284-3.5-8.763-3.5-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.286 16.382 18.286 3.51 0 6.452-1.208 8.825-3.544a3.43 3.43 0 0 0 6.795-.646V26.368zm20.191 41.526c-5.26 0-9.524-5.117-9.524-11.43 0-6.311 4.264-11.428 9.524-11.428 5.26 0 9.524 5.117 9.524 11.429s-4.264 11.429-9.524 11.429zm15.62-41.526a3.429 3.429 0 1 0-6.857 0v15.31c-2.323-2.321-5.284-3.5-8.763-3.5-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.286 16.382 18.286 3.511 0 6.453-1.208 8.825-3.544a3.43 3.43 0 0 0 6.795-.646V26.368zm32.66 44.192V45.037h3.048c1.624 0 3.04-1.225 3.145-2.845a3.047 3.047 0 0 0-3.041-3.251h-3.152v-4.835c0-1.826-1.378-3.421-3.2-3.54a3.43 3.43 0 0 0-3.657 3.423v4.952h-2.84c-1.622 0-3.04 1.225-3.145 2.845a3.048 3.048 0 0 0 3.04 3.25h2.945v25.526a3.429 3.429 0 1 0 6.857 0v-.002z",
				fill: "#FFF"
			}), n.a.createElement("path", {
				d: "M307.89 75.071c-5.073 0-9.042-1.572-11.91-4.716-2.869-3.142-4.301-7.36-4.301-12.65 0-2.302.385-4.455 1.154-6.458a17.553 17.553 0 0 1 3.36-5.462c1.398-1.57 3.153-2.839 5.262-3.802 2.108-.962 4.407-1.444 6.897-1.444 3.435 0 6.23.77 8.389 2.307 2.155 1.538 3.233 3.636 3.233 6.292 0 1.107-.283 2.086-.852 2.94-.568.852-1.505 1.277-2.808 1.277-1.4 0-2.484-.33-3.255-.992-.769-.662-1.153-1.4-1.153-2.218 0-.992.143-2.013.426-3.062.285-1.048.45-1.815.498-2.3-.426-.684-1.058-1.142-1.898-1.373a10.132 10.132 0 0 0-2.712-.348 7.942 7.942 0 0 0-3.244.681c-1.029.455-2.028 1.29-2.998 2.508-.872 1.105-1.584 2.6-2.125 4.481-.544 1.883-.816 4.129-.816 6.74 0 4.119.975 7.478 2.928 10.078 1.953 2.6 4.515 3.901 7.685 3.901 2.294 0 4.217-.523 5.767-1.569 1.55-1.045 2.987-2.614 4.312-4.706l2.273 1.394c-1.564 2.612-3.626 4.683-6.186 6.21-2.559 1.526-5.203 2.29-7.927 2.29v.001zm42.051-18.022c0-1.66-.186-3.414-.555-5.264-.368-1.848-.923-3.413-1.66-4.698-.786-1.372-1.823-2.474-3.1-3.303-1.279-.83-2.841-1.245-4.688-1.245-1.894 0-3.513.42-4.852 1.261-1.342.841-2.43 1.992-3.266 3.453-.787 1.352-1.341 2.89-1.662 4.616a27.447 27.447 0 0 0-.479 5.014c0 2.124.19 4.09.573 5.893.381 1.803.99 3.415 1.826 4.831.836 1.417 1.888 2.53 3.155 3.337 1.268.808 2.837 1.212 4.705 1.212 3.075 0 5.514-1.338 7.307-4.017 1.797-2.68 2.696-6.376 2.696-11.09zm6.746.457a20.474 20.474 0 0 1-1.167 6.79c-.775 2.224-1.88 4.11-3.318 5.66-1.624 1.77-3.508 3.088-5.65 3.951-2.144.863-4.544 1.295-7.204 1.295-2.213 0-4.322-.393-6.321-1.178a16.016 16.016 0 0 1-5.334-3.436c-1.53-1.484-2.75-3.294-3.654-5.43-.907-2.135-1.36-4.531-1.36-7.188 0-5.114 1.583-9.297 4.75-12.55 3.164-3.255 7.316-4.881 12.447-4.881 4.875 0 8.894 1.544 12.06 4.632 3.168 3.087 4.751 7.198 4.751 12.334v.001zm9.087-18.776c3.919 0 7.096-2.729 7.096-6.095 0-3.367-3.177-6.096-7.096-6.096-3.918 0-7.095 2.729-7.095 6.095 0 3.366 3.177 6.095 7.095 6.095v.001zm9.004 32.505c-.54-.13-1.07-.29-1.587-.481-.712-.244-1.234-.621-1.566-1.13-.332-.508-.499-1.151-.499-1.925V43.004l-.521-.465-12.926.73v2.192c.742.044 1.56.16 2.45.348.893.188 1.571.414 2.044.68.625.379 1.14.884 1.504 1.475.358.586.54 1.233.54 1.94v18.197c0 .796-.169 1.443-.503 1.94-.336.498-.847.846-1.54 1.045a7.515 7.515 0 0 1-1.58.265c-.608.044-1.197.089-1.765.133v2.19h17.683v-2.19a10.794 10.794 0 0 1-1.734-.25v.001zm41.423 2.938h-16.88v-2.19c.536-.045 1.125-.09 1.768-.134.644-.044 1.174-.133 1.595-.266.654-.199 1.137-.548 1.453-1.046.314-.498.474-1.145.474-1.942V51.761c0-2.324-.582-4.117-1.74-5.379-1.157-1.262-2.568-1.893-4.229-1.893-1.24 0-2.375.183-3.405.548a12.31 12.31 0 0 0-2.739 1.345c-.772.51-1.386 1.057-1.843 1.644-.454.586-.79 1.056-1 1.411v18.826c0 .753.163 1.372.491 1.86.325.487.816.862 1.47 1.128.491.222 1.02.388 1.593.498.573.111 1.163.19 1.77.233v2.191h-16.915v-2.19c.536-.045 1.09-.09 1.662-.134a6.656 6.656 0 0 0 1.49-.266c.654-.198 1.137-.547 1.452-1.044.316-.498.475-1.144.475-1.94V48.402c0-.75-.172-1.443-.51-2.073a4.202 4.202 0 0 0-1.417-1.542 4.96 4.96 0 0 0-1.576-.58 14.623 14.623 0 0 0-1.961-.249v-2.19l11.486-.732.49.465v4.615h.176a80.132 80.132 0 0 1 2.101-1.909c.84-.74 1.635-1.345 2.382-1.809.862-.532 1.89-.974 3.082-1.329 1.192-.354 2.531-.53 4.027-.53 3.315 0 5.772.98 7.372 2.938 1.597 1.96 2.399 4.565 2.399 7.82v17.032c0 .775.14 1.401.42 1.876.28.476.76.847 1.436 1.113.56.221 1.045.376 1.453.464.407.09.974.156 1.699.2v2.191h-.001zm25.829-15.97a8.51 8.51 0 0 1 2.263 2.756c.526 1.04.79 2.313.79 3.818 0 3.032-1.228 5.512-3.683 7.438-2.456 1.926-5.634 2.888-9.536 2.888-2.061 0-3.96-.343-5.696-1.029-1.737-.686-2.975-1.317-3.717-1.892l-.719 2.158h-2.694l-.359-11.389h2.479c.19.866.598 1.877 1.222 3.032a14.422 14.422 0 0 0 2.263 3.132A12.387 12.387 0 0 0 428 71.581c1.306.666 2.773 1 4.404 1 2.298 0 4.068-.485 5.315-1.454 1.244-.969 1.868-2.355 1.868-4.158 0-.93-.198-1.733-.594-2.408-.395-.674-.976-1.267-1.741-1.776-.79-.509-1.76-.969-2.91-1.378a61.473 61.473 0 0 0-3.844-1.212 37.522 37.522 0 0 1-3.754-1.278c-1.379-.542-2.558-1.179-3.538-1.909a9.558 9.558 0 0 1-2.586-2.856c-.673-1.129-1.006-2.457-1.006-3.984 0-2.679 1.076-4.947 3.233-6.807 2.155-1.859 5.04-2.789 8.656-2.789 1.39 0 2.807.166 4.257.498 1.45.332 2.629.731 3.54 1.195l.825-1.726h2.587l.54 10.525h-2.478c-.505-2.356-1.589-4.273-3.254-5.752-1.665-1.477-3.694-2.216-6.088-2.216-1.965 0-3.51.457-4.634 1.371-1.125.914-1.688 2.017-1.688 3.31 0 .996.184 1.826.555 2.49.372.665.927 1.23 1.672 1.694.718.442 1.62.857 2.711 1.245a92.24 92.24 0 0 0 4.042 1.311c1.53.446 3.024.99 4.472 1.627 1.401.621 2.557 1.306 3.468 2.06v-.001zM96 48c0 26.51-21.49 48-48 48S0 74.51 0 48 21.49 0 48 0s48 21.49 48 48",
				fill: "#DDBD37"
			}), n.a.createElement("path", {
				d: "M59 58.001c-2.757 0-5-2.243-5-5a5.006 5.006 0 0 1 5-5c2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5m.88 8.211c-3.412 3.408-9.95 3.673-11.874 3.673-1.924 0-8.463-.265-11.872-3.673a1.296 1.296 0 1 1 1.833-1.833c2.151 2.151 6.752 2.915 10.04 2.915 3.285 0 7.888-.764 10.042-2.915a1.296 1.296 0 0 1 1.831 1.833M32 53c0-2.757 2.244-5 5.002-5A5.005 5.005 0 0 1 42 53a5.004 5.004 0 0 1-4.998 5A5.006 5.006 0 0 1 32 53m47.992-5a7 7 0 0 0-7-7 6.97 6.97 0 0 0-4.855 1.964c-4.784-3.453-11.377-5.683-18.72-5.94l3.188-15.002 10.418 2.215C63.15 26.887 65.32 29 68 29a5 5 0 0 0 0-10c-1.965 0-3.646 1.143-4.465 2.79l-11.633-2.473a1.251 1.251 0 0 0-1.482.963l-3.56 16.741c-7.452.207-14.149 2.44-18.996 5.93a6.972 6.972 0 0 0-4.84-1.95 7 7 0 0 0-7 7 7 7 0 0 0 4.135 6.382c-.11.7-.166 1.408-.167 2.117 0 10.77 12.536 19.5 28 19.5s28-8.73 28-19.5c0-.71-.058-1.412-.165-2.103A7 7 0 0 0 79.992 48",
				fill: "#FFF"
			}))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
					}
					return e
				}).apply(this, arguments)
			}
			s.a = e => n.a.createElement("svg", c({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), n.a.createElement("g", null, n.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 511.63 511.631"
			}, n.a.createElement("path", {
				d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
			}))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Rising/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Rules/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
		},
		"./src/reddit/icons/svgs/Save/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_2qT9eltTv4vv9GxxEZqvc0"
			}
		},
		"./src/reddit/icons/svgs/Save/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Save/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("defs", null, n.a.createElement("path", {
				id: "".concat("save-svg", "a"),
				d: "M14 16.209l-3.403-1.486a1.52 1.52 0 0 0-1.198.002L6 16.21V5.5c0-.52-.087-1.024-.255-1.5H12.5c.827 0 1.5.673 1.5 1.5V16.21zM12.5 2h-11a.5.5 0 1 0 0 1C2.879 3 4 4.12 4 5.5v12.236a.999.999 0 0 0 1.4.916l4.6-2.008 4.6 2.008a1 1 0 0 0 1.4-.917V5.5C16 3.57 14.43 2 12.5 2z"
			})), n.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, n.a.createElement("path", {
				d: "M0 20h20V0H0z",
				fill: "none"
			}), n.a.createElement("mask", {
				id: "".concat("save-svg", "b"),
				fill: "none"
			}, n.a.createElement("use", {
				xlinkHref: "#".concat("save-svg", "a")
			})), n.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#".concat("save-svg", "a")
			}), n.a.createElement("g", {
				mask: "url(#".concat("save-svg", "b)"),
				fill: "none"
			}, n.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}))))
		},
		"./src/reddit/icons/svgs/Saved/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_2OUcXcp-8gkoFyUSKdNTxF"
			}
		},
		"./src/reddit/icons/svgs/Saved/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Saved/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M12.5 2h-11a.5.5 0 0 0 0 1A2.5 2.5 0 0 1 4 5.5v12.24a1 1 0 0 0 1.4.92l4.6-2 4.6 2a1 1 0 0 0 1.4-.92V5.5A3.5 3.5 0 0 0 12.5 2zm1 6.53l-4.26 4.29a.75.75 0 0 1-1.06 0L6.47 11.1A.75.75 0 0 1 7.53 10l1.18 1.18 3.76-3.76a.75.75 0 0 1 1.06 1.06z"
			}))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/SettingsWithShield/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				width: "18",
				height: "18",
				viewBox: "0 0 18 18",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M10.2686 16.8748C10.2089 16.8842 10.1482 16.8842 10.0886 16.8748C9.9164 16.8245 9.77087 16.7086 9.68333 16.5521C9.59579 16.3955 9.57325 16.2108 9.62057 16.0378L10.0886 14.3998C10.1195 14.2919 10.1769 14.1935 10.2554 14.1133C10.334 14.0332 10.4313 13.9739 10.5386 13.9408C10.8273 13.8486 11.1074 13.7311 11.3756 13.5898C11.4746 13.5346 11.5862 13.5057 11.6996 13.5057C11.813 13.5057 11.9245 13.5346 12.0236 13.5898L13.4996 14.3998C13.6243 14.4844 13.7746 14.5228 13.9246 14.5086C14.0746 14.4943 14.2149 14.4282 14.3214 14.3217C14.428 14.2151 14.4941 14.0748 14.5083 13.9248C14.5226 13.7748 14.4841 13.6245 14.3996 13.4998L13.5716 12.0058C13.5188 11.9076 13.4912 11.7978 13.4912 11.6863C13.4912 11.5748 13.5188 11.465 13.5716 11.3668C13.7114 11.0948 13.8288 10.8119 13.9226 10.5208C13.9562 10.4148 14.0158 10.319 14.096 10.2419C14.1761 10.1649 14.2743 10.1092 14.3816 10.0798L16.0196 9.60281C16.1259 9.57366 16.223 9.51786 16.3018 9.44069C16.3805 9.36352 16.4383 9.26753 16.4696 9.16181C16.4928 9.0793 16.4992 8.99295 16.4884 8.90791C16.4776 8.82287 16.4497 8.74088 16.4066 8.66681C16.3673 8.5914 16.3125 8.52516 16.2458 8.47242C16.1791 8.41968 16.102 8.38165 16.0196 8.36081L14.3996 7.90181C14.2923 7.87246 14.1941 7.81673 14.114 7.7397C14.0338 7.66267 13.9742 7.56679 13.9406 7.46081C13.8468 7.16972 13.7294 6.88678 13.5896 6.61481C13.5368 6.51659 13.5092 6.40682 13.5092 6.29531C13.5092 6.1838 13.5368 6.07404 13.5896 5.97581L14.3996 4.49981C14.4841 4.3751 14.5226 4.22482 14.5083 4.07482C14.4941 3.92482 14.428 3.78448 14.3214 3.67793C14.2149 3.57139 14.0746 3.5053 13.9246 3.49104C13.7746 3.47679 13.6243 3.51525 13.4996 3.59981L12.0056 4.42781C11.9057 4.48061 11.7945 4.50822 11.6816 4.50822C11.5686 4.50822 11.4574 4.48061 11.3576 4.42781C11.0894 4.28648 10.8093 4.16903 10.5206 4.07681C10.4133 4.04375 10.316 3.98446 10.2374 3.90432C10.1589 3.82417 10.1015 3.7257 10.0706 3.61781L9.60257 1.97981C9.5688 1.84057 9.48921 1.71671 9.37659 1.62814C9.26397 1.53956 9.12485 1.49141 8.98157 1.49141C8.83829 1.49141 8.69917 1.53956 8.58654 1.62814C8.47392 1.71671 8.39434 1.84057 8.36057 1.97981L7.91057 3.59981C7.87963 3.7077 7.82228 3.80617 7.74371 3.88632C7.66514 3.96646 7.56782 4.02575 7.46057 4.05881C7.17181 4.15103 6.89173 4.26848 6.62357 4.40981C6.52397 4.46338 6.41265 4.49142 6.29957 4.49142C6.18648 4.49142 6.07516 4.46338 5.97557 4.40981L4.49957 3.59981C4.37486 3.51525 4.22458 3.47679 4.07458 3.49104C3.92458 3.5053 3.78423 3.57139 3.67769 3.67793C3.57114 3.78448 3.50506 3.92482 3.4908 4.07482C3.47654 4.22482 3.515 4.3751 3.59957 4.49981L4.42757 5.99381C4.48035 6.09204 4.50797 6.20181 4.50797 6.31331C4.50797 6.42482 4.48035 6.53459 4.42757 6.63281C4.28773 6.90478 4.17034 7.18773 4.07657 7.47881C4.02277 7.64942 3.90345 7.79169 3.74483 7.87438C3.5862 7.95707 3.40124 7.97341 3.23057 7.91981C3.05996 7.86602 2.91769 7.7467 2.835 7.58807C2.75231 7.42944 2.73597 7.24448 2.78957 7.07381C2.86782 6.80955 2.96404 6.55095 3.07757 6.29981L2.42057 5.12981C2.21388 4.75251 2.1351 4.31836 2.19603 3.89249C2.25697 3.46662 2.45434 3.07199 2.75854 2.76779C3.06275 2.46359 3.45738 2.26621 3.88325 2.20528C4.30912 2.14434 4.74326 2.22312 5.12057 2.42981L6.29957 3.07781L6.67757 2.91581L7.05557 1.61081C7.129 1.35702 7.25181 1.12023 7.41697 0.91401C7.58212 0.707794 7.78637 0.536216 8.01799 0.409118C8.24961 0.28202 8.50404 0.201903 8.7667 0.173365C9.02935 0.144826 9.29506 0.168426 9.54857 0.242812C9.87456 0.334782 10.1715 0.508845 10.411 0.748356C10.6505 0.987867 10.8246 1.28482 10.9166 1.61081L11.2946 2.91581L11.6726 3.07781L12.8606 2.42081C13.2381 2.22131 13.6697 2.14802 14.0919 2.21168C14.5141 2.27534 14.9049 2.4726 15.2068 2.77455C15.5088 3.0765 15.706 3.46724 15.7697 3.88948C15.8334 4.31173 15.7601 4.74326 15.5606 5.12081L14.9216 6.29981L15.0836 6.67781L16.3886 7.05581C16.6414 7.12744 16.8775 7.24868 17.083 7.41247C17.2885 7.57626 17.4593 7.77932 17.5856 8.00981C17.7295 8.27237 17.8126 8.56393 17.8288 8.86293C17.8449 9.16194 17.7936 9.46074 17.6786 9.73724C17.5637 10.0137 17.3881 10.2609 17.1648 10.4604C16.9415 10.6599 16.6762 10.8066 16.3886 10.8898L15.0836 11.2678L14.9216 11.6458L15.5786 12.8428C15.7853 13.2201 15.864 13.6543 15.8031 14.0801C15.7422 14.506 15.5448 14.9006 15.2406 15.2048C14.9364 15.509 14.5418 15.7064 14.1159 15.7673C13.69 15.8283 13.2559 15.7495 12.8786 15.5428L11.6996 14.9218L11.3216 15.0838L10.9436 16.3888C10.9029 16.5344 10.8139 16.6618 10.6913 16.7501C10.5686 16.8385 10.4195 16.8824 10.2686 16.8748ZM10.7996 11.6999C10.7046 11.6989 10.6109 11.6784 10.5242 11.6397C10.4375 11.601 10.3597 11.5449 10.2956 11.4749C10.1783 11.3403 10.1183 11.1651 10.1284 10.9869C10.1385 10.8086 10.2178 10.6414 10.3496 10.5209C10.7303 10.1414 10.9447 9.62614 10.9455 9.08856C10.9463 8.55099 10.7336 8.0351 10.3541 7.65438C9.97455 7.27366 9.45933 7.0593 8.92175 7.05846C8.38418 7.05762 7.86829 7.27036 7.48757 7.64988C7.4313 7.72483 7.36005 7.78724 7.27834 7.83313C7.19663 7.87903 7.10625 7.9074 7.01297 7.91646C6.91969 7.92551 6.82555 7.91504 6.73654 7.88571C6.64753 7.85638 6.5656 7.80884 6.49597 7.74611C6.42635 7.68338 6.37054 7.60684 6.33212 7.52136C6.29369 7.43589 6.27349 7.34334 6.27279 7.24963C6.2721 7.15591 6.29092 7.06308 6.32807 6.97704C6.36522 6.891 6.41988 6.81364 6.48857 6.74988C6.79219 6.39989 7.16462 6.11615 7.58267 5.91636C8.00072 5.71657 8.45543 5.60499 8.91847 5.58858C9.38152 5.57218 9.84298 5.65129 10.2741 5.82099C10.7053 5.99069 11.0968 6.24735 11.4245 6.57498C11.7521 6.90261 12.0088 7.29419 12.1785 7.72533C12.3482 8.15647 12.4273 8.61794 12.4109 9.08098C12.3945 9.54403 12.2829 9.99874 12.0831 10.4168C11.8833 10.8348 11.5996 11.2073 11.2496 11.5109C11.1289 11.6286 10.9681 11.6961 10.7996 11.6999ZM4.33761 17.775H4.49961L4.66161 17.757L4.66537 17.756C4.88304 17.6989 8.77461 16.6774 8.77461 13.95V9.89999C8.77345 9.74925 8.72252 9.60312 8.62975 9.48431C8.53698 9.3655 8.40756 9.28067 8.26161 9.24299L4.66161 8.34299C4.5553 8.31594 4.44392 8.31594 4.33761 8.34299L0.737609 9.24299C0.591656 9.28067 0.462238 9.3655 0.369468 9.48431C0.276699 9.60312 0.225774 9.74925 0.224609 9.89999V13.95C0.224609 16.5298 3.70636 17.5833 4.26743 17.7531C4.30336 17.764 4.32732 17.7712 4.33761 17.775ZM1.57461 13.95V10.431L4.49961 9.69299L7.42461 10.431V13.95C7.42461 15.39 5.13861 16.2 4.49961 16.398C3.86061 16.2 1.57461 15.399 1.57461 13.95Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/icons/svgs/ShowHide/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M4.59 8l-2.3 2.29A1 1 0 0 0 3.7 11.7L6 9.41zM6 11a4 4 0 0 0 5.34 3.75l-5.1-5.1A4 4 0 0 0 6 11zM18.71 17.29l-5-5A3.87 3.87 0 0 0 14 11a4 4 0 0 0-.68-2.22c.07.06.15.11.21.17l2.76 2.76a1 1 0 0 0 1.41-1.41l-2.75-2.76A7 7 0 0 0 7.42 6L2.71 1.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.41-1.41z"
			}))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		},
		"./src/reddit/icons/svgs/SnooCrying/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
					}
					return e
				}).apply(this, arguments)
			}
			s.a = e => n.a.createElement("svg", c({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 6 50 43"
			}, e), n.a.createElement("path", {
				d: "M38.89 17.7a3.37 3.37 0 0 1-3-.49 17.79 17.79 0 0 0-7.63-2.81 17.34 17.34 0 0 0-4.26-.07 48.12 48.12 0 0 0-5.83 1.38 26.66 26.66 0 0 0-3.08 1.53 2.24 2.24 0 0 1-1.34.23c-4.27-1.06-7.54.28-10 4-2.09 3.17-.74 8 1.58 9.76a2.39 2.39 0 0 1 .91 1.53 12.18 12.18 0 0 0 5 8.87c.16.13.33.24.49.35a25.65 25.65 0 0 0 5.52 2.81A24 24 0 0 0 25.61 46c2.74-.09 5.49-.1 8.06-1.18a22.6 22.6 0 0 0 6.25-4c2.21-2.67 4.31-5.45 4.62-9a11.29 11.29 0 0 1 1.64-4.91 4.66 4.66 0 0 0 .54-1.58c.79-4.74-3.49-9.23-7.83-7.63z"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M41.17 18.88a12.74 12.74 0 0 0-2.48 0c1.76 2.1 3.33 3.86 4 6.23-4-5.95-9.64-9.32-16.71-9.37A19.14 19.14 0 0 0 9 24.76c-.17-.53-.51-1-.38-1.3a9.3 9.3 0 0 1 4.18-4.51c-3-1.13-6.34.54-8 3.85-1.29 2.58-.52 6.08 1.74 7.5a18.14 18.14 0 0 1 .55-2.24 15.39 15.39 0 0 1 1-1.9.86.86 0 0 1 .07.69 12.41 12.41 0 0 0 .4 8.24 11.06 11.06 0 0 0 3.82 5.31c7.18 5.27 17.21 6.56 25.28.91a13.72 13.72 0 0 0 5.74-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29 1.12-.49 1.3-.9a6.06 6.06 0 0 0-3.98-7.95z"
			}), n.a.createElement("path", {
				d: "M32 37c-2.43-2.06-9.28-2.47-11.58.17-.55.63-1.87.06-.9-.76 3.77-3.18 9.79-3.13 12.76-.43.79.73.3 1.53-.28 1.02zM19.83 24.64a4.94 4.94 0 0 0-4-.8h-.07l-.17.06a2.72 2.72 0 0 0-.9.42v.1c-1.42 1.15-2.26 3.53-1.09 5.16a2.38 2.38 0 0 0 1.82.9 10.49 10.49 0 0 0 2 0 6.32 6.32 0 0 0 2.53-.74c.81-.38 1.16-.67 1.2-1.51a5.3 5.3 0 0 0-1.32-3.59zM37.58 25.53a4.65 4.65 0 0 0-4.51-1.76.37.37 0 0 0-.15 0h-.06l-.29.06c-.14 0-.16.1-.12.16a3.83 3.83 0 0 0-1.08 5.22 2.24 2.24 0 0 0 1.84.93 10.6 10.6 0 0 1 2.55.48 2.4 2.4 0 0 0 1.2.08c.9-.11 1.26-1.56 1.36-2.31a4.18 4.18 0 0 0-.74-2.86z"
			}), n.a.createElement("path", {
				fill: "#ff4500",
				d: "M17.34 29.52a10 10 0 0 1-1 .12c-1 .09-1.46.05-1.76-.84a2.88 2.88 0 0 1 1.82-3.64l.31-.08a2.62 2.62 0 0 1 3.14 2.67c0 1.92-1.53 1.6-2.51 1.77zM37 28.88c-.29 1.13-1.17 1.09-2.1.82a3.83 3.83 0 0 0-1.06-.15 1.61 1.61 0 0 1-1.77-1.5 2.62 2.62 0 0 1 1.55-3.11A3 3 0 0 1 37 27.11a3.24 3.24 0 0 1 0 1.77z"
			}), n.a.createElement("path", {
				d: "M26.55 9.48a2.79 2.79 0 0 0-2.42-1.7c-3.48-.29-6.76 1.65-8.87 3.32l-.34-.23a3.23 3.23 0 0 0-1.06-.58l-.45-.1a2.06 2.06 0 0 0-1 .1 3 3 0 0 0-1.41.54s-.37.31-.46.41A4.09 4.09 0 0 0 9.52 15a3 3 0 0 0 2.37 2.09 4 4 0 0 0 .87.1 3.42 3.42 0 0 0 2.76-1.35 3.8 3.8 0 0 0 .61-3.12 2.92 2.92 0 0 0-.21-.63h.05l.15-.13A16.39 16.39 0 0 1 21 9.17c2-.72 3.55-.32 4.22 1a4.15 4.15 0 0 1-.42 3.93.37.37 0 0 0 0 .36c.14.27.57.34.79.34a.57.57 0 0 0 .51-.22 5.9 5.9 0 0 0 .45-5.1z"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M10.82 13.06a2.9 2.9 0 0 1 2.4-1.66 1.79 1.79 0 0 1 .87.22 3.13 3.13 0 0 1 .2.3v.09a5.83 5.83 0 0 1 .53 1.38 2.58 2.58 0 0 1-.55 2 2.16 2.16 0 0 1-1.67 1 2.21 2.21 0 0 1-1.76-1.17 2.07 2.07 0 0 1-.02-2.16z"
			}), n.a.createElement("path", {
				fill: "#0079d3",
				d: "M14.53 29.43h-.05a3.3 3.3 0 0 0-3.27.77 1.49 1.49 0 0 0-.37 1.54c.19.53.93.65 1.4.73 1.34.21 3 .31 3.91-.84a1.46 1.46 0 0 0 .2-1.63c-.21-.43-1.4-.53-1.82-.57zM38.77 31.39c-.35-1-1.73-1.25-2.64-1.32H36a1.21 1.21 0 0 0-1.36 1.57c.08.39.83.8 1.15 1a4.16 4.16 0 0 0 1.62.42 1.41 1.41 0 0 0 1.24-.33 1.35 1.35 0 0 0 .12-1.34z"
			}), n.a.createElement("path", {
				fill: "#91cff6",
				d: "M13.26 32.13c-.66-.07-1.43-.15-1.52-.94-.13-1.06 1.26-1.64 2.08-1.4h.08a.57.57 0 0 0 .18 0c.66.06 1.42.17 1.45.94.04 1.27-1.39 1.49-2.27 1.4zM37.63 32.57c-.32.37-1.33-.25-1.59-.45a1 1 0 0 1-.46-.74c0-.18.17-1 .49-.88a.79.79 0 0 0 .41 0 1.6 1.6 0 0 1 1.27.71 1.16 1.16 0 0 1-.12 1.36z"
			}))
		},
		"./src/reddit/icons/svgs/SnooPosting/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 45 43"
			}, n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("g", {
				fill: "#0DD3BB",
				transform: "translate(0 4)"
			}, n.a.createElement("ellipse", {
				cx: "25.492",
				cy: "22.2631",
				transform: "rotate(5 25.492 22.263)",
				rx: "17.6396",
				ry: "13.9883"
			}), n.a.createElement("ellipse", {
				cx: "19.3519",
				cy: "17.9699",
				transform: "rotate(5 19.352 17.97)",
				rx: "14.7297",
				ry: "16.0688"
			}), n.a.createElement("ellipse", {
				cx: "14.0251",
				cy: "27.7862",
				transform: "rotate(5 14.025 27.786)",
				rx: "8.4751",
				ry: "8.9243"
			}), n.a.createElement("ellipse", {
				cx: "11.808",
				cy: "17.4531",
				transform: "rotate(5 11.808 17.453)",
				rx: "10.7695",
				ry: "10.8575"
			}), n.a.createElement("ellipse", {
				cx: "12.1168",
				cy: "22.4429",
				transform: "rotate(5 12.117 22.443)",
				rx: "8.4751",
				ry: "8.9243"
			})), n.a.createElement("path", {
				fill: "#FFF",
				d: "M35.6875 31.5625c-1.3275 1.8696-6.7017 5.0483-8.7188 6.0313-2.0174.983-13.478 2.1465-15.625-.6876-1.5625-2.0624-.9687-4.625 1-6.1562C9.6563 29.2812 8.125 27.8437 7 24.9062c-.0872-.2277-1.1015-1.763-.875-1.7812l.9375-4.0313c.8158-2.9308 4.2118-5.1638 6.7992-6.5715 2.3198-1.2615 4.9067-1.934 7.5113-2.1714 2.1052-.192 4.259-.101 6.277.554 2.0182.6552 4.2956 1.063 5.5063 2.8765 0 0 1.5532 3.6305 1.6736 5.5487.1204 1.9177-2.0402 6.1206-2.0402 6.1206"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M31.5665 34.5708c.6293 1.944.9 4.0143.794 6.0635 0 0-.473 1.3654-6.7204 1.3654-6.2478 0-7.6077-.7104-7.6077-.7104.047-1.224.0518-2.4493.014-3.6732-.0028-.097.0414-.2356.13-.2062l-.1555-7.319 12.5354-2.0634c.4433.252.8525.5696 1.211.9412l-.2007 5.6022z"
			}), n.a.createElement("path", {
				fill: "#FF0",
				d: "M34.0514 21.4676c-.3642.8707-.5738 1.8017-.8143 2.7188-.601 2.29-1.4044 4.5218-2.3967 6.658.1578.0357.3286.0014.4624-.0927.072.7567 1.0046 1.1686 1.678.8836.6734-.2846 1.071-1.0334 1.2235-1.777.0223-.1084.0407-.2198.0277-.33-.0202-.1737-.114-.3265-.1996-.477-.6817-1.2056-.9025-2.6877-.6033-4.0528.099-.4518.2715-.9186.6318-1.1878.2046-.1536.452-.2293.6975-.2872.6156-.146 1.2512-.198 1.8812-.154l.33-1.1467c.054-.1864.108-.3773.0993-.572-.0212-.4554-.393-.8263-.8058-.9727-.412-.1463-.8604-.115-1.2947-.0823"
			}), n.a.createElement("path", {
				fill: "#F15A24",
				d: "M12.322 21.7194c.061.3407.127.693.3168.977.3034.4517.85.6324 1.3573.785.3797.1136.7785.2284 1.165.141.2643-.0598.5012-.2104.725-.3697.61-.433 1.1792-.9615 1.5326-1.6395.3962-.7593.4926-1.684.2625-2.5148-.0912-.3294-.2458-.6615-.524-.843-.2292-.1494-.5564-.2205-.6293-.4927-.1057-.3946-1.938-.4537-2.25-.4202-.474.051-.939.1728-1.2797.5403-.9068.9784-.8953 2.613-.676 3.8366M24.194 19.0418c.0644.3482.1334.708.3344.998.3193.462.8963.6468 1.431.8023.4005.1164.8212.234 1.2286.1447.2793-.0614.529-.2154.7647-.3776.644-.443 1.244-.983 1.617-1.6756.4174-.776.5195-1.7205.2768-2.5694-.0964-.3366-.2596-.6762-.5526-.8614-.242-.1528-.587-.2255-.664-.5037-.1117-.4033-2.0443-.464-2.3736-.4297-.4998.052-.9902.1766-1.3498.5523-.9564 1-.9442 2.67-.7126 3.9202"
			}), n.a.createElement("path", {
				fill: "#CCC",
				d: "M35.9408 20.9708c.222.0064.4462.0053.6533.066.4068.1196.9188.5786.945-.1845.007-.1902.012-.3904-.0708-.56-.122-.251-.5983-.9602-.824-1.087-.1087-.061-.236-.0694-.359-.073-.3063-.0092-.613.0014-.9182.0315-.9906.0986-.7374 1.4513.01 1.725.177.0647.3693.0764.5638.082"
			}), n.a.createElement("path", {
				fill: "#FF7BAC",
				d: "M37.8215 19.8532c-.0306.0467-.0694.0968-.123.099-.0946.0034-.1258-.128-.1816-.2085-.0644-.0938-.1824-.1258-.29-.1506-.4784-.112-1.163-.1415-1.5974-.3738-.4688-.251-.4095-.3117-.2434-.8975.178-.6268.4606-1.3722 1.071-1.6617 2.0532-.9728 2.1506 1.9814 1.3643 3.1932"
			}), n.a.createElement("path", {
				fill: "#FF0",
				d: "M30.808 32.959c.0077.0694.0343.1556.1004.1593-.0834-.0335-.1158.1122-.095.203.429.0508.8583.1012 1.2877.152.263.0313.5674.0482.752-.151.1304-.141.16-.3512.1825-.5462.032-.274.064-.548.0964-.822.0082-.0724.0135-.1552-.0336-.2086-.034-.0388-.087-.051-.137-.0588-.219-.0327-.446-.0064-.6532.075-.6713.2642-.6634-.6747-1.1966-.4688-.4516.1747-.346 1.279-.3035 1.6663"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M31.9858 34.3613c.3538.146.738.196 1.1182.2014 2.1213.03 4.1668-1.396 5.0646-3.4086.8978-2.0117.661-4.4994-.4998-6.3584-.514-.8238-1.3235-1.5857-2.2608-1.5168-.594.0433-1.1344.429-1.4745.9404-.3405.5112-.499 1.1347-.552 1.7558-.1233 1.4442.3143 2.9324 1.1923 4.053"
			}), n.a.createElement("path", {
				fill: "#F7E1CB",
				d: "M11.2195 30.4984l9.4083-2.7606 1.318 7.9058-7.4904 2.7607"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M12.7516 37.7683c.2136.2304.5864.1393.8525-.0207 1.096-.6588 1.5454-2.1516 1.337-3.4564-.108-.6758-.3805-1.3463-.877-1.792-.4966-.446-1.243-.6212-1.827-.3125-.402.212-.682.6167-.8776 1.041-.4437.9637-.5192 2.107-.206 3.1258.1683.548.462 1.0782.9255 1.388.4637.3095 1.1184.3464 1.543-.0195"
			}), n.a.createElement("g", null, n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.37 11.0563c-2.068-.6386-4.2747-.727-6.4318-.54-2.669.2313-5.8933.8336-7.6967 2.1168-.6986.4972-3.0193 1.2145-3.5257 3.1977"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.726 2.906-1.237 4.4356.5752 1.8004 1.926 3.0712 2.306 3.275"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.7258 2.906-1.237 4.4356.5756 1.8004 1.926 3.0712 2.306 3.275"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M11.823 29.9606c-2.7657-.9024-4.92-3.4455-5.3476-6.3126-.034-.2298.0103-.55.2428-.5677M33.1486 15.4973c.192.314.384.6286.576.9427.114.1872.2283.374.33.5677.5276 1.003.7084 2.182.5062 3.2958M35.8308 16.6844c-1.6376 4.9262-3.3644 9.8235-5.1785 14.688"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M35.671 17.0804c.2263-.288.586-.4587.9517-.4895.366-.0313.736.0692 1.0563.2483.2708.1508.515.364.6543.6404.1393.276.161.6202.0118.8913M38.3983 17.8874c-.6142 1.9982-1.3304 3.9652-2.145 5.891"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.245 21.08c.2485-.5347.1342-1.2158-.2747-1.641-.4093-.425-1.0872-.5678-1.6347-.3436-.1367.0562-.278.1512-.301.297"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.2275 21.501c.0044-.5535-.3094-1.0984-.791-1.374-.482-.2753-1.113-.2705-1.5904.012"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M34.2996 20.788c.7136-.389 1.6686-.2757 2.2706.269.2052.1856.376.4304.3964.706.006.0785-.0008.1578-.0196.2345M31.8127 33.921c.3626.1424.7564.1912 1.1458.1963 2.1737.0294 4.2697-1.3607 5.1896-3.3225.92-1.961.6773-4.386-.512-6.1982-.5268-.803-1.3562-1.5457-2.3166-1.4785-.6087.0423-1.1624.4184-1.511.9168-.3488.4983-.5113 1.106-.5655 1.7115-.1264 1.4077.322 2.8584 1.2216 3.9508M33.9912 29.3915l-1.467 4.0393M32.6352 33.0774c-.951.6286-1.8904 1.2738-2.8177 1.935"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.6496 31.0486l-.6455 4.1743c-.0058.0366-.0053.083.0385.099.044.0162.0833-.0547.0346-.0517"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.1422 33.367c.1982-.3278.4635-.6147.7748-.8386.078.1534.1257.3226.139.4943.287-.1218.5986-.183.9103-.1802-.3703.3692-.701.778-.9844 1.2173"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M31.195 33.0817c-.389.5013-.7464 1.0268-1.0695 1.5725.0302-.0257.0604-.0514.0902-.0775M30.7412 32.969c.0104.3634-.12.7275-.3766 1.0607M32.6658 33.0168c.1094-.676.1787-1.3585.2074-2.0422-.326.1956-.6525.3912-.979.5872-.1045.0627-.2386.1262-.3414.06-.063-.04-.091-.1166-.1135-.1874-.133-.4158-.2417-.8396-.3253-1.2682-.291.3247-.547.6807-.7626 1.0594"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M33.4372 28.176c-.177.4906-.354.9812-.5313 1.472-.285.7874-.5726 1.5822-1.0206 2.291M36.2456 21.1264c.048-.0176.0608-.0917.0218-.1244-.3043.6815-.5497 1.3883-.732 2.1112M30.4806 30.95c-.0843.2098-.1095.43-.074.6453M32.6366 25.235c-1.3602 1.8225-3.2855 3.1704-5.3524 4.1286-2.0672.958-4.284 1.55-6.5023 2.0763M30.348 27.747c.454.2455.8732.5552 1.24.9174M31.3832 34.1252c.6447 1.895.9225 3.913.8134 5.9105"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M20.2203 27.5033c.529 2.5225.9453 5.069 1.2474 7.6282.0048.042.0063.0925-.0276.1178-.0345.0253-.095-.029-.0603-.0536"
			}), n.a.createElement("path", {
				stroke: "#000",
				d: "M21.462 35.1753c-2.4317 1.1842-4.9882 2.113-7.614 2.7662-.0714.0177-.1587.031-.208-.023-.0494-.0544.038-.1667.0828-.1083",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), n.a.createElement("path", {
				stroke: "#000",
				d: "M13.3965 36.9094l.6482 1.51c-.01-.0428-.0207-.086-.0312-.129",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), n.a.createElement("path", {
				stroke: "#000",
				d: "M12.104 37.242c.219.2246.601.1358.8735-.0202 1.123-.6422 1.5835-2.0972 1.3698-3.369-.111-.659-.3898-1.3124-.8986-1.747-.5087-.4348-1.2736-.6054-1.872-.3045-.4118.2066-.6988.601-.8992 1.0147-.4546.9394-.532 2.054-.211 3.047.1723.5342.4733 1.051.9482 1.353.4753.3016 1.1462.3376 1.5813-.019M10.6766 30.3595c-.0715-.0158-.065.1064-.022.1655l.7927 1.0914c.011.0154.0276.0326.0457.0264.018-.006.0015-.0418-.01-.0268M10.6893 30.2222c3.1114-1.025 6.255-1.953 9.425-2.782.0814.1758.1628.352.2443.5274",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), n.a.createElement("path", {
				stroke: "#000",
				d: "M17.6433 28.0588c-.2222-.2202-.246-.6037-.5073-.7755-.2244-.148-.522-.0737-.7792.0048-1.0368.3175-2.073.6346-3.11.952-.2287.07-.4843.163-.579.382-.1275.2944.111.6096.332.843M13.849 27.877c-.025-.1897.085-.3783.2402-.4906.1554-.1123.349-.1592.5393-.1816.302-.0364.678.0275.7848.3115M17.774 36.8926c-.1595-.0286-.2392.1064-.234.201.068 1.193.0596 2.3876-.0247 3.5806M27.3276 14.627c-1.155-.254-2.4348.1776-3.1982 1.0778-.763.9005-.975 2.23-.5294 3.3214.203.498.537.9487.9825 1.252.757.5157 1.7714.556 2.64.263.9157-.3095 1.7137-.983 2.115-1.8592.401-.8763.3797-1.9464-.108-2.7783-.4875-.8312-1.447-1.3828-2.412-1.3303",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeWidth: ".5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M15.604 17.5287c-.993-.5754-2.3376-.3743-3.2093.371-.872.745-1.2777 1.9505-1.1753 3.0903.038.4224.1422.845.359 1.2103.4368.7372 1.309 1.1618 2.168 1.1684.8592.007 1.6937-.3673 2.346-.924.2724-.2316.518-.497.7086-.799.465-.738.5666-1.6924.2675-2.511-.2992-.8188-.993-1.485-1.8255-1.7524"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M25.8734 23.061c.019.8443.036 1.706-.2144 2.513-.3128 1.0058-1.0497 1.8733-1.9936 2.347-.9442.4738-2.0827.547-3.0803.1982"
			}), n.a.createElement("path", {
				fill: "#000",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82z"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033M19.0092 10.923c-.1602-.079-.1772-.2954-.172-.4733.078-2.7703.1672-5.5993 1.1384-8.1964 1.835.0793 3.6632.3303 5.4515.7494"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}), n.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}))))
		},
		"./src/reddit/icons/svgs/SnooSuperhero/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 41 55",
				enableBackground: "new 0 0 41 55",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("image", {
				id: "image0",
				width: "41",
				height: "55",
				x: "0",
				y: "0",
				href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAA3CAYAAACRvGMdAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5AQVDiwo1VwcBwAAEERJREFUaN7VWmlwVNeV/u57r/v1pt60tdRI3VpoCckIIYRZLQxi scFOcACXmIEU8VAxTnlsw2Rcdo0TV2qmMnHwuIhDGAeviRdix8ZkbKCCsWRJyAixyQhJSIhGe7fUavX2eu/37vwQEDBItFyTH3Oq3h/1ffd+9zv3nHvO9wT8PzAy3RcyMjIQCAR08+fP//6iRYvma7Va tLa2njh69OhhvV4vDA4OAgBMJhOKiopw9epVllJKGYaR+vr6/v47ysvLAwD15s2bX6+trY15vV4qCAJtbW0Nv/jii7sB8IWFhVCpVMjLy4PVas23Wq3vWK3WV6xWa4bVav1O67LJDszOzkZOTg6MRuPD O3fufHH16tUKhUIBuVwOk8nEpaWlzRQEob60tHRweHgYAMwAfgUgD8B9AIIMw5wkhCAcDk8LJDOdwVu2bIFarV40Y8YM1c1/p5QiJydHt23bNuOSJUsAwAJgHyaO03oAHwJYIYqiIiUlZdpMJg1SkiR0 dXUBQCiRSCAWjSEWiwEAfD4fRkdGEu3t7eqnn366AsDLAIYAPE0IGQNwAUARIcREyLTDIHl3sywLl8sFj8ejzM7OXi+Xy+X9fX0QBAEjTieOf/mlf+/eveA4biaAw5TS3wHwMQwDSukcAA8D+JgQ4hRF 8cYG/09BRqNRqFQqOJ1Oh9vttoBgjlKpJA7HML6qr08cOnTobZfL9TOZTHYkEolcJIQkKKXgOA6U0k0AFgD4AyHEOTY2Bkpp0iC56dCelZUFQRCC3d3dz46MjLSnpaUtAICxsbFTgiD8kRDiGh4evsGS 1WqFKIocgFkAfADclFKIojgtd0//gNzuCQpAutOP11JOIYAvAJyjlNYQQuK9vb3TWmRaTN4JpFKpTJXL5ZmEEJUkSZIoigFRFH2iKHpsNluwu7v7ewCyAfyCYZj4wMDAtBeZFkiZTIZEIsGmpKTYDAbD GpPJtCw9Pb3IZDKlZ2VlyUVRpIIgRBwOR2B0dHRgaGjosiRJlZIkXZUk6ZRcLkcikZg2yLu6W6lUIhwOKyoqKgojkUgRz/PLKioq1i9evNhcUVHBmM1mpKSkgOd5AEAikUAwGMTY2BgGBwfR1tZGW1pa wna7vVEQhD+73e4jQ0ND4wBihBCaTABNCtJoNGJ8fBz5+fn3Ll++fBdhuWUX29tTt23bxm1+dBPRarVJsUApRSQSQVdXF95+++34119/3cnz/IggCL1jY2NNgiB8znGcOxqNQhCEO85xxxSUmpoKo9EI hUJx74aNG9+dW16+bKzuU83icC/rH+ol7U4vTBYr9DrdpMAAgBACQghkMhlYloVWq2VramoyN23aVFBVVTXPZDI9JAhCycjISLNarfZOBvKOTObl5cHpdKZVV1e/v+2xf1p9+a1fYZv/FEw8EEoAdUEl ak0LMWfjY5hVWgpJkjDudmPE4YBnbASBcTdYhQrWQhsWLFyAfKsVsVgMHMeB4/4WBpIkoa6uDrt3737/+PHjO7Kzs4U7BdZtgaPT6cBxHNLT0x+6p2zOistHP8Im32mkywEhDqg5YJ0ujDJvPf7621Z8 zmpBKaAUI7CQIMqYGFREQkBiYBeV+LWuCJU127F169ZbAAIAwzCorq7G2NjYpoGBgQaz2bxfJpPBbrdP7e60tDT09vaSXIv1KT3PzlvdcwTlfASfKmbhUuk66EZ7oCNx6DiKuYoI7pf7sJz3YakyiDJF DPm8iBy5hAK5iEplFHPjDnx18jQGoMHsufPAMLeXC+np6WxbWxt36NChT4xGY8Lj8dy6mdv8Twh4hQK+YNDPXWxEFe/H+QiP6PeexLKf/hLjWuuN1E0AEHLtufa+K8HgE2LBgczlqNfNhlYGPKN1YvDA q2g9f+6OZ06r1cJms2kByK5niSlBSpIES5aJMonEmSq5X+QZoJvRw3LPXOhlDLIVk1/3QRF4Sz4bqS+8iwdf+x+Y/v1DnDOWw8BQPCj24uxnnyAh3no5UUoxPDQMh8MxDiAaj8eTA6llJGhYajTJRBYA hAQwMOzEX19/FUpX16SJ63KEhfL+jVhWdR/0KRrk2YrA55cjIQFzlDFknPkMPZ0dcLlciMfiEEURgiDgypUeDA0NnTz8+eE7lka3BQ7HcThd3I/CdkuxLzHhxxImgDf+6+dYKg5DqYtOeQV43G7EYjHw cjloPIYc0QsGAMcCS0JdaHpzN/iVNTAYDWBZBqFgEB0dHe3d3d0fP/f8c7h8+fLdQRJCQA6DKZmt13+jUqM62oElihDuES+CJ0AwDgSveUzDAGoWYJmJA1qkEEEaD+Lll4wonjULhp7TWNz9FZhrZUiG TMSKzoO4qtfAaVuIYFzCxa7uzubz5/+ls7PzslqtvuPGb+PEbDZjcHAQK1as+M2Pf7TtKXq+FmLPeYgUiOszIcvKgzwtGxKVwPhc0PRfRLHzAnIlH3gO8IkExwNK+CUZlimDyFckbl2FAh0Cg4tsJgK5 5YgVznnuibX3v0QWPTCpd25jMhaLYf78+QiFQp3GTBNd9tIbZGR0FMBEFKao1WAZAgogIUnweX3oP3cKdX95E/mdx2ChfmzQhSaA0YlHFIEoBYKEx6jaBG9RJYyzFsJWsVBy+ISRvqxibN26Fe+++25y IDmOg9vthtfrbW5raxtdtWpVZq45GwAwMjKC1rNnYLPZkJWVBRnDIM1oQNrKBxBYeB/sTXWoPfI+UnrPQxv2QeI4hFR6JEyFSCkog8ZWBt3MUuTnWqFUKjAwMOA91nig037lCurr65Nn0uPxwGw2w+Px dDQ3N39mt9u3FxQU3GD5yJEj2LdvH6qrq1FVVYX09HTwPI9oNAp9yRzkLLgPIZ8XEZ8PhOOQodNDZzRCqeDB3NSEJRIJtLe3n//ggw86Zs6cif7+/klBThqnNpsNPp+vcNeuXQd27NhReb3qiUQi+Oab b9Dc3AyXywWlUgmtVguLxYKCggLYbDbIZDLczXp7e0PvvPPOj7ds2fJ+SUkJ7pQfk7IdO3agtLR06SuvvNLlcrnoty0ajdJgMEgFQaCiKNJkzeVyJT7++OPflpeXK2tqar4buJuNUoqCgoKlO3fuPHH6 9Ol4LBZLGsy3LR6P00uXLoXfeuutvdu3bze88MILSWFIqhHLy8uDy+UqmDdv3p4H16xZt2TRQjKzdDaMRiNk7NT6AqUU4XAY/QMD0XNnz7Y2Njb+vr6+/sP09PRQQ0NDUiCn7HHMZjNEUUQgEMjOycn5 1wfXrlvKCx6cffYfcMVSADJzLtKKy5FuyYcxMwsqtRoSKMCwEAQBfr8fIyMjOPyXQ2htbXX2jbh+9vjjO7641NWFzs7OpL05JZMmkwnhcDirqKjotSeeeOLh9evXk1f37EHXR/uxRimAUopcnkLJy0B4 DdycFp0pVtz7+E9hyMgAL5dDoVDgtX37cO7gHxGlpLUzKn9CzbLNkUQMQwP9SYGctKTJz8/HwMAAV1lZ+Ytdu3b9sKamhpw5cwZfNzbANtqBi1EZVmijMMsSqCXZ6NflwJ9Xjtz712LZqjUwm7ORmpoK nU6HuRXz0H7pEha620xxsEvtMbaN5di+1BQNvH7/XUFOeqAopTAYDLPXrVu3ecOGDcTtduPLujqM914Go06B3zADDJWgIBJw71qYNz8D66ofoGzhEoBMyDLXzWg0YMP2n8ChysBTRk/xbEV0T1CktiiT XEc9KUiWZaHRaFQFBQUqhmHQ3t4OlhDMX/MQ7v2Pt/H879/DscJ1OBJKQWpBEfItOSibXYoZOTNAKYXdbr9FTllQOQ90/oMgVMSzqZ65s+Txn48kGE22Je+7u1uv10MQBPXy5ctrysvLUxoaGqDRaPDk k/8Mq8WCzIwM6POLcZEYsOEft6KgsAB6vf5GZ9hyqgV+jwfmnJwbmx73Cxg5cRQbdQIoSFFXTD78Q43/TJ86C16vZ1KQkzLJMAzcbvfVs2fPHh4dHUUoFILBYAAwUc4BQFlZGXY9/2/IyMgAy7K4WXuM RaMYcTpvmdM/PoYsdqKufVQb4NdpQs+86jMU3U0gmJTJl19+GePj4+KFCxfOZ2Zm3uPxeApMJhNsNtuNMYQQMAyDbwujHR0d8Pv9qF696sYVOTDsQP3vfolHYt1QsQDPUBhZKa01ytMLbvUxq0lNvT7f 9Jh87LHH0NjYiEcffXSwtrb2J42NjXUul+uu58fhcGBoaAjVK6uhUk2o1sFwGJ/s34tqxwmkyf82tkwRxVJl5Ac6bayYMJNfCncVURsaGhAKhTxXrlzxlpaWPlJVVTVlSJ47dw6zZs2C0WgEAHi8Xrzx 6h6ae2wvVqsChBDAJzLoiPJilBKiYqjmbIT/WsvStqHxOzOZVA6glEIQhA6HwzEajUZz7tR2AhNNnMPhgFarBcMwGB0dpQf+9Kfuuj9/cHR3RmgjQzCjP84lPvBpjx0JqD9K5cSZVllik5KhUdkUt2tS ICVJQjgcHujr6/tmdHQ0J+daxH7bGIbBokWL0NLSguNfHMfY2Jiztq72R2d6+k4e4DOG3RL3fEtI8eZ/u/X/mclHxhvH9ayOj76ewkruqQT/pDRzlUqFysrKhNPpTJ83b94D+fn5k86o1+tRUlICtUoF gA66x8d/YzKZhBanv/1UWFlfH1S9DwL/YF8fEHTRqN/j83u9Mf8UKShpYT8Wi2F4eDiQn5///cWLF2uZKQ46IQQqtRocy42eOHHiD2q1OniiqSnq9Pj6Qn5PPOz3JLvshIeSGRQIBEAIQSAQuNzU1HSi p6cHvb29iEQik76j1WqhUCrStFptusFgQFpa2rSA3WxJy9F2ux0lJSXxjo6OQy0tLY9UVlbyhw4dglarhUajATBR2l3vhwCAZVldKBSyaDSai98ZYbJMXrdwOIyrV68ea2pqasrMzMTKlSsRi8Xw6cGD 2LNnT+LUqVPRm8er1Wo+MzMzs7i4GGaz+e/PpNFovK7gxgVBCAiCgNzcXMyvrAQvk8N+9aqzo6MjIQiC9TqzHMeRSCRiKC4uxnQ/iyQN0mq1glJKKKVyhmEU4XA4UlJSsmTTpk2rcnNzAQApKVqwLCue PXfWk5GRYb1ZKPV4PLDb7czatWt5i8VC9Hp9BACm+937NncbjUakpqZCr9eDUioDkEoIMQLQ8zyfD2CWXC7ngIkkHxAC9OSp5o7m5mZPVVVVikKhuDFXZ2dnuKenR2OxWNYSQpYSQooAZJvNZsyYMeO7 M3ldiPd6vdDpdGkAjNeedIZh1IFAIL5///7aoaGhYkpp/OTJk5caGhq+jMfj97S0tCypqqpilUolzpw5g/fee68tEokMyWQyHQA1gCAAh9frvVFRJWOTJuW8vDxIkmQkhCwBoAWgBMASQhCPx4kkSQoA EiEkLJPJopRSpUKhWLt48eIFqamptKWlpfXKlSsHZTLZGIAEJpShfkpp53Q/3U0K0mKxgFIKhmFSAOgApAJQXHuHARC7tngUQIhSGpUkKSMcDqfGYjGB47h+rVYbpZSqAXiubUhOKY0aDIao3W6HP4n+ ZkqQ07Vv/3/Ft5m6XhVdt/Hx8aTn/l+a53EHBmLj4wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNC0yMVQxNDo0NDozOCswMDowMMZEe9oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDQtMjFUMTQ6 NDQ6NDArMDA6MDCOM4QYAAAAAElFTkSuQmCC"
			}))
		},
		"./src/reddit/icons/svgs/Spam/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fillRule: "evenodd",
				d: "M12.3535,14.6465 C12.5485,14.8415 12.5485,15.1585 12.3535,15.3535 C12.2555,15.4515 12.1275,15.5005 11.9995,15.5005 C11.8725,15.5005 11.7445,15.4515 11.6465,15.3535 L9.9995,13.7075 L8.3535,15.3535 C8.2555,15.4515 8.1275,15.5005 7.9995,15.5005 C7.8725,15.5005 7.7445,15.4515 7.6465,15.3535 C7.4515,15.1585 7.4515,14.8415 7.6465,14.6465 L9.2925,13.0005 L7.6465,11.3535 C7.4515,11.1585 7.4515,10.8415 7.6465,10.6465 C7.8415,10.4515 8.1585,10.4515 8.3535,10.6465 L9.9995,12.2925 L11.6465,10.6465 C11.8415,10.4515 12.1585,10.4515 12.3535,10.6465 C12.5485,10.8415 12.5485,11.1585 12.3535,11.3535 L10.7075,13.0005 L12.3535,14.6465 Z M15.9995,8.0005 C17.1045,8.0005 17.9995,8.8955 17.9995,10.0005 L17.9995,16.0005 C17.9995,17.1045 17.1045,18.0005 15.9995,18.0005 L3.9995,18.0005 C2.8955,18.0005 1.9995,17.1045 1.9995,16.0005 L1.9995,10.0005 C1.9995,8.8955 2.8955,8.0005 3.9995,8.0005 L15.9995,8.0005 Z M4,7 C3.229,7 2.532,7.301 2,7.78 L2,7 C2,6.586 2.126,6.201 2.342,5.882 C2.485,5.669 2.669,5.485 2.882,5.342 C3.201,5.126 3.586,5 4,5 L16,5 C16.414,5 16.799,5.126 17.118,5.342 C17.225,5.414 17.324,5.495 17.414,5.586 C17.505,5.676 17.587,5.775 17.658,5.882 C17.874,6.201 18,6.586 18,7 L18,7.78 C17.468,7.301 16.771,7 16,7 L4,7 Z M4,4 C3.229,4 2.532,4.301 2,4.78 L2,4 C2,2.896 2.896,2 4,2 L16,2 C17.104,2 18,2.896 18,4 L18,4.78 C17.468,4.301 16.771,4 16,4 L4,4 Z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return c
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M10 0L11.4142 8.58579L20 10L11.4142 11.4142L10 20L8.58579 11.4142L0 10L8.58579 8.58579L10 0Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/SquareLock/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
			}))
		},
		"./src/reddit/icons/svgs/Stamp/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 96 96",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M45.31.614c1.411.984 3.72.984 5.13 0 1.412-.984 3.527-.761 4.703.494 1.175 1.256 3.434 1.736 5.018 1.067 1.584-.67 3.608-.012 4.495 1.461.89 1.472 2.998 2.412 4.687 2.087 1.69-.326 3.532.738 4.096 2.363.562 1.627 2.43 2.982 4.15 3.017 1.72.032 3.3 1.455 3.513 3.162.213 1.707 1.758 3.423 3.432 3.813 1.676.39 2.926 2.11 2.78 3.824-.147 1.715 1.007 3.714 2.565 4.444 1.558.729 2.423 2.672 1.923 4.319-.5 1.646.214 3.841 1.585 4.879 1.372 1.037 1.815 3.118.983 4.625-.83 1.506-.59 3.802.536 5.101 1.126 1.3 1.126 3.428 0 4.729-1.126 1.3-1.367 3.596-.536 5.102.832 1.506.39 3.586-.983 4.624-1.371 1.037-2.086 3.233-1.585 4.878.5 1.646-.365 3.591-1.923 4.32-1.558.73-2.712 2.729-2.565 4.443.146 1.714-1.104 3.435-2.78 3.825-1.674.39-3.22 2.106-3.432 3.812-.212 1.707-1.794 3.13-3.513 3.164-1.72.032-3.588 1.39-4.15 3.015-.564 1.626-2.406 2.69-4.096 2.365-1.689-.326-3.797.614-4.687 2.086-.887 1.473-2.911 2.13-4.495 1.461-1.584-.67-3.843-.19-5.018 1.066-1.176 1.257-3.291 1.48-4.703.495-1.41-.984-3.719-.984-5.13 0-1.41.985-3.526.762-4.702-.495-1.175-1.256-3.434-1.736-5.018-1.066-1.584.669-3.608.012-4.496-1.461-.889-1.472-2.997-2.412-4.687-2.086-1.689.325-3.531-.739-4.095-2.365-.562-1.625-2.43-2.983-4.15-3.015-1.72-.033-3.3-1.457-3.513-3.164-.213-1.706-1.758-3.422-3.432-3.812-1.676-.39-2.926-2.111-2.78-3.825.147-1.714-1.007-3.713-2.565-4.443-1.558-.729-2.423-2.674-1.923-4.32.5-1.645-.213-3.84-1.585-4.878-1.372-1.038-1.815-3.118-.983-4.624.83-1.506.59-3.802-.537-5.102-1.125-1.301-1.125-3.43 0-4.729 1.127-1.3 1.368-3.595.537-5.1-.832-1.508-.39-3.589.983-4.626 1.372-1.038 2.086-3.233 1.585-4.88-.5-1.646.365-3.59 1.923-4.318 1.558-.73 2.712-2.73 2.566-4.444-.147-1.714 1.103-3.434 2.779-3.824 1.674-.39 3.22-2.106 3.432-3.813.212-1.707 1.794-3.13 3.513-3.162 1.72-.035 3.588-1.39 4.15-3.017.564-1.625 2.406-2.69 4.095-2.363 1.69.325 3.798-.615 4.687-2.087.888-1.473 2.912-2.131 4.496-1.46 1.584.668 3.843.188 5.018-1.068C41.784-.147 43.9-.37 45.31.614"
			}))
		},
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return c
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "m81.4458 35.074-29.1976 11.7753 26.9134 16.3348-28.9722-12.3194 7.4803 30.5811-11.7754-29.1976-16.3347 26.9135 12.3193-28.9723-30.581 7.4803 29.1975-11.7754-26.9134-16.3347 28.9722 12.3193-7.4802-30.581 11.7753 29.1975 16.3348-26.9134-12.3194 28.9722z",
					clipRule: "evenodd",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star2/index.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return c
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					clipRule: "evenodd",
					d: "m27.3003.299194 2.4798 21.013306 16.6121-13.10519-13.1052 16.61209 21.0133 2.4798-21.0133 2.4798 13.1052 16.6121-16.6121-13.1052-2.4798 21.0133-2.4798-21.0133-16.61209 13.1052 13.10519-16.6121-21.013307-2.4798 21.013307-2.4798-13.10519-16.61209 16.61209 13.10519z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Statistics/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => {
				let {
					className: s
				} = e;
				return n.a.createElement("svg", {
					className: s,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M1,8 C1.552,8 2,8.448 2,9 L2,14 C2,14.552 1.552,15 1,15 C0.448,15 0,14.552 0,14 L0,9 C0,8.448 0.448,8 1,8 Z M5.6665,5 C6.2185,5 6.6665,5.448 6.6665,6 L6.6665,14 C6.6665,14.552 6.2185,15 5.6665,15 C5.1145,15 4.6665,14.552 4.6665,14 L4.6665,6 C4.6665,5.448 5.1145,5 5.6665,5 Z M10.3335,3 C10.8855,3 11.3335,3.448 11.3335,4 L11.3335,14 C11.3335,14.552 10.8855,15 10.3335,15 C9.7815,15 9.3335,14.552 9.3335,14 L9.3335,4 C9.3335,3.448 9.7815,3 10.3335,3 Z M15,0 C15.552,0 16,0.448 16,1 L16,14 C16,14.552 15.552,15 15,15 C14.448,15 14,14.552 14,14 L14,1 C14,0.448 14.448,0 15,0 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Sticky/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", null, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("polygon", {
				points: "0,40 14.3,29.2 10.8,25.7"
			}), n.a.createElement("path", {
				d: "M23,27.6l10.8-10.8c2,1.1,4.5,0.8,6.2-0.9L24.1,0c-1.7,1.7-2,4.2-0.9,6.2L12.4,17c-2-1.1-4.5-0.8-6.2,0.9l15.9,15.9C23.8,32.1,24.1,29.6,23,27.6z"
			}))))
		},
		"./src/reddit/icons/svgs/Sunburst/index.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return c
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 450 450",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					clipRule: "evenodd",
					d: "m206.073.784912c-27.274 2.271728-53.166 9.407988-76.806 20.538788l94.176 200.9793-126.9464-182.0213c-21.8975 15.262-40.9531 34.3177-56.2149 56.2151l182.0213 126.9462-200.9793-94.177c-11.1308 23.641-18.26755 49.533-20.539032 76.807l221.101332 18.927-221.101332 18.927c2.271482 27.274 9.408232 53.167 20.539032 76.807l200.9803-94.177-182.0223 126.946c15.2618 21.898 34.3179 40.954 56.2154 56.215l126.9459-182.021-94.176 200.979c23.64 11.131 49.532 18.268 76.806 20.539l18.927-221.101 18.927 221.101c27.274-2.271 53.166-9.408 76.806-20.539l-94.176-200.979 126.946 182.021c21.897-15.261 40.954-34.317 56.215-56.215l-182.022-126.946 200.98 94.177c11.131-23.64 18.268-49.533 20.539-76.807l-221.101-18.927 221.101-18.927c-2.271-27.274-9.407-53.166-20.538-76.806l-200.98 94.176 182.022-126.9457c-15.262-21.8974-34.318-40.9536-56.216-56.2156l-126.946 182.0213 94.176-200.9793c-23.64-11.1308-49.532-18.26706-76.806-20.538788l-18.927 221.101088z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/Text/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M15.6498441,5.62718315 L4.38195636,5.62718315 C4.0364078,5.62718315 3.75596259,5.34673795 3.75596259,5.00118939 C3.75596259,4.65564083 4.0364078,4.37519562 4.38195636,4.37519562 L15.6498441,4.37519562 C15.9953927,4.37519562 16.2758379,4.65564083 16.2758379,5.00118939 C16.2758379,5.34673795 15.9953927,5.62718315 15.6498441,5.62718315 M15.6498441,9.38314574 L4.38195636,9.38314574 C4.0364078,9.38314574 3.75596259,9.10270054 3.75596259,8.75715198 C3.75596259,8.41160342 4.0364078,8.13115821 4.38195636,8.13115821 L15.6498441,8.13115821 C15.9953927,8.13115821 16.2758379,8.41160342 16.2758379,8.75715198 C16.2758379,9.10270054 15.9953927,9.38314574 15.6498441,9.38314574 M13.1458691,13.1391083 L4.38195636,13.1391083 C4.0364078,13.1391083 3.75596259,12.8586631 3.75596259,12.5131146 C3.75596259,12.167566 4.0364078,11.8871208 4.38195636,11.8871208 L13.1458691,11.8871208 C13.4914176,11.8871208 13.7718628,12.167566 13.7718628,12.5131146 C13.7718628,12.8586631 13.4914176,13.1391083 13.1458691,13.1391083 M17.6104566,0.000751192518 L2.42134388,0.000751192518 C1.08547319,0.000751192518 0,1.08622438 0,2.42084309 L0,17.5811601 C0,18.4174878 0.423171785,19.1837041 1.13054474,19.6306637 C1.52116485,19.8748012 1.96061247,20 2.410076,20 C2.77440437,20 3.14624466,19.9173688 3.49805316,19.7470985 L7.81490616,17.5210647 L17.5278254,17.5210647 C18.8611921,17.5210647 20.0318005,16.3504563 20.0318005,15.0170896 L20.0318005,2.42084309 C20.0318005,1.08622438 18.9463273,0.000751192518 17.6104566,0.000751192518"
			})))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/TextPost/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_3QNLLzw_kUPhkWkxg22tT9"
			}
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/ThumbnailSelect/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}), n.a.createElement("path", {
				fill: "#A5A4A4",
				d: "M6 3h8c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V5c0-1.1046.8954-2 2-2zm11 1c1.1046 0 2 .8954 2 2v8c0 1.1046-.8954 2-2 2V4zM3 4v12h-.6667C1.597 16 1 15.1734 1 14.1538V5.8462C1 4.8266 1.597 4 2.3333 4H3z"
			})))
		},
		"./src/reddit/icons/svgs/TickCircled/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				width: "64",
				height: "64",
				viewBox: "0 0 64 64",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("circle", {
				cx: "32",
				cy: "32",
				r: "32",
				fill: "#46D160",
				fillOpacity: "0.2"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M50.4967 21.6638L47.1391 18.3038C46.6879 17.8526 46.0783 17.6006 45.4423 17.6006C44.8039 17.6006 44.1943 17.8526 43.7455 18.3038L26.9599 35.087L20.2567 28.3838C19.3207 27.4454 17.8015 27.4454 16.8631 28.3838L13.5031 31.7438C12.5647 32.6822 12.5647 34.2014 13.5031 35.1374L25.2631 46.8974C25.7335 47.3654 26.3455 47.6006 26.9599 47.6006C27.5743 47.6006 28.1887 47.3654 28.6567 46.8974L50.4967 25.0574C51.4351 24.119 51.4351 22.6022 50.4967 21.6638Z",
				fill: "#46D160"
			}))
		},
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "10",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "10",
				width: "5.5",
				height: "5.5"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Top/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Trash/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, n.a.createElement("g", null, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("polygon", {
				points: "10,38.8 30,38.8 31.2,10.9 8.7,10.9"
			}), n.a.createElement("path", {
				d: "M27.5,3.8H25c0-1.4-1.1-2.5-2.5-2.5h-5c-1.4,0-2.5,1.1-2.5,2.5h-2.5c-2.8,0-5,2.2-5,5h25C32.5,6,30.3,3.8,27.5,3.8z"
			}))))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return l
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Trash2/index.m.less"),
				r = t.n(i);
			const l = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			s.b = l
		},
		"./src/reddit/icons/svgs/Triangle/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 10 8",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
			})))
		},
		"./src/reddit/icons/svgs/Trophy/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			})))
		},
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return c
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 48 48",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M24.75 0L23.25 0L23.25 22.188L7.56083 6.49881L6.50017 7.55947L22.1907 23.25L0 23.25L0 24.75L22.1895 24.75L6.49882 40.4406L7.55948 41.5013L23.25 25.8108L23.25 48H24.75L24.75 25.8093L40.4413 41.5006L41.502 40.4399L25.812 24.75L48 24.75V23.25L25.8108 23.25L41.5006 7.56017L40.4399 6.49951L24.75 22.1895L24.75 0Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return c
			}));
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/icons/svgs/Unban/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8,6.77247619 L8,6.27380952 L7.5072,6.27380952 L8,6.77247619 Z M7,5.76057143 L7,0.80952381 L11,0.80952381 L11,6.27380952 L10,6.27380952 L10,8.79628571 L15.9072,14.7738095 L15.2,15.4894286 L1,1.12038095 L1.7072,0.404761905 L3,1.71295238 L3,1.00178571 C3,0.44847619 3.4432,0 3.99,0 L4.01,0 C4.5568,0 5,0.44847619 5,1.00178571 L5,3.7367619 L5.8,4.54628571 L5.8,0.80952381 C5.8,0.585690476 5.9792,0.404761905 6.2,0.404761905 C6.4208,0.404761905 6.6,0.585690476 6.6,0.80952381 L6.6,5.35580952 L7,5.76057143 Z M8.2,8.9047619 L10.2,10.9285714 L10.2,14.2706905 C10.2,14.824 9.7568,15.2724762 9.21,15.2724762 L9.19,15.2724762 C8.6432,15.2724762 8.2,14.824 8.2,14.2706905 L8.2,8.9047619 Z M5.8,6.47619048 L6.284,6.96595238 C6.2568,6.97161905 6.2288,6.97485714 6.2,6.97485714 C5.9792,6.97485714 5.8,6.79392857 5.8,6.57009524 L5.8,6.47619048 Z M12.2,0.404761905 C12.4208,0.404761905 12.6,0.586095238 12.6,0.80952381 L12.6,6.67857143 C12.6,6.902 12.4208,7.08333333 12.2,7.08333333 C11.9792,7.08333333 11.8,6.902 11.8,6.67857143 L11.8,0.80952381 C11.8,0.586095238 11.9792,0.404761905 12.2,0.404761905 Z M14.01,0 C14.5568,0 15,0.44847619 15,1.00178571 L15,6.08154762 C15,6.63485714 14.5568,7.08333333 14.01,7.08333333 L13.99,7.08333333 C13.4432,7.08333333 13,6.63485714 13,6.08154762 L13,1.00178571 C13,0.44847619 13.4432,0 13.99,0 L14.01,0 Z M3,4.04761905 L5,6.07142857 L5,6.37783333 C5,6.93114286 4.5568,7.37961905 4.01,7.37961905 L3.99,7.37961905 C3.4432,7.37961905 3,6.93114286 3,6.37783333 L3,4.04761905 Z"
			})))
		},
		"./src/reddit/icons/svgs/Upload/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 17",
				version: "1.1"
			}, n.a.createElement("path", {
				d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
				id: "a"
			}))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				transform: "translate(3, 4)"
			}, n.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/icons/svgs/VideoShare/index.m.less": function(e, s, t) {
			e.exports = {
				icon: "fpaVW-I8iox1soX0hTuwb"
			}
		},
		"./src/reddit/icons/svgs/VideoShare/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.icon, e.className),
				viewBox: "0 0 64 64",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("circle", {
				cx: "32",
				cy: "32",
				r: "30.72",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "2.4576"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M42.59 27.9447L35.18 21.5931C34.8212 21.2847 34.3292 21.2175 33.8984 21.4143C33.4676 21.6123 33.2 22.0299 33.2 22.5039V24.7995C29.5004 24.7995 26.5472 26.0031 24.4232 28.3755C21.6128 31.5159 20.4992 36.5271 21.2036 42.8667C21.2372 43.1715 21.4952 43.3995 21.7988 43.3995C21.8108 43.3995 21.8216 43.3995 21.8336 43.3983C22.1504 43.3815 22.4 43.1187 22.4 42.7995C22.4 39.3039 23.5508 36.4155 25.7276 34.4451C27.7148 32.6475 30.4868 31.7307 33.14 31.9971C33.1604 31.9983 33.1796 31.9911 33.2 31.9911V34.2951C33.2 34.7691 33.4676 35.1879 33.8984 35.3859C34.0616 35.4603 34.2332 35.4975 34.4036 35.4975C34.682 35.4975 34.9568 35.3979 35.18 35.2071L42.59 28.8555C42.7232 28.7415 42.8 28.5747 42.8 28.3995C42.8 28.2243 42.7232 28.0587 42.59 27.9447Z"
			})))
		},
		"./src/reddit/icons/svgs/Warning/index.m.less": function(e, s, t) {
			e.exports = {
				warning: "_3ppQRTaxPs0X9rsFYHfSdf"
			}
		},
		"./src/reddit/icons/svgs/Warning/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/Warning/index.m.less"),
				r = t.n(i);
			s.a = e => n.a.createElement("svg", {
				className: Object(c.a)(r.a.warning, e.className),
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("circle", {
				r: "9",
				cx: "9",
				cy: "9"
			}), n.a.createElement("path", {
				d: "m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-1 -1)"
			}))
		},
		"./src/reddit/icons/svgs/Wiki/index.tsx": function(e, s, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				n = t.n(a);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, n.a.createElement("path", {
				d: "M13.8711,6 L5.8711,6 C5.5951,6 5.3711,5.776 5.3711,5.5 C5.3711,5.224 5.5951,5 5.8711,5 L13.8711,5 C14.1471,5 14.3711,5.224 14.3711,5.5 C14.3711,5.776 14.1471,6 13.8711,6 M13.8711,9 L5.8711,9 C5.5951,9 5.3711,8.776 5.3711,8.5 C5.3711,8.224 5.5951,8 5.8711,8 L13.8711,8 C14.1471,8 14.3711,8.224 14.3711,8.5 C14.3711,8.776 14.1471,9 13.8711,9 M13.8711,12 L5.8711,12 C5.5951,12 5.3711,11.776 5.3711,11.5 C5.3711,11.224 5.5951,11 5.8711,11 L13.8711,11 C14.1471,11 14.3711,11.224 14.3711,11.5 C14.3711,11.776 14.1471,12 13.8711,12 M13.8711,15 L5.8711,15 C5.5951,15 5.3711,14.776 5.3711,14.5 C5.3711,14.224 5.5951,14 5.8711,14 L13.8711,14 C14.1471,14 14.3711,14.224 14.3711,14.5 C14.3711,14.776 14.1471,15 13.8711,15 M16.0001,2 L4.0001,2 C3.4471,2 3.0001,2.448 3.0001,3 L3.0001,17 C3.0001,17.552 3.4471,18 4.0001,18 L16.0001,18 C16.5531,18 17.0001,17.552 17.0001,17 L17.0001,3 C17.0001,2.448 16.5531,2 16.0001,2"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/0.d6b5ee5914916e2e0f3e.js.map